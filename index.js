const express = require('express')
const connectDb = require('./Connected/connectDb')
const cors = require('cors')
const router = require('./Routers/AllTaxiRouters')
require('dotenv').config()

connectDb()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/AllTaxi', router)

app.get("/", (req, res) => {
    res.send("AllTaxi Api Ishladi")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`${PORT} ni eshityapman`))