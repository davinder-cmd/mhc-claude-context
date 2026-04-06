# DCP A.I. Assistant \> PRD (draft)

# **Feature Overview**

## High level problem & solution statements

1. **Problems we’re solving**  
   1. DCP participants need on-demand, contextual guidance and  
      behavior-change coaching   
      while they’re completing tasks.  
      1. Static pages can’t deliver that interactively, which limits our potential in re:   
         engagement &   
         completion  
   2. Guidance must be  
      1. trustworthy   
         1. grounded in SME-vetted content and authoritative sources; and  
      2. bite-sized   
         1. to reduce cognitive load and drive action.   
   3. Health chats bring safety risks;  
      1. We need reliable safety-related topic handling  
   4. Enterprise buyers require  
      1. feature controls and cost guardrails  
         (client on/off, quotas/alerts).  
2. **High level solution**  
   1. In-flow Chat UI inside DCP:  
      1. Launchable while a user is in a pathway.  
      2. User types, AI responds.  
      3. Thumbs up/down feedback.  
      4. Easy exit back to the DCP.  
   2. Response style \= “SMS-length” coaching:  
      1. tl;dr  
         1. Short, sequenced bubbles with  
            typing indicator;  
         2. Optimized for  
            1. low cognitive load and  
            2. momentum.  
      2. Longer articulation  
         1. Short, SMS-like responses (rather than blog post-length or Wiki article-like responses)  
            1. Rationale: bite sized (low cognitive load) \+ responses that feel personal → are more effective for behavior change.  
               1. Going for behavior change (rather than information dump of exhaustive / exhausting WebMD webpage)  
                  1. People progress when advice is bite-sized, timely, and feels personal.  
               2. Cognitive load matters  
                  1. E.g., long reads at 11 pm worsen insomnia; SMS-length tips don’t.  
               3. Relationship drives retention  
                  1. Texting back and forth short messages feels more personal  
                  2. The ‘companion’ persona \- (plus, at some point, ‘memory’ that the coach has for your past interactions) – distinguishes it from what users would get from a wiki, or WebMD, or Google searching.  
   3. Coaching \+ Facts:  
      1. Motivational Interviewing (MI)  
         1. for behavior change   
      2. informational answers  
         1. grounded via RAG to Subject Matter Expert vetted content and trusted sources.  
   4. Reliability & Safety by design:  
      1. Safety-topic routing,  
      2. In-UI disclaimers (“not medical advice”).

   5. Quality controls:  
      1. Query rewriting to boost retrieval quality.  
      2. Evals as regression guards pre-/post-launch.  
   6. Controls & cost management:  
      1. Client-level on/off  
      2. User/client quotas with proactive alerts and user-friendly limit messaging.  
   7. Scoped memory:  
      1. Single-session conversational memory (cleared on exit) for continuity without cross-session risk in v1.

## Core end user experience 

