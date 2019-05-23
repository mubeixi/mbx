const express=require('express');
const pool=require('./pool.js');
var router=express.Router();

router.get('/main',function(req,res){
    var obj =req.query;
    var n=400;
    for(var key in obj){
            n++;
            if(!obj[key]){
                res.send({code: n,msg : key+' require'});
                return;
            }
    }
});

module.exports=router;