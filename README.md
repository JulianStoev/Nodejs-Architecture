# Simple Node.js Architecture

I love to keep it simple.  
There is a Startup folder where you load everything you need at Node startup.  
The Routes are then hit and act as a bridge to get all the needed information from the Services.  
The Services then get the needed information from the Modules if you need the database and format it.  
Then the Routes return the gathered information.
