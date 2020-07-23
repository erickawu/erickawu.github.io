$(document).ready(function() {
	$("#receipt").fadeIn(1400);

	$("#1").click(function() {
		$("#wrapper").fadeOut(400, function() {
            $("#favorites").fadeIn(1400).addClass('projcontainer');
    	});
        $("#backbutton").fadeIn(1400).addClass('back');

    });

    $("#2").click(function() {
        $("#wrapper").fadeOut(400, function() {
            $("#backbutton").fadeIn(1400).addClass('back');
            $("#recipes").fadeIn(1400).addClass('projcontainer');
        });
    });

    $("#3").click(function() {
        $("#wrapper").fadeOut(400, function() {
            $("#backbutton").fadeIn(1400).addClass('back');
            $("#moments").fadeIn(1400).addClass('projcontainer');
        });
    });

    $("#4").click(function() {
        $("#wrapper").fadeOut(400, function() {
            $("#backbutton").fadeIn(1400).addClass('back');
            $("#projects").fadeIn(1400).addClass('projcontainer');
        });
    });

	$("#backbutton").click(function() {
		$("#backbutton").fadeOut(400, function() {
        	$("#wrapper").fadeIn(1400);
    	});
        $(".projcontainer").fadeOut(400)
    });
});