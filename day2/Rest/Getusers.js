var express=require('express');

var app=express();

var fs=require("fs");
const { parse } = require('path');

app.get('/listUsers',function(req,res){
    fs.readFile("user.json",function(err,data){
        console.log(data);
        res.end(data);
    })
})


http://localhost:8081/3

// app.get('/:id',function(req,res){
//     fs.readFile("user.json",function(err,data){     //user.json will get store in data
//         var user=JSON.parse(data);                  //will return all emps in user
//         var emp=user["user"+ req.params.id]         //
//         console.log(emp)
//         res.end(JSON.stringify(emp));
//     })
// })

var user = {
    "emp5":{
        "id": 5,
        "empname": "Zoya",
        "address": "H.NO488",
        "city": "Bangalore"
    }
}

app.post("/addUser", function(req,res)
{
    fs.readFile("user.json",function(err,data)
    {
        data=JSON.parse(data);
        data["emp5"] = user["emp5"];
        console.log(data);
        res.send(JSON.stringify(data));

        fs.writeFile("user.json", JSON.stringify(data),function(err,data)
        {
            if(err){
                console.log(err)
            }
            console.log("Done!")
        })
    })
})

app.delete('/deleteUser', function (req,res){
    fs.readFile("user.json", function(err,data)
    {
        data = JSON.parse(data);
        delete data["emp"+4]
        console.log(data);
        res.end(JSON.stringify(data));

        
        fs.writeFile("user.json", JSON.stringify(data),function(err,data)
        {
            if(err){
                console.log(err)
            }
            console.log("Done!")
        })
    })
})



var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Server is running on http://%s:%s",host,port);
})