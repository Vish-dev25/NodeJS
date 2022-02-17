var fs = require('fs')

fs.appendFile('output.txt', "! Happy Coding in Node.", function(err)
{
    if(err)
    console.log(err)
    console.log("Append Done.")
});