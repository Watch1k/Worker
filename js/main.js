$(document).ready(function(){

// menu toggle
	$('#menu_toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.nav-main').slideToggle();
		$('.sign-btn').toggle();
	});

// Parallax
	$('.header').parallax("50%", 0.45);
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
	$(function(){
		var headerH = $('.header__top').height();
		console.log(headerH);
	    $('.nav-main').onePageNav({
	    	currentClass: 'is-active',
			filter: ':not(.external)',
			scrollThreshold: 0.5,
			scrollSpeed: 1200,
			easing: 'swing',
			scrollOffset: headerH + 60
		});
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('.nav-main li.is-active').removeClass('is-active');
			$('.nav-main li:last-child').addClass('is-active');
		}
	});

// Ajax Form
	(function () {
		$.validate({
			validateOnBlur : true,
			onSuccess : function() {
				post_data = $('#form_newsletter').serialize();
				
				//Ajax post data to server
				$.post('send.php', post_data, function(response){  
				    if (response.type == 'error'){ //load json data from server and output message     
				        output = '<div class="error">'+response.text+'</div>';
				        $('#form_newsletter .submit-btn').text('Error');
				        setTimeout(function(){
				        	$('#form_newsletter button').text('Subscribe');
				        }, 3000);
				    }
				    else {
				        output = '<div class="success">'+response.text+'</div>';
				        //reset values in all input fields
				        $('#form_newsletter')[0].reset();
				        $('#form_newsletter button').text('Done');
				        setTimeout(function(){
				        	$('#form_newsletter button').text('Subscribe');
				        }, 3000);
				    }
				}, 'json');
				return false;
			}
		});
	}());

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

// Window Scroll
jQuery(window).scroll(function () {

    'use strict';

    if (jQuery(document).scrollTop() >= 1) {
        $('.header__top').addClass('fixed');
    } else {
        $('.header__top').removeClass('fixed');
    }

});