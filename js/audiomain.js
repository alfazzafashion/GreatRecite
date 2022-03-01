var audio;

//Hide Pause Initially
$('#pause').hide();

//Hide pauseTrendy Initially
$('#pauseTrendy.1').hide();
$('#pauseTrendy.2').hide();
$('#pauseTrendy.3').hide();
$('#pauseTrendy.4').hide();
$('#pauseTrendy.5').hide();
$('#pauseTrendy.6').hide();
$('#pauseTrendy.7').hide();
$('#pauseTrendy.8').hide();
$('#pauseTrendy.9').hide();
$('#pauseTrendy.10').hide();
$('#pauseTrendy.11').hide();
$('#pauseTrendy.12').hide();
$('#pauseTrendy.13').hide();
$('#pauseTrendy.14').hide();

	
//Initializer - Play First Song
initAudio($('#playlist li:first-child'));
	
function initAudio(element){
	var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

	//Create a New Audio Object
	audio = new Audio('media/' + song);
	
	if(!audio.currentTime){
		$('#duration').html('0.00');
	}
	

	$('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);
	
	//Insert Cover Image
	$('img.cover').attr('src','images/covers/' + cover);
	
	$('#playlist li').removeClass('active');
    element.addClass('active');
}


//Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#playTrendy').hide();
	$('#pause').show();
	$('#pauseTrendy').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.1 Button
$('#playTrendy.1').click(function(){
	audio.pause();		
	/*audio.currentTime = 0;*/
	initAudio($('#playlist li:nth-child(1)'));
	audio.play();
	$('#playTrendy.1').hide();
	$('#play').hide();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.1').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

/*
//playTrendy.1 Button
$('#playTrendy.1').click(function(){
	$('#playlist li).trigger('click');
});
*/

//playTrendy.2 Button
$('#playTrendy.2').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(2)'));
	audio.play();
	$('#playTrendy.2').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.2').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.3 Button
$('#playTrendy.3').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(3)'));
	audio.play();
	$('#playTrendy.3').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.3').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.4 Button
$('#playTrendy.4').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(4)'));
	audio.play();
	$('#playTrendy.4').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.4').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.5 Button
$('#playTrendy.5').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(5)'));
	audio.play();
	$('#playTrendy.5').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.5').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.6 Button
$('#playTrendy.6').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(6)'));
	audio.play();
	$('#playTrendy.6').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.6').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.7 Button
$('#playTrendy.7').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(7)'));
	audio.play();
	$('#playTrendy.7').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.7').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.8 Button
$('#playTrendy.8').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(8)'));
	audio.play();
	$('#playTrendy.8').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.8').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.9 Button
$('#playTrendy.9').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(9)'));
	audio.play();
	$('#playTrendy.9').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.9').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.10 Button
$('#playTrendy.10').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(10)'));
	audio.play();
	$('#playTrendy.10').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.10').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.11 Button
$('#playTrendy.11').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(11)'));
	audio.play();
	$('#playTrendy.11').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.11').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.12 Button
$('#playTrendy.12').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(12)'));
	audio.play();
	$('#playTrendy.12').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.12').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.13 Button
$('#playTrendy.13').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(13)'));
	audio.play();
	$('#playTrendy.13').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.14').hide();
		$('#playTrendy.14').show();
	$('#pauseTrendy.13').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//playTrendy.14 Button
$('#playTrendy.14').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	initAudio($('#playlist li:nth-child(14)'));
	audio.play();
	$('#playTrendy.14').hide();
	$('#play').hide();
		$('#pauseTrendy.1').hide();
		$('#playTrendy.1').show();
		$('#pauseTrendy.2').hide();
		$('#playTrendy.2').show();
		$('#pauseTrendy.3').hide();
		$('#playTrendy.3').show();
		$('#pauseTrendy.4').hide();
		$('#playTrendy.4').show();
		$('#pauseTrendy.5').hide();
		$('#playTrendy.5').show();
		$('#pauseTrendy.6').hide();
		$('#playTrendy.6').show();
		$('#pauseTrendy.7').hide();
		$('#playTrendy.7').show();
		$('#pauseTrendy.8').hide();
		$('#playTrendy.8').show();
		$('#pauseTrendy.9').hide();
		$('#playTrendy.9').show();
		$('#pauseTrendy.10').hide();
		$('#playTrendy.10').show();
		$('#pauseTrendy.11').hide();
		$('#playTrendy.11').show();
		$('#pauseTrendy.12').hide();
		$('#playTrendy.12').show();
		$('#pauseTrendy.13').hide();
		$('#playTrendy.13').show();
	$('#pauseTrendy.14').show();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});



//Pause Button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#pauseTrendy').hide();
	$('#play').show();
	$('#playTrendy').show();
});

//pauseTrendy.1 Button
$('#pauseTrendy.1').click(function(){
	audio.pause();
	$('#pauseTrendy.1').hide();
	$('#pause').hide();
	$('#playTrendy.1').show();
	$('#play').show();
});

//pauseTrendy.2 Button
$('#pauseTrendy.2').click(function(){
	audio.pause();
	$('#pauseTrendy.2').hide();
	$('#pause').hide();
	$('#playTrendy.2').show();
	$('#play').show();
});

