$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.portfolio-inner-nav nav').addClass('active');
	})
	$('#back').click(function(){
		$('.portfolio-inner-nav nav').removeClass('active');
	})
});