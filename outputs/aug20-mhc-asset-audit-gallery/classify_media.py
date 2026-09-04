import csv, os, re, json
from urllib.parse import urlparse, unquote
import classify as base  # reuse NAME_MAP, KEYWORDS, FOLDER_DEFAULT, SENSITIVE_HINTS

VIDEO_EXT = {"mp4", "mov", "webm"}
AUDIO_EXT = {"wav", "mp3"}

VIDEO_MAP = {
    "1minutequietlocationmeditation":"Breath","2minutebodyawarenessmeditation":"Breath",
    "2minuteopenattitudemeditation":"Breath","2minutesattentionmeditation":"Breath",
    "3minutealltogethermeditation":"Breath","30secondsofmindfulbreathing":"Breath",
    "affectionatebreathingmeditation":"Breath","dtxanxietystopmicromeditation":"Breath",
    "guidedmeditationforemotionalacceptance":"Breath","lovingkindnessmeditation":"Breath",
    "rainmicromeditation":"Breath","stopmicromeditation":"Breath","the478breathingexercise":"Breath",
    "why54meditate":"Breath","whymeditate":"Breath","catchnegativethoughts":"Focus",
    "asthma":"Focus","bloodpressure":"Focus","bloodsugar":"Focus","cancerbreast":"Focus",
    "cancercolonvideo":"Focus","cholesterol":"Focus","diabetes":"Focus","obesity":"Focus",
    "smoking":"Focus","stress":"Breath","healthybloodpressurefinal":"Focus",
    "continuingdiabetespreventionintrovideofinal":"Nourishment","diabetesmanagementintrovideofinal":"Nourishment",
    "hipcareintrovideofinal":"Movement","insomniaintrovideofinal":"Rest","kneecareintrovideofinal":"Movement",
    "pregnancyintrovideofinal":"Family_home_life","weightlossintrovideofinal":"Nourishment",
    "nutrition100areyoudrinkingsugar":"Nourishment","nutrition130skipthesalt":"Nourishment",
    "nutrition170readbeforeyoubuy":"Nourishment","nutrition40tryanutrientdensefood":"Nourishment",
    "nutrition60tryahealthyfat":"Nourishment","stress60physicalhealthstress":"Breath",
    "v026howmuchexercisedoyouneed":"Movement","v026howmuchphysicalactivitydoyouneed":"Movement",
    "v0273waystoavoidbuyingunhealthysnacks":"Nourishment","v028waterforahealthyweight":"Nourishment",
    "v030howmuchcaffeineistoomuch":"Nourishment","v033getyourvitamind":"Nature",
    "v034workoutwarmupsandcooldowns":"Movement","v035ditchyourmidnightsnack":"Nourishment",
    "v036benefitsofstretching":"Movement","v037whyyouwantabedtimeroutine":"Rest",
    "v038issittingthenewsmoking":"Movement","v040trythistodaykeepafoodlog":"Nourishment",
    "v041stressandyourimmunesystem":"Breath","v042tradescreentimeformetime":"Focus",
    "v043reasonwithyourfears":"Breath","v045prescribedlaughter":"Breath","v046howtoavoidburnout":"Rest",
    "v047socialmediatheanswertoloneliness":"Connection","v049thenaturalmoodbooster":"Nature",
    "v050howtostackyourhabits":"Focus","v051trackyourmood":"Focus","v052givethanks":"Connection",
    "v053mindfulnessinmotion":"Focus","v054whymeditate":"Breath","v0553hacksforabettermorning":"Rest",
    "v056findthatelusiveworklifebalance":"Focus","v058usethosevacationhours":"Rest",
    "v059setsmallgoalstoachievebigthings":"Focus","v061asimplehackforproductivity":"Focus",
    "v065setyourselfupforsuccess":"Focus","v066cutthedistractionsatwork":"Focus",
    "v067boostyourcareerwellbeing":"Focus","v068keepexpandingyourskillset":"Focus",
    "v070balancewhenworkingfromhome":"Focus","v071shareyourvictories":"Connection",
    "v072donatingtogetherbuildscommunity":"Connection","v073benefitsofsocialexercise":"Connection",
    "v0743reasonstoeattogether":"Connection","v075fightelderloneliness":"Connection",
    "v078buildcommunitywithreciprocity":"Connection","v079whatareyouassuming":"Focus",
    "v081tipsforhealthycommunicationactivelistening":"Connection",
    "v086moneyhabitswantsvsneeds":"Finance","v087areyoupayinghiddenservicefees":"Finance",
    "v088automaticsavings":"Finance","v090doyouknowyourscore":"Finance",
    "v09162millioninthetrash":"Finance","v093pausebeforeyoupurchase":"Finance",
    "v096expensesthatsurprise":"Finance","v097breakingfinancialbarriers":"Finance",
    "v098planforfinancialplanning":"Finance","v099savemoneywithmealplans":"Finance",
    "v100cutdownonfoodwaste":"Nourishment",
}

