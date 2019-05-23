$(document).ready(function(){
	
	//获取滚动条的距离页面的长度
	$(document).scroll(function(){   //页面加载时，获取滚动条初始高度
	　　var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
	　　if(distance>=190){  //当滚动条高度为0时
			$(".nav").addClass("topFix");
			$(".makeALL").addClass("topUlFix");
	　　}else{
			$(".nav").removeClass("topFix");
			$(".makeALL").removeClass("topUlFix");
	　　}
	})
	

	//身份证号
	$("#cart1").blur(function(){
			if(!cart1.value){
				cart1_msg.innerHTML="不能为空";
			}else if(cart.value.length!=18){
				cart1_msg.innerHTML="身份证号为18位";
			}else{
				cart1_msg.innerHTML="";
			}
	});
	//播放video
	$("#loveSearchPlay").click(function(){
		//jquery转dom对象 然后使用其方法
		$("#videoMBX")[0].play();
		$("#videoPlay").show();	
	});
	//关闭video
	$("#closePlay").click(function(){
		$("#videoMBX")[0].pause();
		$("#videoPlay").hide();
	});
	//底部图标 hover
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
	//导航栏ul
	$("#mbxnav").on("mouseover",function(){
		$("#makeALL1").show();
	});
	$("#mbxnav").on("mouseout",function(){
		$("#makeALL1").hide();		
	});
	
	$("#qhzjnav").on("mouseover",function(){
		$("#makeALL2").show();
	});
	$("#qhzjnav").on("mouseout",function(){
		$("#makeALL2").hide();
	});
	$("#jhzjnav").on("mouseover",function(){
		$("#makeALL3").show();
	});
	$("#jhzjnav").on("mouseout",function(){
		$("#makeALL3").hide();
	});
	$("#zalwnav").on("mouseover",function(){
		$("#makeALL4").show();
	});
	$("#zalwnav").on("mouseout",function(){
		$("#makeALL4").hide();
	});
	$("#ppwhnav").on("mouseover",function(){
		$("#makeALL7").show();
	});
	$("#ppwhnav").on("mouseout",function(){
		$("#makeALL7").hide();
	});
	$("#tsnav").on("mouseover",function(){
		$("#makeALL8").show();
	});
	$("#tsnav").on("mouseout",function(){
		$("#makeALL8").hide();
	});
	//导航栏的二级标签
	$("#qhzjList1").on("mouseover",function(){
		$("#qhjz1").show();
		$("#qhjz2,#qhjz3,#qhjz4,#qhjz5,#qhjz6,#qhjz7").hide();
	});
	$("#qhzjList2").on("mouseover",function(){
		$("#qhjz2").show();
		$("#qhjz1,#qhjz3,#qhjz4,#qhjz5,#qhjz6,#qhjz7").hide();
	});
	$("#qhzjList3").on("mouseover",function(){
		$("#qhjz3").show();
		$("#qhjz1,#qhjz2,#qhjz4,#qhjz5,#qhjz6,#qhjz7").hide();
	});
	$("#qhzjList4").on("mouseover",function(){
		$("#qhjz4").show();
		$("#qhjz1,#qhjz2,#qhjz3,#qhjz5,#qhjz6,#qhjz7").hide();
	});
	$("#qhzjList5").on("mouseover",function(){
		$("#qhjz5").show();
		$("#qhjz1,#qhjz2,#qhjz3,#qhjz4,#qhjz6,#qhjz7").hide();
	});
	$("#qhzjList6").on("mouseover",function(){
		$("#qhjz6").show();
		$("#qhjz1,#qhjz2,#qhjz3,#qhjz4,#qhjz5,#qhjz7").hide();
	});
	$("#qhzjList7").on("mouseover",function(){
		$("#qhjz7").show();
		$("#qhjz1,#qhjz2,#qhjz3,#qhjz4,#qhjz5,#qhjz6").hide();
	});
	$("#qhzjList8").on("mouseover",function(){
		$("#qhjz8").show();
		$("#qhjz9,#qhjz10,#qhjz11").hide();
	});
	$("#qhzjList9").on("mouseover",function(){
		$("#qhjz9").show();
		$("#qhjz8,#qhjz10,#qhjz11").hide();
	});
	$("#qhzjList10").on("mouseover",function(){
		$("#qhjz10").show();
		$("#qhjz8,#qhjz9,#qhjz11").hide();
	});
	$("#qhzjList11").on("mouseover",function(){
		$("#qhjz11").show();
		$("#qhjz8,#qhjz9,#qhjz10").hide();
	});
	
	//banner中的左右切换 图片的hover
	$("#mbx_banner").on("mouseover",function(){
		$(".bannerImg").show();
	});
	$("#mbx_banner").on("mouseout",function(){
		$(".bannerImg").hide();
	});
	$(".bannerImg").on("mouseover",function(){
		$(".bannerImg").css("background-color","#AA979C");
	});
	$(".bannerImg").on("mouseout",function(){
		$(".bannerImg").css("background-color","");
	});	
});

$(function(){
		var num=0;
		var timer=null;
		 $(".bannerPlay").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		    clearInterval(timer);//移动进去时清除定时器
		}).mouseleave(function(){
		    go();//移出后执行go函数
		});
		go();
		$("#bannerLeft").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		      clearInterval(timer);//移动进去时清除定时器
		  }).mouseleave(function(){
		      go();//移出后执行go函数
		  }); 
		$("#bannerRight").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		      clearInterval(timer);//移动进去时清除定时器
		  }).mouseleave(function(){
		      go();//移出后执行go函数
		  });	 
		function go(){
		  timer=setInterval(function(){//设置定时器
		        num++;//用一个全局变量来控制图的运动次数
		        if(num>2){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
		            num=0;
		            $(".ul_list").css("margin-left","0px");
		        }
		        $(".ul_list").animate({"marginLeft":-1360*num+"px"},580);//使用animate实行运动功能
		    },2000);
		}
		 $("#bannerLeft").click(function(){
			if(num>=0){num--;}
			if(num<0){
			    num=2;
			    $(".ul_list").css("margin-left","-4080px");
			}
			$(".ul_list").animate({"marginLeft":-1360*num+"px"},580);
			 
		 });
		$("#bannerRight").click(function(){
					if(num<=2){num++;}
					if(num>2){
					    num=0;
					    $(".ul_list").css("margin-left","0px") 
					}
					$(".ul_list").animate({"marginLeft":-1360*num+"px"},580);		 
		});
		
});

function textCart(cart){
	cart1_msg.innerHTML="";
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var result=xhr.responseText;
			if(result=="1"){
				alert("亲爱的,你已经购买了我们的戒指");
			}else{
				alert("亲爱的.你还没购买我们的戒指呢，快选购吧");
			}
		}
	}
	xhr.open('post',"http://127.0.0.1:8080/text/cart?cart="+cart.value,true);
	var formdata=`cart=${cart.value}`;
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}
//加载时候 自适应引入的html 高度
function iframeFooter(){
			    document.getElementById("iframeFooter").height=0;
			    document.getElementById("iframeFooter").height=document.getElementById("iframeFooter").contentWindow.document.body.scrollHeight;				
}