require('dotenv').config();

const mongoClusterUrl = process.env.DATABASE_URL
const cors = require('cors');
const express = require("express")
const mongoose = require("mongoose")
const server = express()
server.use(cors());
const userRoutes = require('./src/routes/userRoutes')
const matchingRoutes = require('./src/routes/matchingRoutes')
const roomRoutes = require('./src/routes/roomRoutes')

server.use('/api', roomRoutes)
server.use('/api', userRoutes)
server.use('/api', matchingRoutes)

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