import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';


import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
import { auth } from './src/middlewares/auth.middleware.js';

import UserController from './src/controllers/user.controller.js';
import JobController from './src/controllers/job.controller.js';

const app = express();

//Controllers start here

const usersController = new UserController();
const jobController = new JobController();

//Controllers end here

app.use(express.static('public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

//Routes

app.get("/", setLastVisit, usersController.getHome);

//Login
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);

//Register
app.get("/register", usersController.getRegister);
app.post("/register", usersController.postRegister);

//Logout
app.get('/logout', usersController.logout);

//Job routes starts

app.get("/jobs", auth, jobController.getJobDetails);

//Job Details
app.get("/jobDetails/:id", auth, jobController.getSelectedJobDetails);

//Delete Job
app.get('/delete-job/:id', auth, jobController.deleteJob);

//jobApplicats
app.get("/jobApplicant/:id", auth, jobController.getJobApplicants);

//JobUpdate
app.get("/jobUpdate/:id", auth, jobController.getUpdateJob);
app.post("/jobUpdate", auth, jobController.postUpdateJob);

//Routes

app.listen(3900, () => {
    console.log('Server is running on port 3900');
  });