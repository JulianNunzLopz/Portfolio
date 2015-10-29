$(function() {
	jQuery.scrollSpeed(100, 800);

	/** Initialisation 
	$('#user_name').val('Nom'); 
	$('#user_email').val('Votre@email'); 
	$('#user_message').val('Tapez votre message'); **/

	/** Animations **/
	$('.niceScroll').click(function(){
		var target = $(this).attr('href');
		var speed = 800;
		$('body').animate({scrollTop : $(target).offset().top},speed);
		return false;
	});	

	$('#menu').click(function(){
		$('#mobilMenu nav').toggle('slow');
	})

	/*Formulaire
	$('#user_name').click(function(){
		if($('#user_name').val() == 'Nom')
		{
			$('#user_name').val('');
		}
	});
	$('#user_email').click(function(){
		if($('#user_email').val() == 'Votre@email')
		{
			$('#user_email').val('');
		}
	});
	$('#user_message').click(function(){
		if($('#user_message').val() == 'Tapez votre message')
		{
			$('#user_message').val('');
		}
	});*/
});