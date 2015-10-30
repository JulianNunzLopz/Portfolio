$(function() {
	jQuery.scrollSpeed(100, 800);

	$('.niceScroll').click(function(){
		var target = $(this).attr('href');
		var speed = 800;
		$('body,html').animate({scrollTop : $(target).offset().top},speed);
		return false;
	});	

	$('#menu').click(function(){
		$('#mobilMenu nav').toggle('slow');
	})
});