# Legacy / Additional Items Requiring Review


Webex Calling Customer Assist is designed to provide significant contact center capabilities such as queue management, screen pop, analytics, reports, and so on. You can easily elevate your Webex Calling Call Queue to Customer Assist while maintaining the existing settings. Agents and supervisors can access the features directly from their Webex App.

You need to assign a Customer Assist license to the users Charles Holland and Anita Perez, remember that Customer Assist license already includes a Webex Calling Professional licenses.

1. Continuing on demo workstation (virtual workstation) and Webex Control Hub browser tab.  Navigate to MANAGEMENT > Users then select the Charles Holland user.

![legacy-start image 1](img/legacy-start-001.png)


1. Scroll down a little on user page to Licenses section, click Edit Licenses.

![legacy-start image 2](img/legacy-start-002.png)


1. Click Edit Licenses again  on Edit Licenses for cholland@cbXXX.dc-YY.com

![legacy-start image 3](img/legacy-start-003.png)


Click Calling and remove the Webex Calling Professional license you assigned before.

![legacy-start image 4](img/legacy-start-004.png)


Click Customer Assist and select the Customer Assist license. Click Save.

![legacy-start image 5](img/legacy-start-005.png)


Click Close.

![legacy-start image 6](img/legacy-start-006.png)


Repeat above steps (1 through 6 ) and assign Customer Assist license to Anita Perez as well.

## Module 2g: Announcements Text-to-Speech Capabilities


Text to Speech (TTS) support in the Webex Calling Announcement Repository streamlines the creation and management of audio announcements by allowing users to generate spoken messages directly from written text. With this feature, you can easily manage and update TTS announcements in a centralized location, ensuring dynamic control over all announcements that use the Announcement Repository. TTS also enables seamless integration across supported features, rich customization through SSML tags for expressive and natural-sounding speech, and offers multiple voice and gender options to suit your business needs. Powered by AI, TTS in Webex Calling transforms written content into professional audio for IVR, greetings, and call flows, enhancing both flexibility and efficiency in communication.

You are going to create now all the announcements you will use in the Customer  Assist configuration.

Click Calling under SERVICES and then click Features.

![legacy-start image 7](img/legacy-start-007.png)


1. Click Add new in the Announcements section in order to create the first prompt for the Customer Assist configuration.

![legacy-start image 8](img/legacy-start-008.png)


1. Click Text to speech to create the first prompt.

![legacy-start image 9](img/legacy-start-009.png)


1. You can configure announcements (prompts) at Organization or at Location level, for this lab you will configure the announcement at Organization level. Select Organization under Level.

![legacy-start image 10](img/legacy-start-010.png)


1. Enter “Welcome Message” as the Label and File name in the Text to speech section.

![legacy-start image 11](img/legacy-start-011.png)


1. Enter “Thank you for calling Cisco Live Amsterdam. Experience the future of AI powered collaboration with us. For Sales, please press 1. For Support, please press 2.” as the Enter your text here in the Text to speech section. You may have up to 3000 characters in the text to speech feature per prompt.

![legacy-start image 12](img/legacy-start-012.png)


1. Under the Select Language dropdown menu, keep English selected. Currently, only English is supported as this feature is in beta.

1. Under the Select Voice dropdown menu, select Veronica-Female. Currently, only two voices are supported—one male and one female—as this feature is in beta.

![legacy-start image 13](img/legacy-start-013.png)


1. Click Generate. You can configure up to 150 announcements per week

![legacy-start image 14](img/legacy-start-014.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 15](img/legacy-start-015.png)


1. Go back to Announcements.

![legacy-start image 16](img/legacy-start-016.png)


1. Now let´s work on an Overflow prompt. In Webex Calling Customer Assist, "overflow" happens when all agents are busy or the call queue is full. When this occurs, incoming calls are automatically handled according to preset rules, such as redirecting them to another team, sending them to voicemail, or playing a recorded message. This ensures that callers receive a response even during periods of high call volume. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 17](img/legacy-start-017.png)


1. Select Organization under Level.

![legacy-start image 18](img/legacy-start-018.png)


1. Enter “Overflow” as the Label and File name in the Text to speech section.

![legacy-start image 19](img/legacy-start-019.png)


1. Enter “We apologize. We are currently experiencing a high volume of calls. Please try again later.” as the Enter your text here in the Text to speech section.

![legacy-start image 20](img/legacy-start-020.png)


1. Under the Select Voice dropdown menu, select Calvin-Male.

![legacy-start image 21](img/legacy-start-021.png)


1. Click Generate. You can configure up to 150 announcements per day.

![legacy-start image 22](img/legacy-start-022.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 23](img/legacy-start-023.png)


1. Go back to Announcements.

![legacy-start image 24](img/legacy-start-024.png)


