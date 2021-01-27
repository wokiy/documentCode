const express = require('express');
const router = express.Router();

router.get('/info',function(req,res){
    res.json({
        msg:'user info'
    })
})

module.exports = router;