import csv, os, re, json
from urllib.parse import urlparse, unquote

SRC = "source-links.csv"
IMAGE_EXT = {"png", "jpg", "jpeg", "gif", "webp"}

CATEGORIES = ["Nature","Movement","Rest","Focus","Family_home_life","Connection","Breath","Finance","Nourishment"]

LOGO_HINTS = ["fitbit","garmin","applehealth","googlefit","anthem","googleplaystore","appstore"]
ICON_HINTS = ["icon","icn_","icn","chevron","dotted","verticalbar","ellipse","blank.png","checkcircle",
              "avatar","circleblue","timer.png","complete.png","security.jpeg","signout.jpeg",
              "libraryselected","libraryunselected","angle-right","journeysmessageheader","banner@2x",
              "journeysurveycheck","lockicon"]
BADGE_HINTS = ["badge","trophy","medal"]
TEST_HINTS = ["brady+testing","brady testing"]  # dev/test assets, not production content
ILLUSTRATION_HINTS = ["diagram","infographic","illustration","yerkes-dodson","bell+curve",
                       "myplatediagram","worryloop","cycleofanxiety"]  # charts/diagrams, not photography — spot-checked visually

# High-confidence exact/substring filename -> category (built from observed descriptive names)
NAME_MAP = {
    # Challenges / peerChallenges
    "activedays":"Movement","betterttogether":"Connection","bettertogether":"Connection",
    "checkyourservings":"Nourishment","coffeein":"Nourishment","drinktap":"Nourishment",
    "fitfamilies":"Movement","gonatural":"Nature","goodgreetings":"Connection",
    "goodworkvibes":"Focus","growthegood":"Nature","hookedonbooks":"Focus",
    "justdecisions":"Focus","laughitup":"Connection","learnonthego":"Focus",
    "503020budget":"Finance",
    # Journey single-word habit set (MHC/Programs)
    "5000steps":"Movement","spf":"Nature","agoalaweek":"Focus","activelistening":"Connection",
    "beherenow":"Focus","bepresent":"Focus","breakfastfirst":"Nourishment","buyingmemories":"Finance",
    "catchinterruptions":"Focus","choresworkout":"Movement","complimentfreely":"Connection",
    "donotdisturb":"Focus","drinkwell":"Nourishment","easierweek":"Focus","embracechange":"Focus",
    "exercisepals":"Movement","financialhurdles":"Finance","floss":"Family_home_life",
    "frugalfoodie":"Finance","goingsecond":"Connection","goodtogreat":"Focus",
    "gratefulcoworkers":"Connection","habitstacking":"Focus","hustleformuscle":"Movement",
    "knowyourcredit":"Finance","learntosavor":"Nourishment","lendahand":"Connection",
    "mindthemeal":"Nourishment","noticeassumptions":"Focus","offtoagoodstart":"Focus",
    "onthehour":"Focus","pausebeforepurchases":"Finance","pinchingpennies":"Finance",
    "practicepatience":"Focus","quiettime":"Rest","saveyourchange":"Finance","sleeponit":"Rest",
    "socialbutterfly":"Connection","specialskills":"Focus","sweetdreamsroutine":"Rest",
    "take5":"Rest","top5list":"Focus","trackyourmood":"Focus","wantsvsneeds":"Finance",
    "watchyourspending":"Finance","workbuddies":"Connection","worklifebalance":"Focus",
    "journeybetterbudgeting":"Finance","journeybudgetfornutrition":"Nourishment",
    "journeyemotionalhealth":"Focus","journeyfinancial":"Finance","journeynutrition":"Nourishment",
    "journeysleep":"Rest","journeysmoking":"Breath","journeysocialwellbeing":"Connection",
    "journeystress":"Breath","journeythepowerincommunication":"Connection",
    "journeyworklifebalance":"Focus","mindfulness_in_motion":"Focus","mindfulnessmeditation":"Focus",
    "resilience":"Focus","physicalfitness":"Movement","careersatisfaction":"Focus",
    "caregiver":"Family_home_life","wbj_caregiver":"Family_home_life",
}

SENSITIVE_HINTS = ["crisiscounseling","disasterdistress","suicideprevention","substanceabuse",
                    "quitsmoking","smokefree","findsupportgroups"]

