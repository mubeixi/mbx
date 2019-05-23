const express=require('express');
const pool=require('./pool.js');
var router=express.Router();

router.post('/cart',(req,res)=>{
	var cart=req.body.cart;
	var sql="select * from mbx_cart where cartBoy= ? or cartGirl=?";
	pool.query(sql,[cart,cart],(err,result)=>{
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
	
	
});

module.exports=router;