$(document).ready(function(){
	// Parallax Header //
	$('.header-bg').parallaxBackground();


	// Smooth scrolling
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});


	// TOP Fixed Bar //
	$(document).on("scroll",function(){
		if($(document).scrollTop() > 300){
			$(".navbar").removeClass("large").addClass("small");
		} else{
			$(".navbar").removeClass("small").addClass("large");
		}
	});


	// Language switch menu //
    $(".lang").click(function(){
		$(this).toggleClass('active');
		$(this).children('ul').slideToggle();
	})
	
	$('.lang-menu li a').click(function(e){
		var check_lang = $(e.target).text();
		$('.check-lang').html(check_lang + '<span></span>');
	});


	// Responsive menu //
	$('.toggle-nav').click(function(e) {
		$('#nav').toggleClass('mobile');

		e.preventDefault();
	});

});