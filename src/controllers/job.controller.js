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

        res.render('jobs', { jobs: jobs, totalPages: totalPages, currentPage: page });
    }
}