1. AI-powered chatbot that is available to users while they’re using a DCP.   
   1. Note: For nontechnical and technical primers on how AI (LLM) works under the hood, see   
      [Appendix \> How LLMs work](#appendix-\>-how-llms-work-🔝)  
2. The Chatbot will offer   
   1. Motivational coaching  
      1. Based on the ‘Motivational Interviewing’ (“MI”) approach \- a widely recognized, evidence-based method in health coaching  
   2. Informational content  
      1. Based on MH’s SME-vetted DCP program content and authoritative source materials (e.g., CDC, AMA).  
   3. Short, SMS-like responses (rather than blog post-length or Wiki article-like responses)  
      1. Rationale: bite sized (low cognitive load) \+ responses that feel personal → are more effective for behavior change.  
3. In v1, we’ll strive to release the chatbot across all DCPs.   
   1. However, some DCP topics may prove trickier, in which case: we’d release the chatbot initially to a set of DCPs, and later to other DCPs.  
   2. For the list of DCPs, and the ones that’ll get the chatbot first \- if we end up needing to sequence them out – see   
        [Appendix \> DCP topics list and sequence](#appendix-\>-dcp-topics-list-and-sequence-🔝)   
   3. For v2+ enhancements see  
      [Appendix \> Future features](#appendix-\>-‘future’-features-🔝)

## Sales/marketing materials (including rough draft materials used in creating marketing materials)

1. [MH Expert Assistant for DCP (May 2025)](https://docs.google.com/presentation/d/1V0NFMO4ujmZgpbh8D-2PNdUqAF2lgxbGxs9dG99kJqs/edit?slide=id.g2b2fd76efe8_0_0#slide=id.g2b2fd76efe8_0_0)  
2. [DCP Assistant — Internal Primer \[draft\] (June 2025)](https://docs.google.com/document/d/15oYZ7gdADserHJjV76uqU2m0WUEvtMMUbZE29oZJDTw/edit?tab=t.0#heading=h.ssrs2kcuicbx)  
3. Figma prototype (Abbott demo) (June 2025\) ([link](https://www.figma.com/proto/mid6FVnquC7pAy7O1T4i9t/Abbott----Template-v3?page-id=4637%3A49610&node-id=4637-49862&viewport=20733%2C46805%2C1&t=MMwBukpQykQUY97I-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15632%3A47313))  
4. [Figma recording of a.i. features (2025 June 6).mp4](https://drive.google.com/file/d/13Gw5W7kbwA9KPgTYTyzZMeBOMKom9HK1/view?usp=sharing)  
   1. See 9s mark to 34s mark

# **Goals & Success Metrics**

1. Revenue  
   1. Support consumption-based pricing revenue  
      1. Consumption based pricing model will be based on DCP session completion  
   2. Drive sales  
      1. Convey to market that we are tech forward and leaning into AI-powered wellbeing  
   3. Drive client retention  
      1. Improve client satisfaction & retention  
      2. Improve client ROI  
2. Organizational  
   1. Build organizational muscle in launching AI-powered features  
3. End users  
   1. Drive user engagement with, and completion of, DCP programs  
   2. Drive wellbeing outcomes for users (e.g., DCP assessment results)  
   3. Drive user satisfaction (e.g., for the DCP programs)

# **Prototype**

## Workflow prototype

1. For notes about the prototype, including how to access it, see  
     [Appendix \> Notes about the prototype](#appendix-\>-notes-about-the-prototype-in-sim.ai-🔝) 

## Prompts

1. Prompts used in the flow   
   1. GDrive periodic snapshots  
      1. [https://drive.google.com/drive/folders/1a\_swssQn7SFV\_JlYKisBlThEsjQXJ8EG?usp=sharing](https://drive.google.com/drive/folders/1a_swssQn7SFV_JlYKisBlThEsjQXJ8EG?usp=sharing)  
   2. Github live repo  
      1. [https://github.com/Mobile-Health-Consumer/mhc-ai-agents/tree/main/dcp](https://github.com/Mobile-Health-Consumer/mhc-ai-agents/tree/main/dcp)   
2. Notes:  
   1. For notes about the prototype, see  
        [Appendix \> Notes about the prototype](#appendix-\>-notes-about-the-prototype-in-sim.ai-🔝) 

# **Tech Spec & Design Spec**

1. Design spec  
   1. [https://www.figma.com/design/B8embvpTCPLzycQyexI4qK/Health-Advisor-AI?node-id=619-4728\&p=f\&t=8c01s6B9M66FdToy-0](https://www.figma.com/design/B8embvpTCPLzycQyexI4qK/Health-Advisor-AI?node-id=619-4728&p=f&t=8c01s6B9M66FdToy-0)   
2. Tech spec  
   1. [https://docs.google.com/document/d/1h4rNuhyb-9xK\_ZpruUxY6fhUMgvDGr6NfrhQo7GVzOw/edit?tab=t.0](https://docs.google.com/document/d/1h4rNuhyb-9xK_ZpruUxY6fhUMgvDGr6NfrhQo7GVzOw/edit?tab=t.0) 

# **Functional requirements (all v1, unless otherwise noted)**

## End user experience

### *Chatbot UI*

1. UI aspects \- as reflected in Figma  
   1. While working on DCP, user can launch chatbot  
   2. Chatbot offers a greeting \- specific to the DCP topic

| Default "Hi\! I'm here to support you with \[topic, e.g.,”insomnia care”, “diabetes prevention”\]. What's on your mind today?" Configurable  On client / topic basis |
| :---- |

   2. Chat UI itself:  
      1. Visual indicators as to who has texted (user vs. A.I.)  
      2. Animated ‘person is typing’ indicator until the bubble appears with all its content all at once (instead of ‘streaming the response)  
      3. User can send a message to the chat  
      4. Chatbot responds  
   3. Ability for user to easily indicate whether or not they find the DCP chatbot response helpful (thumbs up/down or similar)  
   4. User has a way to close the chat and return to where they were in the DCP program.  
3. Character limit in user input field

| Default  2000 characters Configurable max |
| :---- |

### *‘SMS-style’ responses*    

1. Goal:  
   1. The chatbot will respond with in an SMS-like fashion (vs. like blog article):  
2. UX:  
   1. Animated ‘person is typing’ indicator until the bubble appears with all its content all at once (instead of ‘streaming the response character-by-character’).  
   2. Short messages, minimal formatting (this output style is already specified in the prompt; ie: use plain “• ” or “1. ” at line starts, no indent, no markdown list syntax)  
   3. Chatbot response will often appear one or more *separate short messages in sequence* vs. in a large blob (ie: LLM response is broken out into smaller blobs)  
3. Logic for short sequential responses (ie breaking up larger LLM responses into set of smaller sequential bubbles)  
   1. Consider each ‘bit’ \= one sentence or one bullet line  
   2. If adding the next ‘bit’ would push the bubble over over 300 characters, flush the bubble first  
   3. Also: flush a bubble after  
      1. a bit just ended with “?” or “\!” or “...” OR   
      2. a bit just ‘ended’ with an emoji   
   4. Trigger a flush only if the bubble currently holds meaningful payload characters—at least one letter, digit, or punctuation mark beyond mere whitespace or ‘standalone’ emoji.

### *A11y*

1. The new UI shall be compliant with WCAG 2.1 Level AA.

### *Disclaimers* {#disclaimers}

1. Disclaimer in chatbot UI  
   1. Verbiage on the chrome of the chatbot, below the user input field, states:  
      1. “AI guidance · May be inaccurate · Not medical advice · Privacy & Terms”  
          \[The only active link is "Privacy & Terms", which opens a detail page in a ‘modal sheet’\]  
      2. 

| Default: Link opens a certain detail page Will convey “This AI Health Advisor is not a doctor and may be wrong. Consult a licensed clinician for definitive advice.” Will contain document links to: Privacy policy Which will contain data use & data right details Terms of Use Visual ‘concepts’ Detail page that displays when user clicks on the link: [(Link to image)](https://drive.google.com/file/d/19FAAkDRKjNrAlFvr3S62alGqdUUqehBw/view?usp=sharing) Configurable: On client basis, the link can be configured to go to a different page  |
| :---- |

      1. After user closes the modal (detail page), he lands back wherever he was in the chatbot conversation, 

### *Rate limit quota*

1. **10/1/25 Eng/PM mtg notes:**  
   1. This will be accomplished via configuration  
      1. I.e.: based on the LLM response, which includes token data  
2. Rationale:  
   1. Sudden usage spikes can burn the monthly AI budget in hours.   
      1. Potential causes of usage spikes: bugs; malicious ‘denial of wallet’ attacker; unexpectedly high engagement.  
   2. Allow finance to forecast max monthly exposure because burn rate is bounded.  
   3. Allow different quotas to account for:  
      1. QA testing (e.g., make quota very high)  
      2. Higher revenue clients may have higher quotas (e.g., via buyups)  
      3. Raising quota when token prices drop \- or when we switch to a cheaper model  
      4. Raising quota when member count increases at a client  
      5. Raising quota when we release additional a.i. features that will generally increase token usage  
      6. Adjusting quota based on MH token spend after this hits production  
         1. E.g., we might end up not caring about extremely high usage ‘users’ \- if number of such users is relatively small. In which case we might dramatically increase the user-level quota.

   

| Token quotas (configurable) Quota time period: Calendar month Types of quotas Input tokens quota Output tokens quota Configurable by client: Token quotas \- in aggregate for the client Token quotas \- for each user at that client  At a given client, each user will have same quota I.e.: even if the quota ‘in the aggregate for the client’ has not been reached, a user can separately hit the quota and be subject to limitations on usage of a.i. features while their colleagues, who have not hit the quota, continue to utilize the a.i. features. User-level override of quota/limit In Admin, an end user can be designated as ‘exempt’ from all quotas/limits Rationale:  For MH to troubleshoot issues when quota is hit  |
| :---- |

   

4. UX  
   1. Approaching ‘user’ quota limit:  
      1. Chatbot says: 

         1. **"Quick heads up \- we can chat for a few more messages, then I'll need to wrap up for today. Feel free to keep working through your program, and I'll be here tomorrow\!"**

      2. Note:  
         1. {remainingTurns} is estimated based on remaining token count.  
            1. We’ll show the message when there are around **5 turns remaining**  
            2. Calculation:  
               1. Assumptions:  
                  1. Avg user input ≈ 1000 characters/turn  
                  2. ≈ 4 characters ≈ 1 token (English text)  
                  3. ⇒ tokensPerTurn ≈ 250  
               2. remainingTurns \= floor( remainingTokens / 250 )  
               3. Show “approaching limit” when   
                  **remainingTokens ≤ 1250 (≈ 5 turns)**  
   2. ‘User’ quota limit reached:  
      1. Chatbot says:

         1. **“You’ve reached today’s chat limit. Great work investing in your health\! New chats open again tomorrow. Until then, keep progressing in your program — every step counts.”**

   3. ‘Client’ quota limit reached:  
      1. If user sends a query, chatbot says:

         1. **"I've reached my daily limit. I'll be back tomorrow. Keep going \- you've got this\!"**

5. Alerts:  
   1. For ‘client’ level caps  
      1. Send alerts to an MH email list at 70%, 90%, 100% of any cap.  
   2. For ‘user’ level caps  
      1. Send a daily summary alert to an MH email list (removing PII)  
         1. List partner \> client \> number users who hit the daily cap

            

### *LLM service interruptions*

1. Background:  
   1. The chatbot depends on an external LLM API. On rare occasions, this API may return elevated error rates, timeouts, or degraded latency.  
2. Trigger conditions:  
   1. Connection timeouts after \[x\] retries  
   2. \[*others tbd*\]  
3. System behavior:  
   1. Stop further retries after \[x\] retries  
   2. Surface user-facing interruption message  
      1. Chatbot says:  

         1. **“Heads up \- there’s a temporary connection hiccup. Thanks for your patience. Please retry later today. Until then, keep progressing in your program – every step counts”**

   3. Log so we can monitor these type of incidents

### *Updates to existing DCP pages*

1. Remove from the UI the existing chatbot-looking Coach.  
   1. ![][image1]  
   2. Rationale:  
      1. To avoid user confusion \- now that we have a real chatbot, we don’t need to keep around the previous ‘chatbot-looking’ thing

### *Feature on/off switch*

| On/off switch Configurable: Per ‘client’ basis whether the DCP chatbots are available For purposes of Client level On/Off switch, AI chatbots in DCP \- across DCP topics \- are considered a single ‘feature’ with a single opt in/out control. Note: At some point in the future, we might need to get more granular and let clients enable/disable chatbot on a topic-by-topic basis. E.g., clients might feel less comfortable with having chatbots on certain topics (Shoulder Pain vs. Depression) Emergency shut off Via configuration, need way to quickly turn off the DCP chatbots for ‘one or many’ clients Rationale: It’s possible that all of sudden there’s some major problem with the chatbot, where we prefer to take down the chatbot and fix it before re-releasing it. (See, e.g., the incident where a few lines changed in a system prompt may have led to Grok’s ‘MechaHitler’ debacle; [Source](https://decrypt.co/329365/bye-bye-mechahitler-elon-musk-xai-quietly-fixed-grok-deleting-line-code)) |
| :---- |

3. User level:  
   1. On a ‘user’ level, no separate chatbot hide/show control  
      1. I.e.: If someone wants to use the chatbot, they use it. If they don’t want to use the chatbot, they will just not use it.  
      2. There’s plenty of verbiage around the chatbot that says it’s a.i. \- so users will know what they’re getting; and they will use it or not, depending on how they feel about a.i., etc.

## Conversational intelligence 

### *Conversational Memory*

1. (v1) ‘Single session’ conversational memory  
   1. I.e.: From user POV, chatbot memory is cleared when user exits the chat.  
2. (v2+) Cross-session memory  
   1. I.e., Chatbot references conversational history across chat sessions (e.g., the conversation last week / last month).  
3. For more details on Memory, see below section   
     [Appendix \> Re: Conversational Memory](#appendix-\>-re:-conversational-memory-🔝) 

### *Retrieval Augmented Generation (“RAG”)*

1. (v1) Chatbot answers are informed by search of authoritative source documents.  
   1. For more details on RAG, see below section   
      [Appendix \> Re: RAG](#appendix-\>-re:-rag-🔝)  
2. (v1) To improve search quality, we will utilize ‘query rewriting’ aka query reformulation or query expansion’  
   1. For more details on query rewriting, see below section   
      [Appendix \> Re: RAG](#appendix-\>-re:-rag-🔝)

### *‘Safety-related topics’ handling*

1. (v1) For a certain set of ‘safety’-related topics \- e.g., self-harm, psychosis, etc. \- our system will reliably identify and handle in a pre-defined way.   
   1. Rationale:   
      1. Reliably identifying and responding appropriately to sensitive topics is a need specifically expressed by our prospects.   
      2. The failure of chatbots to reliably identify sensitive topics (esp. self harm) is a failure case often brought up in the press.  
   2. Note:  
      1. Based on my testing, reliably identifying sensitive topics requires a separate LLM call focused on this task (vs. bundling this into a mega prompt).  
2. For more details on ‘safety-related topic’ handling, see  
   “Prompt \> SafetyAgent” 

### *System prompt extraction protection*

1. (v1) We will make it hard for users to extract our main system prompt.   
   1. For more detail on protecting the system prompt, see  
      “Prompt \> RefusalAgent”  
2. (v2+) Chatbot will tell users that trying to get our system prompts is against the terms of service  
3. (v2+) We will pause user’s access to our chatbot for \[x\] period if they repeatedly seek to extract the system prompt

### *Other user data as context for the chatbot*

1. General rationale:  
   1. Set us apart from vanilla ChatGPT  
   2. Interactions in our system will have more value to the user   
      1. Chatbot responses will consider this data as context for its responses  
2. (v1)  
   1. The chatbot will utilize, and reference, \[some of\] the following user data:  
      1. Census data (e.g., male/female, age)  
         1. Rationale: basic demographic data (sex, age, menopause age, etc) has bearing on health recommendations  
      2. User’s degree of progress through DCP program(s)   
         1. In v1: this applies to MSK programs only  
3. (v2+) *\[Details tbd. Some rough notes below:\]*  
   1. The chatbot will utilize, and reference, \[some of\] the following user data:  
      1. User’s Assessment results (HRA, Wellbeing Assessment, Assessment in various DCPs)  
         1. Rationale: known health issues impact our health recommendations.  
      2. User’s tracker data  
      3. User data from partner (e.g., Alight)  
      4. User inputs to DCP programs (goals, motivators, journal entries, etc.)  
      5. \[*More to come*\]

### *Recommended related resources*

1. (v2+) User will ‘sometimes’ be presented with programs & resources related to their conversation  
   1. *\[Details tbd. Some rough notes below:\]*  
      1. MH programs/resources:   
         1. Other MH DCP programs; Healthy Habits; Rewards  
      2. Third party programs/resources:   
         1. Point solutions (Hinge Health; Omada; Nurse Hotline; 529 Savings Plan; Alight HSA/FSA; life insurance)  
         2. Possibly, based on ‘severity’ of issue, may refer to human point solution (if available) \- eg EAP line (human); Nurse hotline (human).  
         3. *\[E.g.: pregnancy question \-\> suggestion of dependent care savings; fsa; pregnancy DCP; 529; life insurance\]*  
      3. UX:  
         1. Possibly: user is occasionally asked something like, ‘Would you like me to suggest some resources you have access to’  
         2. Need to avoid: feeling like the Chatbot is a cheap advertising vehicle (similar to a jarring cheap VPN ad in the middle of a Youtube video), esp. given that our app already has plenty of places where resources are recommended.

# **Global & languages**

1. (v1) Users will see chatbot response in a language that matches their ‘Locale’  
   1. Translation will be based on the same data displayed in   
      *Admin \> Users \> User page \> ‘Locale’ field*   
      (not the ‘Uploaded Locale’ field)  
2. (v2+) Considerations:  
   1. Foreign health guidelines  
   2. Culturally adapted advice

      

# **Admin module requirements**

### *Copy config implications*

1. \[*Details to come;*   
   *will depend on how the technical solution is architected;*   
   *see also [Appendix \> Rapid workflow iteration without full Eng release](#appendix-\>-rapid-workflow-iteration-without-full-eng-release-🔝)*\]

### *Admin permissions*

1. \[*Details to come;*   
   *will depend on how the technical solution is architected;*  
   *will probably want permissions for:*   
   *\- setting usage quotas;*  
   *\- accessing / editing OpenAI API key;*  
   *\- auditing user chats*\]

### *UI Themes*

1. \[*Details to come*\]

# **SDK-related requirements & points of configurability**

| (v1) Depending on the host app & partner, we will need to be able to customize these aspects to improve consistency with host app approach to their A.I. powered features: What the chatbot is called (eg, “Assistant”, “Coach”, “Guide”, “Helper”, “Agent”, etc.) Label of button used to launch the chatbot Title of the chat page Verbiage of the chatbot’s intro greeting (“Hi, I’m \_\_”). N.B.: Re: Alight Alight has said that Allstate may require a client-specific name for their chatbot \- that might not match what name Alight has for the rest of their clients Alight has suggested that all the various MH chatbots may have a single name (“Wellbeing Agent”) Re: Disclaimers: Disclaimer verbiage & link on the chatbot UI See [Disclaimers](#disclaimers) section above. Look / feel of chatbot (e.g., via UI themes) (v1) UX needs to not conflict with host app chatbots  (Alight’s host app may have two \- one for navigation, one for contacting support) (v1) Alight needs us to redirect users to ‘Alight Assistant’ when users inquire about HR & Benefits related questions. See prototype |
| :---- |

# **Evals**

1. DCP AI Evals  
   1. [DCP AI \> evals (v0.2)](https://docs.google.com/spreadsheets/d/1sxzFXMlw0_C25DshVyTayvBP_2JWSMGXrRdZlOZr7r4/edit?gid=1362661507#gid=1362661507)  
2. Background:  
   1. Definition  
      1. For LLM-powered features, the test suite \- covering both functional and regression test cases \- is commonly called “evals” (short for evaluation metrics)  
      2. Evals help us assess whether the AI system is working, where it’s falling short, and what needs improvement.  
   2. When we run evals  
      1. We will maintain a reusable set of evals to measure chatbot quality leading up to two milestones:  
         1. v1 launch  
         2. Post-launch enhancements (v2+)  
            1. Evals serve as regression guards to ensure that changes (to the prompt, model, source docs, workflow or memory) do not degrade previously working functionality.  
   3. For an overview of Evals, see Book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
      1. Chapter 4, “Evaluate AI Systems”, (pp. 263 \- 346\)  
3. Evaluation criteria  
   1. Accuracy  
      1. Based on   
         1. typical user questions  
         2. black-and-white evals (LLM graded) (multiple choice, true/false, definitive answer)  
   2. Style capability  
   3. Instruction-following capability (e.g., staying within stated word count)  
   4. Cost  
   5. Latency  
      1. For more on latency, see the  Analytics section of the doc ([link](#analytics))  
4. Judging  
   1. For evals, we will use both   
      1. human evaluation, and  
      2. AI as judge (temperature \= 0\)  
   2. Unlike unit tests in traditional software, where correctness is binary, AI evals deal with ambiguity (because the system is inherently non-deterministic).  
5. Iterating on Evals:  
   1. Will add to evals set based on actual user usage in production (‘actual’ common questions can replace the pre-launch ‘placeholder’ common questions, etc)  
   2. As we iterate on the evaluation pipeline, we’ll need to do proper tracking of all variables that could change, eg:  
      1. Prompt  
      2. Configuration  
      3. Model  
         1. Note: Models have very different profiles w.r.t. accuracy / latency / cost.   
            1. For our purposes (ie: ai-powered production feature at scale), cost is a fairly important factor. At the same time, we want a certain level of quality of response, while not having too much latency.   
            2. Generally, higher cost & longer latency models will have higher accuracy.  
      4. Etc.  
6. Safety-topic evals  
   1. We will curate a dedicated suite for high-risk content (e.g., self-harm, psychosis):  
      1. Seed the suite with a small slice of public safety-bench prompts researchers use to probe LLM behaviour on these topics.  
      2. Track two primary metrics:  
         1. Refusal rate  
            1. Model must refuse disallowed requests.  
         2. Safe-completion rate  
            1. Model should provide crisis resources when the user expresses ideation

# **Other non-functional requirements**

## Analytics  {#analytics}

1. 10/1/25 Eng/Product mtg notes:  
   1. Per Eng: If solution is configured in a certain way, we will be able to get at the following data for reporting / analytics / QuickSight purposes  
2. We need a way to surface the data to do these analyses:  
   1. Engagement   
      1. Engagement  
         1. How many unique users are launching the chatbot  
            1. By DCP  
            2. MAU  
         2. Number of conversational turns in a session  
   2. Satisfaction  
      1. Determine by, time period & client,  
         1. Number of thumbs up / thumbs down on a chatbot response (see UI req’mt [above](#bookmark=id.t7xcju2wywok))  
   3. Costs data, by partner / client / time period / LLM model used:  
      1. Number of queries  
      2. Number of input tokens   
      3. Number of output tokens   
      4. (Costs \- if available)  
         1. Note: costs can be inferred from token counts & LLM model (which are both in the API response) & pricing data (available on web)  
   4. Outcomes  
      1. The relationship between chatbot usage and:  
         1. engagement / completion / satisfaction / outcomes for the DCP program;   
         2. engagement with the app overall   
         3. other indicates of health improvements (tracker data, HRA, pulse survey)  
3. Costs  
   1. Reported as P50/P90/P95 where applicable; and by partner & client:  
      1. $ / chatbot-engaged-user over period  
      2. $ / chat session  
      3. $ / turn  
      4. tokens / turn (input, output)  
      5. retrieval vs. generation spend split  
   2. Note: re: $  
      1. costs can be inferred from token counts & LLM model (which are both in the API response) & pricing data (available on web)  
4. Latency:  
   1. Background:  
      1. Definitions:  
         1. TTFT (Time To First Token):   
            1. t(model\_first\_token) – t(request\_received\_server)  
         2. TTFR (Time To First Rendered bubble):   
            1. t(first\_assistant\_bubble\_rendered\_client) – t(user\_submit)  
         3. TTLR (Time to Last Rendered bubble)  
            1. t(last\_assistant\_bubble\_rendered\_client) – t(user\_submit)  
         4. ETE (End-To-End “total latency”):   
            1. t(full\_workflow\_including\_add\_assistant\_response\_to\_memory) – t(user\_submit)  
         5. Step latency:   
            1. I.e.: Duration of each internal step  
               1. Add memory  
               2. RouterAgent  
               3. Condition block 1  
               4. QueryRewriteAgent  
               5. Condition block 2  
               6. Knowledge search block  
               7. DCPExpertAgent  
               8. Add memory  
   2. From end user POV, we care most about tracking  
      1. TTFR (Time To First Rendered bubble):   
      2. TTLR (Time to Last Rendered bubble)  
   3. We’ll want to track  
      1. P50/P90/P95/P99 over time  
         1. P50 \= 50% of requests are ≤ this latency (median)  
         2. P95 \= 95% are ≤ this latency; 5% slower  
         3. etc.

## Production Monitoring & Quality Control (Error Analysis)

1. Rationale:  
   1. If we are able to *quickly* review *production* AI outputs, we are able to iterate toward a higher quality solution  
   2. If we *lack* the ability to *quickly* review production AI outputs, we will be flying blind and will not be able to iterate toward a high quality solution  
   3. We cannot rely on ‘user’ thumbs up/down as the primary signal  
      1. User feedback widgets help but are biased and sparse; users tolerate friction or just abandon.  
         **Requirement:** the org must take responsibility for **internal review of production data** rather than waiting for explicit user-reported errors.  
   4. For debugging, we must be able to trace each query’s transformation step-by-step (in order) through our system  
      1. If a an output is low quality, we’ll want to be able to pinpoint the exact step it went wrong (e.g., system incorrectly processed some step; retrieved context was irrelevant; or model generated wrong response)  
2. Requirements  
   1. **Must have**  
      1. **Data/observability plumbing:** store and retrieve end-to-end traces, sampled sets, and metadata (DCP topic, timestamp).  
         1. We need **access to real production conversations/traces** with the full chain so we can diagnose failures that never show up in curated evals, including, e.g.,  
            1. User message   
            2. Every back and forth between the user & bot in a particular conversational thread  
            3. For each LLM call (e.g., router agent, main DCP agent):  
               1. inputs to LLM   
                  1. including model; temperature; reasoning effort; verbosity  
               2. outputs from LLM   
            4. RAG steps  
               1. Query rewriting inputs / outputs  
               2. Knowledge base search inputs / outputs  
            5. User-visible output  
         2. We need a repeatable ‘error analysis workflow’ (human-in-the-loop)  
            1. **Process:**   
               1. Randomly sample \~100 \[*recent*\] traces and review them.  
            2. **How to review:**   
               1. Read only until you hit the first clear problem, then **log a one-sentence note** describing what’s wrong.  
            3. **Key heuristic:**   
               1. Record the **most upstream error** (e.g., inadvertently blank input sent to LLM at query rewriting step) because upstream issues causally create downstream failures; this keeps analysis *tractable* and yields fast wins.  
      2. **Annotation tooling:** either provide in Admin or ship a small internal app for rapid review \+ note capture.  
         1. We need an annotation experience that’s fast for humans  
         2. **Core UI needs:**  
            1. **Fast navigation** through traces.  
            2. Simple note entry (human-readable, low-friction)  
            3. Sensible **filters**   
               1. **Annotated vs not annotated**  
               2. **Router path**  
                  1. Happy path conversations   
                  2. ‘Special handling’ situations   
                     1. route to SafetyAgent;   
                     2. route to RefusalAgent  
               3. Whether *user* had marked it thumbs up vs. thumbs down  
               4. By DCP topic  
            4. MH reviewer can click to mark it as a ‘good’ or ‘bad’ answer  
         3. Basic summary stats at the top (counts \- total; annotated/not; MH reviewer marked good/bad)  
      3. Needs to be very fast / easy to go through and comment on 100 traces  
         1. Per Hamel Husain: to manage and improve quality of AI-powered features, “it’s really important to remove all friction doing” review/annotation of traces.   
   2. **Nice to have**  
      1. **Taxonomy \+ categorization pipeline:** a way to convert free-text notes into buckets and maintain the category set.   
         1. Ok if in v1 this is handled outside the review/annotation app  
         2. The process would involve the following:  
            1. After collecting notes, **bucket them into categories**   
               1. Can be assisted by an LLM  
               2. Can be done outside the main review tool  
            2. Then: **count frequency by category** (SQL-style counting)  
            3. **Output:** a prioritized list of the biggest issue types (e.g., transfer/handoff failures, RAG  errors; placeholders not populated with values when calling LLM; incorrect info, etc.).  
            4. MH iterates on our product to address the biggest issue types  
            5. Updating eval suites:  
               1. Once top failure categories are known, create **targeted eval suites** for those real, observed failure modes (e.g., tour rescheduling edge cases; transfer-to-human flows).  
               2. Because traces are tagged, you can pull data to build/validate those evals.  
      2. **Metrics & prioritization:** automated counting dashboards by issue category, with drill-down to example traces.  
         1. Ok if in v1 this is handled outside the review/annotation app  
   3. (v2+) Possible improvements in v2+  
      1. Conversations and metadata are dumped into a vector DB   
      2. Support semantic search  
      3. PII detection \+ redaction  
3. For more details, see the following video by LLM Eval expert Hamel Husain   
   1. 14min25s – 25min25sec  
      1. [https://youtu.be/PgzOBNse2EA?si=WBkjhZlp2IFgtket\&t=865](https://youtu.be/PgzOBNse2EA?si=WBkjhZlp2IFgtket&t=865)

## Rapid workflow iteration without full Eng release

1. Ability to fairly frequently experiment with, and push to production, updates to the A.I. workflow without an Eng release \- via Configuration.  
2. For more on the rationale, and potential solutions, see   
     [Appendix \> Rapid workflow iteration without full Eng release](#appendix-\>-rapid-workflow-iteration-without-full-eng-release-🔝)

## Maintainability & Release Management

1. **(nice to have in v1)** Version control of workflow details used in production  
   1. Note:  
      1. Given that subtle changes to the workflow can have significant impacts on quality, latency, and cost, it’s valuable to be able to configure the feature in such a way that it’s easy to determine any changes \- even if subtle \- that have been made to the LLM workflow details, including  
         1. System prompts  
         2. Temperature  
         3. Model used   
         4. Memory available at a given step in the workflow  
         5. Knowledge base  
         6. Search parameters  
   2. Ideally: be able to roll back to earlier version

## End user performance

1. \[*More to come; re: End user response time (total latency);*  
   *we should understand / scrutinize any deltas in performance between chatbot performance in Sim.ai vs. in MH prod*\]

## Backward compatibility

1. \[*More to come*\]

## Playbooks for various stakeholders

1. QA playbook  
   1. \[*more to come; including ‘red teaming’*\]  
2. Operational playbook  
   1. \[*More to come; Deployment checklist; rollback plan; incident response plan for foreseeable incidents*\]  
3. Support playbook  
   1. \[*More to come; FAQ; collecting user feedback*\]  
4. Marketing playbook  
   1. \[*More to come; FAQ; Slide; etc*\]  
5. AM playbook  
   1. \[*More to come; FAQ; Slide; etc*\]  
6. Tech Leads playbook  
   1. \[*More to come; FAQ; Slide; etc*\]  
7. Partner playbook  
   1. \[*More to come; FAQ; Slide; etc*\]

## App store

1. \[*more to come; considerations for Apple & Google stores; note that approvals can take longer; for simplicity, we should consider not releasing on our standalone apps till after the release of the SDK build that’s time sensitive for client go live\]*

## Risk, Security & Compliance

### *Security & Privacy*

1. Goal:  
   1. Implement technical controls that keep data safe (e.g., encryption, access control, privacy engineering)  
2. The solution shall be architected such that one user’s data cannot be leaked by the LLM to another user  
3. *\[More to come*\]  
4. Security review  
   1. Security implications (including “[10-SecurityRequirementsChecklist](https://docs.google.com/document/d/1JUsJl_98OI8p9rXvLlAThqHey0wx_qOp3h2JPtYR3B0/edit)” and “[10-SDLC-SecureCoding](https://docs.google.com/document/d/1JUsJl_98OI8p9rXvLlAThqHey0wx_qOp3h2JPtYR3B0/edit)”) have been considered for this feature and it is determined that   
      \[*more to come*\]

### *Reducing risk of malicious attacks*

1. Some malicious attack types:  
   1. Prompt extraction  
   2. Jailbreaking and prompt injection   
      1. I.e., to get the model to do bad things  
      2. E.g., to get the model to invoke malicious code to compromise our systems or reveal sensitive data  
   3. Sensitive information extraction  
      1. Getting the model to reveal the information / data used in its context  
2. As necessary, we’ll utilize some of the following methods to reduce the risk of malicious attacks  
   1. Technical architecture  
   2. Defensive prompt engineering  
   3. (Potentially) ‘red teaming’ efforts to try to maliciously attack our application  
   4. (Potentially) use of automated security probing tools for LLM-powered products  
      1. (For tools, see “Defenses Against Prompt Attacks” (p402) in book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3)))

### *Compliance & Legal*

1. Goal:  
   1. Regulatory alignment, if/as necessary  
      1. BAA (if sending PII to OpenAI)  
      2. E\&O insurance  
      3. Updated TOS / Privacy Policy  
      4. Record-keeping  
      5. Contracts  
2. Legal docs:  
   1. The following legal docs shall be updated  
      1. \[*TBD whether privacy policy, EULA, TOS, etc., need to be updated\]*  
3. Insurance:  
   1. The following E\&O policies will be reviewed and updated as necessary  
      1. *\[TBD whether existing E\&O policies should be updated to include GenAI coverage\]*  
         

# **Appendix \> How LLMs work   [🔝](#bookmark=id.4n3b7qsxyanl)** {#appendix->-how-llms-work-🔝}

**Non-technical explainers**

1. “Large language models, explained with a minimum of math and jargon” (Timothy B. Lee) (7/27/23)  
   1. [https://www.understandingai.org/p/large-language-models-explained-with](https://www.understandingai.org/p/large-language-models-explained-with)   
2. “Reinforcement learning, explained with a minimum of math and jargon” (Timothy B. Lee) (6/23/25)  
   1. [https://www.understandingai.org/p/reinforcement-learning-explained](https://www.understandingai.org/p/reinforcement-learning-explained) 

**Technical explainer**

1. Book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
   1. Chapter 2, “Understanding Foundation Models”, (pp. 97 \- 192\)

# **Appendix \> DCP topics list and sequence    [🔝](#bookmark=id.ronwea7lphjf)** {#appendix->-dcp-topics-list-and-sequence-🔝}

1. Sequencing  
   1. Start with the topics bolded in the table:

| Category | Topic |
| :---- | :---- |
| Behavioral Health | Depression Anxiety **Insomnia**(WIP) Alcohol Use (WIP) Substance Misuse |
| Diabetes | **Diabetes Prevention**  ‘Continuing’ Diabetes Prevention  Diabetes Management |
| Family Forming | Pregnancy |
| Musculoskeletal | **Lower back pain** Neck pain Knee pain Hip pain Shoulder pain (WIP) Ankle Pain |
| Heart Health | **Blood Pressure** (WIP) Hyperlipidemia |
| Weight Health | **Weight Loss** GLP-1 Gatekeeper (WIP) GLP-1 Support |

      1. WIP \= Work in progress  
   2. In v1, strive to release chatbot for all DCP topics   
      1. However, some topics may prove trickier, in which case we would sequence the chatbot to come later to certain DCPs.

# **Appendix \> ‘Future’ features   [🔝](#bookmark=id.b8zy19ug81ka)** {#appendix->-‘future’-features-🔝}

1. UX  
   1. ‘Proactive’ chatbot that ‘reaches out’ to elicit a chat session  
   2. Voice chat  
   3. Improve ‘discoverability’ of the chatbot(s)   
   4. Additional ‘SMS-like interactions’  
      1. Chatbot adds emojis to user’s message  
   5. Further rationalize the multi chatbots, relative to user mental model / expectations  
      1. Multiple MH chabots   
      2. In SDK context: MH chatbots \+ Host app chatbot(s)  
2. Conversational Intelligence (to the extent not included in v1)  
   1. ‘Cross-topic’ DCP chatbot   
   2. Long term memory  
   3. Additional User data aspects  
   4. Program recommendations

# **Appendix \> Notes about the prototype in Sim.ai     [🔝](#bookmark=id.g533ze1b0dlp)** {#appendix->-notes-about-the-prototype-in-sim.ai-🔝}

## Link to prototype

1. Latest working prototype \+ instructions on how to access it  
   1. See here ([link](https://docs.google.com/document/d/13qwRva7usWCqmjIQS0u2qpPwP_-xpuka4B5QYw09WdI/edit?tab=t.0#bookmark=id.1g5qpi1z3q27))  
2. For more information about Sim.ai, see  
   [Appendix \> Sim.ai and similar A.I. prototyping tools](#appendix-\>-sim.ai-and-similar-a.i.-prototyping-tools-🔝)

## Workflow diagram for the prototype

![][image2]

## **Component Summary**

### **Partner Filter**

| Component | Purpose |
| :---- | :---- |
| PARTNER\_CHECK | Checks if partner\_id \= "alight" |
| ALIGHT\_FILTER\_AGENT | Detects if user is asking about Alight-specific topics (benefits, 401k, PTO, etc.) |
| ALIGHT\_FILTER\_SWITCH | Routes based on filter result |
| ALR\_A | Politely redirects user to Alight Assistant |

### **Routing Layer**

| Component | Purpose |
| :---- | :---- |
| ROUTER\_AGENT | Classifies intent: SafetyAgent, RefusalAgent, or QueryRewriteAgent |
| ROUTER\_SWITCH | Routes to appropriate path |

### **Safety & Refusal**

| Component | Purpose |
| :---- | :---- |
| S\_A (Safety Agent) | Handles crisis situations (self-harm, eating disorders, substance use, psychosis) |
| R\_A (Refusal Agent) | Handles jailbreak attempts and disallowed content requests |

### **Coaching Path**

| Component | Purpose |
| :---- | :---- |
| QUERY\_REWRITE | Transforms user message into standalone search query |
| QUERY\_CHECK | Checks if query is needed or if it's a social/acknowledgment message |
| TOPIC\_TO\_KB\_SWITCH | Routes to topic-specific knowledge base |

### **Knowledge Bases**

| Category | Topics |
| :---- | :---- |
| General | insomnia, diabetes prevention, healthy blood pressure, weight loss, diabetes management, managing depression, managing anxiety, continuing diabetes prevention, alcohol use |
| MSK | lower back care, neck care, hip care, knee care, shoulder care |
| Pregnancy | pregnancy |

### **Coach Agents**

| Component | Handles Topics |
| :---- | :---- |
| DCP\_COACH | General topics |
| DCP\_COACH\_M | MSK topics |
| DCP\_COACH\_P | Pregnancy |

### **Memory**

| Component | Purpose |
| :---- | :---- |
| MEMORY\_1 | Stores user message at conversation start |
| MEMORY\_2 | Stores assistant response after processing |

## 

## Aspects I experimented with, in building the prototype 

1. Some of the aspects I experimented with, that had varying impacts on quality & latency & cost  
   1. Prompting (eg, where document search results are placed in the prompt)   
      1. Based on review of system prompts of successful chatbots; as well as various prompting guides (e.g., Anthropic’s [(link)](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview), OpenAI GPT 4.1 prompting guide ([link](https://cookbook.openai.com/examples/gpt4-1_prompting_guide)), OpenAI GPT 5 prompting guide, etc.)  
         1. Notes:   
            1. Prompting best practices will vary by LLM model.   
               1. See, e.g., p350 of “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3)) (“Most models, including GPT-4, empirically perform better when the task description is at the beginning of the prompt. However, some models, including Llama 3, seem to perform better when the task description is at the end of the prompt.”)  
            2. There are ongoing efforts to evaluate LLM prompt tactics by researchers (eg, Ethan Mollick research [(link)](https://gail.wharton.upenn.edu/research-and-insights/tech-report-prompt-engineering-is-complicated-and-contingent/); eg Sander Schulhoff research [(link)](https://learnprompting.org/blog/the_prompt_report)).  
            3. People are routinely discovering & reporting odd ways that subtle changes in prompts can result in unexpected impacts on the quality of outputs (eg, position of a particular instruction within a prompt; sequence of ‘hard to easy’ constraints within a prompt, ([source](https://arxiv.org/html/2502.17204v2)))  
            4. In my own experience, adding an seemingly helpful/innocuous phrase/change to a previously working prompt can surprisingly cause it to all of a sudden ‘stop working’ in a major way.  
   2. Using a smaller number of larger prompts (eg, bundling safety topic handling into the main prompt)  
   3. Prompt decomposition \- using a larger number of smaller prompts (eg, separating out the safety topic handling)  
      1. “While models are getting better at understanding complex instructions, they are still better with simpler ones. Prompt decomposition not only enhances performance but also offers several additional benefits \[including\]:   
         1. “Monitoring: You can monitor not just the final output but also all intermediate outputs.   
         2. “Debugging You can isolate the step that is having trouble and fix it independently without changing the model’s behavior at the other steps.”  
            (See p371 of book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3)))  
      2. Main tradeoff is latency \- and, sometimes, cost.  
   4. Various GPT models at various steps in flow  
      1. I focused on lower latency models \- vs. the longer latency / higher token ‘reasoning’ models.  
      2. Note: In the future, for other use cases, we will likely want to experiment with other LLM models  
         1. E.g., an OpenAI ‘reasoning’ model (more accurate, but higher latency)   
         2. E.g., in the future potentially using a model fine tuned for healthcare use cases (e.g., Google’s [MedLM](https://cloud.google.com/blog/topics/healthcare-life-sciences/introducing-medlm-for-the-healthcare-industry)) or tracker data-based fitness coaching use cases (e.g., Google’s “[Personal Health Large Language Model (PH-LLM)](https://www.nature.com/articles/s41591-025-03888-0)”, not yet released for developer use)  
         3. E.g., an open-weight LLM on AWS, self hosted or managed via Amazon Bedrock (e.g., [gpt-oss](https://aws.amazon.com/blogs/aws/openai-open-weight-models-now-available-on-aws/)).  
   5. Temperature settings at various steps in flow  
      1. For background on Temperature settings,   
         see Book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
         1. pp. 159-162  
   6. RAG vs. dumping source docs in context window vs. merely ‘referencing by name’ source material  
      1. Considerations: accuracy; token costs; latency  
   7. Smart router vs. simplified router  
   8. Whether to include conversational memory at a particular step in the flow  
   9. Vibes-based as well as evals-based assessment of quality based on modifying aspects of the flow

## What the prototype includes (as of 1/23/26)

The working prototype includes

1. Single session memory  
2. RAG with query rewriting  
3. Routing for safety-related messages (e.g., self harm) & system prompt extraction attempts  
4. Use of GPT 4.1-mini  
   1. Based on my testing, GPT 4.1-mini has quality & latency comparable to GPT 4o, but is 1/5th the cost.   
      1. For a more detailed discussion on costs, see  
         [Appendix \> LLM cost estimation](#appendix-\>-llm-cost-estimation-🔝)  
   2. See comparison of GPT 4.1-mini against other GPT models here:  
      1. OpenAI blog post, “Introducing GPT-4.1 in the API”, 4/14/25, ([link](https://openai.com/index/gpt-4-1/))  
   3. GPT 4.1-nano is cheaper, but based on my quick testing, was subpar in quality  
5. Accommodating other DCP topics beyond Insomnia (Lower back pain; Diabetes Prevention; etc.) via  
   1. adding variables to:   
      1. System prompt (e.g., swap Insomnia for ‘Back Pain’)  
      2. Knowledge base referenced (e.g., swap ‘Insomnia Knowledge Base for MSK Knowledge Base)  
   2. other adjustments to system prompt  
6. Incorporating certain user data   
   1. age; sex  
7. Additional aspects  
   1. Prompting the chatbot to emphasize it shall not quote \- or cite \- the knowledge base search results  
   2. Expanding DCP bot across several topics  
   3. Getting bot to more often respond with 0-1 questions instead of multiple questions at once  
   4. Router Agent \> More refined approach to detecting & handling ‘crisis situations’ vs. non crisis situations  
   5. ‘Retrieval gate’ \- that determines whether RAG is necessary in a given conversational turn.   
8. Add Pregnancy DCP topic  
9. Clean separation between system prompt vs. user prompt  
   1. System prompt should contain the static instructions (role, objectives, style examples, composition rules, output format) while the user prompt should contain the dynamic data (the actual values for this specific post).   
   2. Among other benefits, this separation takes advantage of LLM API caching, where for some period they won’t re-charge us across sessions for an identical system prompt. (For more details on prompt caching, which substantially saves money & latency, see [below](#bookmark=id.4akyx3ypvfc6))

10. Based on error analysis of LLM outputs, added  
    1. MSK variant of prompts  
    2. Pregnancy variant of prompts  
11. Locale / foreign language handling ([see bookmark](#bookmark=id.9hfe1bqzvdni))  
12. For Alight:   
    1. For certain topics (eg HR, 401(k), benefits), asking user to use Alight’s host app copilot (name and scope of their chatbot \- pending confirmation)

## What aspects are not yet in the prototype (as of 1/23/26)

1. Some aspects that I am planning to further prototype (UX, prompt, workflow logic)   
   1. v1 aspects:  
      1. Alternative approaches to source documents  
         1. E.g.: transforming documents into question–answer pairs. (Rewriting / re-expressing documents as Q\&A pairs, often through use of LLMs, is a well-established RAG optimization technique, that is used to address issues like poor retrieval relevance & hallucination.)  
      2. Safety-related topic handling  
         1. Iterating based on Safety Evals (esp. for Behavioral Health discussions)  
         2. Reviewing & confirming the deterministic outputs for each safety-related topic  
      3. Providing prompt\_cache\_key parameter to reduce costs re: prompt caching (see [above](#bookmark=id.4akyx3ypvfc6))

   2. Possible v1 aspects  
      1. Prompt repetition to improve quality of outputs in non-reasoning LLM ([see paper](https://arxiv.org/html/2512.14982v1))  
      2. Prompting the chatbot to naturally ‘wrap up’ the conversation sooner  
      3. Improve the Query Rewriting step  
         1. E.g.: add in examples beyond insomnia  
      4. Refining the handling when user asks a wellbeing question outside scope of the particular DCP (e.g., while in Insomnia program, user asks about Weight Management)  
      5. Adding ‘few shot’ examples to DCP Expert Agent prompt (good examples re: style & substance)  
      6. Reinforce safety-related topic handling & system prompt protection in main DCP agent prompt (including don’t reveal source docs or knowledge base source doc chunks)

      7. Long term memory  
      8. Generating responses in a formal voice \- and then post-processing for informality   
         1. Rationale: may yield more accurate outputs than prompting for informal style directly. I.e.: Prompting the model to respond in a more formal tone could bias it (exert a directional pull) toward regions of the model’s latent space associated with factual accuracy and source fidelity.   
            1. N.B. LLMs don’t really ‘understand things’ in the way people do. Cf.: “appending, "Interesting fact: cats sleep most of their lives," to any math problem leads to more than doubling the chances of a model getting the answer wrong” ([source](https://arxiv.org/abs/2503.01781))  
      9. Making a single chatbot knowledgeable about all DCP topics by having workflow step that dynamically routes to appropriate knowledge base  
      10. Using a faster / cheaper model for the router  
      11. Consider whether to in all cases have prompts & responses be in English, then translate to other language. (See, e.g., “Given the dominance of English in the internet data, it’s not surprising that general-purpose models work much better for English than other languages, according to multiple studies,”   
          (See pp. 104-107 of book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3)))  
          1. However, the additional latency will need to be evaluated 	

   3. v2+ aspects  
      1. Separate KB search for DCP content vs. other sources (ie: hierarchy of search results)  
      2. Proactive, AI-driven nudges.  
      3. Deeper integration with employer-specific content, resources, and personalized incentives.  
         1. Recommending resources related to the conversation  
      4. Introduction of voice-enabled interactions for a more seamless and natural user experience.  
      5. Utilizing more user data (e.g., assessment results, tracker data, knowledge of DCP progress, etc.)  
      6. ‘Action Items’ functionality \- ie: based on conversation, populate a checklist of action items  
      7. Cross-DCP topic chatbot  
         1. To the extent this entails LLM-powered user intent classification routing behind the scenes (e.g., to different system prompts or different RAG source materials), the intent classifier would ask for clarification in response to ambiguous user queries.

         

# **Appendix \> LLM cost estimation   [🔝](#bookmark=id.pekvha5q8woi)** {#appendix->-llm-cost-estimation-🔝}

1. OpenAI API cost estimator for DCP a.i. assistant feature  
   1. ([Link to spreadsheet](https://docs.google.com/spreadsheets/d/18USgsIxmDixa6IwoCqBQPhMEopSLzkCKJeQRzxmcXSU/edit?gid=1451744588#gid=1451744588))  
2. OpenAI API pricing ([link](https://openai.com/api/pricing/)) for GPT-4.1 mini (as of 10/2/25) ([snapshot](https://drive.google.com/file/d/1VJFr_6YheA4KoaX6TNeefOKNKnDRvwY-/view?usp=sharing))  
   1. Input:  
      1. $0.40 / 1M tokens  
   2. Cached input  
      1. $0.10 / 1M tokens  
      2. Note:  
         1. OpenAI primer on structuring prompts to take advantage of prompt caching (substantially reduced cost \+ reduced latency) ([link](https://platform.openai.com/docs/guides/prompt-caching))  
            1. “Caching is enabled automatically for prompts that are 1024 tokens or longer.”  
            2. “If you provide the prompt\_cache\_key parameter, it is combined with the prefix hash, allowing you to influence routing and improve cache hit rates. This is especially beneficial when many requests share long, common prefixes.”  
               1. prompt\_cache\_key  
                  (string)  
                  (Optional)  
                  “Used by OpenAI to cache responses for similar requests to optimize your cache hit rates. Replaces the user field.”  
            3. “In-memory prompt cache retention is available for all models that support Prompt Caching.  
               When using the in-memory policy, cached prefixes generally remain active for 5 to 10 minutes of inactivity, up to a maximum of one hour. In-memory cached prefixes are only held within volatile GPU memory. \[...\]  
            4. Extended prompt cache retention \[up to 24 hrs\] is available for the \[certain\] models”  
               1. prompt\_cache\_retention  
                  (string)  
                  (Optional)  
                  “The retention policy for the prompt cache. Set to 24h to enable extended prompt caching, which keeps cached prefixes active for longer, up to a maximum of 24 hours.”  
            5. Note that prompt caching is scoped to the ‘Organization’ \- not to the specific API key  
   3. Output:  
      1. $1.60 / 1M tokens  
   4. Note:  
      1. OpenAI periodically drops prices, sometimes dramatically  
      2. With GPT-5 coming out sometime this summer, I expect price drops for GPT-4.1 mini  
3. Terminology  
   1. Each ‘conversational turn’ \= one back-and-forth exchange \= 2 total messages  
4. Assumptions:  
   1. 10min chat session \~ 20 turns (40 msgs)  
      1. each minute \~ 2 turns (4 messages)   
   2. 60min chat session \~ 120 turns (240 msgs)  
   3. Note:   
      1. Due to maintaining chat session memory, as the conversation gets longer the costs per turn increase.   
      2. Assuming linear-growth in costs per turn  
      3. More advanced ways of managing memory, including long term memory, is discussed [elsewhere in the doc here](#appendix-\>-re:-conversational-memory-🔝).  
5. 10min chat session (based on my quick check just now of a 10min convo, on 7/15/25)  
   1. Cost for first turn   
      1. $0.0030   
   2. Cost for 20th turn  
      1. $0.0043  
   3. Total costs for turns 1 through 20 *\[not including prompt caching discount \- which we can roughly consider a two-thirds discount\]*  
      1. $0.073  
6. 60min chat session (projecting out from my 10min test)  
   1. Cost for first turn  
      1. $0.0030  
   2. Cost for 120th turn  
      1. \~ $0.0114 (ChatGPT’s estimation)  
   3. Total costs for turns 1 through 120 *\[not including prompt caching discount \- which we can roughly consider a two-thirds discount\]*  
      1. $0.861  
7. Note:  
   1. I arrived at the costs by dividing by 2 the Sim.ai costs.   
      1. With our current Sim.ai plan, there’s a \~2x markup on LLM API usage costs.  
      2. At higher tier plans, the markup is lower. E.g., for plans where you purchase $5k minimum credits per month, the markup is \~10% instead of \~2x.

# **Appendix \> Re: Conversational Memory     [🔝](#bookmark=id.7qrb7ld8rh88)** {#appendix->-re:-conversational-memory-🔝}

1. Note:  
   1. For a helpful overview of Memory, see Book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
      1. ‘Memory’ section, p486-496  
   2. See also: Article, “Agentic AI: Implementing Long-Term Memory” ([towardsdatascience.com blog link](https://towardsdatascience.com/agentic-ai-implementing-long-term-memory/?__readwiseLocation=)) (6/24/25)   
2. **(P1) Single Session Memory**  
   1. Functional requirement:  
      1. Within a given conversational ‘session’, chatbot is aware of the history within that session  
      2. When session ends (user exits the chat), memory is cleared  
   2. Implementation approaches:  
      1. Suggested approach for v1:  
         1. Full / raw conversational history is kept during a given conversation session  
            1. Store the conversational turns chronologically  
            2. Include both User messages and Assistant messages  
            3. Store essential metadata  
               1. Time stamps  
               2. Message type (User vs. Assistant)  
            4. Clear history when session ends / user exits the chat  
         2. (Extension)  
            1. Store all conversations, even if in v1 we don’t end up operationally using the stored conversations in a new session. That way we have the historic conversations for when we do turn to cross-session memory.  
      2. Alternative approaches and/or extensions  
         1. Convo history that keeps track of a specific rolling window  
            1. i.e.:  
               1. Most recent \[5-10\] messages and/or sessions  
                  1. Pros: Fewer tokens; cheaper; faster  
                  2. Cons: Might miss context from longer convos  
               2. Most recent \[1k \- 4k\] tokens of chat history  
               3. Time-based (last X minutes / hours)  
         2. Storing / referencing ‘important’ facts  
            1. Keep key messages / facts about the user and her condition (and/or a summary) while discarding the casual chat  
            2. E.g.: symptoms discussed; techniques discussed or tried; user prefs (eg: prefers non medication approaches); emotional states mentioned (‘feeling anxious about sleep’)  
            3. E.g., ‘Reflection approach’ \- Reflect on the information that has just been generated. Determine if this new information should be inserted into the memory, should merge with the existing memory, or should replace some other information, especially if the other information is outdated and contradicts new information.   
               1. See “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
                  1.  ‘Memory’ chapter (p. 493\)  
         3. Topic based segmentation  
            1. Grouping related messages together (or summary of) and/or  
            2. Maintaining history of ‘recent’ topics  
         4. Dialog-pair windowing  
            1. Keeps track of last \[3-10\] ‘pairs’ of Q\&A dialogue turns as semantic ‘chunks’.   
         5. Hybrid  
            1. Keep the last \[5\] messages PLUS key messages / facts  
3. **(P1/P2) Cross-session memory**  
   1. Functional requirement:  
      1. Chatbot is aware of, and references, conversation history across chat sessions  
   2. Implementation:  
      1. Note:  
         1. For an overview of a range of current solutions to long-term memory, see  
            Article, “Agentic AI: Implementing Long-Term Memory” ([towardsdatascience.com blog link](https://towardsdatascience.com/agentic-ai-implementing-long-term-memory/?__readwiseLocation=)) (6/24/25)   
         2. As of 7/10/25, I’ve gotten started on some prototyping on this  
      2. Possibly use mem0.ai (open source [repo](https://t.co/9pwXWAPKTe)) or similar. I.e.:  
         1. Two-phase, LLM-powered memory pipeline to ensure only the most relevant facts are stored, keeping tokens low and latency fast.  
         2.  Extraction Phase  
            1. Ingests three context streams: latest exchange, rolling summary, and most recent messages  
            2. Uses an LLM to summarize conversations \+ extract key memories  
            3. A background module asynchronously refreshes the long-term memory, ensuring inference remains fast and uninterrupted.  
         3. Update Phase  
            1. Compares each candidate memory against top-s similar entries in the vector database  
            2. LLM applies one of four operations:  
               1. ADD new memories  
               2. UPDATE existing entries  
               3. DELETE contradictions  
               4. NOOP if no change is needed  
         4. ([Link to summary of mem0](https://x.com/taranjeetio/status/1920139644861378712?s=46)) ([Link to mem0 open source repo](https://t.co/9pwXWAPKTe))

# **Appendix \> Re: RAG     [🔝](#bookmark=id.7qrb7ld8rh88)** {#appendix->-re:-rag-🔝}

1. Note:  
   1. For a helpful overview of RAG, see Book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
      1. ‘RAG’ section, p414-446  
      2. ‘Query rewriting’ section, p439-440  
   2. Implementation approaches for the Query:  
      1. (Preferred) Query rewriting (aka query reformulation or query expansion) (more complex; potentially more accurate; could be more efficient on tokens)  
         1. Search based on user’s last utterance ‘in the context of the broader conversation’  
         2. E.g.: an intermediary agent that is instructed to construct the search query   
            1. via some instruction like:  
               1. Given a chat history and the latest user question  
                  (which might reference context in the chat history),  
                  formulate a standalone question

               which can be understood without the chat history.

               2. Do NOT answer the question,  
               3. Just reformulate it if needed and otherwise return it as is.  
            2. or via some instruction like:  
               1. Given the following conversation, rewrite the last user input to reflect what the user is actually asking  
      2. (Alternative) Last X conversational turns (simpler to implement, keeps token usage reasonable)  
         1. Include the last \[3-10\] raw conversational turns as search context  
            1. Include both user & assistant turns  
            2. (Extension)  
               1. Also include the user’s first message   
                  1. Because: often contains the core intent  
2. Re: ‘Contextual Retrieval’  
   1. Note that search results might be higher quality if each chunk in the vector DB knowledge base is augmented with   
      1. a summary of that chunk;   
      2. a summary of the relation of the chunk to the whole document; and/or  
      3. metadata like tags and keywords  
      4. See book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))  
         1. ‘Contextual retrieval’ section (p. 440\)   
   2. The prototype I created uses Sim.ai’s Knowledge Base, which (as of 7/1/25) does not yet support adding metadata to chunks.   
   3. For reference: during the process of starting to prototype the ‘HR chatbot’ use case (that use case since been abandoned), some HR docs were processed into a vector DB (Pinecone) in a way that included LLM-generated chunk summaries & LLM-powered boundary adjustments. (See [GDrive link to Jupyter notebook](https://drive.google.com/file/d/16Sdc-WcH7jKmZQFymhURBVO61_tB6wHb/view?usp=sharing))  
3. General RAG considerations:  
   1. Chunking  
      1. Small vs. large chunks  
      2. Sliding (preferred) vs. tumbling window  
   2. Embedding model  
      1. For the query  
      2. For the knowledge base  
   3. Vector DB  
      1. Which db  
      2. What metadata to store together with embeddings  
   4. Vector search  
      1. Choice of similarity measure (cosine similarity, etc.)  
      2. Whether query path includes searching metadata first  
   5. Heuristics / business rules applied to retrieval procedure  
      1. Time importance, re-ranking, etc.  
   6. Observing & evaluating results

   

# **Appendix \> Rapid workflow iteration without full Eng release     [🔝](#bookmark=id.yyhldtebk17l)** {#appendix->-rapid-workflow-iteration-without-full-eng-release-🔝}

### *Rationale*

1. Triggers to workflow iteration:  
   1. “Model drift”   
      1. Model providers sometimes update, without version bumps, weights, safety filters, and the system prompt in ways that alter output quality.   
      2. “\[C\]ommercial models lack transparency in model changes, versions, and roadmaps. Models are frequently updated, but not all changes are announced in advance or even announced at all. Your prompts might stop working as expected and you have no idea”  
         (See p. 312 of book “AI Engineering” (O’Reilly: 2025\) ([Kindle link](https://www.amazon.com/AI-Engineering-Building-Applications-Foundation/dp/1098166302/ref=sr_1_3?crid=39NGBSMEECALB&dib=eyJ2IjoiMSJ9.4IRYkmtBjeQQ20xqiYjJmsUN8eSeYjO3VvTyM6n9skJJrlSrhPlQbNSjWQU9l2qqCOMOse1ZMdhMmWJu1uOVRRnp-7rjflbi7lIpZZiQsSVWuuiruebfRQsTY_J9nvLWOfJaXtYewqFpnOU0l5CK3pC8Oj3L1ecNsWUbOTSAKFd0G23FqhbKAnxSxRjnBNkoNAnMpL7-QFnY_d4fObWcyt6XrdHb8G5kmeMID0Cv2Zc.9PFZGWPOHNAETlbCIFCQQVUSiCsNHUv3ga_uQE6yJzI&dib_tag=se&keywords=ai+engineering&qid=1749596910&sprefix=ai+engineering%2Caps%2C147&sr=8-3))).  
   2. Model availability or pricing updates  
      1. Better/ cheaper /faster /better-at-’instruction-following’ models that we may want to swap in  
   3. Results & observations from the field, that we need to remedy quickly for the sake of partner/client relations/ MH finances; etc.  
      1. E.g.: quality, latency, cost, etc.  
2. Responses to the above triggers:  
   1. Swap models for certain parts of the flow  
   2. Consolidate multiple prompts into single prompt (e.g., for latency considerations)  
   3. Decompose monolithic prompt into specialized sub-prompts (e.g., when reliability drops for specific intents)  
   4. Updating system prompts

### *Potential partial solution: Sim.ai json export → ingest by MH system*

1. Use Sim.ai – or similar – to create/iterate on workflows, and then export the workflow & details as a json \-\> MH system ingests  
2. Rationale:  
   1. Still get the benefit of being able to easily create/iterate on workflows.  
3. (v1)  
   1. ‘Manually translate’ Sim.ai workflow into our system  
4. (v2+)  
   1. Streamlined ways to ‘ingest’ Sim.ai json  
   2. Caveat:  
      1. There’ll still most likely need to be a translation step (e.g., in re: variables syntax) \- that could occur prior to, or after, ingest

### *Re: Updating aspects without copy config to clients*

1. Open question whether / when we should invest in allowing updates to the following without running a copy config to many clients or updating configs partner by partner:  
   1. Updating the Knowledge Base (e.g., for Insomnia, add PDF, remove PDF, update / delete/ modify chunks or chunk boundaries).  
   2. Updating the LLM model for a given part of the flow  
   3. Updating the logic for a workflow  
2. Note that, for the DCP chatbots, the certain aspects might be identical across clients.   
   1. E.g., the workflow for certain (but not all) DCP topics may be identical  
3. Considerations:  
   1. Copy config can be laborious.  
   2. Consider whether file upload into CF for system prompt should be part of the solution \- to the extent it streamlines the workflow for updates to the prompt.

# **Appendix \> Sim.ai and similar A.I. prototyping tools   [🔝](#bookmark=id.vg6kaq3graaa)** {#appendix->-sim.ai-and-similar-a.i.-prototyping-tools-🔝}

1. See here for a set of low-code apps for building A.I. powered workflows \- some of which also have a workflow creation canvas interface, and some of which are also open source:  
   1. [Low code a.i. agent builders](https://docs.google.com/document/d/1ic4h7VK2DYh0-NSHHaS-9_P-qYFCyzsPnfhk2lPxH2I/edit?tab=t.0#heading=h.xvxtkzf9e9fz)

2. Re: Sim.ai  
   1. For my prototyping purposes, [sim.ai](http://sim.ai) was at the sweet spot of  
      1. Easy for not-very-technical people to rapidly prototype agentic workflows [(see Anthropic primer on workflows)](https://www.anthropic.com/engineering/building-effective-agents); and at the same time  
      2. Not a black box \- ie: very transparent and configurable in almost all components of the workflow  
   2. Sim.ai offers an API integration, offers their solution as a hosted offering as well as open source (25k stars as of Jan 2026).  
   3. Sim.ai is SOC 2 Type II compliant, and HIPAA ready.   
   4. Sim.ai is mainly used by developers, but it’s also very easy for non-technical users to pick up and use.  
   5. Examples of things in Sim.ai that are very easy for a non-very-technical person to do, and quite valuable for prototyping / iterating:  
      1. Create and modify workflows involving multiple LLM calls  
         1. System prompts  
         2. Logic  
         3. Route workflow execution based on specific conditions or logic  
         4. Temperature  
         5. Use different LLM models for any part of the flow \- based on speed / accuracy / cost-related considerations which may vary within the flow (e.g., GPT 4o, GPT 4.1-mini, Gemini, etc.)   
      2. Conversational memory store  
      3. Knowledge base  
         1. Creation \- uploading to cloud; OCR; generate embeddings; chunking; reviewing / editing / deleting chunks and chunk boundaries  
         2. Search \- designate knowledge base(s) to search; number of results; convert user query to text embedding for searching  
      4. Console / Logs \- for each step in the flow:   
         1. duration   
         2. token counts  
         3. API cost   
         4. detailed inputs  
         5. detailed outputs  
         6. for debugging, view the detailed state of workflow at a given log entry  
      5. Chat with the Workflow via   
         1. Chat window right next to Sim workflow  
         2. A separate Sim URL accessible to anyone (password protected)  
         3. API  
      6. Sharing flows with colleagues to review/edit/fork

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFbCAIAAADdjxIUAABLYklEQVR4Xu19CXxURbpv7nPePK/XO3dmnNXrjM6MrELYEghhR8WVcR2VQXFBBQQRAgiCiAtuKCoiiiD7IiKLqICikvTenQ3CJksWEgiQpNN7n/2cet9X1el0OgsJJKHTOf9f5aS6Tp06depfX9VXewLREddIiHbQEV/QCY5z6ATHOXSC4xw6wZcYmqZFOwEkIhBZIgqBm4qsECKCowa/AfBTxWc0dD8vdIJbFTzPRzsRoqpqFM08MKyRQlJRQM6cIE64lpBzBaSyiJw5RsrPEE+IWjXyobrRDARffvnlCQkJsixLkgRxnT9/fgIFu3vZZZeF7e0NiqJAgrBkcTgc8DM3NzfMpSAILKEAv/jFL6644gpRREFFSOTOr8YnZY6587tJXQ+MesL2yuAtD1yffd+DP02/Y9fTiVkPzMv8sEqgz4OLSnoW148//phRyK7//d//ze4C5evXr4fPA/uVV15Z/Vj7wG9+85u0tLQ///nPkCyQUEAwXIHgsAfI+o8++ihYiouLIQdwHAc0s1syUbtnP3SYlAOFw/eOWWD/xE/4QXv/va3CUE4CA8wPD/r+QS/xVmWHhnBRBAN++ctfEkot0AkfAEUQCPTIkSPBhRVHYIcvgQ+IfjLeAV/9xz/+cfDgwYzgrKwsuO7fvx+IDPth9ENWYHIcdgeCkzMfSLaMBcuEfa/dZpqST7w37Xn6WeMrh8jpgbYnH/xhVMquJ1u8iIYY33fffTfddBNEDuLdvXt3QgWXfcO1114b9hkZ+/aD8vJyElFQE1rdRvmB5IIEBEtZWVmkc8/Mh1LMYxUiJ5tH7yz4zkuk5L33W/mfXYQb4nh46HcPBohXRh3sPLiodIfIMQvkVmYBygcOHPh/KeCnyWSCW2C/4YYbwk+1E/zHf/wHfPvvf/97VoCx2jcvLy/KGxBfR+5XyPg9s/od+PfAH0dfn3P3nT+OT/n+/u6WO2/+YdzwPaM6OO5eUbIFxff8/F4cwToaRlg9hivIMXOJ9lQXNGglaeQM8QnwnBrkiCYQniOKSIJB4ieyj2pYqk7wJQZjN5LUulu9tSEDf7KqQhUMihTUd7JIZGQd2AWXkP6MTanzQic4zqETHOfQCY5z6ATHOXSC4xw6wXGOeglm7TYdbR31Esy61nS0ddRL8GWXXebz+aJdmxvhbNRAF09kd0Gd46lh+P1+5hks0fcaB/Y4x3FQgIU7Yts0ogmGFBcE4Re/+EUwGIy61exITk4O2++///6wHVI5iu/hw4cTWmt4PB7mAqkPZEf14IPF5XKBZfLkyXDdv38/cycRNU5UXxJw2a1bt3AIvXv3Bg8nTpzo2rUrcwnfihwFYvmsdrcUxIqN6QYCgbBLbW+tiRoEM1ITEhJapwKOJPi+++6DVOvRo0dSUlJRURGkS2pqKtjfffdduHvzzTf37du3e/fukMqvvfZav3798vLyvv32W40OUIbDATIgZVnkwWeYYAgnMTGR2SFYYJFQksDSpUuXnj17RhLMbjFHr9fLhkkgEwwYMABiBRmoT58+vXr1AschQ4aA+7hx4+CNZ8+eJVVfBK+D2IIFAoEAL21JEE1wHSMbLQZIjoEDBw6nGDlyJLCrUKSkpDAPkNDXX389WAYPHsyEBtIXmAM7PEhoEsN148aNzD9Qctttt914441AJzDNCIZg2bNTp06FnMGEnnHDxAteEUkwMAoRczgc8PPrr7+G+MBT4A08w62wZENaAZHMXptgkGN4L5NjoJl5uySoQSfL+1dccUWkY8shqogOpxehJdvrr78OVxAX+Dls2DAgBlK5srKSeQgnJZTGkUV0uGyEW4xgFixwDK8YNGgQfCPUQZCHIARwhEeA1CgJDstccXExXBmpzJHlCTbyDThz5gwEBY4VFRXwkwkuvBH8RH7dJUS0vELWgyQAOYZUiLrV7IhMggcffBDeOGPGjJKSEhBBiMPq1atXrlwJsgtRGjp0KPj5/vvvnU4n88+Ih3RkpWUYd999NwgxiBokenZ2NjDHCL7rrrvg+sADD4D7v/71L0IH2BctWrRq1SooDMIfGy48GI4ePUooYVBrzJo1C+wgzXB99tln4dqhQwe4MrIhGocPH4ZSAewdO3YktI7YsGEDVCWtkJINIJrgMIDjKE0nNnFpVZjYR70EaxTRrjGGESNGtI4+2HZRL8E64gM6wXEOneA4h05wnEMnOM5xyQjWcPJvDUPXUkUa9HMBejx7qi6jVpnoW00FTlmNiGGtVzQZoWjUCq46epqKhoZP395YXDKCayPq65qCqJxRn2nAf5NxvkjWfkWVqcVijYDYT7nKhB2rHg3ZGx3zegm+mF6O8zag6ZCLShQ6o1sOogE7zviV0IAF7TL9JqXO0GgrHW4p9CPD6VHDqIqgqSIz1EWic4nxJ9yCF4U9KIoUNqqKE5KZYa8Ov6j6jaoE30BkDqMNRhZCRglQwxEpiHeZibSHXcIm5MJXhUCNRI1IHeEWGilkFPwKrcrQSGLxV2cqkQYItthzrI7crNyDOfsPm2yZYA4c/NlizUxPT9+yZcuuXbt+/HGv0WjOztlnzczJzM37McMEBuy5Bw4brQ5Hzn6zPQssmVn7zBZHhsHCAjFY7BZHdqbD9vzjdy+eNY6Z96Y9seC5Ma888++Xxj049+mH5j41aspj9zxw29B7bhl8z+1D77tt6Mhbhyd2v6Fnz8QBA/r37du3R2LXf94y6MG7bvr3vbc88q/bH31g5GMP/vOJUXdPePyBZ5/699QJY2Y8+8SL0yeAmTdz0isvTJ4/Z/rbL7/w7msvvv/GvA/ffnXRW68sW7RgxUcLVyxZsHzxW2BWLlu0+rPF61YuXb/q0w2rl6357OO1Kz5Zteyjxe+9BWb5xx+sW750zacff/bJ4uUff7j4vQVrX3p502OPr+jYecPfO23+W+etf+/yfVL/HX367uqf/G3PxO0dOmz7R8dIs/XvHZih9k7b/tEZDFg2/73jlus7g9nWq/+W5AGb+w/6MmXQ54nJm3r0/eauu76/975VHbt/9o+uYBb/rcub/+g+u2+/V/51/8ynHp86/tEZk8bOnDzupecnzn9x6uIP34vmrwr1EhxRY4VMfWVCfRUbMxHeql0Uaomqg6MeiXKnlXR1OKSqfqKmoQiETe0XhQ37V9v9vIZFiJUPNIahOrJ26kWYiMerbFqtj8W7ag3HUBmNnqODwpCaKsF1IBxYCHXzHY3IWFSDLoyracLWqk9i1Q57RcS7QqGFM1xkHCIdI0ytd9UVSCNMRFRZNaCwijKSIQ1NdG1xPlMVH0SEtUZUNVz5r8pRd0NxaxaCdcQwdILjHPFJsKKgjt3SiH5rTKK+eLZtglsHl3ziXGNQXwzbKsFsGLi+r2qHqC8p2irBF9MPcwGoL/liB/XFMH4I1ugUWrCkp6cTOsE7cnEG+352rd6OKgIswOPHj0PZEPYQni5SX/LFDuqLYZwQ/PDDD6empoKlU6dO7733Xlpa2sCBA5OTkwVBePfdd2+++eZ9+/Zdf/314emSGp0Gm5iYCBR26dJlz549q1at6tWr1/r160nV5MiuXbtCCIzs+pIvdlBfDOOE4NmzZ5vN5hkzZgBt77zzDnA2YMAA+GYgGBgCR6/XC7SFVycA/T169BgzZozL5XrkkUfGjx9/+PDhDh06rFu3jnno3r17UlIS3GUvqi/5Ygf1xTBOCAYBBSkEywsvvPDtt98uW7ZsxYoV8BNoDvtZuHChQAF0Hjt2DMiePHky/FyyZInP5ysuLl67dq3NZgsGg1OmTAH/b7zxRrisri/5Ygf1xbDNE6xVgW0JCdUwcAYiC1eQ2poPhVJBpmCWyLuRE+gJrarDqVZf8sUO6othmye4dVBf8sUO6othWyWY0I0CCwsLi1oYJ0+erKysrC/5Ygf1xbANE6wjEjrBcQ6d4DhHGydYEXGiE+7X2CA0vo4+qjqgqpqI+z/SUXQ2YF4n6r2L0ylwz0g2rSIW0IYJ5gLBP3QcdOW1Q0+UBDnBHzGBAROX9SXCVVTxzq+uwU6oKg91A1pQv7627y/+nALZQVGDkGskWWUTK2osZaN7foazTI0A6RSOq67pTyfVxATq+95YJxhi/YcOI9wSkTnfL//Qw8PjlwR5nPhEcE4iAZ7Aajt2dv4nO8HFTxMcuPJyjCs8moTZw+L4m2uH+5FN6ddXD3bx3OV/GUgX8Argdtbp0ahPfCqoQfj/dfWNNBzVw6s82jBXBQSch3XFNcMxzLoTtrXR9gjW6Ha5kKT/85fhkoSpzxGgV/7VX2465Qv+6+lXr+58s58jCb/pDeluPli+8LOfwP/l/zuAl8n//H0ocPbLPw6Hx3/X4cZD+f7f/X3gr6/uI+NEXXLVX1J+f91Q29GTKJyK8v+uGsATUulWht4+Fhj9HeX7j38f/vPpIFj+8y9DQcT/eH0/c17xv8e/9s1PjqcnvtQ1+Z6dPxy88rqbcVZvdMQvDdowwVdePQik7ao/dEq4qvfN/3z0/1wz6Ko/Df7F7xL/88+DwMOV/zsQ7mYdKn3nox1gueJvw4CtX/0FBx6uvGawj5DL/ncYyDE4XnVtMttjWSHSz0Xcnzre9tsOd4uE+811w0S6v/a273OSUu65/A+DwHPPQSMhAvD2/76mP1GCv7zm5r/+5Zbf/mng5Vf1+tXVN+E0Sil45XU36gRfLCDWl/8xBVJc5TyPTXwz++jp3/5jGDgKCnEFsCi+/E/9QaxNjp/nf7RTDbiv+NuNIHa/vnYoUPDrq5GqhCsHgiR+tGbzb65NxcJbI1f8vhftonT/8W83eXn+qqtHAGFDb37Iz+OW21dcnQTXxCGjINiARv7nmsFQrv/nn/todL453Lryb4PZPMgrr70FJ1rWnbCtjbZKMAAT/a/9fvXX4UmDRwXkChnL4f6//RuWnPBNf+4w4O9dh4hU0P0S+Z/rMPV/d20vJPh/+4EdhLjrwFsDUJf/FR0hQI9Ervhz6n/9dcTy1T+JqvvAiZOX/7Y7ZIUr/zS03y1jfnUNPtVnyB1Eg+pW+s+r+i3b9AXc/cXv+/zX1f3hlhZQQKzBXPXXgbqS1RxQiShwVLvBlgk0mbD0Rqok6kjPRdBkyoeIWhRtvbBbgP/z3//o3ve+K/7Yr8yNqjImg8o2wxdUTWCNIJo2eEwCzU4CJY36YS7oh6rZuJqGNdXohG29maSj1aATHOfQCY5z6ATHOXSC4xxtguC6uvUbC9Rvo93Oj4t5Y7Ojgcg0cCuEuCeYDjU0GRfwSMuhgcg0cCuE5ie4qbOi6oxB5Nz08JS3sEsU6gyhGg3ejETN3Q8vLGc0G6oiU18c0F3Gwa7zoL7EuXCC3/1gedUQDRE4HiySTAQRR29oWSlLeA+7BQQRewMENrSnoYtKFEnB4ViFqEb7EUK7C+CpMm+AF3CkJyAG3X5FkIkoYmCKKsBHQl4IshNVNTQ8BqiCMy8osqrA271+n6xoCu2p4CR8UKW92RodfFI0yEIYqedffIuFUeH0sgEimQ460RMkFfZJ8FugftiWNmDhRNa9ogZlUamKBnZsQaw4/ChmZJn2xrA6A9+KKaPRwWf2FCRRIMiLIV94XbBoDUs0QVGxzwbzOgaIT6O77Kvea75etADBiz5R6CcEVPLc9NkQI5mmpqKRoIgR//jTlRBVXxCzKC/hLZcP56kCbWnTX5maNp8lXyTBCxYtX7Z8tSABPeqJ/OIAj7lA0MiseW8u+GAlhFBWKb785vvgKGpk/NSXAzzKPbwR36KR7H2HMBqE+IPkualzCQ3X45cWL1354tz3FRY9QibSW/h2hTwz5cUlHy8XNM2eeaz4nMfoOPj6ux+zu0Dwwvc/YyUM/Jw8dRar57/ZZfnJst8tEI7DQcPjBSUffoQMvTDnLYETBZUsXblNEDBWU2e+JilyUCKiQjjI/RL5YPHSCpcfsqPDkTd58ixc/UrI6+9+ptBoC7TnMzPngEbz0wtz35g1Zz5kHncjzs5ofoIXLPwM4uT140eu2bDx+RcXgIWniYj5WiOLPloO10lTXkQ+CNmZbt/67V6N7mgx/rkZM16cj5maqDt/cIQJXrp6HTy+cs3X8POjVRsc+4+wNN345fY1G74CQSwqdH6yfKOokoAgPv/y2yh2NPDl6zbC9eMV6w6dKAVHSSXTn38Vg9UwoZet2zTzhddl6hPM5OkvE/ogyMnkmS/tNTngVvHpyjnz3qHv2sHuAsFpz78q0o+Fn2kzXqS79JCtO35atW4bfGm5U4BS5FjBuYPHS77Y8e3Ml96Cx8vdwS++3M0SYfXabfAELwqfrd0G0gmep81+2S/h3ITs/fkvvjKfhTxpGuQD9A/vKnVy73y4lJexU3TclBemz3wZWA/gkqvzoPkJVqq2rBCE6nqUgU0oj9wIm9WvcMUiKCImEo7IhQBPQb0O5bnbE6QdvSHgLh2QLQQMgtVYLDQIH4tU6sLCgcfDaxGiztAInzECz0aeycJ2iMeyuyomLKUgKBZCuP4Lr2EBC113zpxD0OjMe4wkSxQK8AkfBTEsLXWDiPoDQvgtwSAfCIRiCNFTaP0B9REkJgsZvq5JWk50hKpw4QSTkHrShEg0Gi0UbCuggTSp07HZ0AIEs6xKs3tNE4Wou7VNU1H7wSgXZqHX6q+OfiO9E/ZZX0wadm/gwSiEJbu+B8/rfh60AMGxCtChPX6Bac6Qpl5OkZgKQ5V5iaqyUPh5g5ogam5PQGPqfRtHOyJ4xhzUlYAzP088XtBGybNps2bPex1cCk6eDevSs19+94cfc0VNen/RJl4Gzb9ts9yOCH7i2XkV/lCDDYQWVJkX5701e+4b0LBOt+7n6bSbioD6/Evv7PnJDN4mTp4BWjfwCwpa2z2xsR0R/NzzLwUlFRRSWuvJYW0fNFVJkP3eAJbQKgkGJKrU46alzAOwW7OTqy2hHRFcU7EKXyPA+Kw7Qdoq2hPB7RI6wXEOneA4h05wnEMnOM6hExzn0AmOc+gExzlimGBcVtQiJh77M+pFDBPcgmjsWFscIHYJ5jU0nNr8RlDpzLfoF1ajvkRpi6jvWy4JwWzJpTzm5Q19Zn6XmLajhUzPqTuSZuyE6+vrM1CMa6aAz8s5K70VTk9LG29jJkVeNGKIYByvEQO2YqXb1C2JadtrE9NcBqhlptP071w1R/VlWXVWRDPRcqZJs6suDDFGMJEHTt3QZfI33aZ9U5uY5jJhgntN3XHfq7vwVEQKSO6KisrWJNjtdkemQEsghggmdIV94rRdtSlpMfPNTVPWRBbRFU5XWWU0DS1nKp3RGxs3O2KLYFB8uqftrEVDy5kWIbi8wl3bsU6jE4ym36Tvuk79/J7ZSyExHn5/T/+pWwZM+6rPhA03TPmi54yvOk3ekjhzS99Zm5OnbLn55S03TNqWOOv7nmnbk2dt75b2XZfp27pP/Tr5hV2JU7bWYvd8BFc6/T7+eDkpd3mHzlhT5FTh1pnK4DnwUFx+8lzQ6ZLKKzxlbvc5p1DpOlfqqiwKkJJK/7mK08WeYEVpWXlFpdvPweOnK7zuchfQXlpaeqyC1wmuScPUnV2f/WbchxtumP79nTPWdZu9qZyQr04JKRNXz/n0hwqZDH3xa9CVbpi2td/k7acJOaOSO59b4nCSntN3FhMy4Lk1pzXSf/La6GDPRzBUxiNnrb11xmfgkvrc8pOVWpnTCwQXeMjwcYsrPP5PfygbMWlRkV/KKeFTnl1V7uLHvL3l7jkbyr2811m24duD/3zyxUpn4F9pH4wc//qhM8o5p3vghMWnPEQnuAYNHWZt6zRt783PfQGqddfpO++YurrX9B9SJ6xJmfFl/2dXjJj9Re/nvk7PJ12n7U59bk2lSHpP++YMIZki6frcV16ZeAhJnb4eXGqxez6Cna6Za7Nf/vIIuAycugIIPlvuBoLHv7m+tCxQWlH8kTG/RCCvf7rnobRPzviV/FNlj7+y6RRHyiqdILULd5dBCJbDpcPSlmvesrtmr3/0na9OVMgVHk4nuAYNvaZu6zz+66MB0nvqt9/nC0kTltz67CdPLNh248zPkyd8euPzGxKnbTP87O45fUfKlDUg3N0nb4N0336cdJ68JT9AigSSOP7j17cfq8VuAwR7z5x1nqxUc4oqD7tIaZAMm7ykwE2OlXEVZ8+s3GE8FSSZx5yPfpheWC79lFuy6pvsY5VckUfKO0uyJFJWFizxk5FzN5w85/+5XByZ9pn/3OmJ7+/43HAcgtp9VC+ia9LQM21blxnfpDy7Y8DUJYMnbe6WtnvAlKXJUzb3mrod6to+U7dAm2rg5FXd06BltT3luQ1A28ApS6FgBz/9pmzAFlHaFsgltdhtiGDkuDKIHFQ4T7ukQjdh5bPT6SytFIrc5EylH/yccwahZi2r4I/7NKezHErvn30YiK/8bKGLnPCSynJvoUdzO88C/SVuoditnHYJOsE1CZ76DZAHbdY+aZu6TNvTc9rmnlN2M/dEdN+ePAXdk6Zs6TN1GzhCMd592g7IB73SNnedgTkA2O00fU8tds9DMOOAldhA87lKP7ALP6EALnUFi13AKOhN5XAXlKxzrvIijwDVtqe8vMzpL3UqEFSJSyryBt3lHnCBfFBZ4YJcAh7aKcEy7au8YcbXrBeiFhktYKZtHjJtWV0Et5JpXwQDfAoZNGV5t2e3tg7BnZ7f8dz7G8MEY09W6xLsceMi1RZFbBEMcQmCuvvMpkQ6GNBCpvu0bTdM3drj+W+T076sXqpcBSfluEUNCG5Fubu8zBX97hZAbBFMoUKuHjRpabdpO1vIdJ32Xe/ndw+ZuwfXfuMy8mi43FABu1rOQB7yeBqx/UJzIAYJJjgUr9UWrWaDgkVFexnzj02CdTQbdILjHDrBcQ6d4DiHTnCcQyc4zqETHOfQCY5zNI3gaN8aNazfQCWSgHsOKoqk4Z6bMs6hU+hhnmBUkR5vo8q0b0FBOwVus4mO6F4Vmo5mRDRlVaib4Eho4cUBGu7yqRTmex0OxWJXjXZ1r5UYrILBLJmszMhmm5Ju1UwOyWCrNGerhadw582aO9fQDiYdzQk8H6qeqdd1EwzZ4dSpU8yO7KiqdqIoaLSpGRbNYNcMVtVkVI1mMJrRDByDUY14JelW2WQGg7eYo8ku7jWLFoffkMkfOko8lbhnc6wcCBcnKC4ubqwEh0vUs+fKZVqscsePKSCRIJ0mKzHaFINFtWYFTDbh0BFSVoabJvMiEWUiy3gNiuRksc+R4zM5QI61nyzIusmiYW7AEDCQDDOEwGfmkFOlRIYSW4LIqaHjyiIjUQVWpOsm0tSE0+mMdqpCNMGsilQ0mUjy/q07AkBGhgXKW2Kw8yYbf7yQ7gkcKnTRJ3uG7t3OnEJvx+0h6dIvmeNPHHdbHILRqBhMxGgRzFYwihWyC/5UzDbe6hDyDmD+wG29cYtvpe7yRkc0BEEqLg6VtXUimmCWP/jj+cSeCVVs+e6M4xu2Z6/ZfOLnI/sP/Xw0v+jIocOHDv+cd+RY3pHjBw4fP3QYrvlhk3cErsfhFpicY+Dn2LHjhfjzWP7+E8WHDhScPHTyUKbd8cXmw+s3HVr1+cHVnx9Yu/bAmvV5qzceXrf28JoNh9ZszNq07Zh9/5FDxw5Tc+iwbqINJMvxY4XHjhbwvFhP2RxCBMHMn6Y6jSYUNYM5uNfEHzxIN2iN2J+7+aBBwJJIzpX5LJnEkkP2OqCCh5IcC3OzjfshXbRlejP3kVPnoPxXUEGnkaQ7jbbVHQdbHdEEi3kHVIMBKlq3NRvkH91Yod0SQ6pVmQb3+sXwJeLze81Z/gyHlG6RjCZQ1qDylsxQtluI0eF35BBRoAdFYGtNR2NQTTCmtqL5LNj48WTvD7nUUaO3AML5KPw63GRfdh845KfKuZZhAVVAZRp7hl0wOYjLQw9sxqNYIhteumRHoSbBGj0VBsvDmICMh5IAhaifc7lHeLNDNhklM4q1kmEkP1l4o507dJidB6xVfYKOSNQgOEKQYqMEZHGicQnpAaIMLXLOlKmaM6HlRhvfZmh8QzvbZbURrw9bazoiEK1FXxhYzghLD+NFoVsxy2HBkmlbGRxkEDiQTUXScNd9lqOw77O6rK3S6erqDwm5wOs8gUBmNoEWl8Gk0S4XKMOhne0B+S4qxlNhaGMr3KJjpr2hGQgGNhSqJeGMdmzE0h4Pp9e/76DfmqMa7VBrknTatWm0s76OULdJBhrBlBWwZLntWeCfnDlHBBFDICqHJ2jVUZCESaqyQG2t+vbnCbZMJd1MMqCeNhKTVTNAa9teYbYRH1Q62CXOMlN747gZCEaFqMLL5eZ6IXFNWaD9qtDKMtkUqxXrS1SLWF9miGNoC8mUabgFJty1CU0jFbu4rSrwZM4Mghrv8dWmuLp4qCmRaNdkcraUwINmDAezUQaSTYyWYIbdlXMIT8yqa/5sHKOJBNPUDfVeKWrgyNGA1QFs0eoQeQKDdBptmskmZlhlW5bPbHNa7J79eeqp09rpUu30KSk/32nPrDTbvTYHGMlgQymHajXDQswOLd0GIbDQkCRbtlpW3qTSFX1CXVB00mU0iTRvQRFCO0qxAFcsWQGDNZCzn1S46EZLMnac0Z64cGccDaJFmv6tjyYQzE6iw+92eVnrBZIMZdRkATVHRZodQbM9eDQfO6gVqGgxyVhyUfGqzh9hKWSCGKp6NQmfCga1kyUB7MHO1H4yCUajmJeHilPjBY8Sg7lQo6WLyLvzDkLcSLqD7DVDhQ1xxtyD4yWopoGBdhfnyFaPF0LlomqihJTHSYursQRjoimqb99hrOEMJtGEeg0jlZQ78RRAPDBTFWozisygCZPKCKBAd7GKY+bOvPGoLwskKAiWXObU+J4WBU/JZG8M9dHQAOhP0O9OnZOMWTJWFtiqrhoCMStmC+0et0FmDRpt5Zk5qEnQ/ByKb+hzQta2gkYQjB8my4UnFXu2aLXIZgMkR8AEyosbyreW/dSING1GsIaUJvFYYAQCYnEx1hdUGURptoRGQrG/1mTnjZl+cyZqf7TLFqNDc2zLRK350RDBoSFGrz+I+ZqqS2ZHMDOPHutMU6nlv7JFgq9q0eGFWpi+JksCklh8zufYJ9qzgunprK9UMxpROU+3KqZMV3YOAW9E0thxPTGPaIJDFQ9tUiiayGUdgHJYxKF+m8fuaHQxGRfQ8GBQ5fBRUOmJEetv0AfpBAeopKycxUEqyvGAajVUC4T08xhjPZrgqmoL/xRbDjHjWL0CrUl61mqMRb41QNVAWnlzoi8rG9rW2DcONBst2BRMN/PWTO7YCVBQmCZRU8m49KhFMNMp3D5iRj0Z2j++3FzskkLXqhl07QMamuohEKqmUZuiSieL/Tj4wQY3aePQmsln2gg7uD2WkqkWwUT15B0BkZWwf8BKXC2+yWIbBfbZQXsqwENTngmDYLaqrH+GC9KppTGBmqNJsua32aH8wQ4gswM3TRfbVa17IaAiK1fmZqM8mO3QyCYGKLcd2NmikdA416VDNcGgVDktmWw2pGCwYZsW+ypCJ6Y3EgFodVQdst4OgG1rLL2rZpj4DhyEthZwrO61KulWrugsul5yglm14crMhqwn/JQesGVCA9Hv9w8YMCAtLa1r164dOnRgviPJkyMG5sKHdvbu3Tvs2A6B8qqInv0HiS0HKmbRahFAj7HnEQUTK5R2tD5vNSSAkOKkiOIiYFez2irt+yA2QNeIESPOnDlDKJGPPPIIWHpRXHfddWDv2bNnUlJSly5dwH7nnXcOHDiwc+fOYO/Tp09iYmJqaqrNZot8TXsBrdBoG0TyZphob4mFs1rVDIsXqjwe+w9auXxLoKq9jP3JRovTYg1lLo10794d5FKkYMJ69913wzU5uR/231FvycnJcAURxyeoExDM7JAV6puKHcegH1zdLwsyW7kvj2TYIHmBbN5iVQ3Ys6vhscYaEeAPe1VbdIpCAmgCQTMO3nFQ70pSmJP169fPmzePUHWR0TZ69Gi4Dh9+E1y7dUsEdxBisLMrAEr1MMFgaYcE1wYPDWiVqAUlksmOM/6NOM+cWLKk/EJWMyJaUpFNwAF2g5FkOEjJ6dC8VApJknr06AFyDOXwnDlzwAXKXqhi+/RBqU1NHTh06FBgkef5lJQUEGVGbbdu3eDKcdwNN9ygE8yqWyqjGo5Gev1+C46FM01bzbCJ+w+BBt6iLaoEn9Gomoy80Y4Ly2rea4ChBm7paACYarLkMUOJDWq2GZrOxOhQik5oStUwRnO3qhJw3prRBvU//gpVHTpaBiGBplqYLHtz9hEjtkuhBMUeUH+A0DW4zUtBAs5zMNpxO7LwzFMdLYMQtVpowJKmtiwbs2iXp1n7yeBKt0DVGPXURSJBM1gDhw7HykzodgaFcoxzTow4TiWaTLItq8JggYoZCWkO5SuBWBw4dUHHJQGdi4RDGiqRDh4h0FhFTdsKOq9cepZrjukUCcG9pmbJKTouAOERxlDpLUmVUBlnWIMWA9lrEUH2FKr5XgTRCR6jhWAIOsmXHpRpnOgZxMmpZt5qDAA7PPYDXzDFCdAGp/WvTnAMgJGgERFsTidJx4U5qsVOKnHH6QvjOIFItHBokN/6NvjQ0UIIFcsKCa0KMGSR4qLQ7ANs7MiN74dIYE81nD1kWS4vLy/V0Vo4fYb+Ky5xnjpduu3bM9u2n928oyDdgG5n8U5lZWU0SfUgoQFmIZtUVFQQKsEaBduuR0dLQ9FCBmmQ1aDNIWcY5b0m/5EToHSzDUwURQFGzst07Sk71Thz5kzjiwIdLQiNuC3YUFaMBuL1R908d+5clEsk6iVY1evdmIJCvKHdqOzhg5Abg3oJhoI+2knHJQNtDYsyrr0wGXEVZ0h1CqGkpKT6R03US7AuwTEFpgir+w8SnDtgJVyQuoQ4CgbxYJk6US/BOmINGkqdLNoycXDIYJVVKTxRvQFVqV0STFuTDbcMYxPYdS3K/I9GXCdWUSlVSbBOMAPOlqru06k3TWIYtGuaM+GKe9no0HDvDIROMEKky46DbHIraZME49giIMhJJjtuDncsP+TeTgkOFcUq8LrMbv8iv+jzAjRfFhZvP/Zz1QS0qp0b2hQ4g4234G4ZuG0sDja2T4JpgXzM6199vHB9YYhdMJvzC9YXntxYUHLExTZ5aXsE4/Y0GVbeYiXlTsyp9c/bi2+CiZ+Q948WbiwsWl9UsLGK43VFRRsLT3xeeGLjiaIzioT7NLQ1aKqME/YMZmLOxsHEhopokPEGMkBbBpTMb1usG4/lh2U3ynyRf3JLYQEf/VwbAJbJp85pGSZQp/lDRxskWKJbltTroQ3j26NHlhw7vqXo5KbCkw+8vhDoZLxuOF5477zXV/98fPMJkOYC67my6CdjH7guQvZYM3FGrCUrNOW5LhITQCVri1pGY/Chw7zpePGaokIg+I55736eX8IIXnHo2D/nLVxXUAwEf1508huqi9aVODEMlWB/tCqLFjxtwW/PU2W2j0Q0EkgZDgjWuWlgW8e7mY7NJ06CAWpvnf/e5/knv8gvALP+ROGQV9/ZXFAILlANbzxytGqxVRtEeQVuWGa2cXlHQ82/mkjg7fs1HKuIQ4LfyjBsKiqpKpkLRi9b12Pq3MQpLz6ybBVjGm4B2YtMZlVtq1qIoiiuzFzRaCF0aVn0bSBYtWaR5l4uESP4+nDem/bMDScLWcm8ubSi87QFXaa/s6W4FGQXzOrigq+KStccOtx2R1boXEwtaMomJhNnxvmTIKqRK1QThJ/S2X5u8QdQj9+0mzcXFIcIzj+xIb94U9FpULIYwTuOFk0z/4B727ZZaEx7ECTRgFsz+K1Z9Guq82uClmHA3STabBZuCBo55g2+ZM/acKIACKbt4AI0lF0wiw4fOSEoEhc9R6LNQSSqdOAg26CPLmOIJNhg9Rw4EJcSjLqFLC7Lzpprsqw7mh/mdUfByU0nit4w2LYcOdwmu7FqAU8PVFTQqHF/Xmg7Yd9GqGGQAJz7rLa4PIiKfiAWTrnuwDM7voEWEejMQPBnhQUzv95FJ6upsbPf0UVBofVMkFdMDmIwS3mHtaqRpgTVZBSNtnj4yFqgC3+wJsbNVAn5quTUvO/3bCw4ua4wf92J46USToqIjw/HBhI9A9Rjy1LTM3Delhha7Y0SjJsKtIf1Z1SV9CkayO673++aseMLNxIcD0cwVXdViiLdk93uy8oNEUybUGZh38Fq73GKkHpJRw8xPVRUTuS4EOIwwUCq9+BB3B7X4MAv1khCwIqlNk4PqPlMfIJ9ZFXRHPrf9r+8xmADaFjpeDIhOXNOw67K02fo4Rj2OvtBdLQJRBIM2pWX7mEv2LALKwFPdKVHQhKhLY6b6UCECQ5tiSuLitlC9pqh7ZQA99jp7IHMXLZTh442h9rjwZrBwVvMbosDZ3S4c3KJPVPOsLIJ9DraHGoTrBwrwI1dTBY6ZUdSlb0Gkm6Rz+jLVdokahOMW9Rn4Fb9SDCIrS/DIJuseBqSjjaI2gRjp4fJrpigiKYTdjSXm8f9SG3sQEcdbQu1CcbfkqSYMqtnVarWLM1odttzOFL35I82gfDO1Q0jGAxG7ncNwDF/TWuju5nXJhihaoGsfdUEB/MOQutYNGfiuW51+Y99rFmzpqCgACw33YRb4rL9UesE5INu3boJArYbGB5++GGn0xnhpS2hNsH4W0MhjpgXrchQLeNpDZWeaO9tBB999FHPnj2BvF69epEIaTYYDDyPrfxFixYxFxDfsLCuXbsWBHrMmDEVFRW5ubl+f9sbHq6TYI0OpVUTLBNNMmYJFrNgtuM2Pm0QQPDBgwf79ElOTR1IcP/jnnDt16+/1+udMGFCSkoqwb3qezPik5KSysrKBg8eDGT37p00ZsxjQ4YMmTx58vDhw2uG2gZQm+AwqglGL6fL6HmT9jZ6UDoQDCI4ePDQbt0SCSVYltV7770fvt/lcvXtm0Kwrg15BoLNZvPMmTPB3qXLDY899kRxcTHYO3XqFA6wraBRBCPDqkIycFaA/+CRave2g6VLlx4/fhws1133d4InhOBW9EAelNtgcTiykpP7jRo1mnlmG9V37ty5Y8eOPC/ed9+/IHP07dsXxD0cYFtB4wgmyDGHx9lZgwY6Py90FnQcYuzYsSNGjMBDNuMCjSOY+VEkuku1nZw5q2F7uU2W1e0NjSKYKdbQbvAZLLLJiludQnXFpm/piG00imAG1EFETku3SekW4tEPLmwbaALBtP2kVppsmsEum21xMeUw/tEEggkrq72STI88J85y1LNUvSqOaTSFYLbPh6IKBptsMksmB+4Cgep0m+z6aCdoAsHMIxViN55maLASX5DQPYpretQRQ2gCwdVQCWe2Ybel0Ran64fjBxdCMF0KEcAt5Y1W3/59VRPldcQiLoRggKhJQoaJ7uZiCW+qpiMGcUEEawS3QhRVYrKDHPty97f0PgdRI/AthDrTwuXCUy+aEa28orzOj2JoiGDaJiYVuNbFikNMUssycOuttxYVFUUmDcSb53lwAe6ZO+s9VhQFXARBCOeJYDAYHv0Nh8Acc3NzZQrmDj/Z3chE0armcvh8PnZqMhs/juKJ/QQP8GqwQ/hsykDkNJJ+/frBtaysVXfuuSCCCaUXjCpr6XbFavbaHITtZdEyKvWrr77Khn26d+8OMc7JyWHTaODav39/5of9rPEYIRMnTgT+2GnV69atY45AEsdx4Pnnn39OSkoKJ8H+/fvhmpKCQ4cLFixgjuAtLy+P+YGnIEDmTmg4w4YNY/Zu3bqxE7M7deq0aNEi4HXIkCGMXTbFgJ2VDd5Y/mg1XCjBFBj9Miehh5Rqp0tbqCpmUWRDdZD6kGpZWVnhu0DAypUrw3ZA5EDQpEmTwD/LHMA0MAqWQCDAxOvgwYNgZ4ySKoIHDhwIgbzyyivhQNhcH/bI6NGjI4Xy9ttvZxYoY5ild+/e8+fPBwvjHoICF3g149Xv97dOdRPGRRHMurEqM3ARomZ1wA+Ifb3hXSg0CmYH8sIlahiTJ08mVJ7YT5YVGM3MJzx++PBhdhfcGVXs6qJgtyAEdlLJkSN1j3lDIE6nMxwZCDw8dQv4i5yVB3kCivTwTygDPB5P+Gdr4uIIZoBENOLulz6zTcUD6Fs1h06bNi3aqSl46623GkiCOEADX9dYgiEAOb8YFyWmZ7hy90XfbmFEFpgXgFYuMFsfzUAwMMwRTbBl8RZsNYnHCqM96Lh0aA6CmbYlKD4Dbvkgm8zBvINK6DA9HZcYzUOwxjgmkivdgoMQBnPQnsMaThdVgOq4aDQPwQi26aEmBq3ZqtGuZRhUcxbxiyE5rvctOloWzUcwQRbZFADpZDHOzcswSgZb8MAREOXqdSA6WhfNTDCTVyyaJYl3ZCvpOGwcMFmJ3xc6GbOFwZq5rYxYVsWbleBoqF5blmQ0SGag2S449uGhqPR1oUK73ldfIARBulSG52RIyQZS81KhgShdLMEa07ACvAwSnG6W0w0EamVJaiG1i8pSdLq3nuGhQV5vUl5CtCDBCAxcJarCHzquWnDDHjXDrh45FtLImhU8z0cnemsaXoFrdJxiAC1MMAV9g0pKTkvpBtyUyWB12x3oQk29728i6iRYFDieXgNiQyLOC4rCB5AhjfCS3ys1vbRvzwSztjBOvpQ0yWAnBiOeWG3JrDpIrnlQJ8HAHBG5j83BpBlbS7kQbVBLhD1AuQrXYBDHenwe7y3TV4qiW+PdPh/yXdtEPlvDtGeCq9+AAxFS4MhRnDoP7ai9FtyPupmU6zoJJsK52940nvXwqs/zwGtbmGMkeYww4jrdb+oazA1cICgFXDIJBLjaoYFxuTy1HdG0Z4LrAC/wtFMTRBknhJS5sKEcKrOpaTrqJNgj+Xo8swWYCwqqEPASUes5/RsPIbfM+FyQSeeJXwc1scPYr+DtiZM+L+VJ8sTPJTmYNGmFR9QSJ67189wb3+TDs50nfCkolTc+/qaskdTH35W8vuh36QTXgizn5uGBxmarYDFLe60Ei0lJvNDWU50E85K749PrOYkERQWk1cdLRwnxSMR6WqmUSNdn1wZ4snbPoQqFdJyyVQtUJE/aABL84JvboRq+aeynAZnM33GcE7WUZ5aXCeT2tI97jd/012d2elxi9Lt0gqPBFGlJ5c1ZitlEMswk3SoaMomflxnH+IdHrzWyE6FOgkGtmrX8hyJ4j7vyzld2lnmE5KcWirzSf+J75SKQusIrkLf3lhPO2WviCpkXkid+EgiUP/nhLp9IeqVt5oLyrbO/JGrg6vFfV0jq7A0HPEFx0hsrgpIa/SKd4NqANwtEBRWHnKng6KECdEWMFZvLFRXVCna9MayBOgkWecEbEE9JZPbiHZUarrsJEPLZrn0e3ASdc2qQnUgltNVdPshGuefIMR/Rgs4yjfgk5YibiAGc7WGtIKUq4VU8z3Kb/RQHMVJqqdk6wXVACxmUUVkllQE3nUxPNyY3ixlW5fgJIvH1x7AG6iSYGgRIJOMAKtRKmdYGPsUrgjKggnuQJx4Z1G1V5lQxSJQg+OQ0KKxlP+aSIIESmwQroZxH/UvCfBP9Fp3gRgHUKz7ozTDhxnpItlk2Wb2OTCIL7AjzUNFN4xwV8Qaaua1jxJg8+yDGCA5v/SHLbptdM9mUvSY5wwg08xY7do+glKg8kWqviKLToaMTvdUMz8foPnixRTCNC7aTFDbZSubxrJAMGw4w497zVjXdzJlt0pGjRKyjPKyd7q1mYlN8SawRHA0WN5loJ0uCZhuulDHaoOkMzSqUaaPdn70PalGihfJE6FNwSnyrIiLGMYcGolc3wbVXD7Q0GHMh4Q74fVBQm7AXTMkwSmZkGg/ms9jVU6cJNIAUKUZF6RKhyQTDAxzHRbu2DLA+ptyGDiJX0UnBxpVCJIlz7CcZWHTj/uUZFmKxkb1m2ZzpysrDzTXpsZqhj6v5jfV+cTyivLw82qkKdRMMYNP/LyHCtNF6WhKLiyszLNC+omSjgVaWZLBxJju/H8iWeHrGJonIMe0HDWygWi/BUEpHrsu4BKAM4YWxxeaJyNCqlVy2bOLI5aB9ZbbRoUkjSbeQdJvXDBo4RxRB0cQWmnEQg2h478V6CSa0oA4EAmxVQevXyueHphBfIGDLJAabYjBJRhPOKjFg/4lkskv7D+GufSqdgcFKfuxriZ+6m9W7bvd59jJriGAGKN8rKipicFtHle5briCHMhHlQM6BgNVONTIcv9IyTKCjAdM+0Myd5USTqzXwtg9ZlsvKyqCIbUC9Yjg/wayRwBZtxhhkalRFxR5t3IAAvhZKGq/blYnTttUMC0g2GALVdobFn24i58oxR7R9RJNUP85PcBsFkg1aV/Epn8UupFuwYW22yka7bHa49x0gEuYMHOgIqWPxecg9iWOCSbhA1nC80puZo1mySIaVGE1wBaZ50MgqKgk9dleKU3ZJfBNMVSpamtHe74AqEK+Hx7YW7moPAq1kGInJqhpM4uHDVf3j8Yb4JrgGQlIK5bKmklOlfoudGDM1HMuipTcd6vA4ckmAp5so4xwEJF1hHeehrNLm0I4IZkCaqbDSBpNKyiv81izN5ACa6cAlGrCA7g1qOfEHafUMSqvYrLNDWw/tiOAwP6HCmKpXIR0LWJRld/Z+2ZqNPaMZJroGGqtq2lFKK+z8k0QSwrsFoIxX6WgYQpVFwRlIMdTabkcEnxeoamnQipJIhcttd0h2B1CrGXDyCcg0MVqwts6w8ul2d1YO8fmIqBCFNtAov7HZztYJjgBbNkc1MtqBoOJ4Bi/xuQe8tH0F2hmKdai/zK6l27ifTEGT1WfJ1gqLiSjgKeqyEFNbL+sENwWSqhSe9FhBA7er5kwlHXezoCKOhg2BKGabZLL6rQ7vwcPEF8C2uEzng9P9+qqDqqobGGTWVVN1pxmhE9wEsHI4VIUDHVAlu31c7hGvzSGbM0k6GCsxOTRgPcME+jn8DNFvtHOgotsdpLSMcCIe7otdv9jJCuKO58zRQdKWKOd1gpuE0Ih1aESSzkNBbUtVJQX7unF4o8IlHvhZMjmwf5TKNBAshUXcYMCzuM1Z4h6jZsmSTdkegy2YtU84fIyUnsX5vZKKh4M2H3SCWwYa7khEFIH4fUCey24TbZnEnIlzFujkBcnM5iSFjEQzAR6SQQ1IvGhxwCOiNStgdYCRjQ4xw0Z+pAaKClOu/KNN25vNmXOCpmzeiEay7CMZucSwD4yQ4QBlkLNk6QS3FEJSXlXX0gsUABIOabuc4s9HPdZMzmAT0q0KbYkBr1CjSz/h2LZqsYKRM4yaCcdL4AoZAvdQMIYMannU4GGi1DAPYXeWb0SbXSe4RYB0YnNYlXFUk+6WT8t2eqXqlIrlO+1KZe1omSgiwbW2EpbzoJ053aTkjHroKJe9P5CZW+nIAiOYqowZFT0wULWDCVhDRjA5mPHYstz2LG7fAZ3gesHztRafNbeBVzATZQ/fDdtlURF5iZNEXpYCAu/nOR8XDHBBURRBOVc00New3wUrcFDcQDGo2g1HJ7gOqOqlnH1dp+GpEXmFGZmTwkYKippI9fBIUwWd4DpQO31j3DSw/7hOcB2onYIxbi6c4PCUn4bn/kT20URumU2qtuQm5wshplA7BWPe1LvLYL0EnzpVumHD58zeu3fvmjdrsJWcnAwE9+mTzNwSE/F49UgPPXtCAEnw99prrxGaG1RVZflgwIBBpGpab5OmGrUoaiVfyARFwcOTAPjgvJCjzwVI0tiFuHkWH6gUCQf6Lx/gcfEqEYWAIAYCIi4hB0cS8BJf8PoJ2wSOVCpBf4DrMn4F+A+vUA1KuISVVAjTVh8LiARCIJw7ICrEx5fxRFYCIs4GdosCB6qWwNdamX5hBK9bt4HRxAhesGBBly5dunXrBgzdc889YO/ZsycQyc5KBwoHDRpC6HEIQHnnzp3ZREwIAbgnlFfm88Ybb+zVqxeEQzBz9INAIH7du3fv2rVr5GkYlxC1ki9kJDE4+OllqRPWkKDTB4kvke6T1kqCrHF+p0aCCi5fBvY0v/dM0AUNYVB9vAIJikSQiZ8jHSd8JbkrOk3+qozn+zy9qjRITvsJak+iQAKiWySVKhmzLFflK2Q+AJmA42VoNSWPXwWNJs5fDsR7IOsEuToWLl8YwSkpqT169OrTpw8jmB198sEHHwQCmIlJ1SkkQBtwCWIKkknouTLMkUlkmGD4eAgKbjH3AQMGwPW22+5gQYE7xLJ2UXFJUCv5qgj2lnd7bNmTiw0BHGQiFQrpMXEV8AcyerxSu3nuV2WE3DF9bWVAGT5u+TcHS/acJDnFoqOS3Dv3ayC4wzNbD5YFek7adPq0s9Nzm7fncUNmba+UQdz9QQ/XZ+qWkzxJnZdRrmi9pmw8FSSJEzZ4XO6h076G5O72xGZw/8fjy4gsgmTXituFEHxqzZo17BgKlu5JSX3XrFm3cuVq4B6InzNnbqdOXQgtouEK5LEp8kxMQUZZKQ1XuEWoBLOzZ4DvuXPndeuWCE22ESNC55gMGTJk9eq1LCtcctRKviqCFVJAyAmZOMpVv0LcEunxzFpOUhXeX+QllVCK8nKPZzd+ZT/51Me7Rn+UlZT2pZtTXliXNeaN3STo7/TMDlFSOk7YCiLY69kvg5zg8goVMhF4lMtysAhk7Eq74hcqCRn7ycGu03cQ0df1ua+8slShkic/NXR95nMs2IXauz81neCSkpLVq1cz9axv375wveGG7haLDQpVgvz1qax0g4iDvUePHoQK7sMPPwzSyeiEPMGeDQaD4GH06NHgfv/99xOspHuePVsGXALBkyZNnjBhQkVFxS233PLWWwu6du0WC2twayUfGohY8riNUOQqQmXKtK1QGTuVaoKL/SSgEqilEydtyPcQD+2eOqaQjuNWELG8VMA9Ibo9sw5Ev8NTGySV9Bi3FstzgTCCfX7h3S8cPn/lsOm7nCIZOulLD+/p98yXsuDvP3WL23tm0OyvFElNmr7DzzcTwe0ZtZIPjc8XGP3CkqCggvniu6xzQeIRyX2TXuVxS0Su8FyAI6BISYNHTYYq6J2v9w0b+wa4uyQy4JmPjvsIqJQ3PzaX4wRjkTrt5Q9ue3Smn5fcftwPBAKXOSWnhAx79JU3N5o4kRhKgiOeXDD+1eUcr2zJOrt+z4FNDmfqmFfvfOaNMqe3rn0sdIKbglrJh4bdgtIV1CKiqH63CxSHoIjn4MmcxHEcqEWgnYCLEPDjIL8mQxEm8xwRfLw/AKqwpqi8zxX0OIFmUVAFjvd4fAL2TMHPAChWfBACCgqBoMJ7BQ7X48Ajot/v83hxiEKTsXjT6oyeTnBTUCv5QgaYAPGVkWMFiMFrpAe6Bw8zcIvtfQqFMBj2kz7COh0VIB735aNhBtg+QCwEGmxAwJwED+LmQALGB/INZiYagebRotszaiVf7Bud4KYA1P+ogZ2YNSye0R8QAZ3gugEcQ4VXO0FjzUAkG+4C1gmOc+gExzl0guMcOsFxDp3gOIdOcJxDJzjO0RDBoih6vV6PjhiGz+dreCZMvQSLFIQO6OqIWRA6kwI3DKqnv6NugsE35I5oVx0xCSCrgd0M6yaYNLi/pY5YQ5MJBpFv4BkdsYYGto3VCY4H6ATHOXSC4xw6wXEOneA4R7MR3MAqttpg8+B1tAKajeBdu3YdOHAALKtWrYq+Vwu7d+/Ozc2NdtXRAmg2gtkqFbgyghcuXHjmzBnw/Nprr7EFSytXrgz3kPTrh2sgRo4cCdclS5aA9I8dO5aVAePGjYPr9xSEvi4nJwdubdy4EX7OmTOnzrfrqA/NRnBSUtLixYunT5++dOlSp9MpCMKhQ4d+/PFHuPX556G1puFO0cTERMgBd955J/vJFjjBz3nz5ql027cRI0awW4AdO3Ywy6RJk+Du2rVrw7d0nBfNRnD37t2hZu3bt++nn37KJPWll17iOA6YZuuOIjs4mQQD3/AI+AGpBcuiRYtWr15NqjIEPBi5ZA1+7ty5Eyws0+hoJJqN4CiAH7fbDaywF9DDfatnYEcu9ZckCXyeO3eOrqsRjhw5wspqRn/kIVz1jYroaAAtRbCOGIFOcJxDJzjOoRMc59AJjnM0G8EjR440m83Mnp+ff/vtt9e8Xweys7PZxkq1EbWjVhibNm167rnnIgOfPXv26NGjI7zUjZdffvnGG2+Mdm0HmnmzEZycnNy/f3/Wwjl79izYa2xTXxcKCwtvuOGGKEdIcWhM15fu8BZoVkGbu3fv3iqdMjhx4sTIXpH6MGPGjNrvInQXkfPGs02j2QhOSkqaOXNmSkoK2KFRyzqnVq5cCZT06tXrrrvuivTcp08fSO7ycmePHr3gZ4cOHbp27QqOELLJZEqigEZwcXExeAMpv+WWW9iDycn9gPq+fVPeffe9pCTc/2XKlLSUlFSIFTCdQuF0OsMvgtwAwUJo77//PotSampqt27dIFbl5eUDBgzo2bM3GMhPS5YsgXgC3wsXLoynsZDmJPijjz4C4XvggQdKS0tZavbs2dPj8fj9fraRFqFlb79+/datW0clNYXtmAQ5g4kjpD6p6ucCvP766+yUYtZNRuh2PoTurAaZIzGx5759eYxgcOzYsSOh41RduuAOTkwugTPWg8aEHizTp0+H69GjRyFulP7Q7kxQ1LM+c+A+3CcTLkiYJSzr8GBRURGhJT9ziVk0J8GLFy9mlpKS08ABoQKn0GOYQQqtViuhaRSudwsKisAbJN3dd98LJAHfvXqxfZbAEU+tDQS4fv36g5Qz92++2cm6LYEqdjT9wIGDp09/HvxAaR8Otnv3HhzHMTJYNADTps1g9gcfHAUvAjvbYJFt/QS567vv9kCOgWiEHwFs2bIFyva33noLypXNmzfPnTsXgk1LS4O4MYLhFlxfeeWV3bt3h5+KKTQ/wXB30KAhLJkgvSQJN5uB1K+oqGA+QZqBWrDcc899UDyuXbt+wIBBTFQiCQYL2wARrOCN0G3SoPykHkIEL1nyCXgGmkHm2I5dhG62BTSwEMICyjbFXL9+I5QZoij/+OPeSIJlWYWn/HhaXXWeAACprGh5/vnnQb9zu92vvvoqK0syMzOhLnjnnXcIle/6tMJLjuYnmGAZ258lU2rqQEjQPhTsFhRuwWAQkhXkLCsrB66Q3MArWMaMeYwRDJUrlKjscRBf+AmhCYLEKmwSQTDHCf37D2D54JprrgEWIUulpWEhzGA2W+GpYcNuhJI8XKh06tTFZLIwgjt37goGihn4CbcgAmGC4UuBYJZRZs2atXXrVkJrDXb39OnT4Z8g2VDLMPdYQ7MR3CREKckQZm29holOGJAtWCXaMKBwjnJphRPosymiXWMDl4bgCwDwxFR0HU1CmyEY3tsKshh/aDME67gw6ATHORoiWKsLoA3BM9GuOmIShLZao10pkOBoxingHii00a46YhWBqj34oyDLcoKqI34BJXHdEtyqYAezsoPvNS/t9GyrUImmaKogxVCH16UnmPZ9YJI8Pu/TExyhZzS2VTw9fpw900EPGY4VNI3g1NRUdrBGMwITQ1N7PrX8T2OW/eaepaei7zcboMhKSUkJT1hoRuzYsSMpKWnjxo3wLbKqjLj1lhbqrrnjjtAhNY1HowiGpBEEgR2ABfoXxJ5paM0CDc9bJX99aOk1D3/2p9FrV9srlPAx6s0FjVYBsrxm3drBQ4eIvMBcmgsDhgxmgbFkYWNcJ06cqOHpogHB3nXP3fAJTYp4owjeuXPnlClTInuSH3nkEYvFEuHlIoCnZaouQn4/+pPfjZzPqyoem45Gqd133VSEB30lSZo85TlImn15+xkBcKtJiyUbQOrgQSzRU1L7e3xelGNZLigoiPJ2YYBM43K5Dhw6OGfui7woDBw86IeffmSBN0bMGkXwo48+GhWWKIpz586NdLkISKDjf7zZNHvpt9M+3fvsx9++sPTbOR9/887qHZp6sfNsIJ6jRo1auXpV35R+Q4cPkxSZE/gHRz0Ecvzl1i2NSaDGgBGM85kGDRw4dMi4ic8QHAhvHoIJXauXtS+Xk0RQ31jR0/gq4PwEQ3CPj31Coyri3ffec++99zL3WbNfCN2+OLg44fqxH/91zIZr//3ZtaM/vW70kmseWfz7Mes6PL46GFQvXuP69NNPWaJA4bZ1+zYQMvYtU9KmRnu9ULAwIff0Te3v9vtEVdl/IE+Um6dTnZU3S5d9umrNavYhqQPx0LhGogkEQ953uioPHjzIyr3mIriMkD8/suyOtBXl5edIqLpkoUpoGtqm7/xgQ/QPPPQgpD6oP5BBKyqdLPzkfqG5AxePV+e/BnRCpjl+/DihlPTs3QuSK9rfRSA7N+dcednLr74CMYfip/GV1/kJJrSIhqs/GDhbdu7g4UOQWBodHo/2d0GohNr3oZUCR/4yZu11j67t+thn/3h40UXyGoXHH3/89OnTTHAzs7PABcqh5iqfGdhMUJZ1LDbrnj17on1cHG4acfOAQQOB19tuu61fv36N1x4aRXBaWtqAAQP69U8Bgn8+dhQs/Qekvv3229H+LgiBIA9NIyiGoA38wEtr/zFmKRCsEaroNh+mTp06aMhgl8cNKTVkyBC16nzbZgGTp2HDhhWeLHrk0TEL338v2sdFg8VWDZ332YTJQ40imEHFiVOY7Kw4ir59EcAw8T+EqkJSFWPlhbp1lLeLBIQOZanVbotc49qMgHTfvuMrKJll/IjmRlW91VQ0geAWgkbFt6a63Pzstlucn2BWLIQRNcoUdfdCIHghkEoOuzug7QstYNo6qnd/3MYDgoW6SqYHjkeFxqIdjjzrmo/0cF6E0wHKA4kCXhQuOVmhDS4XXFqwmS0s5hBa7TIZXNhbGk6o8xMcxqlTp8Kz3djnRS4vuHBo8hkIkBAvIcfPuoMa2n2ElLu8rIXQVMAH7969mx1ADfUiGwwHPXH16tVhDthEebiWl5dDUsKHNHWqEAQF6QvVOdjZ7M+yMmgQhCpLtujmpptuArvL5Yp8sJGw2+3MEs5JEA6oioFAAEI+e/Ysc5kwYULk/gi1cR6CNZo9wJScPgXXtxa8DXXMsBuHz5j5PGgrO3fvUrSmZfzaOIXsSkSSuQB5Y7M5KMtHFJI87rO1xjK6yUO0//MC0n3w4MFAHmsRbdm29a577h41+t+frVwR4ILrNqy/5bZbd3//3b68/a+9Pp99HXzUmMcejQ7ofIAHb739tiHDhn7x5eai4pPw89CRw59/sem+f90P2WvUqFHDb7rxyaefyi+8kB6POXPmLFiwAMLcvOXLEbfe8u57CyGGUMefKMiHBl5S32TQ1eHu+GcmQJMs+uEInIdg7HymXwJEQlub2UEdnTZj+tbt26ApjOfPXxxwLvRtT3a5Y0qhlzz6wXdb0nNOc9zqLG3CaytRFppOcFjuUwcOgKdvvmUEpMJjTzy+dv06oBa03InPTgJijuefmP/G6/BdoBNB+xI81Azm/Hjo36PGPvUkJMvjY59gBBcUFUKbe8LEZ6DkePDBB8HDvfff98STY6OfbAQyMzMJ/foX5sw2Wy0zX5jFEn/0Iw9Dax6aTGB/74P3x00Y/+jjjz311FPRz1fhPAS3CmjtS9UsygzVsKg63WqqFkh8tFO8IBYIjgk0rKq0XegExzl0guMcOsFxDp3gOIdOcJxDJzjOoRMc54hpghMSEv4j5nHZZZc1tR+7NRG7BHs8Hki7hJjHL3/5y5KSkujYxwxil2AdzQKd4DiHTnCc4/8DQRb90zdfezoAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,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>