KEYWORDS = {
    "Nature": ["nature","outdoor","garden","tree","plant","sun","field","hike","park","green","farm","fruit","apple","lime","lemon","peach","avocado","turnip","pepper","mango","artichoke","banana","grapefruit","carrot","zucchini","corn"],
    "Movement": ["exercise","workout","active","walk","run","yoga","stretch","posture","fit","move","step","gym","sport","dance","bike","cycle","hoop","elliptical","physical","musculoskeletal","backbridge","backrange","crunch","calfmuscle","hamstring","kneeexercise","neckexercise","rotatingthehead","sidebend","lookingupward"],
    "Rest": ["sleep","bed","dark","nap","relax","calm","night","insomnia","tired","rest","pillow","snooze","quiet"],
    "Focus": ["focus","privacy","screen","work","productiv","mindful","meditat","concentrat","attention","cbt","thought","behavior","goal","cycleofanxiety","targetthought","worryrumination","avoidance","managingdepression"],
    "Family_home_life": ["family","kid","home","clean","tidy","house","pet","dog","cat","chore","closet","kitchen","fridge","spouse","childcare","eldercare"],
    "Connection": ["together","friend","team","social","communit","donate","grateful","invite","share","greet","neighbor","support","hotline","helpline"],
    "Breath": ["breath","stress","immunesystem","decaf","anxiety","4-7-8"],
    "Finance": ["budget","saving","credit","tax","money","coin","piggybank","insurance","treat","purchase","spending","hypertension"],
    "Nourishment": ["eat","food","meal","salad","oat","veg","coffee","tea","drink","water","hydrat","nutrition","serving","cook","grocery","weightmanagement","diabetesmanagement","diabetesprevention","hypertension","keepafoodlog"],
    "Finance_2": ["expense","hiddenfee","financialb","doyouknowyourscor","payinghidde","treasury","pinchingpennies","surpri"],
    "Focus_2": ["burnout","cutthedistraction","stackyourha","assumin","yourownbu","setyourselfup","simplehackforpr","careerwe","elusivewo","expandingyour"],
    "Connection_2": ["givethank","fightelderloneliness","healthycom","boostyourcareer"],
    "Rest_2": ["naturalmoodboo"],
    "Movement_2": ["sittingthenews"],
}
KEYWORDS["Finance"] += KEYWORDS.pop("Finance_2")
KEYWORDS["Focus"] += KEYWORDS.pop("Focus_2")
KEYWORDS["Connection"] += KEYWORDS.pop("Connection_2")
KEYWORDS["Rest"] += KEYWORDS.pop("Rest_2")
KEYWORDS["Movement"] += KEYWORDS.pop("Movement_2")

# Explicit overrides: items filename-keyword matching couldn't reach, resolved either by
# reading the actual image (visual spot-check) or by clear folder/business-context reasoning.
# Marked "visual" confidence where I opened the image; "reasoned" where I inferred from context only.
# Ground truth from the official Peer Challenge library (name, short description, pillar) —
# confirmed 2026-08-20 against "Content - Process - Current & Upcoming Challenges" CSV.
# Overrides keyword/name-map guesses for Challenges/peerChallenges assets.
CHALLENGE_LIBRARY = {
    "503020budget": "Finance",           # 50/30/20 Budget — Stick to the budget (Financial)
    "activedays": "Movement",            # Active Days — Get daily physical activity (Physical)
    "bettertogether": "Connection",      # Better Together — Seek ideas from co-workers (Career)
    "checkyourservings": "Nourishment",  # Check Your Servings — Know your serving sizes (Physical)
    "coffeein": "Finance",               # Coffee In — Drink coffee at home (Financial)
    "drinktap": "Finance",               # Drink Tap — Save money on beverages (Financial)
    "fitfamilies": "Movement",           # Fit Families — Exercise with your family (Physical)
    "gonatural": "Nature",               # Go Natural — Use natural light (Physical)
    "goodgreetings": "Connection",       # Good Greetings — Practice starting conversations (Social)
    "goodworkvibes": "Focus",            # Good Work Vibes — Think positive (Career)
    "growthegood": "Connection",         # Grow the Good — Spread positivity (Social)
    "hookedonbooks": "Focus",            # Hooked on Books — Read more (Emotional)
    "justdecisions": "Connection",       # Just Decisions — Be fair and ethical (Social)
    "laughitup": "Breath",               # Laugh It Up — Destress with laughter (Emotional)
    "learnonthego": "Focus",             # Learn On the Go — Learn while you move (Emotional)
    "learnonline": "Focus",              # Learn Online — Take an online course (Emotional)
    "mindfulminutes": "Focus",           # Mindful Minutes — Be mindful each day (Emotional)
    "moneyhound": "Finance",             # Money Hound — Track your spending (Financial)
    "neatandtidy": "Focus",              # Neat and Tidy — Get organized (Career)
    "newhobby": "Focus",                 # New Hobby — Find a new hobby (Emotional)
    "newpeople": "Connection",           # New People — Meet your co-workers (Career)
    "praisepotential": "Connection",     # Praise Potential — Encourage others' abilities (Social)
    "pushyourself": "Focus",             # Push Yourself — Try a thing new each day (Emotional)
    "seethenegative": "Focus",           # See the Negative — Practice negative visualization (Emotional)
    "selfcareforstress": "Breath",       # Self-Care for Stress — Take care of Yourself (Emotional)
    "sharefavorites": "Connection",      # Share Favorites — Introduce your favorites (Social)
    "socialmediadiet": "Focus",          # Social Media Diet — Limit social media time (Emotional)
    "spiceupyourlife": "Nourishment",    # Spice Up Your Life — Eat less salt (Physical)
    "stayintheknow": "Connection",       # Stay in the Know — Keep up on current events (Social)
    "stepitup": "Movement",              # Step It Up — Get the most steps (Physical)
    "veggiesnack": "Nourishment",        # Veggie Snack — Eat vegetable snacks (Physical)
}

