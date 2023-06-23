const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jobboard', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Conneted to Job Board DB")
}).catch ((err) => {
    console.log(err)
})