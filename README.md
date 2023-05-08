# Simple Node.js Architecture

I love to keep it simple.  
1. There is a Startup folder where you load everything you need at Node startup.  
2. The Routes are then hit and act as a bridge to get all the needed information from the Services.  
3. The Services hold the business logic and get the needed information from the Models if you need the database and then format it.  
4. Finally the Routes return the gathered information to the client.
