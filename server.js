const express = require('express')
const dotenv= require('dotenv')

//get config file path
dotenv.config({path : './config/config.env'})

const app = express()
app.get('/', (req, res) => {
    res.send({name:'srujan'})
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running at port ${PORT} in ${process.env.NODE_ENV} environment`))