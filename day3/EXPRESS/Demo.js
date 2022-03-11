var express = require('express');
var app = express();

app.get('/', function(req,res)
{
    res.send('Hello Express');
})
app.get('/abcde', function(req,res)
{
    console.log("Get Pattern")
    res.send('{Pattern Match}');
})

app.listen(3000, function()
{
    console.log("Server is Running")
})