1. Now let´s work on an Comfort prompt. In Webex Calling Customer Assist, a comfort message (sometimes called a “comfort prompt”) is a recorded announcement played to callers who are waiting in a queue for an agent. Its purpose is to reassure callers that their call is still in progress and will be answered as soon as possible. Comfort messages help reduce caller frustration by letting them know they haven’t been forgotten and providing updates about their wait time or queue status. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 25](img/legacy-start-025.png)


1. Select Organization under Level.

![legacy-start image 26](img/legacy-start-026.png)


1. Enter “Comfort” as the Label and File name in the Text to speech section.

![legacy-start image 27](img/legacy-start-027.png)


1. Enter “Thank you for your patience. All of our agents are currently assisting other callers. Your call is important to us and will be answered as soon as possible.” as the Enter your text here in the Text to speech section.

![legacy-start image 28](img/legacy-start-028.png)


1. Under the Select Voice dropdown menu, select Calvin-Male.

![legacy-start image 29](img/legacy-start-029.png)


1. Click Generate.

![legacy-start image 30](img/legacy-start-030.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 31](img/legacy-start-031.png)


1. Go back to Announcements.

![legacy-start image 32](img/legacy-start-032.png)


1. Now let´s work on an Sales prompt. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 33](img/legacy-start-033.png)


1. Select Organization under Level.

![legacy-start image 34](img/legacy-start-034.png)


1. Enter “Sales” as the Label and File name in the Text to speech section.

![legacy-start image 35](img/legacy-start-035.png)


1. Enter “Thank you for calling our Sales Department!. All of our sales representatives are currently assisting other customers. Please stay on the line and the next available representative will be with you shortly. We appreciate your patience!” as the Enter your text here in the Text to speech section.

![legacy-start image 36](img/legacy-start-036.png)


1. Under the Select Voice dropdown menu, select Veronica-Female. Currently, only two voices are supported—one male and one female—as this feature is in beta.

![legacy-start image 37](img/legacy-start-037.png)


1. Click Generate.

![legacy-start image 38](img/legacy-start-038.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 39](img/legacy-start-039.png)


1. Go back to Announcements.

![legacy-start image 40](img/legacy-start-040.png)


1. Now let´s work on an Support prompt. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 41](img/legacy-start-041.png)


1. Select Organization under Level.

![legacy-start image 42](img/legacy-start-042.png)


1. Enter “Support” as the Label and File name in the Text to speech section.

![legacy-start image 43](img/legacy-start-043.png)


1. Enter “Thank you for calling our Support Team. All of our agents are currently assisting other customers. Please stay on the line, and the next available agent will be with you shortly. We appreciate your patience and are here to help you as soon as possible.” as the Enter your text here in the Text to speech section.

![legacy-start image 44](img/legacy-start-044.png)


1. Under the Select Voice dropdown menu, select Veronica-Female. Currently, only two voices are supported—one male and one female—as this feature is in beta.

![legacy-start image 45](img/legacy-start-045.png)


1. Click Generate.

![legacy-start image 46](img/legacy-start-046.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 47](img/legacy-start-047.png)


1. Go back to Announcements.

![legacy-start image 48](img/legacy-start-048.png)


1. Now let´s work on a Sales Whisper prompt. A whisper in Webex Calling Customer Assist is a short audio message played only to the agent before they answer a call, notifying them of which queue the call is coming from. This helps the agent prepare and respond appropriately to the caller’s needs. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 49](img/legacy-start-049.png)


1. Select Organization under Level.

![legacy-start image 50](img/legacy-start-050.png)


1. Enter “Sales-Whisper” as the Label and File name in the Text to speech section.

![legacy-start image 51](img/legacy-start-051.png)


1. Enter “You are receiving a call from the Sales queue.” as the Enter your text here in the Text to speech section.

![legacy-start image 52](img/legacy-start-052.png)


1. Under the Select Voice dropdown menu, select Calvin-Male.

![legacy-start image 53](img/legacy-start-053.png)


1. Click Generate.

![legacy-start image 54](img/legacy-start-054.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 55](img/legacy-start-055.png)


1. Go back to Announcements.

![legacy-start image 56](img/legacy-start-056.png)


1. Now let´s work on a Support Whisper prompt. Click Add File.

1. Click Text to speech to create the prompt.

![legacy-start image 57](img/legacy-start-057.png)


1. Select Organization under Level.

![legacy-start image 58](img/legacy-start-058.png)


1. Enter “Support-Whisper” as the Label and File name in the Text to speech section.

![legacy-start image 59](img/legacy-start-059.png)


1. Enter “You are receiving a call from the Support queue.” as the Enter your text here in the Text to speech section.

![legacy-start image 60](img/legacy-start-060.png)


1. Under the Select Voice dropdown menu, select Calvin-Male.

![legacy-start image 61](img/legacy-start-061.png)


1. Click Generate.

![legacy-start image 62](img/legacy-start-062.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 63](img/legacy-start-063.png)


1. Go back to Announcements.

![legacy-start image 64](img/legacy-start-064.png)


