var fs = require('fs')
fs.mkdir('./MyFolder',function(err)
{
    if(err)
    console.log(err);
    else{
        console.log("Directory is created successfully..");
    }
})