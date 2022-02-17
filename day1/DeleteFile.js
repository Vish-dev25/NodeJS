var fs = require('fs')

// var fileName = 'Note.txt';
fs.unlink('Note.txt',(err)=>{
    
    console.log('Selected File deleted.')
})