1. Now let´s work on a After Hours Welcome prompt. Click Add File.

1. Click Text to speech to create the last prompt for this lab.

![legacy-start image 65](img/legacy-start-065.png)


1. Select Organization under Level.

![legacy-start image 66](img/legacy-start-066.png)


1. Enter “After-Hours” as the Label and File name in the Text to speech section.

![legacy-start image 67](img/legacy-start-067.png)


1. Enter “Thank you for calling. Our office is currently closed and we are unable to take your call at this time. Please call back during our regular business hours. We appreciate your understanding.” as the Enter your text here in the Text to speech section.

![legacy-start image 68](img/legacy-start-068.png)


1. Under the Select Voice dropdown menu, select Veronica-Female. Currently, only two voices are supported—one male and one female—as this feature is in beta.

![legacy-start image 69](img/legacy-start-069.png)


1. Click Generate.

![legacy-start image 70](img/legacy-start-070.png)


1. After a few minutes you can test the announcement. Click Save.

![legacy-start image 71](img/legacy-start-071.png)


You are ready now to start the Customer Assist configuration.

## Module 2h: Location Schedules.


Schedules in Webex Calling Locations let administrators set time-based rules for call handling aligned with business hours. This ensures calls are routed efficiently, improving customer service and agent availability in Customer Assist environments. Proper scheduling helps optimize call flow and maintain service quality.

We need to create schedules before the actual configuration of Customer Assist. In Webex Calling, schedules under Calling and Locations configuration allow users or administrators to set time-based rules for call handling, enabling customized call behaviors during specified times or days. Click Locations under MANAGEMENT.

![legacy-start image 72](img/legacy-start-072.png)


Click on the dCloud location.

![legacy-start image 73](img/legacy-start-073.png)


In the dCloud location, click Calling.

![legacy-start image 74](img/legacy-start-074.png)


In the Calling features settings, click Schedules.

![legacy-start image 75](img/legacy-start-075.png)


Click Add Schedule.

![legacy-start image 76](img/legacy-start-076.png)


Enter Business-Hours in Schedule Name and keep Business Hours under the Schedule Type dropdown menu.

![legacy-start image 77](img/legacy-start-077.png)


In Hours just change the final hour of this schedule from 5:00 pm to 6:30 pm (this is just an example).

![legacy-start image 78](img/legacy-start-078.png)


Click Save.

![legacy-start image 79](img/legacy-start-079.png)


Now, you will add a Holidays schedule to define the behavior of the Auto Attendant configuration after hours and on holidays. For this lab, you will configure only one holiday. Keep in mind that you can configure holidays either manually or in bulk. Click Add Schedule.

![legacy-start image 80](img/legacy-start-080.png)


Enter Holidays in Schedule Name and select Holiday under the Schedule Type dropdown menu.

![legacy-start image 81](img/legacy-start-081.png)


In the Hours section click Add.

![legacy-start image 82](img/legacy-start-082.png)


Enter Christmas in the New Holiday Hours, select Yearly in the dropdown menu.

![legacy-start image 83](img/legacy-start-083.png)


Select Date in the Repeat on dropdown menu.

![legacy-start image 84](img/legacy-start-084.png)


Enter December 25th as the date for this Holiday, ignore the from dates, it will not matter for this configuration and finally turn on the All Day toggle. Your configuration should be similar to the image bellow.

![legacy-start image 85](img/legacy-start-085.png)


Now click the plus + button.

![legacy-start image 86](img/legacy-start-086.png)


Click Save. You have now ready the Business Hours and Holidays schedules to be used in the Customer Assist configuration.

![legacy-start image 87](img/legacy-start-087.png)


## Module 2i: Customer Assist Sales Queue Configuration.


Webex Calling Customer Assist is an AI-powered, calling-focused solution integrated within the Webex App designed to empower employees to deliver exceptional customer service. It provides features such as real-time caller intent summaries, suggested responses based on organizational knowledge bases, screen pops with relevant customer information, and real-time queue monitoring. The solution enhances agent productivity with tools like wrap-up reasons, agent availability management, and supervisor capabilities including agent monitoring, call sentiment analysis (coming soon), and historical queue analytics. It targets local and regional branch offices and knowledge workers who handle inbound customer interactions without dedicated contact center resources. Webex Calling Customer Assist is delivered as a cloud solution including a Webex Calling Professional License and is available globally. It supports voice interactions currently. The solution aims to simplify customer engagement, improve first-call resolution, and provide supervisors with actionable insights to optimize call handling and customer experience.

Key features include:

1. AI-driven caller intent and suggested responses to assist agents (coming soon).
2. Real-time queue and agent status monitoring.
3. Screen pops with caller information for more productive calls.
4. Wrap-up codes for post-call categorization.
5. Supervisor tools for monitoring, coaching, and analytics.
6. Webex Calling Professional License included in Customer Assist License.

