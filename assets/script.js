$(document).ready(function(){

    /*$("#image3").hover(function(){
        $("#image3").css("-webkit-filter", "brightness(50%) contrast(108%)");
        },function(){
        $("#image3").css("-webkit-filter", "brightness(100%) contrast(108%)");
    }); */

$("#image2").hover(function(){
        $("#image2").css("-webkit-filter", "brightness(50%) contrast(108%)");
        },function(){
        $("#image2").css("-webkit-filter", "brightness(100%) contrast(108%)");
    });

$(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height == 5) {
        	$("#image2").fadeIn(1000);
        };
    });

    $(window).scroll(function(){
        var height = $("#image2").fadeIn(1000)
    });

$(".bottom_container").click(function(){
	$("html, body").animate({ scrollTop: 0},0);
});

$(".info-container-left").click(function(){
	$("html, body").animate({ scrollTop: 0},0);
});

$(".right-bullet-point-explained-container").click(function(){
	$("html, body").animate({ scrollTop: 0},0);
});

$(window).scroll(function(){
  if($(document).scrollTop() > 692){
    $("#image2").hide();
  };
});







});


