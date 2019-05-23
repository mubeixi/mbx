$(document).ready(function(){
		$("li").on("mouseover",function(){
			$(this).addClass("active");
			
		});
		$("li").on("mouseout",function(){
			$(this).removeClass("active");	
			
		});	
});


window.onload=iframeFooter(){
			    document.getElementById("iframeFooter").height=0;
			    document.getElementById("iframeFooter").height=document.getElementById("iframeFooter").contentWindow.document.body.scrollHeight;				
}