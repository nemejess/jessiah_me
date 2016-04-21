$(function() {
	$('.dot').click(function() {
		$('header').fadeOut(500, function() {
			$('.graph-container').fadeIn(800);
		});
	});
});