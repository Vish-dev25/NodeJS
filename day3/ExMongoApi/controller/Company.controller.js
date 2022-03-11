// const myCompany = require("../model/Company.model");

// //http://localhost:3000/movie/test
// exports.test=(req,res)=>res.send("I am tested");


// //http://localhost:3000/movie/create
// exports.create=(req,res)=>{
//     let Company=new myCompany[({
//         id:req.body.id,
//         name:req.body.m_name,
//         ticket_cost:req.body.ticket_cost
//     })]
//     Company.save(function(err){
//     if(err)
//     {
//         return  nextTick(err)
//     }
//     res.send("Record is inserted");
// })


// }
// //http://localhost:3000/movie/all
// exports.all=(req,res)=>{
//     myCompany.find(function(err,result){
//         if(err)
//         {
//             return next(err);
//         }
//         res.send(result);
//     });
// }

// //http://localhost:3000/movie/620f76c8499c7fe669622dfc
// exports.details=(req,res)=>
// {

//     //var query={movie_id:req.params.movie_id}

//     myCompany.findById(req.params.id,function(err,result){
//         if(err)
//         {
//             return next(err)
//         }
//         res.send(result);
//     })
// }
// //http://localhost:3000/movie/deleteMovie/2
// exports.delete=(req,res)=>{
//     myCompany.deleteOne(req.params.movie_id,function(err,result){
//         if(err)
//         {
//             return next(err)
//         }
//         res.send("Recored is deleted")
//     })
// }
// //
// exports.update=(req,res)=>{
//     myCompany.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
//         myCompany.findOne({_id:req.params.id}).then(function(result){
//             res.send(result);
//         })
//     })
// }