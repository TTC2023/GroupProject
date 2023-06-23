const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    company:{
        type:String,
    },
    salary:{
        type:Number
    },
    hours:{
        type:String,
        enum: ['Full-Time', "Part-Time"]
    },
},{timestamps:true})

const Job = mongoose.model('Job',JobSchema)

module.exports = Job