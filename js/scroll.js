// JavaScript Document
$(function(){
	$(".block1").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:2000},800);
		return false;
	});
	$(".block2").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:2800},800);
		return false;
	});
	$(".block3").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:3500},800);
		return false;
	});
	$(".block4").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:4500},800);
		return false;
	});
});