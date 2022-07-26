const express = require('express');
const app = express();
const cors = require('cors');

app.get('/test',(req,res)=>{
    res.send('hello')
})

app.listen(3030,()=>{console.log('server');})