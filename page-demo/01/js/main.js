$(document).ready(function(){
	var mWidth=1024;
	// alert($(window).width());
	if($(window).width()>=mWidth){
		$("#toggle-menu").on("click",function(){
			if($("#menu").hasClass("block-menu")){
				$("#menu").removeClass("block-menu");
				$("#toggle-menu .t-i").removeClass("block-t");
				$("#toggle-menu .b-i").removeClass("block-b");
				$("#toggle-menu .m-i").removeClass("block-m");
				$(".menu-content").removeClass("menu-content-width");
				$(".nav").removeClass("nav-width");
			}else{
				$("#menu").addClass("block-menu");
				$("#toggle-menu .t-i").addClass("block-t");
				$("#toggle-menu .b-i").addClass("block-b");
				$("#toggle-menu .m-i").addClass("block-m");
				$(".menu-content").addClass("menu-content-width");
				$(".nav").addClass("nav-width");
			}
		});
			$(".photo-go").click(function(){
				$(".over-html").html($(this).parent().find(".hidden").html());
				$(".gallery-over").show(300);
				$(".over-box").fadeIn(300);
			});
			$(".over-close").click(function(){$(".gallery-over").hide(300)});
	}else{
		$("#toggle-menu").on("click",function(){
			if($("#menu").hasClass("block-menu")){
				$("#menu").removeClass("block-menu");
				$("#toggle-menu .t-i").removeClass("block-t");
				$("#toggle-menu .b-i").removeClass("block-b");
				$("#toggle-menu .m-i").removeClass("block-m");
				$(".share-c").css("display","none");
                $(".copyright").css("display","none");
			}else{
				$("#menu").addClass("block-menu");
				$("#toggle-menu .t-i").addClass("block-t");
				$("#toggle-menu .b-i").addClass("block-b");
				$("#toggle-menu .m-i").addClass("block-m");
				$(".share-c").css("display","inline-block");
                 $(".copyright").css("display","block");
			}
		});
	}
	

});