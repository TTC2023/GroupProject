const express = require('express')
const cors = require('cors') 
const app = express()
app.use(cors()) 
const PORT = 8000
require('./config/mongoose.config')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const Routes = require('./routes/job.routes')
// Routes(app)

require('./routes/job.routes')(app)

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})