var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url,function(err,db)
{
    if(err)
    throw err;

    var dbase = db.db("Student")
    // var query = {age:20};
    dbase.collection("DeptA").findOne({marks:60}, function(err, result)
    {
        if(err)
        throw err

        console.log(result);
    })
})