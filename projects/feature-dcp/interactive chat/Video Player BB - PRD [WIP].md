# DCP Video Playback — PRD

**What this project changes:** video will become something our app knows about and draws itself, instead of markup typed by hand into a lesson's content. Some of what we want can already be hand-built into a single lecture. What changes is where the behaviour lives. Each lecture still supplies its own file and caption file, but how a lecture plays — full-screen vertical, switchable captions, a record of what was watched, an audio-only option — is defined once in our own code rather than retyped into every lesson, and silently wrong wherever somebody gets it slightly different.

*Terminology: "captions" here means a separate text file a member can switch on or off. Some existing videos instead have caption text painted permanently into the picture, which cannot be switched off or translated into another language. This document always means the first kind.*

* **Owner:** Product Management Department
* **Date:** 2026-08-25
* **Sources:**
  * Technical assessment of current video handling, 2026-08-25 — verified against the codebase at branch r2604, inspection of a live lesson page and its video file, and playback tested on an iPhone and an Android phone. Summarised in Appendix A.
  * The measurement and pricing behind the delivery-cost figures are set out in Appendix C.
  * A 2023 specification proposed offering DTx content in audio and video formats; it was not implemented. (2023 - not implemented) DTx Audio & Video Specification.docx, alongside this document.
* **Related but separate:**
  * The lecture-and-chat experience — persona choice, switching between reading and watching, and chatting with the coach — is covered in a companion requirements document, dcp-lecture-followed-by-chat/requirements.md. That one is still in draft and has not been circulated, so treat anything it says as subject to revision. This document covers the video playback underneath it.
  * Vendor selection for interactive video chat is a separate effort.

**How to read this doc.** This covers how video is stored, delivered and played, what a member sees when a lecture plays, and what we record when they watch. It does not cover what the lectures say, who presents them, or the conversation with the coach afterwards; that is the requirements document named above. Where the two touch — a member leaving a lecture to talk to the coach, or choosing to read rather than watch — this doc describes only the video side of the handover.

## The experience we want

A DCP lecture plays on a phone the way members already expect video to play on a phone: upright, filling the screen, no black bars. Captions can be switched on. A member with a question can leave for the coach and come back without losing their place, and a member who cannot watch can listen instead. And we can see how much of a lecture was actually watched.

That is the target this document works back from. Everything below — how video is stored, delivered and drawn — exists to make it reachable.

Three things to hold alongside it:

* **DCP lectures are the priority, but not the only case.** The same player will later carry other video: explainers, diagrams, recorded walkthroughs. Decisions here should not assume every video is a presenter centred in frame, which is why display behaviour is a setting rather than a fixed rule.
* **Lectures are cropped before they are published.** Each lecture is rendered once and a tall version produced from it at publish time, rather than sending a wide picture to the phone and cropping it there. This is assumed throughout, and it is the main reason delivery gets cheaper rather than more expensive.
* **Presentation on a computer is open.** Whether a lecture plays upright on a computer the way it does on a phone, or wide in a conventional player, is not settled. Either is achievable; the question is which looks better with what we already run, and it is in the open questions below.

## Problem

Here is how a video reaches a member today:

1. Someone writes a video tag by hand into a lesson's content block in the admin tool, along with the web address of a video file.
2. That content is saved in the database as text.
3. A member opens the lesson, and the app asks the server for the page.
4. The server returns that text, and the app passes it to the platform's built-in web viewer to draw.
5. The web viewer finds a video tag and draws whatever video player the phone or browser happens to provide.

**No code of ours sits anywhere in that sequence.** What a video does is whatever the author typed, plus whatever the platform does by default. More of it can be typed in than people tend to assume — today's markup already hand-writes its own sizing rules — and the table at the end of this section sets out exactly how much. But the things that matter most are not content's to grant at all: full-screen on Android, playing in place on iPhone, and any record of what a member actually watched each need app code that does not exist.

Measured against the experience we want, here is what today costs us, all of it verified on real devices:

* **On Android, a member cannot make a lecture fill the screen.** The full-screen button appears in the player but is greyed out and cannot be tapped, so video stays locked in a small box on the page, and rotating the phone only makes the box wider. This follows directly from step 4: video played inside the platform's web viewer only goes full-screen if the app implements a particular hook for it, and none of ours does.
* **On an iPhone, a lecture can only ever take over the whole screen.** Tapping play hands the member to Apple's own player, where a lecture held upright sits letterboxed with black bars above and below. With today's wide recordings, filling the screen means turning the phone sideways — there is no way to watch a lecture fill the screen held upright. Whether it plays in place or takes over is not ours to set either: that needs two settings, one in the app and one on the video tag, and neither is present.
* Neither behaviour is a design decision. Both are what an HTML video tag does inside each platform's web viewer when nothing is configured: Android withholds full-screen unless the app opts in, and iPhone withholds in-place playback unless the app and the tag both opt in. Video is content here rather than a feature, so there is no code of ours doing the opting in.
* **We can see that a video was opened, but not that it was watched.** In some places a member reaches a video through a tracked link, so the click is likely recorded already. Nothing records whether the video then played at all, how far it got, or whether it reached the end — so how many members actually watch a lecture, and whether watching leads to finishing a programme, are both unanswerable today.
* **Captions cannot be switched off or translated.** Where they exist they are painted into the picture, so offering another language means re-recording every video rather than writing a text file.
* **Delivery is more expensive and slower than it needs to be.** Files are served straight from storage with no delivery network in front of them and no instructions about how long to keep a copy, so the same file is paid for and fetched again more often than necessary.
* **Anyone with a link can download a lecture file**, with no sign-in. The list of files is not browsable, but individual files are open.

### What is already possible today

Worth being precise about, because more of it is achievable than people expect and the case for investing should rest on the real gap rather than an overstated one. "By hand" means typed into each lecture's content block by whoever authors it.

| What we want | iPhone today | Android today | Website today | Scalable that way? |
| :---- | :---- | :---- | :---- | :---- |
| Full-screen vertical | Mostly, by hand — a pre-cropped tall file plays upright in Apple's player, though thin bars remain and we cannot ask it to crop. Untested | **No.** Full-screen is disabled and content cannot enable it | Yes, by hand — a crop-to-fill style rule and the browser's own full-screen | No — a style rule typed into every lecture, and Android never gets there |
| Switchable captions | Yes, by hand — a caption file named in the markup, offered by Apple's own player | Probably, by hand, inline only. Untested | Yes, by hand | No — a file produced and a reference typed in per lecture, per language |
| An audio-only option | By hand, per lecture | By hand, per lecture | By hand, per lecture | No — built separately into each lecture |
| Playing in place in the lesson | **No.** Needs a setting inside the app | Already does | Yes | — |
| Knowing how much was watched | **No.** Nothing content can do reaches our records | **No** | **No** | — |
| Changing any of it without editing markup | **No** | **No** | **No** | — |

Three things follow. Most of the *presentation* is reachable by hand, so the argument for investing is not that these are impossible — it is that hand-typing them into 634 lectures makes every lecture depend on somebody getting the markup right, with nothing to catch it when they do not, no consistency between authors, and no way to change a decision later without editing every lecture again. Android is the one place genuinely blocked: no amount of content work gets it to full-screen. And reporting, which the first success criterion depends on entirely, is not reachable at all.

## What this will look like for members — three quick scenarios

These describe the proposed experience, not how things behave today.

1. **Maria — member who usually can't play sound.** Maria takes her sleep lesson in a waiting room with no headphones, so she switches captions on and reads along in silence. The next morning she takes the following lesson on the train, where her signal keeps dropping, and chooses to listen instead of watching. Neither is a setting she went looking for: most lecture watching happens somewhere imperfect, and captions and audio are what make a lesson survive that.
2. **Priya — member with a question halfway through.** Two minutes into a lecture on blood pressure, Priya wants to ask something. She leaves for the coach, and the lecture holds its place rather than resetting, so coming back costs her nothing. Without that, the cheapest thing to do with a question is ignore it and keep watching.
3. **Aisha — member part-way through an older programme, for whom nothing changes.** Aisha's lessons contain short explainer videos, and they keep playing exactly as they do today. Nothing is converted, so no existing programme changes behaviour while this ships.

## Success criteria