EXPLICIT = {
    # visual spot-check (contact sheet reviewed)
    "hadescription1image1.png": ("Focus", "visual"),
    "hadescription2image1.png": ("Movement", "visual"),
    "hadescription3image1.png": ("Focus", "visual"),
    "dtxavailable.jpg": ("Nature", "visual"),
    "600x250-hand_with_phone_3.jpg": ("Focus", "visual"),
    "positivelyme.jpg": ("Focus", "visual"),
    "girlglassespenthinking.png": ("Focus", "visual"),
    "girlhearthands.png": ("Connection", "visual"),
    "guypharmacist.png": ("Focus", "visual"),
    "challenges2.jpg": ("Connection", "visual"),
    "dtx.jpg": ("Focus", "visual"),
    "rewards.jpg": ("Finance", "visual"),
    "doctor+patient+video+call.png": ("Connection", "visual"),
    "dentist.jpg": ("Family_home_life", "visual"),
    "doctorhands.jpg": ("Connection", "visual"),
    "help.jpeg": ("Focus", "visual"),
    # reasoned from filename/folder context (not opened)
    "learnonline.png": ("Focus", "reasoned"),
    "newhobby.png": ("Focus", "reasoned"),
    "newpeople.jpg": ("Connection", "reasoned"),
    "praisepotential.png": ("Connection", "reasoned"),
    "pushyourself.jpg": ("Movement", "reasoned"),
    "seethenegative.png": ("Focus", "reasoned"),
    "spiceupyourlife.png": ("Focus", "reasoned"),
    "stayintheknow.png": ("Focus", "reasoned"),
    "3_hacks_for_a_better_ilwih.png": ("Rest", "reasoned"),
    "_62_million_in_the_t_vcfbh.png": ("Finance", "reasoned"),
    "do_you_know_your_sco_ypvbd.png": ("Finance", "reasoned"),
    "pause_before_you_pur_y5pja.png": ("Finance", "reasoned"),
    "plan_for_financial_p_uw7pk.png": ("Finance", "reasoned"),
    "reason_with_your_fea_z2erx.png": ("Breath", "reasoned"),
    "try_this_today_keep__gzj4z.png": ("Nourishment", "reasoned"),
    "ndp2+message+1+announce.jpg": ("Nourishment", "reasoned"),
    "ndp2+message+2+link.jpg": ("Nourishment", "reasoned"),
    "careerheader.png": ("Focus", "reasoned"),
    "asthmahealthvideos.png": ("Focus", "reasoned"),
    "bloodpressurehealthvideos.png": ("Focus", "reasoned"),
    "breastcancerhealthvideos.png": ("Focus", "reasoned"),
    "cholestolhealthvideos.png": ("Focus", "reasoned"),
    "coloncancerhealthvideos.png": ("Focus", "reasoned"),
    "diabeteshealthvideos.png": ("Focus", "reasoned"),
    "glucosehealthvideos.png": ("Focus", "reasoned"),
    "smokinghealthvideos.png": ("Focus", "reasoned"),
    "weightmanagmenthealthvideos.png": ("Focus", "reasoned"),
    "healthcoachpicture.png": ("Focus", "reasoned"),
    "contact+us.png": ("Connection", "reasoned"),
    "trackcaloriesburned.jpg": ("Movement", "reasoned"),
    "trackcaloriesconsumed.jpg": ("Nourishment", "reasoned"),
    "trackweight.jpg": ("Nourishment", "reasoned"),
    "asthmavideo.png": ("Focus", "reasoned"),
    "bloodpressurevideo.png": ("Focus", "reasoned"),
    "bloodsugarvideo.png": ("Focus", "reasoned"),
    "cancer-breastvideo.png": ("Focus", "reasoned"),
    "cancer-colonvideo.png": ("Focus", "reasoned"),
    "cholesterolvideo.png": ("Focus", "reasoned"),
    "diabetesvideo.png": ("Focus", "reasoned"),
    "obesityvideo.png": ("Focus", "reasoned"),
}

