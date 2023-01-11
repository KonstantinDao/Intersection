require('dotenv').config();

const mongoClusterUrl = process.env.DATABASE_URL
const express = require("express")
const mongoose = require("mongoose")
const server = express()
const routes = require('./routes/routes')

server.use('/api', routes)

server.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})

mongoose.set('strictQuery', false)
mongoose.connect(mongoClusterUrl)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Connected to MongoDB Cluster');
})

