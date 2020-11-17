let express = require('express');
let fs = require('fs');
let app = express();
let port = process.env.PORT || 8900;
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let mongourl = "mongodb://localhost:27017";
let db;

//Read file
app.get('/',(req,res) => {
    fs.readFile('cities.json','utf-8',(err,data) => {
        db.collection('attainu').insertMany(JSON.parse(data),(err,result) => {
            if(err) throw err;
            console.log("data added")
        })
        res.send(data)
    })
  
})



MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log('error while connecting');
    db = client.db('TestDb');
    app.listen(port,(err)=>{
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