//pauseTrendy.3 Button
$('#pauseTrendy.3').click(function(){
	audio.pause();
	$('#pauseTrendy.3').hide();
	$('#pause').hide();
	$('#playTrendy.3').show();
	$('#play').show();
});

//pauseTrendy.4 Button
$('#pauseTrendy.4').click(function(){
	audio.pause();
	$('#pauseTrendy.4').hide();
	$('#pause').hide();
	$('#playTrendy.4').show();
	$('#play').show();
});

//pauseTrendy.5 Button
$('#pauseTrendy.5').click(function(){
	audio.pause();
	$('#pauseTrendy.5').hide();
	$('#pause').hide();
	$('#playTrendy.5').show();
	$('#play').show();
});

//pauseTrendy.6 Button
$('#pauseTrendy.6').click(function(){
	audio.pause();
	$('#pauseTrendy.6').hide();
	$('#pause').hide();
	$('#playTrendy.6').show();
	$('#play').show();
});

//pauseTrendy.7 Button
$('#pauseTrendy.7').click(function(){
	audio.pause();
	$('#pauseTrendy.7').hide();
	$('#pause').hide();
	$('#playTrendy.7').show();
	$('#play').show();
});

//pauseTrendy.8 Button
$('#pauseTrendy.8').click(function(){
	audio.pause();
	$('#pauseTrendy.8').hide();
	$('#pause').hide();
	$('#playTrendy.8').show();
	$('#play').show();
});

//pauseTrendy.9 Button
$('#pauseTrendy.9').click(function(){
	audio.pause();
	$('#pauseTrendy.9').hide();
	$('#pause').hide();
	$('#playTrendy.9').show();
	$('#play').show();
});

//pauseTrendy.10 Button
$('#pauseTrendy.10').click(function(){
	audio.pause();
	$('#pauseTrendy.10').hide();
	$('#pause').hide();
	$('#playTrendy.10').show();
	$('#play').show();
});

//pauseTrendy.11 Button
$('#pauseTrendy.11').click(function(){
	audio.pause();
	$('#pauseTrendy.11').hide();
	$('#pause').hide();
	$('#playTrendy.11').show();
	$('#play').show();
});

//pauseTrendy.12 Button
$('#pauseTrendy.12').click(function(){
	audio.pause();
	$('#pauseTrendy.12').hide();
	$('#pause').hide();
	$('#playTrendy.12').show();
	$('#play').show();
});

//pauseTrendy.13 Button
$('#pauseTrendy.13').click(function(){
	audio.pause();
	$('#pauseTrendy.13').hide();
	$('#pause').hide();
	$('#playTrendy.13').show();
	$('#play').show();
});

//pauseTrendy.14 Button
$('#pauseTrendy.14').click(function(){
	audio.pause();
	$('#pauseTrendy.14').hide();
	$('#pause').hide();
	$('#playTrendy.14').show();
	$('#play').show();
});

//Stop Button
$('#stop').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	$('#pause').hide();
	$('#pauseTrendy.1').hide();
		$('#pauseTrendy.2').hide();
		$('#pauseTrendy.3').hide();
		$('#pauseTrendy.4').hide();
		$('#pauseTrendy.5').hide();
		$('#pauseTrendy.6').hide();
		$('#pauseTrendy.7').hide();
		$('#pauseTrendy.8').hide();
		$('#pauseTrendy.9').hide();
		$('#pauseTrendy.10').hide();
		$('#pauseTrendy.11').hide();
		$('#pauseTrendy.12').hide();
		$('#pauseTrendy.13').hide();
		$('#pauseTrendy.14').hide();
	$('#play').show();
		$('#playTrendy.1').show();
		$('#playTrendy.2').show();
		$('#playTrendy.3').show();
		$('#playTrendy.4').show();
		$('#playTrendy.5').show();
		$('#playTrendy.6').show();
		$('#playTrendy.7').show();
		$('#playTrendy.8').show();
		$('#playTrendy.9').show();
		$('#playTrendy.10').show();
		$('#playTrendy.11').show();
		$('#playTrendy.12').show();
		$('#playTrendy.13').show();
		$('#playTrendy.14').show();
	$('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function(){
    audio.pause();
	audio.currentTime = 0;
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
	audio.play();
	showDuration();
});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist Song Click
$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});

//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
	
		var fulls = parseInt(audio.duration % 60);
		var fullm = parseInt((audio.duration / 60) % 60);
		
		if (isNaN(fulls)){ fulls = '00';} 
		if (isNaN(fullm)){ fullm = '00';} 
		
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		if (fulls < 10) {
			fulls = '0' + fulls;
		}
		$('#duration').html(m + ':' + s + ' / ' + fullm + ':' + fulls);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		
		$('#progress').css('width',value+'%');
		
		if( audio.currentTime >= audio.duration) $('#next').trigger('click');
	});
}

$("#progressBar").mouseup(function(e){
    var leftOffset = e.pageX - $(this).offset().left;
    var songPercents = leftOffset / $('#progressBar').width();
	audio.currentTime = songPercents * audio.duration;
});

/*$(document).ready(function(){
    if ($('playlist li: nth-child(1)').hasClass('active'))
        $('#main').addClass('woodwork');
});*/

/* //OG time duration	
//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}
*/
