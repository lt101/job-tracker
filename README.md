# NeXtep - Job Application Tracker

## About
NeXtep is a lightweight app which allows users to manage their job applications by creating and updating them with just a few clicks.

## How to use
### Server
The server is a Node.js server built with the Express framework. To run it, execute ```npm start``` at the root of the application. It will be available on http://localhost:5000/.

### Client
The client is a React application. To run it, execute ```npm start``` in the client folder. It will be available on http://localhost:3000/.

## Developer notes
This application showcases the MERN stack. 
The React frontend uses Bootstrap for the design with Redux Toolkit to manage and optimize application state. More specifically, two slices are used in the Redux store: one for authentication and one for the job applications. Most of the actions are managed with the use of asyncThunks.
The server uses Express and Node.js, with a MongoDB database to store data and user login information. The authentication is ensured with JWT tokens, which is enforced through middleware.