This solution is ideal for organizations seeking to enhance customer service at frontline locations without the complexity and cost of full contact center solutions.

Click Customer Assist under SERVICES.

![legacy-start image 88](img/legacy-start-088.png)


In the Webex Calling Customer Assist configuration page, click Queues.

![legacy-start image 89](img/legacy-start-089.png)


You can add queues manually or in bulk. In this case, you will manually add two queues: one for Sales and one for Support. Click Add Queue to begin.

![legacy-start image 90](img/legacy-start-090.png)


In the Basic configuration, select dCloud under the Location dropdown menu.

![legacy-start image 91](img/legacy-start-091.png)


In the Queue Name field, enter “Sales”.

![legacy-start image 92](img/legacy-start-092.png)


In the Phone Number field, enter 1410 as the extension number, turn on the Allow agents to use call queue number as caller ID and keep 10 in the Number of Calls in Queue. You may have up to 250 calls in queue.

![legacy-start image 93](img/legacy-start-093.png)


In the Direct line caller ID name, keep “Sales” ad the Display Name.

![legacy-start image 94](img/legacy-start-094.png)


In the Display by name field, enter “Sales”.

![legacy-start image 95](img/legacy-start-095.png)


1. In the External caller ID phone number select the dCloud Location main number you configure in module 1.

![legacy-start image 96](img/legacy-start-096.png)


1. In the Language, keep English as it is and click Next.

![legacy-start image 97](img/legacy-start-097.png)


1. Customer Assist supports Priority Based routing with methods like Circular, Top Down, Longest Idle, Weighted, and Simultaneous, and Skills Based routing where agents have skill levels from 1 (highest) to 20 (lowest). Calls are routed to agents based on priority or skill match to improve efficiency and customer service. In the Create Queue, select Skill Based and select Longest Idle as the routing algorithm to route calls to agents. Click Next.

![legacy-start image 98](img/legacy-start-098.png)


1. In the Overflow Settings, keep the default value of Perform busy treatment in the For new calls when the queue is full (Overflow) dropdown menu and turn on the Enable overflow after calls wait x seconds toggle and enter 300 seconds (5 minutes) as the overflow time. This setting triggers overflow handling if a call waits longer than the specified time, helping to manage call queues effectively.

![legacy-start image 99](img/legacy-start-099.png)


1. In order to customize the Overflow prompt, turn on the Play announcement before overflow processing toggle.

![legacy-start image 100](img/legacy-start-100.png)


1. In the Play announcement before overflow processing field select Custom Greeting.

![legacy-start image 101](img/legacy-start-101.png)


1. In the Play announcement before overflow processing field, click Select. This announcement will be played to callers before overflow processing begins, informing them of the call transfer.

![legacy-start image 102](img/legacy-start-102.png)


1. Since all announcements (prompts) were configured by you at the Organization level before, you must select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 103](img/legacy-start-103.png)


1. Click Overflow and then click Select.

![legacy-start image 104](img/legacy-start-104.png)


1. In the Add Queue configuration page, click Next.

1. Check Welcome message is mandatory under the Create Queue field. This is to force always the Welcome message for all calls coming to this queue. You can optionally turn off the Welcome Message depending on your use case in real life scenarios.

![legacy-start image 105](img/legacy-start-105.png)


1. In the Welcome Message field, click Select file. This announcement will be played to callers when their call arrives in the Sales queue, before the call is redirected to an available agent.

![legacy-start image 106](img/legacy-start-106.png)


1. Since all announcements (prompts) were configured by you at the Organization level before, you must select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 107](img/legacy-start-107.png)


1. Click Sales and then click Select.

![legacy-start image 108](img/legacy-start-108.png)


1. The estimated wait message for queued calls in Webex Calling Customer Assist notifies callers of their estimated wait time or their position in the queue. This message plays after the welcome message and before the comfort message. When enabled, it helps manage caller expectations by providing timely updates on wait times or queue positions. We will configure this feature in the Sales queue and the Support queue to improve the customer experience in Customer Assist. Enable the Estimated wait message for Queued Calls toggle.

![legacy-start image 109](img/legacy-start-109.png)


1. Keep 5 minutes as the Default Call Handling Time. Based on this value and the call volume, the Customer Assist solution calculates the actual call handling time to provide an accurate estimated wait time. Enable the Repeat periodic playing of Estimated wait message option and set the interval to 35 seconds (all the timers in this lab are examples, you need to adjust them according to your specific use case) so that the announcement is played periodically, informing callers of their estimated wait time or queue position.

![legacy-start image 110](img/legacy-start-110.png)


1. For this lab, you will use the Announce queue position feature. Customer Assist requires an initial call volume to calculate the estimated wait time by determining the call handling time. Because the call volume in this lab is very low, the estimated wait time calculation will not function properly. Therefore, select the Announce queue position configuration and keep the default value of 100 calls under the Play message for caller in queue position setting.

![legacy-start image 111](img/legacy-start-111.png)


