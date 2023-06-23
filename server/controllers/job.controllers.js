const Job = require('../models/job.model')


module.exports = {
    getAllJobs:(req,res) => {
        Job.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    },
    getOneJob:(req,res) => {
        Job.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    },
    addJob:(req,res) => {
        Job.create(req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    },
    updateJob:(req,res) => {
        Job.updateOne({_id:req.params.id},req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    },
    deleteJob:(req,res) => {
        Job.deleteOne({_id:req.params.id})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    }
}