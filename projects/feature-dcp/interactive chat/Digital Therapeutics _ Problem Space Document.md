# Digital Therapeutics:  Problem Space Document

# **Table of Contents** {#table-of-contents}

[Table of Contents](#table-of-contents)

[Overview](#overview)

[Problem Space](#problem-space)

[What’s the ‘core’ problem we’re solving, and why?](#what’s-the-‘core’-problem-we’re-solving,-and-why?)

[Business model](#business-model)

[Success criteria](#success-criteria)

[Primary user stories (or scenario) we need to address](#primary-user-stories-\(or-scenario\)-we-need-to-address)

[User story (or scenario) ‘extensions’; and their relative priority](#user-story-\(or-scenario\)-‘extensions’;-and-their-relative-priority)

[Problems, in other functional areas, that we could try to solve at the same time (or at least keep in mind while we’re solutioning)](#problems,-in-other-functional-areas,-that-we-could-try-to-solve-at-the-same-time-\(or-at-least-keep-in-mind-while-we’re-solutioning\))

[Solution Space \- Preliminary Research](#solution-space---preliminary-research)

[MHC current capabilities](#mhc-current-capabilities)

[Current known MHC gaps in capabilities](#current-known-mhc-gaps-in-capabilities)

[Competitive research](#competitive-research)

[Content Sources](#content-sources)

[Advisors](#advisors)

[MHC Exploratory Design Concepts](#mhc-exploratory-design-concepts)

[Simplifying assumptions](#simplifying-assumptions)

[Related Documents](#related-documents)

# 

# **Overview** {#overview}

Digital Therapeutics (DTx) deliver evidence-based therapeutic interventions to users that are driven by high quality software programs to users that prevent, manage, or treat a medical disorder or disease. 

DTx is a rapidly growing market \-- which is expected to rise from $2.8B in 2019 to $13.8 in 2027\. Both information from our sales activities plus from industry conferences/articles reveal that both our current employer and health plan customers purchase significant numbers of DTx applications. 

Mobile Health was founded with the concept of being a consolidator app that offers a suite of digital health solutions. We plan to offer a suite of DTx solutions to disrupt this market. By replacing several separate DTx point solution apps with our suite-approach, our customers can reduce significant costs while Mobile Health generates new revenues from existing and new customers.

# **Problem Space**  {#problem-space}

Currently, our customers purchase DTx apps to help their employees/members receive care for significant health conditions. They are saddled with having to purchase many separate point solution apps which increases their software subscription fees and data complexity while also requiring users to use several applications.  The large fees, increased complexity and poor UX are very problematic from a budgetary, support and user experience standpoint.

## **What’s the ‘core’ problem we’re solving, and why?**  {#what’s-the-‘core’-problem-we’re-solving,-and-why?}

Mobile Health’s Digital Therapeutics (DTx) will deliver evidence-based therapeutic interventions to users that prevent, manage, or treat the following conditions: pre-diabetes, hypertension, musculoskeletal back pain, behavioral health (anxiety, depression \+ insomnia), maternity and substance use. Our DTX solution will support these conditions within our existing app such that our customers use a single application for all the Benefits, Wellbeing, Rewards and Health Condition programs. The single app approach significantly reduces the cost of these programs to employers and reduces the complexity of using many apps while increasing engagement in them with suite approach. The reduced cost and improved UX will allow our customers to offer health condition support to larger employee/member populations instead of just the most unhealthy \-- preventing their people from becoming severely unhealthy in the first place.

## **Business model** {#business-model}

Our intent is to provide a high quality digital therapeutic experience that clients are willing to use as a replacement for their existing DTx vendors and that they are willing to pay a premium over our base software PEPM pricing. We will still use a subscription pricing model (instead of an “enrolled user model”) so that our clients can offer our DTx solutions to all of their employees. 

Our sales team is interested in offering a “Clinical Health Bundle” that includes our Health/Well being Assessment, Health Coach, DT’x along with our Personalization Model/Engine that ties it all together with our applicable Wellbeing content.

### Integrated solution

In the Talent Management HR space, Successfactors proved that a single solution with integrated talent management functions would win in the marketplace (vs many separate point solutions.) The HR buyers wanted fewer apps to support and they valued the integration of user data (including data the user entered) between functions such as recruiting, onboarding, performance management, compensation & training. Successfactors went on to be a $B company, and was purchased by SAP.

This approach also applies to the Wellbeing HR space that is currently filled with many point solutions. The data that helps users improve their health can be applied across many health conditions as does the behavioral health information entered by users. Current market leaders such as Livongo, Omada Health & Lark are starting to use this approach.

Mobile Health is well suited to also pursue an integrated solution, with not only new DTx programs but also with its extensive wellbeing content library of challenges, journeys & healthy habits. Plus Mobile Health has extensive experience in delivering wellbeing rewards that most competitors do not.

Data integration use case examples:

- User weight data gathered by wireless scales can be used in Diabetes prevention, Hypertension, & Weight management.  
- User (Cognitive Behavior Therapy) thought records for anxiety can be used with depression, insomnia and other behavioral health DTx’s.  
- User journey data entries (e.g., daily steps / activity minutes, CBT thought records) can be used with associated DTx’s.

Integrated with client-specific resources:

### DTx’s and Journeys

*A main difference between our existing Journeys and DTX’s is that DTX’s use a scientifically proven therapeutic methodology to substantially improve a user’s health condition. Additionally, DTx includes social & coaching & educational components whereas Journeys are primarily educational in nature.*

## **Success criteria** {#success-criteria}

Mobile Health DTx’s will achieve success when we deliver proven user health improvements in their target health conditions in the form of improved biometrics, assessments, and lower medical costs for our users and customers. 

Users will experience easier, more timely, and less intrusive methods to get therapeutic help for their conditions. Customers will have less expensive as well as simpler and integrated solutions that can be accessed by much larger populations by replacing multiple point solutions with Mobile Health DTx’s. 

Objectives:

- First DTx solutions delivered in Q1 2022 timeframe  
- Sell into customers in 1st H 2022 with resulting high client satisfaction.  
  - RTX  
  - Truist  
- Efficacy proven with biometric outcome and self assessment improvements & clinical studies  
- Add 10 customers in 2022 \-  generating $3MM in revenues  
- Enhance device integration to include wireless scales & blood pressure cuffs  
- Include new community functionality so that users can get support from other users with the same conditions.

## **Primary user stories (or scenario) we need to address** {#primary-user-stories-(or-scenario)-we-need-to-address}

Background:   
The primary user story involves people who has been identified as having one of the health conditions addressed by our DTx programs (i.e., pre-diabetes, anxiety, depression, insomnia, hypertension, musculoskeletal pain, weight management, maternity or substance use) by either directly selecting one or by our invitation \-- resulting from completing our health/wellbeing assessment, related Journeys or Healthy Habits, or by gap in care information provided by our partners.

The condition is severe enough that the users want relief from it and/or its symptoms.  When they complete the DTx program, they expect to physically or mentally feel better either immediately or by knowing they have improved. 

They want to learn how they can make improvements, as well as some programmatic support during the process. And they want to be comforted by the fact that the steps they are taking for improvement are backed by medical research. They will also want evidence that they have made some improvements.

User stories: 

1. As a user, I completed the MHC Health & Wellbeing assessment including getting a biometric screening. My blood pressure was quite high\! I want to work on my hypertension because my doctor said I should but I’m feeling overwhelmed and not really sure how to get started.

2. As a user, I want relief from my chronic back pain, but I struggle to maintain a consistent care routine

## **User story (or scenario) ‘extensions’; and their relative priority** {#user-story-(or-scenario)-‘extensions’;-and-their-relative-priority}

At the beginning of our DTx programs, users can benefit from basic background information on their condition as well as simple step-by step instructions on how to make improvements (e.g., daily or weekly actions they can take.) 

During the DTx program, users can also benefit from ongoing support on completing health actions that will help abate their condition (e.g., reminders, accolades, suggestions for completing the actions or new beneficial actions.)

After completing our DTx program, our users will want additional support to maintain or continue to make improvements. Participation in additional Journeys, Team and Peer Challenges, Healthy Habits plus support from other friends, family and users with the same condition can provide them with the support they need. 

## **Problems, in other functional areas, that we could try to solve at the same time (or at least keep in mind while we’re solutioning)** {#problems,-in-other-functional-areas,-that-we-could-try-to-solve-at-the-same-time-(or-at-least-keep-in-mind-while-we’re-solutioning)}

Several of our DTx programs involve users tracking physical activities (e.g., steps, activity minutes) and/or specific biometric measurements (e.g., weight, blood pressure.) Our current physical activity tracking is limited to just a few devices with some requiring additional user intervention such as app syncing to record the activities. Also, we do not currently collect non-activity biometrics such as weight and blood pressure from devices. 

Also, our reporting that demonstrates the efficacy of our programs is quite nacient. DTx would require a new reporting paradigm to measure & demonstrate improvement to our customers that could benefit our other content programs.

Additionally, new user inputs and page layout elements (such as the ability to edit/remove past entries) could benefit other content programs. 

# **Solution Space \- Preliminary Research** {#solution-space---preliminary-research}

## **MHC current capabilities** {#mhc-current-capabilities}

Our existing Journeys and Healthy Habits provide excellent information for several of the conditions targeted by our DTx programs including anxiety, depression, insomnia, hypertension, weight management & substance use. See the “Current Content to DTx mapping Google Sheet below for more details.

Our Journeys and Healthy Habits also use some building blocks that can be used in conjunction with our DTx programs including:

## **Current known MHC gaps in capabilities** {#current-known-mhc-gaps-in-capabilities}

Our existing building blocks do not provide the following required functionality:

- Goal creation & tracking  
- Community search & chats  
- Daily journaling with history  
- Tracking biometric value changes with bluetooth weight scales and blood pressure cuffs as well as giving user feedback with graphs  
- Reminders delivered throughout the day  
- Digital coaching chat/video

Reporting

- Dashboards that highlight improvements for DTx participants

## **Competitive research** {#competitive-research}

MHC “suite approach” product strategy:  
When we formed MHC, we deliberately chose a “suite” approach rather than a “point solution” approach based on our previous experience where the suite approach of offering an app that included several, integrated functions was much more successful in the marketplace than a single function app. DTx gives MHC a perfect opportunity to increase our competitive differentiation by creating integration points between our existing Health/Wellbeing assessment/coach, Journeys, Peer challenges and Healthy Habits. Additionally, DTx integration with our industry leading Rewards functionality offers a significant competitive advantage over the current DTx product companies. 

See competitor information with high level requirements plus app demos/screens in Related Documents for the following companies:

- Virgin Pulse (Blue Mesa DPP)  
  - [Demo link](https://vimeo.com/156591786)  
  - [Curtis Duggan \-- Co founder \-- Presentation](https://www.youtube.com/watch?v=Qv8TEQ_FY5w)  
- Lark  
  - [Screen shots doc link](https://docs.google.com/document/d/1xj10ce05CIbjjQlpIDeN_P2Z9KLzcAujeLH0ONWled0/edit)  
  - [Short marketing video](https://www.youtube.com/watch?v=wP3BZHvCuQg)  
  - [Julia Hu \-- CEO](https://www.cxotalk.com/bio/julia-hu-ceo-lark-technologies)  
  - [Julia Hu at the EG conference](https://www.egconf.com/videos/julia-hu-ceo-cofounder-lark-eg9)  
- Omada  
  - [Faux demo link](https://www.youtube.com/watch?v=0H7YZFhVYAs)  
  - [Omada Health \-- Sean Duffy Presentation](https://www.youtube.com/watch?v=8w_9EFiBjRg)  
  - [Healthy Snacking with Omada](https://vimeo.com/452351318)  
- Sleepio / CBT  
  - [Peter Hames](https://www.youtube.com/watch?v=rGhFXqs81pQ) and [another one](https://www.youtube.com/watch?v=OXvRDdDjDFU)  
- Livongo  
  - [Screen shots doc link](https://docs.google.com/document/d/1xj10ce05CIbjjQlpIDeN_P2Z9KLzcAujeLH0ONWled0/edit)  
  - [Livongo President \-- Jenny Schieder](https://www.youtube.com/watch?v=TcOTh73SMro)  
  - [Livongo UX / Screens](https://www.pinwheelcontent.com/work/livongo)  
  - [Livongo Diabetes](https://vimeo.com/513184148)  
  - [Livongo Hypertension](https://www.youtube.com/watch?v=CNtRaPIyxIM)  
  - [Jennifer Ng: Customer Experience](https://vimeo.com/160091622)  
  - [Brand](https://www.pinwheelcontent.com/work/livongo)

- Big Health  
  - [Marketing demo link](https://vimeo.com/228723759)

See app screens & tear downs in Related Documents for the following apps:

Diabetes Prevention (In progress)

- One Drop  
-  *DPPStar*  
- *Diabetes Prevent*

Behavioral Health

- Depression  
- Best Depression apps in Apple App store  
- Bloom CBT  
- CBT-i Coach  
- Wisdo  
    
  Mindfulness  
  - Headspace  
  - MindDoc  
  - *Mindfulness Coach*


Insomnia

- *Insomnia Coach*  
  - *CBT-I Coach*  
  - *BedTyme*  
  - *Pzizz*

  *Anxiety*

- 


Musculoskeletal

- Hinge Health  
- Back Doctor  
- ROMWOD  
- Back exercises

Health Coaching

- Inpowr

 Maternity:

* *Ovia* \- check for demo?  
* BabyScripts  
* *WebMd*  
* Expectful 

## **Content Sources** {#content-sources}

Diabetes Prevention

- **SME / Study sponsor**  
  - Dr. Lauren  
- **Assessment**  
  - User weight loss   
- **Content Sources**  
  - CDC National Diabetes Prevention Program

Depression & Mindfulness

- **SME / Study sponsor**  
  - Monique Thompson  
  - Adrian Aguilera  
- **Assessment**  
  - Patient Health Questionnaire (PHQ-9)  
- **Content Sources**  
  - **Cognitive Behavior Therapy by Monique Thompson**  
  - The 10-step Depression Relief Workbook by Simon Rego & Sarah Fader  
  - Cognitive Behavior Therapy \- 7 Ways to Freedom by Lawrence Wallace  
  - Cognitive Behavior Therapy in 7 Weeks \- a Workbook for Managing Depression & Anxiety by Seth Gillihan  
  - The CBT Workbook for Mental Health by Simon Rego & Sarah Fader  
  - *The Cognitive Behavioral Workbook for Depression by Willam Knaus*

Insomnia & Mindfulness

- **SME / Study sponsor**  
  - Monique Thompson  
- Assessment  
- **Content Courses**  
  - **Sleep Through Insomnia by Brandon Peters**  
  - The Sleep Workbook by Renata Alexandre  
  - Why we Sleep by Matthew Walker

Anxiety

- **SME / Study sponsor**  
  - Monique Thompson  
- **Assessment**  
  - Generalized Anxiety Disorder assessment (GAD-7)  
- **The Anxiety & Worry Workbook by David Clark & Aaron Beck**  
- Exposure Treatments for Anxiety Disorders: A Practitioner’s Guide by Rosqvist  
- Cognitive Behavior Therapy for Generalized Anxiety Disorder by Dugas & Robichaud  
- The Comprehensive Clinician’s Guide to Cognitive Behavior Therapy by Leslie Sokol & Marci Fox  
- The CBT Workbook for Mental Health by Simon Rego & Sarah Fader  
- 10-Minute CBT by Michael Otto  
- 

Hypertension

- **SME / Study sponsor**  
  - Dr. Lauren

Musculoskeletal \- Back Pain

- **SME / Study sponsor**  
  - Michael Crooks, Cari Benbow, Lauren Halloran,   
- **McKenzie Method: Treat your own Back by Robin McKenzie**  
- Back Pain Relief Plan by Ricky Fishman  
- 8 Steps to a Pain-free Back by Esther Gokhale  
- Low Back Pain Program by Sherwin Nicholson  
- Mayo Clinic: Back & Neck Health by Mohamad Bydon  
- Healing Back Pain by John Sarno  
- Built from Broken by Scott Hogan  
- Comparison of 5 low back disability [questionnaires](https://academic.oup.com/ptj/article/82/1/8/2836935)  
- Oswestry low back disability [questionnaire](https://www.rehab.msu.edu/_files/_docs/Oswestry_Low_Back_Disability.pdf)  
- Quebec low back disability [questionnaire](https://www.physio-pedia.com/Quebec_Back_Pain_Disability_Scale)

	  
Maternity / Women's Health

- **SME / Study sponsor**  
  - Dr. Lauren

Weight Management \- TBD

*Substance use \- Deferred for initial release*

- *Transforming the Addictive Mind by Darrin Ford & Christy Cosper*

## **Advisors** {#advisors}

Dr. [Monique Thompson](mailto:mqt@sfbacct.com)  
Dr. [Adrian Aguilera](mailto:aguila@berkeley.edu)

## **MHC Exploratory Design Concepts** {#mhc-exploratory-design-concepts}

Our Journeys and Healthy Habits also use some design elements that can be used in conjunction with our DTx programs including:

## **Simplifying assumptions** {#simplifying-assumptions}

Digital coaching  
Initially, we’ll use voice & video recordings to provide coaching content. Since there is a precedent and existing competitors using chatbots for coaching, we’ll explore that as a potential replacement for audio/video. 

Communities  
Initially, we’ll start with a basic search by listed topics and a chat that only provides canned responses (e.g., accolades).

# **Related Documents**  {#related-documents}

See additional documents listed below for more detailed information

* Product \> 01\_Roadmap \> Digital Therapeutics: Digital Therapeutics Competitive Intel [Link](https://docs.google.com/spreadsheets/d/1MXzhZdKsF4yWuVOGov-1hTlZa1XwNTnK-n8AStGouNY/edit#gid=0)  
* Product \> 01\_Roadmap \> Digital Therapeutics: Current Content to DTx mapping \[[Link](https://docs.google.com/spreadsheets/d/1VnFUhYpj_QzAAJ2dbAMHM_p7EYzkYg0TIHxZs3gWUjI/edit#gid=0)\]  
* Product \> 01\_Roadmap \> Digital Therapeutics:  PM documentation regarding solution \[[Link](https://docs.google.com/document/d/1MpqJIo_xkhgYLxRZqE3ELFjP5DniO6veWFKYy5TVJpc/edit#heading=h.lqbr1dp06bx9)\]

Diabetes

- One Drop  
  - [link](https://docs.google.com/document/d/138N9ZynkLQpo96sz6H5LWCS0xDrxHBF0WWznFZaJGeQ/edit)

Behavioral Health

- Best Depression apps in Apple App store  
  - [Link](https://docs.google.com/document/d/1WHNKryr_bUMMc0vKJKmvBewdnQujBAgW-acoccrwisg/edit)  
- Bloom CBT  
  - [Link](#)  
- CBT-i Coach  
  - [Link](https://docs.google.com/presentation/d/1ifdmsUfPkF83Pr5ccOLTCFG_dQFTQtY8agN3xrZbPNc/edit#slide=id.p)  
- Wisdo  
  - [Link](https://docs.google.com/presentation/d/1OYXk6eka-NY8Irqw9U7NyXU088vYa2_IX2BkM0AgkuI/edit#slide=id.p)  
- Headspace  
  - [Link](https://docs.google.com/presentation/d/1pTMPch3qAcAe4JQ4mgCglpDbbr8FAeGfY8lBFNWO2rI/edit#slide=id.p)  
- MindDoc  
  - [Link](https://docs.google.com/presentation/d/1gnGG40-8xafHPVOV_ZOuxNVXsVrwYTIoDqwN0pXVW30/edit#slide=id.p)  
- Insomnia Coach  
  - [Link](https://docs.google.com/document/d/115wFhRCpRlIds9oTRMiVoz5uJL9MXW0-8A9DV9WCACE/edit)

Musculoskeletal

- Hinge Health  
  - [Link](https://docs.google.com/document/d/10Z7o-KUKUV1RTjKvHsNQfU2WMP1xuuOVQpzA54Nw1D8/edit)  
- Back Doctor  
  - [Link](https://docs.google.com/document/d/10T2BkFU_IyjY-44JuHPgFZCGhEM-IIJ7KyMGDw1wi5c/edit)  
- ROMWOD  
  - [Link](https://docs.google.com/document/d/111Tv6cQsIUp3_jFLeZMhsuVxzWlJJtZrzSLO8OlOops/edit)  
- Back exercises  
  - [Link](https://docs.google.com/document/d/10jZfJpV-VVraR5oBMLgD5g6BHy0mRXt3es6vtivn7qA/edit)

Health Coaching

- Inpower  
  - [Link](https://docs.google.com/document/d/126ZnkwPrk7isEchYraOLeDKM8E0uu2Tr6MiUKDCCeaE/edit)


* Product \> 01\_Roadmap \> Digital Therapeutics:  Tech spec for release {X} (if applicable)  
* Product \> 01\_Roadmap \> Digital Therapeutics:  Design spec for release {**Y**}  
* Product \> 01\_Roadmap \> Digital Therapeutics:  Tech spec for release {**Y**} (if applicable)