1. In the Comfort Message configuration, which is enabled by default, enter 20 seconds in the Time between comfort message field to repeat the Comfort message you configured every 20 seconds. Note that all timers in this lab are examples and should be adjusted according to your specific use case.

![legacy-start image 112](img/legacy-start-112.png)


1. In the Comfort Message field, select Custom Greeting and click Select file.

![legacy-start image 113](img/legacy-start-113.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 114](img/legacy-start-114.png)


1. Click Comfort and then click Select.

![legacy-start image 115](img/legacy-start-115.png)


1. Comfort Bypass is a feature in Webex Calling Customer Assist that plays a shorter comfort message instead of the usual full comfort or music on hold announcement for calls that should be answered quickly. This prevents callers from hearing only a truncated portion of the standard comfort message when connected to an agent. For this lab, we will keep the Comfort Bypass toggle off because we are not going to use this feature during the lab.

![legacy-start image 116](img/legacy-start-116.png)


1. Turn on the Hold Music toggle to enable music on hold while calls are queued in this Sales queue.

![legacy-start image 117](img/legacy-start-117.png)


1. Keep the Default Greeting selected in Hold Music to use the default music on hold provided by Webex Calling. You can upload different music on hold files to Webex Calling and configure a playlist, depending on your use case.

![legacy-start image 118](img/legacy-start-118.png)


1. Turn on the Call Whisper toggle to enable the Call Whisper announcement you configured earlier. This announcement will let the agent know from which queue the call is coming.

![legacy-start image 119](img/legacy-start-119.png)


1. In the Call Whisper field, select Custom Greeting and click Select file.

![legacy-start image 120](img/legacy-start-120.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 121](img/legacy-start-121.png)


1. Click Sales-Whisper and then click Select file.

![legacy-start image 122](img/legacy-start-122.png)


1. Click Next.

1. In the Assigned skill level, select Anita Perez, she will be the only agent in this Customer Assist solution for this lab.

![legacy-start image 123](img/legacy-start-123.png)


1. Select Allow agents to join or unjoin the queue. This setting allows agents to sign in or sign out from queues as needed, enabling them to selectively participate in a call queue without requiring administrator intervention.

![legacy-start image 124](img/legacy-start-124.png)


1. Click Next.

1. You can review all the configuration. Click Create and then click Done.

![legacy-start image 125](img/legacy-start-125.png)


## Module 2j: Customer Assist Support Queue Configuration (Optional).


The module to configure the Support Queue in Customer Assist is optional because the Sales Queue already provides a complete environment to test all AI features. This means the Support Queue configuration is not mandatory for basic testing or demonstration purposes, allowing users to focus on the Sales Queue if desired, while still having the option to add the Support Queue for extended scenarios or additional testing flexibility.

You will now configure the Support queue. Click Manage and then Add.

![legacy-start image 126](img/legacy-start-126.png)


In the Basic configuration, select dCloud under the Location dropdown menu.

![legacy-start image 127](img/legacy-start-127.png)


In the Queue Name field, enter “Support”.

![legacy-start image 128](img/legacy-start-128.png)


In the Phone Number field, enter 1411 as the extension number, turn on the Allow agents to use call queue number as caller ID and keep 10 in the Number of Calls in Queue. You may have up to 250 calls in queue.

![legacy-start image 129](img/legacy-start-129.png)


In the Direct line caller ID name, keep “Support” ad the Display Name.

![legacy-start image 130](img/legacy-start-130.png)


In the Display by name field, enter “Support”.

![legacy-start image 131](img/legacy-start-131.png)


1. In the External caller ID phone number select the dCloud Location main number you configure in module 1.

![legacy-start image 132](img/legacy-start-132.png)


1. In the Language, keep English as it is and click Next.

![legacy-start image 133](img/legacy-start-133.png)


1. Customer Assist supports Priority Based routing with methods like Circular, Top Down, Longest Idle, Weighted, and Simultaneous, and Skills Based routing where agents have skill levels from 1 (highest) to 20 (lowest). Calls are routed to agents based on priority or skill match to improve efficiency and customer service. In the Create Queue, select Skill Based and select Longest Idle as the routing algorithm to route calls to agents. Click Next.

![legacy-start image 134](img/legacy-start-134.png)


1. In the Overflow Settings, keep the default value of Perform busy treatment in the For new calls when the queue is full (Overflow) dropdown menu and turn on the Enable overflow after calls wait x seconds toggle and enter 300 seconds (5 minutes) as the overflow time. This setting triggers overflow handling if a call waits longer than the specified time, helping to manage call queues effectively.

![legacy-start image 135](img/legacy-start-135.png)


1. In order to customize the Overflow prompt, turn on the Play announcement before overflow processing toggle.

![legacy-start image 136](img/legacy-start-136.png)


1. In the Play announcement before overflow processing field select Custom Greeting.

![legacy-start image 137](img/legacy-start-137.png)


