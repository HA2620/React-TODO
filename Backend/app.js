const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('../database/db');
const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}));

app.get("/todos",async function(req,res){

    const todos = await todo.find({});
    res.json({
        todos
    })

    
})
app.post("/todo",async function(req,res){
    const todoData = req.body;
    const parseData = createTodo.safeParse(todoData);
    if(!(parseData.success)){
        res.status(411).json({
            msg:"you sent incorrect inputs"
        })
        return;
    }
        await todo.create({
            title:todoData.title,
            description:todoData.description,
            completed:false
        })
        res.json({
            msg:"todo created"
        })
    
})
app.put("/status",async function(req,res){
    const status = req.body;
    const parseStatus = updateTodo.safeParse(status);
    if(!(parseStatus.success)){
        res.status(411).json({
            msg:"you sent incorrect inputs"
        })
        return;
    }
        await todo.updateOne(
        {
            _id:req.body.id
        },
        {
            completed:true
        })
        res.json({
            msg:"todo updated"
        })

})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})