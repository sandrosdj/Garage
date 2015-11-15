var christmasblock = 0;
$("head").append($('<link rel="stylesheet" type="text/css" media="screen" />').attr('href', 'https://raw.githubusercontent.com/sandrosdj/Garage/master/LightUpTheChristmas/lights.css'));
if (document.createStyleSheet) document.createStyleSheet('https://raw.githubusercontent.com/sandrosdj/Garage/master/LightUpTheChristmas/lights.css');
$("body").prepend('<div id="christmaslights" title="Te is szeretnél ilyet a blogodra / oldaladra? http://sandros.hu/?xmasbar"></div><audio id="christmaslightsaudio" src="https://github.com/sandrosdj/Garage/blob/master/LightUpTheChristmas/glass.ogg" preload></audio>');
for (var i = 0; i < (window.innerWidth / 64 - 1); i++)
	$("#christmaslights").append("<div class='light color"+Math.floor(Math.random()*3)+"'></div>");
//var lutca = document.getElementById('christmaslightsaudio');
$("#christmaslights .light").hover(function() {
	if (!$(this).hasClass('broken') && !christmasblock)
	{
		$(this).addClass('broken');
//		lutca.volume = 0.15;
//		lutca.currentTime = 0;
//		lutca.play();
		christmasblock = 1;
		setTimeout('christmasblock = 0', 500);
	}
}).click(function() {
	$(this).parent().slideUp();
});