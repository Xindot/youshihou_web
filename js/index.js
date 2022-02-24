// 点击右上角图标 显示、隐藏导航
$(document).ready(function(){
		$(".show-menu").click(function(){ 
			$(this).next("div").slideToggle("fast")  
			.siblings(".hide-menu:visible").slideUp("fast");
		});
	});
	
// 导航滚动条 鼠标向上滚动出现 向下隐藏
$(function(){
	var ss = $(document).scrollTop();
	$(window).scroll(function(){
		var s = $(document).scrollTop();
		if(s > 0){
			$('.header-top').addClass('gizle');
			if(s > ss){
				$('.header-top').removeClass('sabit');
			}else{
				$('.header-top').addClass('sabit');
			}
			ss = s;
		}else{
			$('.header-top').removeClass('gizle');
		}
	});
	
});


window.onload = function(){
 $(window).scroll(function() {
  var sTop = $(window).scrollTop();
  
  if (sTop > 800) {
   $('.main-restaurant-up').show();
  } else {
   $('.main-restaurant-up').hide();
  };
  if (sTop > 1000) {
   $('.main-restaurant-down').show();
  } else {
   $('.main-restaurant-down').hide();
  };
  if (sTop > 1200) {
   $('.main-restaurant-down2').show();
  } else {
   $('.main-restaurant-down2').hide();
  };
  
  if (sTop > 1800) {
   $('.index_image_phone').show();
   // $(window).unbind('scroll');
  } else {
   $('.index_image_phone').hide();
  };
  
 }); 
};

   // 点击播放/停止视频 
$(function(){
	var v1 = document.getElementsByTagName('video')[0];
	var v2 = document.getElementsByTagName('video')[1];
	var v3 = document.getElementsByTagName('video')[2];
   $('#video-modal').click(function() {
		 p1();
	});
   $('#video-a-1').click(function() {
		 p1();
	});
   $('#video-a-2').click(function() {
		 p2();		 
	});
   $('#video-a-3').click(function() {
		 p3();
	});
   $('#video-1').click(function() {
		 v2.pause();
		 v3.pause();
	});
   $('#video-2').click(function() {	 
		 v1.pause();
		 v3.pause();
	});
   $('#video-3').click(function() {
		 v1.pause();
		 v2.pause();
	});
   function p1(){
	   if (v1.paused){
		   v1.play();
	   }else{
		   v1.pause();
		   }
   };
    function p2(){
	   if (v2.paused){
		   v2.play();
	   }else{
		   v2.pause();
		   }
   };
   function p3(){
	   if (v3.paused){
		   v3.play();
	   }else{
		   v3.pause();
		   }
   };
   



	
	
});


/* //控制a链接点击后变化样式
	$(function(){
		$('.header-list a').click(function(){
			$('.current').removeClass('current');
			$('.this').addClass('current');
		});
		
	}); */