1. For any lecture, we can say what share of the members who started it finished it — broken down by whether they watched, listened, or read the lesson instead.
2. A lecture offers a member the same things on our iPhone app, Android app and website — it plays, it fills the screen, captions can be switched on, and watching is recorded. The controls will look like each platform's own, which is the intent; today the differences go well beyond appearance and none of them were chosen.
3. Adding a language means adding a text file per lecture, not re-recording anything.

## Out of scope for this project

**Ruled out by design — not planned for any phase**

* **Buying a commercial video player.** The paid products exist to protect licensed content, broadcast live events, and monitor quality across several delivery networks. We do none of those things, and the operating systems handle everything we need at no cost.
* **Copy protection on the video files.** This technology exists to stop people copying licensed film and television. We produce our own content, so it does not apply.
* **Preventing members from skipping ahead.** A member who wants to skip will skip regardless, and blocking it penalises the member who would rather re-read than re-watch. It also works against letting people move freely between reading and watching. A knowledge check measures what we actually care about.
* **Recording lectures in other languages.** Translating a caption file is inexpensive; re-recording every lecture in another voice is not, and would need doing again for each language. Shipping separate caption files keeps translation affordable and leaves the option open.

**Valuable, but kept outside this project so we can stay focused**

* Continuing to play audio once the phone screen is off. An audio option that plays while the app is open is in scope; keeping it running with the phone in a pocket needs additional permissions from Apple and Google and is better handled separately.
* Downloading a lecture to watch without a connection.
* Picking a lecture back up on a different device days later. Within a single sitting is in scope.
* Automatically switching video quality mid-playback as a member's signal changes.
* Replacing each platform's playback controls with our own. Every platform already gives members a familiar, well-understood way to switch captions on and off — the same control they use for any other video on their phone — and each can already fill the screen. Building our own would add a captions button in our own styling, a way to reach the coach from within the video, and full control of the vertical presentation, but none of those are needed for a member to complete a lecture with captions. It is also the largest piece of design and build work identified, across three platforms.
  One consequence worth naming rather than discovering later: with the platforms' own controls, the way into a conversation with the coach has to sit beside the video rather than on it. A member watching in the lesson can reach it directly; a member who has chosen full screen would come out of full screen first. That is a small cost, and the alternative is the work above.
* Restoring picture-in-picture and cast-to-television. These come free from the platforms' own players today, and would only be at risk if we later replaced those players with our own.

Timing for these is not yet decided, and where they get tracked is an open question below.

## Solution

*Priority labels: **P0** the project does not function without it · **P1** the member-facing reasons for doing it · **P2** worth doing, least lost if it slips. Dependency order is a separate matter, covered under Proposed sequencing below.*

### Improvement 1 — Video becomes a lesson element the app draws · P0 · In scope

Today video is text inside a content block. Instead, video becomes a thing the admin tool offers as its own item — the way lists, buttons and text blocks already work — with a proper record behind it holding the file, its length, its shape, a still image for before it plays, and its caption files.

This is the change everything else depends on. Once our own code is drawing the video, adding screen-filling, reporting and captions all become ordinary work. Until then reporting is not reachable at any price. Screen-filling and captions are the partial exceptions, reachable one video at a time by hand but not manageable across a library: the tall rendition we are producing anyway for bandwidth reasons plays vertically in Apple's player and in a browser, and a hand-written caption file would be offered by each platform's own player. Neither gives the Innovations team a field to fill in, and neither helps Android fill the screen at all. It also means the Innovations team configures a video the way they configure everything else, rather than hand-writing markup.

Older apps keep working. Partner companies embed our shared code in their own apps and update it on their own schedule, so some will be running an older version that does not recognise a video item. For those, the server sends the lesson the way it does today — a content block with a video tag in it — and the lecture still plays, without screen-filling, reporting or captions. Members on a current app get the full experience; nobody gets a broken lesson.

This costs little because the pieces already exist. Every app already tells the server which version of the shared code it is running, and the server already reads that header on each request to decide other things. What is new is using it to choose which form of the lesson to send.

### Improvement 2 — How lecture files are produced and served · P0 · In scope

