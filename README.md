# NeXtep - Job Application Tracker

Live demo: [Link text]https://next-ep-h8c3.onrender.com

## About
NeXtep is a lightweight app which allows users to manage their job applications by creating and updating them with just a few clicks.

## How to use
1. Register by providing a name, email address and password. To log in to an existing account, you will need to provide the email address and the password.
2. Create job applications by entering the name of the company, the position you are applying for and the status of the application.
3. Edit job applications by clicking the Edit button. This can be useful when you have updates regarding your application, for example if you are progressing in the recruitment process.
4. Delete a job application at any time by clicking the Delete button.

## Developer notes
This application showcases the MERN stack.
### Frontend
The React frontend uses Bootstrap for the design with Redux Toolkit to manage and optimize application state. More specifically, two slices are used in the Redux store: one for authentication and one for the job applications. Most of the actions are managed with the use of asyncThunks.
### Backend
The server uses Express and Node.js, with a MongoDB database to store data and user login information. The authentication is ensured with JWT tokens, which is enforced through middleware.
### Deployment
The React client is deployed on Render, and the server is deployed on Cyclic. Both parts of the application are linked with this repository, which allows for continuous development and deployment. CORS policies are managed with middleware.
