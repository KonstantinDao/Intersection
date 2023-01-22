require('dotenv').config();

const mongoClusterUrl = process.env.DATABASE_URL
const express = require("express")
const mongoose = require("mongoose")
const server = express()
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



/**
 @func   bestMatch - returns best matching object
 @desc   This function takes an array of objects (haystack) and compares
         each property of needle to the property of haystack[n]. 
         haystack[n] gets a "score" based on how many properties exist and
         match the properties of needle, and js custom sort method is 
         used, based off the score, so that the first element in the 
         sorted haystack should have the highest score and therefore 
         "win" and be the best match 
 @param1 Array of objects to match against (haystack)
 @param2 Object to find matches for (needle)
 @return Object from haystack that is closest match against needle
 **/
 function bestMatch(h,n) {
    return h.sort(function(a,b){
      var c=0,d=0,p;
      for (p in n) {
        if (n.hasOwnProperty(p)) {
          c+=Number((a[p]||0)&&a[p]===n[p]);
          d+=Number((b[p]||0)&&b[p]===n[p]);
        }  
      }
      return (d<c)?-1:1;return 0;
    })[0];
  }