1. In the Play announcement before overflow processing field, click Select. This announcement will be played to callers before overflow processing begins, informing them of the call transfer.

![legacy-start image 138](img/legacy-start-138.png)


1. Since all announcements (prompts) were configured by you at the Organization level before, you must select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 139](img/legacy-start-139.png)


1. Click Overflow and then click Select.

![legacy-start image 140](img/legacy-start-140.png)


1. In the Add Queue configuration page, click Next.

1. Check Welcome message is mandatory under the Create Queue field. This is to force always the Welcome message for all calls coming to this queue. You can optionally turn off the Welcome Message depending on your use case in real life scenarios.

![legacy-start image 141](img/legacy-start-141.png)


1. In the Welcome Message field, click Select file. This announcement will be played to callers when their call arrives in the Sales queue, before the call is redirected to an available agent.

![legacy-start image 142](img/legacy-start-142.png)


1. Since all announcements (prompts) were configured by you at the Organization level before, you must select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 143](img/legacy-start-143.png)


1. Click Support and then click Select.

![legacy-start image 144](img/legacy-start-144.png)


1. The estimated wait message for queued calls in Webex Calling Customer Assist notifies callers of their estimated wait time or their position in the queue. This message plays after the welcome message and before the comfort message. When enabled, it helps manage caller expectations by providing timely updates on wait times or queue positions. We will configure this feature in the Sales queue and the Support queue to improve the customer experience in Customer Assist. Enable the Estimated wait message for Queued Calls toggle.

![legacy-start image 145](img/legacy-start-145.png)


1. Keep 5 minutes as the Default Call Handling Time. Based on this value and the call volume, the Customer Assist solution calculates the
2. actual call handling time to provide an accurate estimated wait time. Enable the Repeat periodic playing of Estimated wait message option and set the interval to 35 seconds (all the timers in this lab are examples, you need to adjust them according to your specific use case) so that the announcement is played periodically, informing callers of their estimated wait time or queue position.

![legacy-start image 146](img/legacy-start-146.png)


1. For this lab, you will use the Announce queue position feature. Customer Assist requires an initial call volume to calculate the estimated wait time by determining the call handling time. Because the call volume in this lab is very low, the estimated wait time calculation will not function properly. Therefore, select the Announce queue position configuration and keep the default value of 100 calls under the Play message for caller in queue position setting.

![legacy-start image 147](img/legacy-start-147.png)


1. In the Comfort Message configuration, which is enabled by default, enter 20 seconds in the Time between comfort message field to repeat the Comfort message you configured every 20 seconds. Note that all timers in this lab are examples and should be adjusted according to your specific use case.

![legacy-start image 148](img/legacy-start-148.png)


1. In the Comfort Message field, select Custom Greeting and click Select file.

![legacy-start image 149](img/legacy-start-149.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 150](img/legacy-start-150.png)


1. Click Comfort and then click Select.

![legacy-start image 151](img/legacy-start-151.png)


1. Comfort Bypass is a feature in Webex Calling Customer Assist that plays a shorter comfort message instead of the usual full comfort or music on hold announcement for calls that should be answered quickly. This prevents callers from hearing only a truncated portion of the standard comfort message when connected to an agent. For this lab, we will keep the Comfort Bypass toggle off because we are not going to use this feature during the lab.

![legacy-start image 152](img/legacy-start-152.png)


1. Turn on the Hold Music toggle to enable music on hold while calls are queued in this Sales queue.

![legacy-start image 153](img/legacy-start-153.png)


1. Keep the Default Greeting selected in Hold Music to use the default music on hold provided by Webex Calling. You can upload different music on hold files to Webex Calling and configure a playlist, depending on your use case.

![legacy-start image 154](img/legacy-start-154.png)


1. Turn on the Call Whisper toggle to enable the Call Whisper announcement you configured earlier. This announcement will let the agent know from which queue the call is coming.

![legacy-start image 155](img/legacy-start-155.png)


1. In the Call Whisper field, select Custom Greeting and click Select file.

