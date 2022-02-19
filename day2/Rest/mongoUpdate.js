var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect (url, function(err,db)
{
    if(err)
    throw(err)
    var dbase = db.db('Student');
    var query={marks:40};
    var newValues = {$set : {id:5, marks:50}}

    dbase.collection("DeptA").updateOne(query, newValues, function(err,res){
        if(err)
        throw(err);

        console.log("1 Record Updated.")
        db.close();
        
    })
    
})