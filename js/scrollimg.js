window.onload = function(){
	var oScrollicon = document.getElementById('scrollicon');
	var oTopicPreview = document.getElementById('topic_preview');
	var oPreview = document.getElementById('preview');
	var oConlist = document.getElementById('conlist');
	var dots = oConlist.getElementsByTagName('li');
	var time = null;
	var autoTime = null;
	var page = 0;

	function moveTo(startPos,endPos){
		clearInterval(time);
		time = null;
		var step = 0;
		var stepMax = 10;
		var everyStep = (endPos-startPos)/stepMax;

		function move(){
			oTopicPreview.scrollLeft += everyStep;
			step++;
			if(step == stepMax){
				oTopicPreview.scrollLeft = endPos;
				clearInterval(time);
				time = null;
			}
		}
		time = setInterval(move, 50);
	}
	function autoScroll(){
		moveTo(oTopicPreview.scrollLeft,1263*(page+1));
		page++;
		changeDots(page);
		if (page == dots.length-1) {
			page = -1;
		}
		
	}
	function changeDots(index){
		for (var i = 0; i < dots.length; i++) {
			dots[i].style.backgroundColor='#b9d8e9';
		}dots[index].style.backgroundColor='#008dd7';
	}
	changeDots(0);
	autoTime = setInterval(autoScroll,3000);
} 