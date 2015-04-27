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
        if (height == 10) {
        	alert("Don't forget to use coupon code HAPPY to save 50% off your first order. You'd be losing money not to!")
        }
    });







});


