(function($) {
	"use strict";
	var $img = $("div.satellite");


	$("#start").click(function() {
		$("div.overlay").css({
			"opacity": 0,
			"transition": "none"
		});
		$("div.tagline").css({
			"top": "515px",
			"transition": "none"
		});
		$img.toggleClass("pos2");
		setTimeout(function() {
			$img.toggleClass("pos3 pos2");
			setTimeout(function() {
				$img.toggleClass("pos3");
				$("div.overlay").css("transition", "1.5s opacity");
				$("div.tagline").css("transition", "1.5s top");
				setTimeout(function() {
					$("div.overlay").css("opacity", 1);
					$("div.tagline").css("top", "560px");
				}, 600);
			}, 500);
		}, 500);

	});

})(jQuery);