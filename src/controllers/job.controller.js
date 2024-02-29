//this page handles the Job related tasks
import JobModel from "../models/job.model.js";

// export default class JobController{
//     getJobDetails(req, res){
//         var jobs = JobModel.getAll();
//         res.render('jobs', {jobs:jobs});
//     }
// }

export default class JobController {
    getJobDetails(req, res) {
        const page = parseInt(req.query.page) || 1; // Get the page parameter from the query string, default to 1
        const limit = 8; // Number of jobs per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        var jobs = JobModel.getAll().slice(startIndex, endIndex);
        const totalJobs = JobModel.getAll().length;

        const totalPages = Math.ceil(totalJobs / limit);

        res.render('jobs', { jobs: jobs, totalPages: totalPages, currentPage: page, userEmail: req.session.userEmail });
    }

    getSelectedJobDetails(req, res, next){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    deleteJob(req, res){
        const id = req.params.id;
        JobModel.delete(id);
        const page = parseInt(req.query.page) || 1; // Get the page parameter from the query string, default to 1
        const limit = 8; // Number of jobs per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        var jobs = JobModel.getAll().slice(startIndex, endIndex);
        const totalJobs = JobModel.getAll().length;

        const totalPages = Math.ceil(totalJobs / limit);

        res.render('jobs', { jobs: jobs, totalPages: totalPages, currentPage: page, userEmail: req.session.userEmail });
    }

    getJobApplicants(req, res){
        const id = req.params.id;
        //console.log('id :', id);
        const jobFound = JobModel.getJobID(id);
        //console.log(jobFound);
        res.render("jobApplicants", {job: jobFound, userEmail: req.session.userEmail});
    }

    getUpdateJob(req, res){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        res.render("jobUpdate", {job: jobFound, userEmail: req.session.userEmail});
    }

    postUpdateJob(req, res){
        //const id = req.params.id;
        //console.log("1 befor applicants update",req.body);
        req.body.applicants = JSON.parse(req.body.applicants);
        req.body.applicantsCount = req.body.applicants.length;
        //console.log("2 after applicants update",req.body);
        JobModel.update(req.body)
        const jobFound = JobModel.getJobID(req.body.id);
        //console.log("3 after updating job details",req.body);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    getJobApply(req,res){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        //console.log("getJobApply",jobFound);
        res.render("jobApply",{job: jobFound, userEmail: req.session.userEmail})
    }

    postJobApply(req, res){
        //console.log(req.body);
        JobModel.updateApplicants(req.body);
        const jobFound = JobModel.getJobID(req.body.id);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    get404Page(req,res){
        res.render('404');
    }
}
