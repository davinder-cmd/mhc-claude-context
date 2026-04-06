# Mobile Health Computer Systems Overview

This document provides a technical, data, and functional overview of Mobile Health's computer systems. It serves as foundational context for future AI prompts concerning the system architecture and operations.

The Mobile Health system provides a digital wellness experience for end-users, who are usually employees of companies that choose to provide this service to their employees. This digital wellness experience allows users to view health information, learn about improving their health, earn rewards for taking health-related actions, get coaching about improving their health, and participate in health-related challenges with their colleagues.

# Technical Perspective

The Mobile Health system is comprised of a robust backend server, an administrative web application, and multiple frontend client applications.

## Backend Server

The core business logic and data management are handled by the backend server. Background processing is handled by Celery workers with a RabbitMQ broker.

* **Framework:** Django  
* **Language:** Python  
* **Database:** PostgreSQL  
* **Background Processing:** Celery with RabbitMQ broker

## Administrative/Configuration Web Application

An internal web application is utilized for system administration and configuration.  This allows administrators to create, update, view, and delete configuration objects in the database, as well as perform other functions such as:

* Load files containing data on users (census files), biometric data, custom field values, user gaps in care, updates to reward fulfillments, etc.  
* View user information, and in some cases modify or override it  
* copy configuration data from one client to another (or from clients to libraries and vice versa)

**Framework:** Django backend, using Django templating for the web pages

## Frontend Clients

End-users interact with the system through three distinct frontend clients, all communicating with the backend via an API. The majority of the business logic resides on the backend server, with frontends primarily focusing on UI presentation.

* **Web Browser Frontend:**  
  * **Framework:** Angular  
* **Native Android App:**  
  * **Language:** Java  
* **Native iOS App:**  
  * **Language:** Swift

## Software Development Kits (SDKs)

We provide software development kits (SDKs) to partners to facilitate the integration of our functionality into their own applications. These are packages or libraries of most of the frontend functionality that can be integrated into partners’ apps. There are different SDKs for each of the three supported frontend platforms: iOS, Android, and Web/Angular.

## Production System Architecture (Shards)

Our production system is organized into shards, which are clusters of servers with a common database that serve a subset of partners, clients, and their users.

