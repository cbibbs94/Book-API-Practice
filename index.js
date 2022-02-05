//Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")

//Initialize App
const app = express()
const PORT = process.env.PORT

//MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Here we go again with the data keeping!', process.env.MONGO_URI)
})

//Routes
app.get('/', (req, res) => {
    res.send("The Finest Book APi in all the Land!")
})

//Listen
app.listen(PORT, () => {
    console.log("Lot of Reading going on here at", PORT)
})

