$(document).ready(function(){

// Parallax
	$('.header').parallax("50%", 0.4);
	$('.quotes').parallax("50%", 0.2);

// Slider
	$('.quotes-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 7000
	});

// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

// Selectric
	$('select').selectric();

// Quick Seartch button scroll
	$('.find__top p button, .start-btn').on('click', function(){
		$(window).scrollTo('#find_bot', {duration: 'slow', offset: -200});
	});

// Vimeo
	// Find all Vimeo videos
	var $allVideos = $("iframe"),

	    // The element that is fluid width
	    $fluidEl = $(".work__video");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

	  $(this)
	    .data('aspectRatio', this.height / this.width)

	    // and remove the hard coded width/height
	    .removeAttr('height')
	    .removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

	  var newWidth = $fluidEl.width();

	  // Resize all videos according to their own aspect ratio
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	      .css('width', newWidth)
	      .css('height', newWidth * $el.data('aspectRatio'));

	  });

	// Kick off one resize to fix all videos on page load
	}).resize();

// // ScrollTo
// 	$(function(){
// 	    $('.main-nav').onePageNav({
// 			filter: ':not(.external)',
// 			scrollThreshold: 0.25,
// 			scrollSpeed: 1200,
// 			easing: 'swing',
// 			scrollOffset: 38
// 		});
// 	});

// // js-inview
// 	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
// 		if (isInView) {
// 				if (visiblePartY == 'top') {
// 				// top part of element is visible
// 			} else if (visiblePartY == 'bottom') {
// 				// bottom part of element is visible
// 			} else {
// 				// whole part of element is visible
// 			}
// 		} else {
// 			// element has gone out of viewport
// 		}
// 	});

// // WOW animation
// 	new WOW().init();



// 60fps scrolling
	var body = document.body,
	timer;
	window.addEventListener('scroll', function() {
		clearTimeout(timer);
		if(!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover')
		}
		timer = setTimeout(function(){
			body.classList.remove('disable-hover')
		}, 250);
	}, false);
	
	
});