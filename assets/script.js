$(document).ready(function(){

    $("#image3").hover(function(){
        $("#image3").css("-webkit-filter", "brightness(50%) contrast(108%)");
        },function(){
        $("#image3").css("-webkit-filter", "brightness(100%) contrast(108%)");
    });

$("#image2").hover(function(){
        $("#image2").css("-webkit-filter", "brightness(50%) contrast(108%)");
        },function(){
        $("#image2").css("-webkit-filter", "brightness(100%) contrast(108%)");
    });

$(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height == 5) {
        	$("#image2").fadeIn();
        };
    });

    $(window).scroll(function(){
        var height = $("#image2").fadeIn()
    });









});


