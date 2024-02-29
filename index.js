import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
import { auth } from './src/middlewares/auth.middleware.js';
import validateRequestJobApply from './src/middlewares/validation-jobApply.middleware.js';
import validateRequestJobPost from './src/middlewares/validation-JobPost.middleware.js';

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

app.use(bodyParser.urlencoded({ extended: false }));

//Routes

app.get("/", setLastVisit, usersController.getHome);

//Recruiter Login
app.get('/recruiter', (req, res) => {
  req.session.userType = 'recruiter'; // Save user type as 'recruiter' in session
  res.redirect('/jobs'); // Redirect to the jobs page or any other page
});

//Job Seeker Login
app.get('/jobseeker', (req, res) => {
  req.session.userType = 'jobseeker'; // Save user type as 'jobseeker' in session
  res.redirect('/jobs'); // Redirect to the jobs page or any other page
});

//Login
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);

//Register
app.get("/register", usersController.getRegister);
app.post("/register", usersController.postRegister);

//Logout
app.get('/logout', usersController.logout);

//Job routes starts

app.get("/jobs", auth, setLastVisit, jobController.getJobDetails);

//Job Details
app.get("/jobDetails/:id", auth, setLastVisit, jobController.getSelectedJobDetails);

//Delete Job
app.post('/delete-job/:id', auth, jobController.deleteJobPost);

//jobApplicants
app.get("/jobApplicant/:id", auth, setLastVisit, jobController.getJobApplicants);

//JobUpdate
app.get("/jobUpdate/:id", auth, setLastVisit, jobController.getUpdateJob);
app.post("/jobUpdate", auth, jobController.postUpdateJob);

//Job Apply
app.get("/jobApply/:id", auth, setLastVisit, jobController.getJobApply);
app.post("/jobApply", auth,validateRequestJobApply, jobController.postJobApply);

//404
app.get("/404", jobController.get404Page);
app.get("/404JobSeeker", jobController.get404JobSeekerPage);

//Post new Job
app.get("/jobPost", auth, setLastVisit, jobController.getJobPost);
app.post("/jobPost", auth,validateRequestJobPost, jobController.postJobPost);
//Routes

app.listen(3900, () => {
    console.log('Server is running on port 3900');
  });