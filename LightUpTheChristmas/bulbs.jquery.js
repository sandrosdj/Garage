var christmasblock = 0;
$("body").prepend('<div id="christmaslights" title="Te is szeretnél ilyet a blogodra / oldaladra? http://sandros.hu/?xmasbar"></div><audio id="christmaslightsaudio" src="//sandros.hu/glass.ogg" type="audio/ogg" preload></audio>');
for (var i = 0; i < (window.innerWidth / 64 - 1); i++)
	$("#christmaslights").append("<div class='light color"+Math.floor(Math.random()*3)+"'></div>");
$("#christmaslights .light").hover(function() {
	if (!$(this).hasClass('broken') && !christmasblock) {
		$(this).addClass('broken');
		document.getElementById('christmaslightsaudio').volume = 0.15;
		document.getElementById('christmaslightsaudio').currentTime = 0;
		document.getElementById('christmaslightsaudio').play();
		christmasblock = 1;
		setTimeout('christmasblock = 0', 500);
	}}).click(function() {
	$(this).parent().slideUp();
});
$("body").append('<style>#christmaslights{position:fixed;top:0;left:0;height:64px;width:100%;overflow:hidden;cursor:pointer;z-index:12}#christmaslights .light{float:left;width:64px;height:64px;background:url(https://raw.githubusercontent.com/sandrosdj/Garage/master/LightUpTheChristmas/bulbs.png)}#christmaslights .light.color0.broken{background-position:-128px 0}#christmaslights .light.color0{background-position:0 0}#christmaslights .light.color1.broken{background-position:-128px -64px}#christmaslights .light.color1{background-position:0 -64px}#christmaslights .light.color2.broken{background-position:-128px -128px}#christmaslights .light.color2{background-position:0 -128px}</style>');