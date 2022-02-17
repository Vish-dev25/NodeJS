var fs = require('fs');
fs.access('./MyFolder',function(err)
{
    if(err)
    {
        console.log("Directory Not Found!")
    }
    else{
        console.log("Directory Present.")
    }
})