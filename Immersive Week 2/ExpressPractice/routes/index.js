'use strict';
const todos = require('../models/todos');
const express = require('express');
const router = express.Router();

// write your routes here. Feel free to split into multiple files if you like.


router.get("/users", (req, res, next)=>{
    const data = todos.listPeople();
    res.send(data);
});

router.get('/users/:name/tasks', (req, res, next)=>{
    if(!todos.list(req.params.name)){ //user does not exist
        const error = new Error('Not found');
        error.stat = 404;
        return next(error);
    }
    
    let data = todos.list(req.params.name);
    if(req.query.hasOwnProperty('status')){
        if(req.query.status === 'complete'){
            data = data.filter(n => n.complete);
        }
        else{
            data = data.filter(n => !n.complete);
        }
    }
    res.send(data);
});

router.post('/users/:name/tasks', (req, res, next) => {
    const nameToAdd = req.params.name;
    const contentToAdd = req.body;
    if(contentToAdd.content === ""){
        const error = new Error('Not found');
        error.stat = 400;
        return next(error);
    }
    //console.log(nameToAdd, contentToAdd);
    todos.add(nameToAdd, contentToAdd);
    let taskList = todos.list(nameToAdd);
    res.status(201)
    .send(taskList[taskList.length-1]);
});

router.put('/users/:name/tasks/:index', (req,res,next) =>{
    // console.log(req.params);
    todos.complete(req.params.name, Number(req.params.index));
    res.send(todos.list(req.params.name[req.params.index].complete));
});

router.delete('/users/:name/tasks/:index', (req,res,next) =>{
    // console.log(req.params.name, req.params.index);
    todos.remove(req.params.name, Number(req.params.index));
    res.status(204)
    .send(todos.list(req.params.name));
});

router.use((err, req, res, next)=>{
    res.sendStatus(err.stat);
});




module.exports = router;
