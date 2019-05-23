$(document).ready(function(){
		$("#userLogin").click(function(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){			
				if(xhr.readyState==4&&xhr.status==200){
					var result=xhr.responseText;
					if(result=="1"){
						alert("登陆成功");
						location.href="http://127.0.0.1:8080/mbx_main.html";
					}else{
						alert("登陆失败");
					}
				}
			}
			xhr.open("post","http://127.0.0.1:8080/user/login",true);
			var formdata=`uname=${uname.value}&upwd=${upwd.value}`;
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(formdata);
		});
		
		$(".qq1").hover(function(){
				$(this).css("background-position","0 -27px");
		});
		$(".qq1").mouseout(function(){
				$(this).css("background-position","0 0");
		});
		$(".wx1").hover(function(){
				$(this).css("background-position","-42px -27px");
		});
		$(".wx1").mouseout(function(){
				$(this).css("background-position","-42px 0");
		});
		$(".wb1").hover(function(){
				$(this).css("background-position","-87px -27px");
		});
		$(".wb1").mouseout(function(){
				$(this).css("background-position","-87px 0");
		});
		$(".zfb1").hover(function(){
				$(this).css("background-position","-130px -27px");
		});
		$(".zfb1").mouseout(function(){
				$(this).css("background-position","-130px 0");
		});
		
		$(".icon1").hover(function(){
				$(this).css("background-position","0 -60px");
		});
		$(".icon1").mouseout(function(){
				$(this).css("background-position","0 0");
		});
				
		$(".icon2").hover(function(){
				$(this).css("background-position","-60px -60px");
		});
		$(".icon2").mouseout(function(){
				$(this).css("background-position","-60px 0");
		});
				
		$(".icon3").hover(function(){
				$(this).css("background-position","-120px -60px");
		});
		$(".icon3").mouseout(function(){
				$(this).css("background-position","-120px 0");
		});
		
		$(".icon4").hover(function(){
				$(this).css("background-position","-180px -60px");
		});
		$(".icon4").mouseout(function(){
				$(this).css("background-position","-180px 0");
		});
			
		$(".icon5").hover(function(){
				$(this).css("background-position","-240px -60px");
		});
		$(".icon5").mouseout(function(){
				$(this).css("background-position","-240px 0");
		});
				
		$(".icon6").hover(function(){
				$(this).css("background-position","-300px -60px");
		});
		$(".icon6").mouseout(function(){
				$(this).css("background-position","-300px 0");
		});
				
		$(".icon7").hover(function(){
				$(this).css("background-position","-360px -60px");
		});
		$(".icon7").mouseout(function(){
				$(this).css("background-position","-360px 0");
		});
				
		$(".xlLast").hover(function(){
				$(this).css("background-position","-44px -53px");
		});
		$(".xlLast").mouseout(function(){
				$(this).css("background-position","-44px 0");
		});
		
		$(".wxLast").hover(function(){
				$(this).css("background-position","0 -53px");
		});
		$(".wxLast").mouseout(function(){
				$(this).css("background-position","0 0");
		});
				
				
});


 function blurUname(){
		if(uname.value==""){
			login_msg.innerHTML='用户名不能为空';
		}else{
				login_msg.innerHTML='';
			}
	}
function blurUpwd(){
	 		if(upwd.value==""){
	 			login_msg.innerHTML='密码不能为空';
	 		}else{
				login_msg.innerHTML='';
			}
	}
function iframeFooter(){
 	    document.getElementById("iframeFooter").height=0;
 	    document.getElementById("iframeFooter").height=document.getElementById("iframeFooter").contentWindow.document.body.scrollHeight;
 	
 	}