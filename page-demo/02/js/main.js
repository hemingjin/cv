/*
 *creat by xiaohe 2015 12 19
*/
$(document).ready(function(){
	//展示细节大图	
	//返回顶部 原生JS
	// var goTop=document.getElementById("gTop");
	// var timer=null;//初始化定时器
	// window.onscroll=function(){ //滚动条发生滚动时触发事件
	// 	var scrolltop=document.body.scrollTop || document.documentElement.scrollTop; //兼容不同浏览器
	// 	var sheight=document.body.innerHeight || document.documentElement.clientHeight;
	// 	if(scrolltop>=sheight/2){
	// 		goTop.style.display="block";
	// 	}else{
	// 		goTop.style.display="none";
	// 	}
		
	// 	goTop.onclick=function(e){
	// 		var e=e||window.event;
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		timer=setInterval(function(){
	// scrolltop-=Math.floor(scrolltop/5);
	// if(scrolltop<=10){
	// 	scrolltop=scrolltop-10;
	// }
	// if(scrolltop<0){
	// 	clearInterval(timer);
	// }
	// document.body.scrollTop=document.documentElement.scrollTop=scrolltop;
	// console.log(scrolltop);
	// 		},25);
	// 		return false;
	// 	}
	// }
	//返回顶部JQ
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(window).innerHeight()/2){
			$(".go-top").fadeIn(400);
		}else{
			$(".go-top").fadeOut(200);
		}
	})
	$(".go-top").click(function(){
		$("body,html").animate({scrollTop:"0px"},400);
	});
});
