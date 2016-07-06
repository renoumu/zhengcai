$(function() {
	$('.nav_top_list>li').mouseover(function(event){
		$(this).css('color', 'white');})
	$('.nav_top_list>li').mouseout(function(event) {
		$(this).css('color', '#bbbbbc');})

	$('#nav_list>li').hover(function() {
		$(this).css('color', 'black').children("div").slideDown();
		}, function() {
			$(this).css("color","black").children("div").slideUp();
	});
	$("#nav_list li div>div").hover(function(){
     	$(this).css({
     			background: 'skyblue',
     			color: 'white'
     		});
     },function(){
     		$(this).css({
     			background: 'white',
     			color: 'black'
     		});
    });

    $('#icon_ul>li').mouseover(function(event) {
		$(this).css('color', 'red');
	});
	$('#icon_ul>li').mouseout(function(event) {
		$(this).css('color', '#979696');
	});
	$('.navcolor').mouseover(function(event) {
		$(this).css('color', 'red');
	});
	$('.navcolor').mouseout(function(event) {
		$(this).css('color', 'black');
	});

	$('.service_right div').hover(function() {
		$(this).children("div").slideDown();
		}, function() {
			$(this).children("div").slideUp();
	});
	
});

