var express = require('express');
var router = express.Router();

router.get('/', function(req,res)
{
    req.send('Get Routing');
})
router.post('/my', function(req,res)
{
    req.send('Get Routing');
})
router.delete('/delete', function(req,res)
{
    req.send('Deleted User');
})

module.exports = router;