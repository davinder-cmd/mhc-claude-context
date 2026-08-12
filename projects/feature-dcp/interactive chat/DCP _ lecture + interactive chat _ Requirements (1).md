# DCP \> lecture \+ interactive chat \> Requirements

# **Background**

## Idea in a nutshell

* Users can do DCP lessons in 'video podcast format' via lecturers Anna/Nathan  
* Users can conversationally text Anna/Nathan as they work on their conditions  
* SP/JH/ChrisM think they can really get a lot of Sales traction with this

## Current state (already done)

* **634 lecture scripts already written** across all 15 DCPs — \~33h 28m of estimated spoken time, avg 3.2 min/lecture.   
  * For the ‘lectur-ification of DCP content’ process, see:  
    * ‘readme’ file ([link](https://docs.google.com/document/d/13FSSU6mwkEUjs9E2ij7ZkfoMdpjxPPEtJD2cZCAavHc/edit?usp=sharing))  
    * lecturify prompt ([link](https://docs.google.com/document/d/1_rVBXn2uaai9x0wZlsYI1Z4GRqXwbQyEYSztUh6ge_E/edit?usp=sharing))

# **Goals**

* Position MH as  
  * AI-forward  
  * innovating  
  * pair some whiz bang UX to match our great outcomes  
    * ie: when people hear about our great DCP outcomes, and then learn that the experience is just reading some short articles \- they're underwhelmed \- the magical results don't jibe well with the 'too-basic' UX. We want to bring to market a really compelling AI-centric DCP experience.  
* Create a 'killer' sales demo in Figma  
* Bring this experience to production across all 15 topics  
  * Deliver to production as early as Oct 2026

# **In-scope requirements**

## As a user...

* User can consume DCP lesson via AI video  
* User can still consume DCP lesson via text (as before)  
* When user chooses to consume DCP lesson via AI video, they can choose between two personas  
  * Anna  
  * Nathan  
  * System remembers what mode user last chose \- and defaults to that moving forward  
* User can later choose to change the mode of consuming the content (ie: video vs. text).  
  * Though we don't inflict upon them the cognitive load of choosing every time. We 'smart default' to what they last chose.  
* After user completes a video lecture by Anna, they have the option of interactively chatting with Anna before proceeding to next lesson; user can skip chatting with Anna, however.  
  * For v1 in prod: the option will be to chat with Anna via texting her  
  * For Sales demo: besides texting, user may also have option to video chat with her or call her (eg: audio chat). \- this is TBD; may be good to account for this possibility, because eventually we will at some point launch this  
* At 3 in the morning, user may want to chat with Anna about their insomnia that's afflicting them at that moment, without first watching a DCP lesson. This should be allowed.  
* Like for YouTube iPhone app — while someone's listening, they can turn off their screen and just listen.  
* (Possibly) User can read the key points (a short bullet summary), which appear below the video so the user can scan what was covered.  
  * During or after a user watches video?

## As MHC...

* As MHC, we want users to complete many DCP lessons  
* As MHC, we want users to complete DCP programs  
* As MHC, we want users to do post-DCP-program assessments, so we can compare against pre-DCP program assessments  
* As MHC, we want post-assessments to show improvement  
* As MHC, we want users in the post-completion survey to say they 'highly recommend' the program and 'are satisfied' with it  
* As MHC, we ideally want to be able to find, through analytics, that AI 'lectures'  
  * are engaging to users  
  * result in more lessons completed  
  * result in more DCP programs completed  
  * result in same or better outcomes (health & user satisfaction) compared to the existing 'read content' DCP mode  
* As MHC, we ideally want to see, through analytics, that usage of 'interactive AI chat' results in (or is correlated with)  
  * higher engagement  
  * higher satisfaction  
  * more lessons & DCP programs completed  
  * same or better outcomes compared to 'read content only' DCP mode

## As a client...

* As a client, I want the option of offering DCP to my company without enabling interactive chat  
  * because i don't like AI features in general; or  
  * because i don't want to pay extra for AI features  
* Persona choice:  
  * **v1:** Anna & Nathan only  
  * **v2+:** clients may potentially be able to choose a different set of AI personas

## Platform & integration touchpoints

* Our existing 'listen' mode in DCP will be replaced with 'audio' from Anna / Nathan  
* Will need to evaluate our existing video player functionality on all 3 platforms \- to see if there are notable deficiencies that should be remedied in light of 'video' mode becoming more important & prominent in our UX  
* The AI chatbot will need to be aware of its own identity (e.g., will identify as Anna or Nathan)  
  * Would chatbot identity simply be the generic 'Health Advisor' when user has not consumed content via Anna/Nathan lecture?

# **Simplifying assumptions**

* No change to 'structure' of our DCP programs  
  * ie: no additional lessons; no consolidation of existing lessons  
* No change in the existing 'text' content  
* We're creating Anna lectures for modules that contain substantive teaching prose  
  * ie: 'assessment', 'track', 'evaluate' will retain their existing UX \- rather than be done via video.  
  * Per the lectures README (decision \#2), action, care\_plan, and reflection modules are *conditionally* lecture-eligible based on whether their body contains substantive teaching prose. Pure form/UI modules are not eligible.  
* Foreign languages out of scope for v1

# **Out of scope for v1**

* **Mid-lecture interactivity.** Per lectures README decision \#4, lectures are one-way; users cannot pause mid-lecture to ask Anna a question. Interactivity lives in the Q\&A surface after the lecture.  
* **Cross-program memory.** Same as v01 — per-module conversation state, no carry-over.  
* **Long-term memory** — TBD whether in scope for v1. Having long-term memory would probably make Anna/Nathan much more appealing to engage with; worth striving to include by go-live if feasible.  
* **Localization** — TBD whether in scope for v1. All decisions currently assume English.

# **Open UX questions**

* (Possibly) ‘Read the key points’ feature  
  * A short bullet summary appears below the video so the user can scan what was covered.  
* Need to make sure that the 'hand offs' between 'lecture done' to the next thing is smooth & sensible  
  * the next thing could be  
    * another lecture lesson  
    * a non-lecture module (e.g., 'assessment', 'track', or 'evaluate' module)  
* Need to make sure that the 'hand off' to video lecture is smooth  
  * ie: from whatever was before the video lecture to the lecture video itself

---

# **Sales demo**

## Background context

* Draft sales deck as of 5/21/26 ("MHPositioningV3.pdf (5/21/26)") ([GDrive link to PDF](https://drive.google.com/file/d/1z13VNsUho6WUSAr-KHcDxDOc3bchzyV-/view?usp=sharing))

## Topics to feature

* Insomnia  
  * 'when you can't sleep at 3am'  
  * 'a racing mind at 3am won't be solved by a Monday-morning PCP visit'  
* Depression  
  * 'when you can't wait 10 months for an appointment'  
* Back pain

## Storyline aspects JH mentioned that we should consider

* Someone who has all 3 conditions  
* That person fills out Interest Survey  
* That person engages with Anna  
* App conveys to user at some point (could be popup or msg or something other): "If you're experiencing insomnia, you might wish to check out our depression program too" or something like that  
  * Or: the user's lack of sleep caused her to be depressed  
  * Or had back pain which caused lack of sleep, which led to depression  
  * Story TBD \- but those are possibilities  
  * Some way to 'daisy chain' our programs in re: MH addressing co-morbidities

## Additional aspects to include in demo

* GLP-1  
* EAP

## Demo logistics

* Total demo length is probably 10min  
* Demo script should hit highlights quickly  
  * Have 3 Anna videos ready  
    * Play 1 \- and have 2 more handy to potentially display too  
* AY to get the 3 videos for Sales demo ready  
  * AY noted that MSK will be a bit trickier \- ie: during Anna lecture she may need to 'cut to' a gif of the movement; or AY may use AI video gen to have Anna do the movements; TBD.

