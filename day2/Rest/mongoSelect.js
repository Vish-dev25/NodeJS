var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err,db)
{
    if(err)
    throw(err);
    var dbase = db.db('Student');

    dbase.collection("DeptA").find({}).toArray(function(err,result)

    {
        if(err)
        throw(err);

        console.log(result)
        db.close();
    })
})