Each lecture is recorded once at high resolution, and two versions are produced automatically from it: a tall one already cropped for phones held upright, and a wide one for phones held sideways. Which of the two a computer receives is the open question about desktop presentation. The tall crop suits lectures, where a presenter sits centred in frame. Video that is inherently wide — a diagram, a screen recording — ships in one shape only and uses the whole-picture setting on a phone. Cropping on the phone instead would mean sending roughly three times the picture a member actually sees, and paying for it on every view — and more than three times the cost in practice, since the uncropped version would also be delivered at a higher resolution. Appendix C works the figures through. The tall version is also what full-screen vertical playback actually plays, so this improvement gates that one.

Separately, files move behind a delivery network with instructions to keep copies close to members, and links become time-limited rather than permanently open. This part is independent of everything else here and could be done first.

### Improvement 3 — Full-screen vertical playback · P1 · In scope

A lecture held upright fills the phone screen rather than sitting in a small box with black bars.

Letterboxed video looks dated against everything else on the phone, and it is the first thing a member notices, before a word of the lecture has landed — which makes it the cheapest signal we have that these lectures are current rather than repurposed desktop material.

How much of the screen a video covers is a setting rather than a fixed behaviour, because this player will carry more than lectures. It has three positions on one line, from most screen covered to most picture preserved:

* **Edge to edge** — covers the whole screen, including behind the notch and the home bar. Crops whatever does not fit.
* **Fills the screen** — covers the full width and crops to fit, but stays clear of the notch and the home bar.
* **Whole picture** — shows the entire frame, with bars where the shapes do not match. Nothing is ever cropped.

This is deliberately one setting with three positions rather than two separate switches. Cropping and clearing the notch are not independent choices — a letterboxed picture running behind the notch is a combination nobody wants — so offering them separately would create a state that means nothing and make the other three harder to predict.

Lectures default to the middle position, because a presenter's head sits near the top of the frame, which is exactly where the notch sits. Later content where nothing important reaches the edges can take the first; content where the whole frame matters — a diagram, or anything with text burned into the picture — needs the third.

On each platform this is a single player property plus whether the view respects the screen's safe edges, so the cost is in having our own code there to set it — which Improvement 1 provides — rather than in the settings themselves.

### Improvement 4 — Playback reporting · P1 · In scope

Record when a member starts a lecture, passes roughly a quarter, half and three-quarters of the way through, finishes it, abandons it, or skips around. Also record when captions are switched on, and when someone chooses audio over video.

This is different from knowing a member clicked into a video, which in some places we may already record. A click says someone arrived; it says nothing about whether they watched ten seconds or the whole lecture. Only the second tells us whether video lectures improve completion, satisfaction or health outcomes, which is the main thing we want to learn from this investment.

### Improvement 5 — Captions as separate files · P1 · In scope

Each lecture ships with a small text file of its words and timings, held separately from the video. A member switches captions on and off, and another language later means another text file rather than another recording.

The words already exist, since every lecture is written before it is recorded. What has to be produced is the timing. Captioning recorded video is also an accessibility requirement rather than an enhancement, and is commonly asked about in employer and health-plan purchasing.

### Improvement 6 — An audio-only option · P2 · In scope

A member can choose to listen to a lecture rather than watch it, which downloads far less and works much better on a weak signal. Lessons already offer a listen option today, so this largely means pointing an existing control at the lecture audio.

## What should be configurable in Admin

Exact field names and where each value lives are scoping decisions. What matters at this stage is which of these should be tunable without a code change, and at what level.

| Item | What it controls | Level |
| :---- | :---- | :---- |
| Video available for a lesson | Whether a given lesson offers a video version at all | Lesson |
| Video files | Which recording a lesson plays, in each picture shape | Lesson |
| Caption files | The caption file used for each language offered | Lesson |
| How much of the screen video covers | Edge to edge, fills the screen, or whole picture — described under Improvement 3 | Video, over a system default of filling the screen |
| Audio-only option | Whether a lesson offers listening instead of watching | Client or lesson |

Whether video is available to a client at all is deliberately left out of this table, because it interacts with decisions in the related requirements document — covered in the open questions below.

## Security and privacy

Lecture recordings are general educational content. They contain no information about any member, and nothing about a member's identity or health appears in a video file or its web address.

Two things do need attention:

