const express = require('express')
require('dotenv').config()

const app = express()
app.get('/',(req, res) =>{
    res.status(201).json({message : "API working"})
})
app.get('/test',(req, res) =>{
    res.status(201).json({message : "API working"})
})
module.exports = app
