const JobController = require('../controllers/job.controllers')

module.exports = (app) => {
    // all jobs
    app.get('/api/allJobs',JobController.getAllJobs)
    // one job
    app.get('/api/oneJob/:id',JobController.getOneJob)
    // create job
    app.post('/api/addJob',JobController.addJob)
    // update job
    app.put('/api/update/:id',JobController.updateJob)
    // delete job
    app.delete('/api/delete/:id',JobController.deleteJob)
}
