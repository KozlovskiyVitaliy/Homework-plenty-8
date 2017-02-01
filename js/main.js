    $(document).ready(function(){
      $('.slider').slick({
        autoplay:true,
        arrows:false
      });
    });
// burger menu
    $(".menu").hide();
    $(".btn_menu").click(function(){
    	$(".menu").slideToggle("slow");
    })
// animation burger
    $(".btn_menu").click(function () {
	   			$(this).toggleClass("menu_on");
	});