![legacy-start image 156](img/legacy-start-156.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the Overflow prompt.

![legacy-start image 157](img/legacy-start-157.png)


1. Click Support-Whisper and then click Select file.

![legacy-start image 158](img/legacy-start-158.png)


1. Click Next.

1. In the Assigned skill level, select Anita Perez, she will be the only agent in this Customer Assist solution for this lab.

![legacy-start image 159](img/legacy-start-159.png)


1. Select Allow agents to join or unjoin the queue. This setting allows agents to sign in or sign out from queues as needed, enabling them to selectively participate in a call queue without requiring administrator intervention.

![legacy-start image 160](img/legacy-start-160.png)


1. Click Next.

1. You can review all the configuration. Click Create and then click Done.

![legacy-start image 161](img/legacy-start-161.png)


## Module 2k: Supervisor Configuration for Customer Assist.


A supervisor in Webex Calling Customer Assist is a user who manages and monitors agents and queues through a centralized interface. Supervisors can view real-time and historical data about agents and queues, monitor live calls, send messages to agents, change agent statuses, and manage agent assignments to queues. They have tools to assess agent performance, listen in on calls, whisper coach, or barge into calls to assist agents. Supervisors also generate and download reports on agent wrap-up reasons enabling effective oversight and operational management of the Customer Assist environment.

1. Now you need to define the Supervisor role for Charles Holland. In the Webex Calling Customer Assist configuration page click Supervisors.

![legacy-start image 162](img/legacy-start-162.png)


1. Click Add Supervisor.

![legacy-start image 163](img/legacy-start-163.png)


1. In the Select user to add as a supervisor dropdown menu, select Charles Holland.

![legacy-start image 164](img/legacy-start-164.png)


1. Click Next.

1. In the Select agents to assign to the supervisor select Anita Perez.

![legacy-start image 165](img/legacy-start-165.png)


1. Click Next.

1. Review the configuration you just did and click Add Supervisor.

## Module 2l: Auto Attendant Configuration.


An Auto Attendant is an entry point from PSTN to route calls to the Sales or Support queue depending upon the end user requirements dialing to the Customer Assist solution. An Auto Attendant in Webex Calling answers incoming calls and provides a menu for callers to direct their calls to the right person, group, or voicemail without a receptionist. It supports customizable greetings and scheduling for business hours, after hours, and holidays, enabling efficient automated call handling 24/7.

1. Click Calling under SERVICES.

![legacy-start image 166](img/legacy-start-166.png)


1. On the Calling page, click the Features tab.

![legacy-start image 167](img/legacy-start-167.png)


1. In the Auto Attendant configuration, click Add New.

![legacy-start image 168](img/legacy-start-168.png)


Select dCloud under the Location dropdown menu.

![legacy-start image 169](img/legacy-start-169.png)


In the Auto Attendant Name field, enter “Main-AA”.

![legacy-start image 170](img/legacy-start-170.png)


In the Phone Number field, select the telephone number you assigned to the Location and enter 1400 as the extension number.

![legacy-start image 171](img/legacy-start-171.png)


In the Direct line caller ID name, keep “Main-AA” as the Display Name.

![legacy-start image 172](img/legacy-start-172.png)


In the Display by name field, enter “Main”.

![legacy-start image 173](img/legacy-start-173.png)


1. On the Language selection screen, ensure English remains selected, then click Next to continue.

![legacy-start image 174](img/legacy-start-174.png)


1. On the Business Hours Schedule screen, choose “Business-Hours” from the Assign an existing schedule dropdown menu. Click Next.

![legacy-start image 175](img/legacy-start-175.png)


1. On the Holiday Schedule screen, choose “Holidays” from the Assign an existing schedule dropdown menu. Click Next.

![legacy-start image 176](img/legacy-start-176.png)


1. On the Business Hours tab, choose Transfer call without prompt under the Press 1 to dropdown menu and enter 1410 in the Phone Number or Extension.

![legacy-start image 177](img/legacy-start-177.png)


1. On the Business Hours tab, choose Transfer call without prompt under the Press 2 to dropdown menu and enter 1411 in the Phone Number or Extension. Leave all other settings at their default values and click Next.

![legacy-start image 178](img/legacy-start-178.png)


1. On the Business Hours tab select Custom Greeting and click Select file.

![legacy-start image 179](img/legacy-start-179.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the Welcome Message prompt you configured before.

![legacy-start image 180](img/legacy-start-180.png)


1. Click Welcome Message and then click Select.

![legacy-start image 181](img/legacy-start-181.png)


1. Click After Hours to configure the prompt the Auto Attendant will use after hours or in any Holiday you configured in Schedules (for this lab is just Christmas).

![legacy-start image 182](img/legacy-start-182.png)


1. On the Business Hours tab, select Custom Greeting and click Select file.

![legacy-start image 183](img/legacy-start-183.png)


1. Select the Organization scope in the Announcement Files repository before you can choose the After-Hours prompt you configured before.

![legacy-start image 184](img/legacy-start-184.png)


1. Click After-Hours and then click Select. Click Next.

![legacy-start image 185](img/legacy-start-185.png)


1. Review all the configuration and click Create. You are now ready to configure the Call Queue Recording in Customer Assist and to test it.

![legacy-start image 186](img/legacy-start-186.png)


## Module 2m: Customer Assist: AI Summaries for Call Queue Recordings


Queue recording in Webex Calling Customer Assist enables the recording of both incoming and outgoing calls at the queue level, allowing administrators to manage recordings centrally without needing to enable recording for individual agents. This feature supports automatic recording with options for pause and resume, and recordings are accessible through Control Hub for administrators and compliance officers. The AI capabilities integrated with queue recording include the generation of transcripts, summaries, and action items using artificial intelligence. These AI-generated transcripts provide a textual record of the call, while summaries highlight key points and action items with timestamps to facilitate quick navigation and follow-up. This enhances quality assurance, agent training, and operational efficiency by providing detailed insights into customer interactions and enabling supervisors and agents to review and act on call content effectively.

Key points:

1. Queue-level call recording for inbound and outbound calls.
2. Centralized management and access via Control Hub.
3. AI-generated transcripts, summaries, and action items.
4. Action items include timestamps for easy reference.
5. AI features improve agent and supervisor experience by providing detailed call insights.

This functionality is part of the broader Webex Calling Customer Assist solution, which aims to enhance customer service operations with AI-powered tools.

1. Click Customer Assist under SERVICES.

![legacy-start image 187](img/legacy-start-187.png)


1. On the Webex Calling Customer Assist configuration, click the “Sales” queue you configured before.

![legacy-start image 188](img/legacy-start-188.png)


1. On the Queue Recordings section, click Call Recording.

![legacy-start image 189](img/legacy-start-189.png)


1. Turn on the Call recording for the Sales Queue.

![legacy-start image 190](img/legacy-start-190.png)


1. Keep the Always selection to record all the calls for this “Sales” queue. You can see that there is another option called Always with Pause/resume to record all the calls but with the option to pause and resume the recording, this may be an option for your real use case scenario.

![legacy-start image 191](img/legacy-start-191.png)


1. In the recording settings, enable Play recording start/stop announcement for PSTN calls and Play recording start/stop announcement for internal calls, then save the changes. Enabling these options ensures callers and agents are informed when call recording starts or stops, promoting transparency and compliance with legal or organizational policies.

![legacy-start image 192](img/legacy-start-192.png)


1. Turn on the Generate Transcript toggle and enable Generate Summary and Action Items. Enabling these AI features will provide transcripts, summaries, and action items for all recordings in this queue. Click Save.

![legacy-start image 193](img/legacy-start-193.png)


1. If the “Support” queue is configured, repeat steps 1 through 7 for the “Support” queue.

1. To test the AI features on Customer Assist Queue Recordings, log out from user Charles Holland (cholland@cbXXX.dc-YY.com) on demo workstation (virtual workstation) and then log back in with the same user to activate Customer Assist in the Webex app. If Customer Assist is already active, verify its status and explore the Supervisor menus to confirm access.

![legacy-start image 194](img/legacy-start-194.png)


1. To test the AI features on Customer Assist Queue Recordings, log out from user Anita Perez (aperez@cbXXX.dc-YY.com) on the physical workstation and then log back in with the same user to activate Customer Assist in the Webex app. If Customer Assist is already active, verify its status and explore the Supervisor menus to confirm access.

![legacy-start image 195](img/legacy-start-195.png)


1. To test the Customer Assist Queue Recording feature, from the registered 98XX IP Phone, dial 1400, which is the Auto Attendant number. Follow the Welcome Message prompts and select the option to route the call to either the Customer Assist Sales or Support queue based on your configuration.

![legacy-start image 196](img/legacy-start-196.png)


1. To test the AI features on Customer Assist Queue Recordings with agent Anita Perez (aperez@cbXXX.dc-YY.com), ensure she is in the available status for Customer Assist. Then, answer the call from the Webex app. You will see that the recording starts automatically. Engage in conversation on both the Webex app and the 98XX phone to generate a call recording that includes the AI features such as transcription, summary, and action items.

![legacy-start image 197](img/legacy-start-197.png)


1. Keep the conversation active for a few seconds to allow the AI features—such as transcription, summary, and action items—to capture more data and demonstrate their capabilities effectively.

![legacy-start image 198](img/legacy-start-198.png)


1. To view and access call recordings, a user must have the Compliance Officer role assigned. This role grants the necessary permissions to download, play, and manage recordings within the Webex Control Hub. In this lab, the user Anita Perez (aperez@cbXXX.dc-YY.com) has been assigned the Compliance Officer role, which enables her to access and utilize these recording features as part of the lab configuration. This role is typically assigned by a full administrator and is required to ensure regulatory compliance and proper handling of recorded content. Open a new Chrome session in your physical workstation and log in using Anita Perez (aperez@cbXXX.dc-YY.com) user. Click Customer Assist under SERVICES.

![legacy-start image 199](img/legacy-start-199.png)


1. On the Webex Calling Customer Assist configuration page, click Recordings.

![legacy-start image 200](img/legacy-start-200.png)


1. On the All Locations dropdown menu, select dCloud location.

![legacy-start image 201](img/legacy-start-201.png)


1. Click on the recording you just made to view the AI-generated transcription, summary, and action items. Please wait a few minutes if the processing is not yet complete, as these features require some time to be generated.

![legacy-start image 202](img/legacy-start-202.png)


![legacy-start image 203](img/legacy-start-203.png)


Remember that these AI-generated transcription, summary, and action items features are included in the Customer Assist licenses!!. You can continue with the next module.
