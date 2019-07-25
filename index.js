
$(document).ready(function() {
	$(".homecontainer").fadeIn('slow');
	$(".navbar").fadeIn('slow');
	$(".photocontainer").fadeIn('slow');

	$("#1").click(function() {
		$(".photocontainer").fadeOut('fast', function() {
        	$(".projectcontainer").fadeIn('slow');
    	});
    });
});
