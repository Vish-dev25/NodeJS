var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err,db){
    if(err)
    throw(err)
    var dbase = db.db('Student');
    var s1={id:1, name:"nilam", age:19, marks:80};

    dbase.collection("DeptA").insertOne(s1,function(err,res){
        if(err)
        throw(err);

        console.log("Record inserted.")
        db.close();
        
    })
    
})