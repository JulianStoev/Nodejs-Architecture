# Simple Node.js Architecture

Robust enough to be used with multiple databases and micro services if needed.

1. The Startup folder is where you load everything you need at Node startup.  
2. The Routes are then hit and act as a bridge to get all the needed information from the Services.  
3. The Services hold the business logic and get the needed information from the DAL if you need the database and then format it.  
4. Finally the Routes return the gathered information to the client.
