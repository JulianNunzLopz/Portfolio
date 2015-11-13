/** ------------------------------- SCRIPT ------------------------------- **/


$(function() {


/** ------------------------------- ANIMATE ------------------------------ **/


	jQuery.scrollSpeed(100, 800);

	$('.niceScroll').click(function(){
		var target = $(this).attr('href');
		var speed = 800;
		$('body,html').animate({scrollTop : $(target).offset().top},speed);
		return false;
	});


/** -------------------------------- FORM -------------------------------- **/


	$('.button').click(function(){
		var form = $(this.form);
		if(form[0].name.value!=''){
			if(form[0].email.value.indexOf('@')>0){
				if(form[0].message.value!=''){
					form.submit();
				}else{
					form[0].message.value = "Veuillez rédiger un message";
				}
			}else{
				form[0].email.value = "Veuillez renseigner votre adresse email";
				if(form[0].message.value == ''){
					form[0].message.value = "Veuillez rédiger un message";
				}
			}
		}else{
			form[0].name.value = "Veuillez renseigner votre nom";
			if(form[0].email.value == '' && form[0].message.value == ''){
				form[0].email.value = "Veuillez renseigner votre adresse email";
				form[0].message.value = "Veuillez rédiger un message";
			}
		}
	});

	$('input, textarea').click(function(){
		if(this.value!=''){
			if(this.value.indexOf('Veuillez r')!=-1){
				this.value='';
			}
		}
	});


/** ------------------------------- MOBILE ------------------------------- **/


/** Mobile resize -------------------------------------------------------- **/

	function resizeMedia(){
		if (window.matchMedia("(max-width: 960px)").matches){
			$('.inline3 + .inline3 + .inline3').removeClass('inline3').addClass('inline1');
			$('.inline3').addClass('inline2').removeClass('inline3');
		}
		else if (window.matchMedia("(min-width: 959px)").matches){
			$('.inline2 + .inline1').prev().removeClass('inline2').addClass('inline3');
			$('.inline3 + .inline1').prev().prev().removeClass('inline2').addClass('inline3');
			$('.inline1').removeClass('inline1').addClass('inline3');
		}
	}

	window.addEventListener('resize', resizeMedia, false);


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