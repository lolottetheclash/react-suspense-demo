# React Suspense Demo 


## We make 2 API calls:
- one to get a specific user
- one to get 150 posts

First install with 'npm install', then launch the app with 'npm start and finally change the network from 'online' to 'Slow 3G'.

You can observe 'LOADING USER... and 'LOADING POSTS... while we are fetching the API.

User will display first, while 'LOADING POSTS' is still here, and few seconds after posts will appear.


## Suspense allows use to "render-as-you-fetch":

We launch the API calls as soon as possible to quickly display data, and it renders immediatly:

If data have arrived we display it, if it's not loaded  we display a loading message.
