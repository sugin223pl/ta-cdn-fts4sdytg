
$("#showCal, ._czvge1u, ._1vd038a").click(function() {
	$('body').attr('style', "overflow: hidden;");
	$('#calendar').fadeIn();
});
$("#close").click(function() {
	$('body').attr('style', '');
	$('#calendar').fadeOut();
});


$("._ap2ub5l, ._1hq475k, ._iwzpd4, .pozejos").click(function() {
	$('body').attr('style', "overflow: hidden;");
	$('#pozele').fadeIn();
	//$('#pozele').attr('style', "overflow: scroll;");
});

$("#close-poze").click(function() {
	$('body').attr('style', '');
	$('#pozele').fadeOut();
	$('#pozele').attr('style', "overflow: hidden;");
	
});