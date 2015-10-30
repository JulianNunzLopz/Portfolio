$(function() {
	jQuery.scrollSpeed(100, 800);

	$('.niceScroll').click(function(){
		var target = $(this).attr('href');
		var speed = 800;
		$('body,html').animate({scrollTop : $(target).offset().top},speed);
		return false;
	});

/** Mobile navigation ---------------------------------------------------- **/

	$(document).mouseup(function (e){
		
		if ($('#menu').is(e.target)){
			$('#mobileMenu nav').toggle('slow');
		}else if ( $('#mobileMenu nav').is(':visible') 
					&& ( (!$('#mobileMenu').is(e.target) 
							&& $('#mobileMenu').has(e.target).length === 0) 
					   || $('#mobileMenu a').is(e.target) ) ){
			$('#mobileMenu nav').hide('slow');
		}
	});
});