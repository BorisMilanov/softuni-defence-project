const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
router.post('/api/register', async (req,res)=>{
    console.log(req.body);
    try{
        const newPassword = await bcrypt.hash(req.body.password,10)
        await User.create({
            username:req.body.username,
            email: req.body.email,

            password: newPassword
        })
        
    }catch(err){
        console.log(err);
    }
})

module.exports = router;