**Video files can currently be downloaded by anyone holding the link**, without signing in. The list of files is not browsable, so the library cannot be enumerated from outside, but individual files are open. Moving files behind a delivery network with time-limited links is part of the improvement covering how files are produced and served, and closes this.

**Playback reporting is member health information.** Recording that a particular member watched a particular lecture, and how far they got, says something about that member's health concerns. It should be stored, retained and access-controlled exactly as existing programme progress data already is, and should not be sent to third-party analytics products — which is also the recommendation in the open questions below, for a separate reason.

The standard security review checklist has not yet been completed for this project and should be done at scoping.

## Proposed sequencing

Offered as a starting point for scoping rather than a plan. Everything above is intended for one release, so this is about dependency order rather than phases.

**Can start immediately, independent of everything else** — the delivery and access work inside the improvement covering how lecture files are produced and served. It needs no product decisions, sits with whoever owns our AWS setup rather than the app teams, reduces what we pay per view from the day it ships, and speeds up video already live today.

**Everything else waits on one thing** — video becoming a lesson element the app draws. Playback reporting and the audio option are each straightforward once that exists, and unreachable until it does. Screen-filling and captions can each be reached one video at a time by hand — the tall rendition from the delivery work above already gives iPhone and the website most of the vertical look — but neither is manageable across a library, and neither helps Android fill the screen.

**Best done before lecture recording scales up** — producing caption files, and confirming that lectures are recorded without caption text burned into the picture. Neither blocks the software work, but both are far cheaper to get right at the start than to correct across a finished library.

## Open questions

Getting these answered is the main purpose of this draft. Record answers in place.

