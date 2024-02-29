// This class handles the Job related tasks
import JobModel from "../models/job.model.js";

export default class JobController {
    // Get job details for a specific page
    getJobDetails(req, res) {
        const page = parseInt(req.query.page) || 1; // Get the page parameter from the query string, default to 1
        const limit = 8; // Number of jobs per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // Get jobs for the current page
        var jobs = JobModel.getAll().slice(startIndex, endIndex);
        const totalJobs = JobModel.getAll().length;

        const totalPages = Math.ceil(totalJobs / limit);

        res.render('jobs', { jobs: jobs, totalPages: totalPages, currentPage: page, userEmail: req.session.userEmail });
    }

    // Get details of a specific job
    getSelectedJobDetails(req, res, next){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    // Delete a job
    deleteJob(req, res){
        const id = req.params.id;
        if(req.session.userType == 'recruiter'){
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
        else{
            res.render('404');
        }
        
    }

    // Get applicants for a job
    getJobApplicants(req, res){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        if(req.session.userType == 'recruiter'){
            res.render("jobApplicants", {job: jobFound, userEmail: req.session.userEmail});
        }
        else{
            res.render("404");
        }
        
    }

    // Get job details for updating
    getUpdateJob(req, res){
        const id = req.params.id;
        if(req.session.userType == 'recruiter'){
            const jobFound = JobModel.getJobID(id);
            res.render("jobUpdate", {job: jobFound, userEmail: req.session.userEmail});
        }
        else{
            res.render("404");
        }
        
    }

    // Update job details
    postUpdateJob(req, res){
        req.body.applicants = JSON.parse(req.body.applicants);
        req.body.applicantsCount = req.body.applicants.length;
        JobModel.update(req.body)
        const jobFound = JobModel.getJobID(req.body.id);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    // Get page for applying to a job
    getJobApply(req,res){
        const id = req.params.id;
        const jobFound = JobModel.getJobID(id);
        if(req.session.userType == 'jobseeker'){
            res.render("jobApply",{job: jobFound, userEmail: req.session.userEmail})
        }
        else{
            res.render("404JobSeeker")
        }
        
    }

    // Apply to a job
    postJobApply(req, res){
        JobModel.updateApplicants(req.body);
        const jobFound = JobModel.getJobID(req.body.id);
        res.render('jobDetails', {job: jobFound, userEmail: req.session.userEmail});
    }

    // Render the 404 page
    get404Page(req,res){
        res.render('404');
    }

    // Render the 404 job seeker page
    get404JobSeekerPage(req, res){
        res.render('404JobSeeker');
    }
}
