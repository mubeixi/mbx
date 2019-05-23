$(document).ready(function(){
	
		//商品详情轮播图
		$("#check1").hover(function(){
			$(this).addClass("checked");
			$("#check2,#check3,#check4").removeClass("checked");
			$(".bigImg").css("margin-left","0px");
		});
		$("#check2").hover(function(){
			$(this).addClass("checked");	
			$("#check1,#check3,#check4").removeClass("checked");
			$(".bigImg").css("margin-left","-460px");
		});
		$("#check3").hover(function(){
			$(this).addClass("checked");	
			$("#check1,#check2,#check4").removeClass("checked");	
			$(".bigImg").css("margin-left","-920px");
		});
		$("#check4").hover(function(){
			$(this).addClass("checked");
			$("#check1,#check2,#check3").removeClass("checked");
			$(".bigImg").css("margin-left","-1380px");
		});
		//分享
		$("#share1").hover(function(){
			$(this).css("background-position","0px -68px");
		});
		$("#share1").mouseout(function(){
			$(this).css("background-position","0px 0px");
		});
		$("#share2").hover(function(){
			$(this).css("background-position","-31px -68px");
		});
		$("#share2").mouseout(function(){
			$(this).css("background-position","-31px 0px");
		});
		$("#share3").hover(function(){
			$(this).css("background-position","-62px -68px");
		});
		$("#share3").mouseout(function(){
			$(this).css("background-position","-62px 0px");
		});
		$("#share4").hover(function(){
			$(this).css("background-position","-93px -68px");
		});
		$("#share4").mouseout(function(){
			$(this).css("background-position","-93px 0px");
		});
		$("#share5").hover(function(){
			$(this).css("background-position","0px -102px");
		});
		$("#share5").mouseout(function(){
			$(this).css("background-position","0px -34px");
		});
		$("#share6").hover(function(){
			$(this).css("background-position","-124px -68px");
		});
		$("#share6").mouseout(function(){
			$(this).css("background-position","-124px 0px");
		});
		
		//戒指点击
		$("#nndj").click(function(){
			$(".mbx_price span")[0].innerHTML="¥6666";//点击改变商品价格
			$(this).addClass("chooseed");//点击为 点击的添加边框
			$("#dnj,#nnj").removeClass("chooseed");//把其他没点击的样式去掉
			$("#menHand,#manHand").css("display","block");//显示男女手寸
		});
		$("#dnj").click(function(){
			$(".mbx_price span")[0].innerHTML="¥4444";//点击改变商品价格
			$(this).addClass("chooseed");//点击为 点击的添加边框
			$("#nndj,#nnj").removeClass("chooseed");//把其他没点击的样式去掉
			$("#manHand").css("display","none");//隐藏男手寸
			$("#menHand").css("display","block");//显示女手寸
		});
		$("#nnj").click(function(){
			$(".mbx_price span")[0].innerHTML="¥2222";//点击改变商品价格
			$(this).addClass("chooseed");//点击为 点击的添加边框
			$("#nndj,#dnj").removeClass("chooseed");//把其他没点击的样式去掉
			$("#menHand").css("display","none");//隐藏女手寸
			$("#manHand").css("display","block");//显示男手寸
		});
		$("#whiteJ").click(function(){
			$(this).addClass("chooseed");
			$("#redJ").removeClass("chooseed");
		});
		$("#redJ").click(function(){
			$(this).addClass("chooseed");
			$("#whiteJ").removeClass("chooseed");
		});
		//input输入框
		$("#njkzHeart").click(function(){
			$("#njkz")[0].value+="♥";
		});
		$("#njkzAnd").click(function(){
			$("#njkz")[0].value+="&";
		});
		$("#nnkzHeart").click(function(){
			$("#nnkz")[0].value+="♥";
		});
		$("#nnkzAnd").click(function(){
			$("#nnkz")[0].value+="&";
		});
		//刻字预览
		$("#kzyl1").click(function(){
			$("#kzylXiaoGuo")[0].innerHTML=$("#njkz")[0].value;
			$("#kzylXiaoGuo").show();
		});
		$("#kzyl2").click(function(){
			$("#kzylXiaoGuo")[0].innerHTML=$("#nnkz")[0].value;
			$("#kzylXiaoGuo").show();
		});
		//评论区
		$(".buy1").click(function(){
			$(this).addClass("ringBuy_strong");
			$(".buy2,.buy3,.buy4").removeClass("ringBuy_strong");
			$(".imgLast2,.imgLast3,.imgLast4").hide();
			$(".imgLast1").show();
		});
		$(".buy2").click(function(){
			$(this).addClass("ringBuy_strong");
			$(".buy1,.buy3,.buy4").removeClass("ringBuy_strong");
			$(".imgLast1,.imgLast3,.imgLast4").hide();
			$(".imgLast2").show();
		});
		$(".buy3").click(function(){
			$(this).addClass("ringBuy_strong");
			$(".buy1,.buy2,.buy4").removeClass("ringBuy_strong");
			$(".imgLast1,.imgLast2,.imgLast4").hide();
			$(".imgLast3").show();
		});
		$(".buy4").click(function(){
			$(this).addClass("ringBuy_strong");
			$(".buy1,.buy2,.buy3").removeClass("ringBuy_strong");
			$(".imgLast1,.imgLast2,.imgLast3").hide();
			$(".imgLast4").show();
		});
		
		
		//商品详情轮播
		$(function(){
				var num=0;
				var timer=null;
				 $(".bigImg").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
				    clearInterval(timer);//移动进去时清除定时器
				}).mouseleave(function(){
				    go();//移出后执行go函数
				});
				go();
				$(".ImgCheckUl").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
				      clearInterval(timer);//移动进去时清除定时器
				  }).mouseleave(function(){
				      go();//移出后执行go函数
				  }); 
			
				function go(){
				  timer=setInterval(function(){//设置定时器
				        num++;//用一个全局变量来控制图的运动次数
				        if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
				            num=0;
				            $(".bigImg").css("margin-left","0px");
							$("#check1").addClass("checked");
							$("#check2,#check3,#check4").removeClass("checked");
				        }
						if(num==0){
							$("#check1").addClass("checked");
							$("#check2,#check3,#check4").removeClass("checked");
						}
						if(num==1){
							$("#check2").addClass("checked");
							$("#check1,#check3,#check4").removeClass("checked");
						}
						if(num==2){
							$("#check3").addClass("checked");
							$("#check1,#check2,#check4").removeClass("checked");
						}
						if(num==3){
							$("#check4").addClass("checked");
							$("#check1,#check2,#check3").removeClass("checked");
						}
				        $(".bigImg").animate({"marginLeft":-460*num+"px"},580);//使用animate实行运动功能
				    },2500);
				}
				
		});
});

function iframeFooter()
		{
		    document.getElementById("iframeFooter").height=0;
		    document.getElementById("iframeFooter").height=document.getElementById("iframeFooter").contentWindow.document.body.scrollHeight;
		
		}