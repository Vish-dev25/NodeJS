var express = require('express');
var app = express();

var myRoute = require('./RoutingDemo')

app.use('/', myRoute);

app.listen(3000, function()
{
    console.log("Server is Running")
})