| # | Question | Why it matters |
| :---- | :---- | :---- |
| 1 | Do we need partner companies to take a new version of our shared code on our timeline, or can they pick it up whenever they next update? Our own apps and website are built on the same shared code partners embed, so there is no extra build cost either way, and the fallback described in the first improvement means members on an older partner app still get a playable lecture. Product's assumption is therefore that no coordinated partner upgrade is needed — confirm with whoever owns those relationships. | Decides whether launch depends on partner schedules. It also decides how long we keep the fallback path alive, which is a small ongoing cost rather than a one-off. |
| 2 | Which existing lessons, if any, move to the new video element? Product assumes none — existing videos keep working exactly as they do now, and only new lecture modules use the new element. Confirm. | If existing content has to be converted, this stops being an addition and becomes a migration across every programme, which is a materially larger piece of work. |
| 3 | Is the platform's own captions control good enough for launch, or do we need a captions button in our own styling? Both Apple's and Android's built-in players already offer members a way to switch captions on, and honour their phone's accessibility settings. Recommendation: start with the built-in control, because needing our own is the single biggest reason to build our own playback controls, and that is the largest cost in this document. | This is the difference between a first release that needs its own playback controls and one that does not. |
| 4 | Where should playback reporting be stored? Recommendation: our own event records rather than the third-party analytics tools already in the apps. Every question we want to answer — whether watching a lecture leads to finishing a programme, to better assessment scores, to higher satisfaction — requires combining video behaviour with programme and outcomes data that only exists in our own database. The third-party tools cannot see that data and cannot make that comparison. | Choosing the convenient option here would leave us able to count views but unable to answer the questions the investment is meant to answer. |
| 5 | Should filling the screen versus showing the whole picture with black bars be a setting, or one product-wide decision? Recommendation: make it a setting, defaulting to filling the screen. It is a single value on each platform, so the flexibility costs almost nothing, and it lets design try both on real devices and change the answer without a release. | Cheap to build in now, awkward to add later, and it removes a debate that would otherwise have to be settled before anything ships. |
| 6 | Who produces the caption files, and when? The words already exist in the written lecture scripts, so this is a question of producing timings, not of transcription. It has to happen for each lecture but does not have to happen before playback is built. | Captions are an accessibility requirement, and the work sits with whoever runs lecture production rather than with engineering — so it can be missed simply because it falls between the two. |
| 7 | Does today's listen option keep playing when a member's phone screen goes off? Product's understanding is that it does not, but this has not been checked. | If it already stops, then the audio option in this project matches long-standing behaviour and needs no explanation. If it keeps playing today, members would experience the new audio option as a step backwards, and continuing with the screen off would need pulling back into scope. |
| 8 | Should video lectures be available to clients who have chosen not to enable AI features? It is not clear whether an AI-presented lecture counts as an AI feature for that purpose, or whether only the live chat does. | Affects how many members ever see this, and it is easier to settle before the setting is built than to add a second exception afterwards. |
| 9 | Where do the deferred items under Out of scope get tracked, so they are not simply lost? | Several are things members will eventually ask for, particularly listening with the screen off. |
| 10 | What should a member see when a lecture will not load, or their connection drops mid-lecture? No behaviour is specified today, so each platform does something different and none of it was designed. | Video fails more often than text, and on worse connections. Deciding this once is cheaper than three platforms each inventing an answer. |
| 11 | What picks which version of a lecture plays — the platform, the phone's orientation when playback starts, or the orientation moment to moment? And do lectures rotate at all, or lock to upright the way Reels, Shorts and TikTok do? | Switching version mid-lecture means seeking to the same point and re-buffering, which a member sees. Locking to upright avoids that entirely and is the simplest to build, but it is a design decision nobody has made. Presentation on a computer is a separate question below. |
| 12 | Can web and the iPhone app deliver vertical playback and switchable captions from content alone — a pre-cropped tall file plus a caption file referenced in the markup — with no change to either app? Untested. Half a day on a real device would settle it. | Both inputs are already committed work: the tall file is being produced for bandwidth reasons, and caption files are needed regardless. If it works, two of three platforms could show the new presentation without an app release, and without waiting on partner companies to take a new version of our shared code. Android still needs the app work either way, and none of the reporting or admin configuration comes with it. |
| 13 | How does a lesson end up with the right video, and who does that work? Product's understanding is that lesson pages come from a small set of templates with content inserted by formula, rather than being authored page by page — which would make associating lesson XYZ with video ABC and its caption file a formula question rather than a form somebody fills in. That understanding needs confirming before anything is designed. It is also unclear whether the display settings belong in the same formula or in the admin UI, and nobody has estimated the setup effort per lecture. | This is the recurring cost of the project: whatever it takes to set up one lecture happens across the whole library. Where the display settings live also decides who can change them afterwards, and whether changing one means editing content or changing a setting. |
| 14 | What is the oldest web browser the site already supports, and does video need anything newer? Some clients require employees' laptops to stay on a pinned browser version. Video itself plays almost anywhere, but the crop-to-fill rule the web plan relies on needs roughly a 2017-or-later browser, and full-screen needs older-style prefixed calls before that — so the likely outcome is a lecture that plays but does not fill the screen. If the site's existing floor is already modern, this is a non-issue. | Decides whether fallback behaviour is needed at all. If it is, the fallback should serve the wide version and letterbox it rather than the tall one, because a tall video letterboxed on a laptop looks worse than a wide one shown properly — which ties into the desktop-presentation question above. |
| 15 | How should a lecture present on a computer — upright as it does on a phone, wide, or upright beside the lesson text? Reels, Shorts and TikTok all serve vertical on desktop, but they do so because their content is shot vertical and no wide version exists. The result is a narrow strip with large empty gutters, generally the weakest surface of those products, so copying it would be copying a compromise rather than adopting a standard. Upright beside the lesson text would use the whole screen and remove the read-or-watch choice on a wide screen — but Product's understanding is that page-layout elements can only be stacked vertically, so placing two side by side may need a layout capability we do not have. That needs confirming before the option is ruled in or out. | Decides whether the wide version is needed at all, and so whether the asset pipeline produces one shape or two. A tall crop keeps only about a third of the frame's width, which makes a computer the one place a movement demonstration could be shown in full — and MSK lectures are named as a case that cuts to one. |

## Appendix A — Current technology, in brief

For readers who want to know what we run today. The Problem section above covers what this means for members; this covers only what the pieces are. The delivery-cost figures that follow from these measurements are worked through in Appendix C.

**There is no video player and no video library.** Each platform calls whatever its operating system provides, and no code of ours is involved.

