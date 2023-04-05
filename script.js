$(document).ready(function() {
	$(".parallax").parallax();
	$(".button-collapse").sideNav();

	$('#btn-maps').on('click', function(){
		window.open('https://www.google.com/maps?q=De las Gallaretas 23, Chascomus', '_blank');
	  });

	  $('#botonConfirmar').click(function(e) {
		e.preventDefault();
		var nombre = $('#nombre').val();
		var cantMenores = $('#cantMenores').val();
		var cantAdultos = $('#cantAdultos').val();
		$.ajax({
		  url: 'http://44.213.90.4:9095/api/confirma/' + nombre + '/' + cantMenores + '/' + cantAdultos,
		  type: 'POST',
		  success: function(resultado) {
			alert("Confirmación exitosa.");
			location.reload();
		  },
		  error: function(error) {
			console.log(error);
		  }
		});
	  });
	
});



// Select all links with hashes

	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top
						},
						1000,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});