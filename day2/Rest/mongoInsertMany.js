var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("Student");
    var s2 = [{id:2, name:"Anu", age:21, marks:60}, 
                {id:3, name:"Rima", age:24, marks:70},
                {id:4, name:"Senu", age:20, marks:60},
                {id:5, name:"Shiv", age:21, marks:40},
                {id:6, name:"Mona", age:20, marks:95},
                {id:7, name:"Ritu", age:23, marks:70},
                {id:8, name:"Ishan", age:20, marks:55}];

    dbase.collection("DeptA").insertMany(s2, function(err, res)
    {
        if(err) throw err;
        console.log("Records inserted.")
        db.close();
    })
})