| Piece | What it is today | Notes |
| :---- | :---- | :---- |
| iPhone app | Apple's AVKit player | Part of iOS; no separate version or licence. Handles captions and audio-track selection natively, given a file that declares them. |
| Android app | VideoView, the original Android framework player | Google's current recommended replacement is AndroidX Media3, also free. |
| Website | The plain HTML video element | No library. One legacy screen also carries an Adobe Flash fallback, unreachable since Flash ended in 2020. |
| Where video is authored | Hand-written markup inside HTML content blocks | Two patterns exist: a video placed in a lesson page, and a video opened in a pop-up page from a resource tile. |
| What we store per video | A record holding a name, three quality-tier web addresses, and a thumbnail | No duration, no picture shape, no caption files, no separate versions for different screen shapes. |
| How files are delivered | Served directly from file storage | No delivery network in front of them, and no instructions about how long to keep a copy. Files are readable by anyone with the link. |

**Two measurements worth having at scoping.** A representative lecture file is 7.9 MB for 26 seconds of video, about 2.5 megabits per second — a reasonable rate, so existing recordings are encoded sensibly. And nothing anywhere uses adaptive quality streaming, so a member on a weak connection receives the same file as everyone else.

**Verified against** the codebase at branch r2604, inspection of a live lesson page and its video file, and playback tested on an iPhone and an Android phone.

## Appendix B — For the engineering team's consideration

**This is not a technical decision, and it is not meant to arrive as one.** Product wrote it, engineering owns the call, and where the two differ engineering is probably right — this appendix exists so the scoping conversation can start from something concrete rather than a blank page.

Two things worth saying plainly. First, it is stated in definite terms only so that it is easy to disagree with; hedging every line would make it harder to argue with, not more respectful of anyone's judgement. Take any row as "Product's starting guess — tell us what's wrong with it."

Second, it comes from actually reading the code rather than from general principle: the current players on each platform, how video content is stored and rendered, what the request headers already carry, and how a live lecture file is delivered were each checked in the codebase at branch r2604 and confirmed on an iPhone and an Android phone. That does not make the suggestions right. It does mean the current-state facts underneath them should hold up, and it is worth flagging quickly if any don't.

There is also plenty this cannot see — work already in flight, constraints from other projects, decisions made before Product was involved. **Nothing in the body of this PRD depends on this appendix.** If engineering reaches the same outcomes a different way, the requirements are unchanged and this appendix simply gets replaced.

**The stance being suggested:** use each platform's built-in player, standardise the data and the reporting rather than the player itself, and buy nothing. On that reading, the total third-party licence cost of everything below is zero — every component is either part of the operating system or established open source.

### How big this looks, honestly

Read as a list, the table below looks like a lot. Most of it is either a single setting or an extension of something the platform already does, so it is worth separating out what is actually new.

**Settings rather than projects.** Filling the screen on each platform, allowing video to play in place on iPhone, setting cache lifetimes on stored files, and removing the dead Flash block are each a line or two of change.

**Extending patterns that already exist.** The platform already has seventeen page-layout element types; video would be an eighteenth following the same pattern, not a new subsystem. Playback events can go through the event-publishing mechanism already in use. The version header needed for the older-app fallback already arrives on every request and is already parsed for other purposes. And because element renderers live in the shared code that both our own apps and partner apps consume, there is no new distribution path to build.

**One real migration, one real build.** Moving Android from VideoView to Media3 is genuine work, though Google publishes a migration guide for this exact path, and part of it is remedial rather than new — it resolves something members hit today. The new element type and media record is the substantial item, and it is the one thing the rest depends on.

**What this does not require.** No vendor to evaluate, no procurement, no third-party security review, no new infrastructure to stand up, no new analytics product, and no adaptive-streaming pipeline. The asset and delivery work also sits with whoever owns our AWS setup rather than with the app teams.

**The largest single piece has been taken off the table.** Building our own playback controls would have been the biggest design-and-build item here, across three platforms. It is out of scope, because each platform already gives members a familiar way to switch captions on and can already fill the screen — so nothing essential is lost. What remains assumes each platform's own player.

