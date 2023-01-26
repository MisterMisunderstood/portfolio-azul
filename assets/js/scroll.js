//scrollada suave, bem padrão 

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.logo-menu').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.logo-menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.menu-mob a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu-mob').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});