AUDIO_TOPIC_KEYWORDS = {
    "Focus": ["cbt","cyckeofanxiety","cycleofanxiety","targetthought","misconception","exposure",
              "distresstolerance","worryrumination","avoidance","actionplan","reachingout","goals",
              "understanding","copingskill","copingstrateg","behaviors","thoughtrecord","selfcompression",
              "mindfulness","emotions"],
    "Breath": ["fearsystem","helpfulanxiety","stressor","uncertaint","movingtowarddiscomfort",
               "physicalhealthanxiety","safetybehavior"],
    "Movement": ["posture","sitting","standing","lyingdown","stretch","exercise","stepsperday",
                 "physicalactivity","warmup","cooldown","posturalstress"],
    "Rest": ["sleepmedic","sleepbasics","understandinginsomnia","bedtime"],
    "Connection": ["reachingout","support"],
    "Nourishment": ["dash","salt","caffeine","healthyplate","trackyourmeals","healthyeating",
                     "sweetsandsweeten","fatsandprotein","healthyweight","nutrient","diet"],
    "Movement_A": ["yoga","fitnesstip","increaseintensity","fitnesschalleng","sitless"],
    "Focus_A": ["medication","cognitivefunction","heartattack","signsofanemergency"],
    "Breath_A": ["alcohol","smokingandnicotine"],
}
AUDIO_TOPIC_KEYWORDS["Movement"] += AUDIO_TOPIC_KEYWORDS.pop("Movement_A")
AUDIO_TOPIC_KEYWORDS["Focus"] += AUDIO_TOPIC_KEYWORDS.pop("Focus_A")
AUDIO_TOPIC_KEYWORDS["Breath"] += AUDIO_TOPIC_KEYWORDS.pop("Breath_A")

CONDITION_DEFAULT = {
    "anxiety":"Breath","depression":"Focus","insomnia":"Rest","kneecare":"Movement",
    "hipcare":"Movement","hippain":"Movement","shouldercare":"Movement","neckcare":"Movement","lowerback":"Movement",
    "diabetesmanagement":"Nourishment","diabetesprevention":"Nourishment","continuingdiabetesprev":"Nourishment",
    "hypertension":"Nourishment","bloodpressure":"Nourishment","weightmanagement":"Nourishment","weightloss":"Nourishment",
    "pregnancy":"Family_home_life",
}

def load_rows():
    rows = []
    with open("source-links.csv", newline="", encoding="utf-8") as f:
        r = csv.reader(f)
        next(r)
        for row in r:
            if row and row[0].strip():
                rows.append(row[0].strip())
    return rows

def classify_video(url):
    path = unquote(urlparse(url).path)
    fname_low = os.path.basename(path).lower()
    slug = re.sub(r"[^a-z0-9]", "", fname_low.rsplit(".",1)[0])
    if slug in VIDEO_MAP:
        return {"category": VIDEO_MAP[slug], "confidence": "high", "reason": "explicit video title map"}
    return {"category": None, "confidence": "none", "reason": "unclassified video"}

def classify_audio(url):
    path = unquote(urlparse(url).path)
    fname_low = os.path.basename(path).lower()
    slug = re.sub(r"[^a-z0-9]", "", fname_low.rsplit(".",1)[0])

    if any(h in slug for h in base.SENSITIVE_HINTS):
        return {"category": "Sensitive/Support", "confidence": "flagged", "reason": "crisis/support resource"}

    for cat, kws in AUDIO_TOPIC_KEYWORDS.items():
        for kw in kws:
            if kw in slug:
                return {"category": cat, "confidence": "medium", "reason": f"topic keyword: {kw}"}

    for cat, kws in base.KEYWORDS.items():
        for kw in kws:
            k = kw.replace(" ","")
            if len(k) >= 5 and k in slug:
                return {"category": cat, "confidence": "medium", "reason": f"keyword: {kw}"}

    core = slug[6:] if slug.startswith("playht") else slug
    for key, cat in CONDITION_DEFAULT.items():
        if core.startswith(key):
            return {"category": cat, "confidence": "inferred", "reason": f"condition default: {key}"}

    return {"category": None, "confidence": "none", "reason": "unclassified audio"}

def main():
    rows = load_rows()
    results = []
    for url in rows:
        p = unquote(urlparse(url).path)
        ext = p.rsplit(".",1)[-1].lower() if "." in os.path.basename(p) else ""
        if ext in VIDEO_EXT:
            c = classify_video(url)
            results.append({"url": url, "media": "video", **c})
        elif ext in AUDIO_EXT:
            c = classify_audio(url)
            results.append({"url": url, "media": "audio", **c})

    with open("classified_media.json", "w") as f:
        json.dump(results, f, indent=1)

    from collections import Counter
    for kind in ("video","audio"):
        subset = [r for r in results if r["media"]==kind]
        print(f"--- {kind}: {len(subset)} total ---")
        print(Counter(r["category"] or "(none)" for r in subset).most_common())
        print(Counter(r["confidence"] for r in subset).most_common())

if __name__ == "__main__":
    main()