| Layer | Starting suggestion |
| :---- | :---- |
| **Backend** | A new page-layout element type for video, plus a media record holding versions of the file keyed by picture shape, duration, a still image, and caption files by language. Playback events go through the existing event-publishing infrastructure. |
| **Older partner apps** | The request headers already carry the version of the shared code each app is running, and the server already parses that header for other purposes. Use it to decide whether to send the new video element or today's content block. |
| **iPhone** | Stay on AVKit, using AVPlayerViewController — it already offers members a captions selector, honours their system accessibility settings, and videoGravity fills the screen. Attach time observers to the underlying AVPlayer for reporting. |
| **Android** | Migrate from VideoView to AndroidX Media3 (ExoPlayer), Apache 2.0. resize_mode="zoom" fills the screen, AnalyticsListener supplies playback events, and MediaSessionService is the path to background audio later. This also removes the full-screen limitation members hit today — by taking lesson video out of the web viewer altogether, rather than by fixing the web viewer. |
| **Website** | Keep the native HTML video element. A `<track>` element for captions, object-fit: cover to fill, with a letterboxed wide version as the fallback where object-fit or the unprefixed full-screen call is unavailable — see the open question on pinned browser versions. Remove the Flash fallback from the legacy screen. Add hls.js only if adaptive streaming is ever adopted. |
| **Captions** | WebVTT sidecar files — plain text, read natively by all three platforms, and translatable by translating a text file. The words already exist in the written lecture scripts; what has to be produced is timings. |
| **Asset pipeline** | One 4K master per lecture from the render vendor, from which two delivery versions are produced automatically: a wide one and a pre-cropped tall one, each sized for the screens that use it rather than at master resolution. ffmpeg or AWS MediaConvert. |
| **Delivery** | CloudFront in front of S3, explicit long cache lifetimes, and signed URLs or signed cookies in place of open links. |

**Where playback reporting should go.** Our own event records, not the Firebase or Google Analytics instrumentation already present in the apps. Every question this project exists to answer requires joining video behaviour to programme completion, assessment scores and satisfaction data, all of which live only in our own database. The third-party tools cannot see that data and cannot make that comparison.

**Deliberately not proposed, and why.** Commercial video players such as JW Player, Bitmovin, THEOplayer or Mux: they exist for licensed-content protection, live broadcasting and quality monitoring across multiple delivery networks, none of which apply. Content encryption: our own material. Adaptive quality streaming in a first release: at these bitrates and durations, plain files behind a delivery network are adequate, and it adds pipeline complexity. A cross-platform framework or a browser-based player used everywhere: both would cost more than they save and neither can deliver background audio.

## Appendix C — Where the delivery figures come from

The cost argument in Improvement 2 rests on one measured file and one projection from it. Both are set out here so the numbers can be checked, or replaced with better ones, at scoping.

**Measured.** A live lecture file, HealthyBloodPressureFINAL.mp4, is 8,289,338 bytes — 7.9 MB for 26 seconds of video, about 2.55 Mbps. That is a sensible rate for this kind of footage, so existing recordings are encoded reasonably. The response also carries Accept-Ranges: bytes, so skipping around inside a video already works today.

**Projected.** At that same bitrate, against a planned library of 634 lectures averaging 3.2 minutes, one lecture lands around 61 MB.

| What we deliver | Per 3.2-min lecture | At 100k views/month | Rough monthly egress |
| :---- | :---- | :---- | :---- |
| Right-sized version, at today's measured 2.55 Mbps | ~61 MB | ~6.1 TB | ~$520 |
| Full 4K, cropped on the phone — 3840×2160, ~20 Mbps | ~480 MB | ~48 TB | ~$3,900 |

**Assumptions, stated so they can be swapped.** File size and bitrate are measured. The view volume is invented and scales linearly, so substitute a real number once we have one. Dollar figures assume delivery-network pricing near $0.085/GB for the first 10 TB and $0.080 thereafter, US rates. Today we serve from file storage directly, which costs more per gigabyte than either row implies.

**Two things worth drawing out.** Storage is a rounding error: the whole 634-lecture library at this bitrate is roughly 39 GB, about a dollar a month to keep. Every meaningful cost here is people watching, so success is what makes this expensive — the good kind of problem, but still worth planning for. And the gap between those two rows is the entire argument for cropping when a lecture is published rather than on the phone. Same content, same views, same experience for the member; several thousand dollars a month of difference in pixels nobody looks at.
