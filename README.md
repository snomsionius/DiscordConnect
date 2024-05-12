# YTMusic-Discord-RPC UNOFFICIAL   
# This App can be used as a framework for creating your own activity integrations without doing much coding yourself.    
# You just need to edit a few tags in the tapermonkey script and the app will do the rest for you.   

This project aims to enable users to gain a sort of Discord Rich Presence for YouTube Music since GOOGLE does not make an official integration for Discord.

[![pypresence](https://img.shields.io/badge/using-pypresence-00bb88.svg?style=for-the-badge&logo=discord&logoWidth=20)](https://github.com/qwertyquerty/pypresence)

# Content:

# 1. Setup
   1. Head over to the Discord developer portal : https://discord.com/developers/applications
   2. Create an Application by giving it a name, e.g. "YouTube Music".
   3. Add the YouTube Logo PNG under "Rich Presence -> Art Assets" (Optional).
   4. Copy the Application ID from the GENERAL INFORMATION TAB.
   5. Paste the ID into the ApplicationID file behind the :.
   6. Add the JAVASCRIPT to the TAPERMONKEY ADD-ON for your browser.
   7. Run Discord.
   8. Run the .exe and remember the SERVER ADRESS from the NOTIFICATION.
   9. Paste this ADRESS into the TAPERMONKEY SCRIPT.
   10. That's it, have fun.
   11. If you want to, support this project on KO-FI: https://ko-fi.com/hornyboy73263


# 2. Customize your experience
   ## 1. Language
   In the ApplicationID file, change "german" to "english" or vise versa.


   ## 2. Auto-start
   In the ApplicationID file, change the 0 to 1 to activate it, or 1 to 0 to deactivate.


# 3. Make your own integration

As of version 2.1.0 it is possible for everyone to add the music service of your choice   
to the tool, docs coming soon. Quick: Take the tapermonkey script and change the scraped   
elements to the fitting elements of your service, e.g. soundcloud. The server will then   
use these infos and let your discord status display what you are listening to on e.g.   
soundcloud. Make sure to use the right format to send infos from your browser to the app.   


# 4. Coming with 3.0.0

Support for more than music is planned. Currently, other modes are being developed.   

## What can you expect?   

- Modes to choose, influence discord "activity"
- It will be possible to download app files via http connection.
- Customizable Button messages
- Disable/Enable Button




