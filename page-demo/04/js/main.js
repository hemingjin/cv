$(function(){

	/*搜索框*/
	var $search_txt=$("input.search-main");
	$search_txt.bind({focus:function(){
		if(this.value==this.defaultValue){
			this.value="";
		}
	},blur:function(){
		if(this.value==""){
			this.value=this.defaultValue;
		}
	}});
	/*选项卡切换*/
	var $tab_li=$(".con-tab li");
	$tab_li.mouseover(function(){
		$(this).addClass("tab-on").siblings().removeClass("tab-on")
		.parents(".con-right").find(".tab-content .tab-main")
		.eq($(this).index()).css("display","block")
		.siblings().css("display","none");
	});

});