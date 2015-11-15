var christmasblock = 0;
$(document).ready(function() {
		$("body").prepend('<div id="christmaslights" title="Te is szeretnél ilyet a blogodra / oldaladra? http://sandros.hu/?xmasbar"></div><audio id="christmaslightsaudio" src="http://thinkdot.tk/images/events/glass1.ogg" preload></audio>');

		for (var i = 0; i < (window.innerWidth / 64 - 1); i++)
			$("#christmaslights").append("<div class='light color"+Math.floor(Math.random()*3)+"'></div>");
		
		$("#christmaslights .light").hover(function() {
			if (!$(this).hasClass('broken') && !christmasblock)
			{
				$(this).addClass('broken');
				document.getElementById('christmaslightsaudio').volume = 0.15;
				document.getElementById('christmaslightsaudio').currentTime = 0;
				document.getElementById('christmaslightsaudio').play();
				christmasblock = 1;
				setTimeout('christmasblock = 0', 500);
			}
		}).click(function() {
			$(this).parent().slideUp();
		});
});