* **Database Server:** Each shard has a database server (some use Amazon's RDS).  
* **Web Application Servers:** Each shard has multiple web application servers (e.g., w1, w2, w3). These run nginx and the Django application, which runs using UWSGI.  
* **Celery Processing Servers:** Each shard may also have servers dedicated to running Celery processing. “n” servers (e.g. n1, n2) are older dedicated Celery servers; “j” servers (e.g. j1, j2) are newer dedicated Celery servers. “m” servers (m1) are dedicated servers running the RabbitMQ broker, and a shard-wide Redis server.

There is another cluster of servers which handles user login and authentication. This cluster has similar database and web application servers. Its database contains a subset of the tables (mostly concerned with users and authentication), but across all users in the system. Every shard’s users (and clients) are replicated to the login database. After authentication, a user session is redirected to the appropriate shard for that user’s client.

# Data Perspective

## Page Layouts and Page Layout Elements

The system's user interface experience is highly configurable through the use of "Page Layouts" and "Page Layout Elements."

* **Page Layouts:** These define an entire page or screen displayed to the end-user. Each Page Layout is an ordered collection of Page Layout Elements. Page layouts can have configurable Page Parameters, which are data fields that are included in a link to a page layout, and the configuration of the page layout can use their values to adjust its content and behavior.  
* **Page Layout Elements:** These are individual UI widgets that are displayed as part of a page or screen. They are typically stacked vertically on the screen.  There are many different types of page layout elements, including:  
  * HTML \- a simple container for HTML. HTML rendering is performed using Mustache, so that dynamic content can be included in the HTML.  
  * User Input \- a collection of user input fields, which can be text boxes, checkboxes, date pickers, multi- or single-select buttons, etc.  
  * List \- a paged list of rows of data, populated by a formula on the backend.   
  * Search \- a text box for a search term and a paged list of rows of data, populated by a formula on the backend, which uses the value of the search term to filter the data.   
  * Button \- a button that when clicked causes configurable actions to be performed, and then redirects the user to a configurable destination in the app.  
  * Filtered List \- a list of rows of data, populated initially by a formula on the backend; with configurable filtering controls, that allow filtering by the frontend of the data shown  
  * Tabs \- a container with configurable tabs across the top; each tab’s content is populated from another Page Layout

## Data Organization

The system organizes data in a hierarchical structure:

* **Users:** End-users of the system.  
* **Clients (Employers):** Groups of users, such as employers.  
* **Libraries**: A blueprint for the configuration data. Similar to clients, but don’t represent real-world organizations. Libraries don’t have users. Configuration is usually developed in a library, and then deployed (copied) to clients.  
* **Partners (Contracting Entities):** Entities like insurers, benefit managers, or brokers, that encompass multiple clients.

## Client Configuration

The configuration for a Client consists of various items. The major data models include:

* **Incentives:** Reward users with specific Reward Types, generating a Fulfillment upon reward.  
* **Messages and Emails:** Messages delivered in-app, via email, push notifications, or API to a partner.  
* **Task Handlers:** Perform processing tasks, including API data exchange and running Action Chains.  
* **Custom Fields:** Flexible fields to store almost any type of data for a user, group of users, or client.  
* **Channels and Channel Blueprints:** A social feed or chat data structure, with posts and comments, allowing users to interact with each other and/or the system in a conversational mode   
* **Actions & Action Chains:** Configuration that performs various activities in the system, such as saving data or publishing custom events.  
* **Health Assessments:** Health assessments are a configurable set of questions that users fill out to give the system a health status and history for the user. These are often used to determine which wellness programs to offer the user, as well as to give the user health coaching.  
* **Points Plans:** A form of reward type. Users can be rewarded with points, and when they hit certain levels or thresholds of points, they can be rewarded with other types of rewards.  
* **Currency, Store, and Store Items:** Internal currencies can be created, and users can be rewarded in these currencies. They can then use their accumulated currency balance to purchase items in the internal store.  
* **Raffles:** Raffles or sweepstakes can be configured, where users purchase or are rewarded with raffle entry tickets, and on a given date, entries are randomly selected to win the raffle prizes.

There are many other tables that are used in the configuration, but those are the major ones.

## Programs

Configuration data is organized into Programs, which act as buckets for configuration data and facilitate actions on groups of items.

## User-Related Objects

Many configuration objects have corresponding user-related objects in the database to track a user's state and history relevant to the configuration. For example, a `UserIncentive` table tracks a user's state for each incentive they are eligible for.

Other user-related objects that don’t specifically relate to a configuration object include:

* **Activity:**  Data on user activity, such as steps, sleep, calories consumed, exercise minutes, and measurements such as weight, blood pressure, etc.  
* **Biometrics:** User biometric data can be entered by users via the health assessment, or uploaded into the system by administrators, or provided via API.  Highly related to health assessment data, biometric data is often used to determine which wellness programs to offer the user, as well as to give the user health coaching.

## User Groups

Users can be organized into User Groups. A user may belong to multiple groups. Membership in groups is limited by date range. Groups are used for a variety of purposes – anytime a collection of users is needed, such as whether a user is enrolled in a particular wellness program, a challenge, belongs to a challenge team, etc.

## Events and Triggering

Many activities within the application generate Events, such as:

* Logging in  
* Viewing a page  
* Saving data  
* Syncing external tracker data  
* Getting a reward  
* Sending a message

Other objects can subscribe to these events, initiating processing when a specific event is published; this is referred to as triggering.

* **Event Subscriptions:** Can be scoped to apply only to a subset of events of a particular type.  
* **Rules:** An additional Rule can often be applied to a subscription. This Rule is evaluated to determine if processing should be initiated after the subscription is triggered. Rules are simple conditionals made up of Data Elements compared with values using conditional operators, connectable with OR and AND operators.  
* **Data Elements:** References to various data items in the system.  
* **Triggerable Objects:** Examples of objects that can be triggered via subscriptions include Incentives, Messages, Custom Fields, and Task Handlers.

There are many system events that are defined in the code; these are published by the code usually data is saved, or on other activities. Additionally, there are custom events, defined as part of the configuration for a client or library. These custom events can be defined, with specific items in their payload, and triggers can be set up to trigger activity when they are published (using the same mechanism used for system event triggers). These custom events can be published manually by an administrator using the web-based admin system, or they can be published via Actions in an Action Chain.

## Actions and Action Chains

An Action Chain is a configurable sequence of Actions, which usually save data into the system, but can also perform other actions. Actions can be subject to various flow control mechanisms using formulas:

* skip the next action in the chain if a formula returns truthy  
* cause a validation error if a formula returns truthy  
* stop the action chain execution if a formula returns truthy

Current actions include, but are not limited to:

* save data into a custom field  
* save data into the user’s profile  
* complete a “self-reported” incentive  
* publish a client custom event  
* save user health assessment answers  
* make a store purchase  
* enter user activity data, such as steps, sleep, exercise, calories consumed, etc

The results of each action executed in the chain are accumulated and available to subsequent actions in the chain, and their control formulas.

## Formulas

For complex configuration calculations, we use Formulas, a proprietary functional programming language for transforming and generating data.

* **Usage:** Often used to transform user input or external data, evaluate complex conditionals, and transform data for display or external use.  
* **Data Access:** Formulas can access system data via Data Elements (for single values) or Queries (for larger datasets).  
* **Custom Field Generation:** Custom field values can be generated from formulas, commonly used with an event trigger or scheduled processing.  
* **Rules:** Formulas can also be used in Rules to generate data for conditional comparisons.  
* **Actions:** Formulas are heavily used in Actions to generate parameter values, validate actions, and control action flow in an Action Chain (e.g., skipping actions, stopping the action chain).

# Functional Perspective

## APIs

The interaction between the frontend clients and the backend server is facilitated by a well-defined API.

* **`getPageLayoutForID` Function:** Frontend clients call this API function to retrieve information about a specific Page Layout (including its associated Page Layout Elements) to dynamically render the user interface.  
* **Data Submission API Functions:** A variety of other API functions allow frontend clients to send data back to the server.  
* **API Expansion for New Features:** As new Page Layout Elements are introduced, it may be necessary to extend the API with new functions to support data submission or specific user actions related to these new elements.

## Scheduled Processing

In addition to events, many of the same objects can initiate processing via a schedule (daily, weekly, monthly, yearly, etc.).  This scheduled processing occurs in the middle of the night (US Pacific time), and is mostly run using the Celery background job processing package.  This processing is sometimes referred to as the “nightlies” or “nightly processing”.

# Company Overview

Mobile Health Consumer provides digital wellness services directly to employers, and to employers indirectly via health insurance companies, insurance brokerages, and benefit management companies.

## Company Structure

The company’s Engineering department develops the backend server software and the frontend software that is used by end-users. It additionally develops the web-based administrative system to manage clients and users, as well as to configure the wellness programs for them.  The software focuses on creating “building blocks” components that can be put together and configured to create the user experience for end-users. For instance, instead of developing specific pages for the end-user experience, the Engineering department develops “page layout elements”, which are UI widgets that can be configured (by the Innovations department) and put together to create a “page layout”, which represents the page seen by the end-user.

The Innovations department “builds” the product that the end-user sees and uses, out of the building block components that the Engineering department creates. They arrange and connect the building blocks, and configure them. This department has fairly technical staff.

The Client Services department (CS) manages the relationships with the clients (employer customers), and customize the product configuration for specific clients. The CS staff is split into two groups: account managers and tech leads. The account managers are non-technical staff who discuss requirements with the clients and manage the relationships with clients. The tech leads are semi-technical staff (but not usually software developers) who use the administrative system to customize the client configuration, load user data, and provide support for end-users.