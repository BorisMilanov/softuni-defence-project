const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User')
const auth = require('./controllers/auth-controller')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern-movie-app-test')
// app.post('/api/register', async (req,res)=>{
//     console.log(req.body);
//     try{
//         const newPassword = await bcrypt.hash(req.body.password,10)
//         await User.create({
//             username:req.body.username,
//             email: req.body.email,

//             password: newPassword
//         })
        
//     }catch(err){
//         console.log(err);
//     }
// })
app.use(auth)
app.listen(3030,()=>{console.log('server');})