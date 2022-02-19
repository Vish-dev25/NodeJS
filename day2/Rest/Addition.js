const express = require('express');
const{appendFile} = require('fs')

var app = express();

app.get("/",function(err,res){
    res.sendFile("F:\MERN\CodePractice\NODE\MyFolder\index.htm")
})

app.listen(3000,function(){
    console.log("server is running")
})