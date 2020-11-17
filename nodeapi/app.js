const express = require('express');
const app = express();
const port = process.env.PORT || 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://127.0.0.1:27017";
const fs = require('fs');
let db;

//health check
app.get('/health',function(req,res){
    res.status(200).send("Health OK")
});

//Default Route
app.get('/',function(req,res){
    fs.readFile('./abc/db.json','utf-8',function(err,data){
        if(err) throw err;
        res.status(200).send(data)
    })
   
});

/*//Default Route
app.get('/city',function(req,res){
    db.collection('attainu').find().toArray(function(err,result){
        if(err) throw err;
        res.send(result)
    });
});

//Db Connection
MongoClient.connect(mongoUrl,(err,connection) => {
    if(err) console.log(err);
    db = connection.db('TestDb');
    app.listen(port);
})*/

app.listen(port);

