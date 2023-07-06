const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
require('./connection');
const User = require('./model/user');
app.use(express.json());

app.post('/',async(req,res)=>{
    const result = await User.create(req.body);
    res.status(201).json({"msg" : "user saved", result});
})

app.get('/', async(req,res)=>{
    const result = await User.find({});
    res.status(200).json({"msg":"data visiable", result});
})

app.put('/:id', async(req,res)=>{
    const id = req.params.id;
    const result = await User.findOneAndUpdate({"_id":id},req.body);
    res.status(200).json({"msg":"data Updaate",result});
})

app.listen(8000, ()=> {
    console.log(`Server is running on ${PORT} port`);
})


