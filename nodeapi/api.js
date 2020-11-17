const express = require('express');
const app = express();
const port = 8900;
const fs = require('fs');

//Default Route
app.get('/',function(req,res){
    fs.readFile('./abc/db.json','utf-8',function(err,data){
        if(err) throw err;
        res.status(200).send(data)
    })
   
});

app.listen(port);