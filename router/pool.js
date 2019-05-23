const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'mbx',   // 连接后使用的数据库
	connectionLimit:20  //设置连接池的大小
});

module.exports=pool;