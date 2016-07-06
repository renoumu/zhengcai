$(function() {
	$('.nav_top_list>li').mousemove(function(event) {
		$(this).css('color', 'white');
	});
	$('.nav_top_list>li').mouseout(function(event) {
		$(this).css('color', '#bbbbbc');
	});
	$('#nav_list>li').mousemove(function(event) {
		$(this).css('color', 'red');;
	});
	$('#nav_list>li').mouseout(function(event) {
		$(this).css('color', '');
	});
	$('#icon_ul>li').mousemove(function(event) {
		$(this).css('color', '#979696');
	});
	$('#icon_ul>li').mouseout(function(event) {
		$(this).css('color', 'red');
	});
});