# folder-level fallback defaults for generic session-numbered DCP photos (INFERRED, not verified)
FOLDER_DEFAULT = {
    "lowerback": "Movement", "knee": "Movement", "shoulder": "Movement",
    "neckcare": "Movement", "hip": "Movement",
    "weightloss": "Nourishment", "bloodpressure": "Nourishment",
    "diabetes-management": "Nourishment", "diabetes-prevention": "Nourishment",
    "cont-diabetes-prevention": "Nourishment",
    "depression": "Focus", "anxiety": "Breath", "insomnia": "Rest",
    "pregnancy": "Family_home_life",
}

def load_rows():
    rows = []
    with open(SRC, newline="", encoding="utf-8") as f:
        r = csv.reader(f)
        next(r)
        for row in r:
            if row and row[0].strip():
                rows.append(row[0].strip())
    return rows

def ext_of(url):
    path = urlparse(url).path
    base = os.path.basename(path)
    return base.rsplit(".", 1)[1].lower() if "." in base else ""

def asset_type(fname_low, path_low):
    if any(h in path_low for h in TEST_HINTS):
        return "test"
    if any(h in fname_low for h in ILLUSTRATION_HINTS):
        return "illustration"
    if any(h in fname_low for h in LOGO_HINTS):
        return "logo"
    if any(h in fname_low for h in BADGE_HINTS):
        return "badge"
    if "icons/" in path_low or fname_low.startswith("icon") or fname_low.startswith("icn") or any(h in fname_low for h in ICON_HINTS):
        return "icon"
    return "photo"

def dcp_condition(path_low):
    m = re.search(r"/dtx/([^/]+)/", path_low)
    return m.group(1) if m else None

def classify(url):
    path = unquote(urlparse(url).path)
    path_low = path.lower()
    fname = os.path.basename(path)
    fname_low = fname.lower()
    slug = re.sub(r"[^a-z0-9]", "", fname_low.rsplit(".",1)[0])

    atype = asset_type(fname_low, path_low)
    if atype != "photo":
        return {"category": None, "confidence": "n/a", "reason": atype}

    if any(h in slug for h in SENSITIVE_HINTS):
        return {"category": "Sensitive/Support", "confidence": "flagged", "reason": "crisis/support resource"}

    if "/challenges/peerchallenges/" in path_low:
        base_slug = re.sub(r"[^a-z0-9]", "", fname_low.rsplit(".",1)[0])
        if base_slug in CHALLENGE_LIBRARY:
            return {"category": CHALLENGE_LIBRARY[base_slug], "confidence": "verified", "reason": "official challenge library"}

    if fname_low in EXPLICIT:
        cat, conf = EXPLICIT[fname_low]
        return {"category": cat, "confidence": conf, "reason": f"explicit: {conf}"}

    for key, cat in NAME_MAP.items():
        if key.replace("_","") in slug:
            return {"category": cat, "confidence": "high", "reason": f"name match: {key}"}

    for cat, kws in KEYWORDS.items():
        for kw in kws:
            if kw.replace(" ","") in slug:
                return {"category": cat, "confidence": "medium", "reason": f"keyword: {kw}"}

    cond = dcp_condition(path_low)
    if cond and cond in FOLDER_DEFAULT:
        return {"category": FOLDER_DEFAULT[cond], "confidence": "inferred", "reason": f"folder default: {cond}"}

    return {"category": None, "confidence": "none", "reason": "unclassified"}

def main():
    rows = load_rows()
    results = []
    for url in rows:
        ext = ext_of(url)
        if ext not in IMAGE_EXT:
            continue
        c = classify(url)
        results.append({"url": url, **c})

    with open("classified.json", "w") as f:
        json.dump(results, f, indent=1)

    from collections import Counter
    by_cat = Counter(r["category"] or "(none)" for r in results if r["reason"] not in ("icon","logo","badge"))
    by_conf = Counter(r["confidence"] for r in results if r["reason"] not in ("icon","logo","badge"))
    print("Photo total:", sum(1 for r in results if r["reason"] not in ("icon","logo","badge")))
    print("--- by category ---")
    for k,v in by_cat.most_common():
        print(v, k)
    print("--- by confidence ---")
    for k,v in by_conf.most_common():
        print(v, k)

if __name__ == "__main__":
    main()
