$(document).ready(function() {
	$("#receipt").fadeIn(1400);

	$("#1").click(function() {
		$("#receipt").fadeOut(400, function() {
        	$("#backbutton").fadeIn(1400).addClass('back');
    	});
    });

	$("#backbutton").click(function() {
		$("#backbutton").fadeOut(400, function() {
        	$("#receipt").fadeIn(1400);
    	});
    });
});