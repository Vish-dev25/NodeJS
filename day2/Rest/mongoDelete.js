var mongoClient = require('mongodb').mongoDelete;

var url = "mongodb://localhost:27017";
mongoClient.connect(url,function(err,db){
    if(err)
    throw(err)
    var dbase = db.db("Student");
    var query = {age:23};
    dbase.collection("divA").deleteOne(query,function(err,res){
        if(err)
        throw(err)
        console.log("Deleted Record")
    })
})

//HW - delete many,find query, update