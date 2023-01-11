const express = require('express');
const router = express.Router()
const User = require('../models/user');

router.use(express.json());

module.exports = router;

//Post Method
router.post('/post', async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const data = await user.save();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
         const user = await User.find()
         res.json(user)   
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

router.delete('/deleteAll', async (req, res) => {
    try{
        const user = await User.deleteMany()
        res.json({message: "success"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
    
})