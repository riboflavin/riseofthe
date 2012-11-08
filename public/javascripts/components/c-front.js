var	prep_phrase_array = ['Rise of The','Planet of the','Rise of the','Planet of the','Revenge of the','Return of the','Son of the'];
var continue_array = ['Apes: ','Apes 2: '];
var ender_array = ['Apes','Apes 2','Apes, a Ron Howard Film','Apes: Band of Brothers'];
var g_array = [', Grimmly',': a Companion to "A Tale Dark and Grimm"'];

$('#startbutton').click(function(){start("init")});

function getRandomEl(targarray) {
	return targarray[Math.floor(Math.random()*targarray.length)];
}

function getRandomArbitrary (min, max){
	return Math.random() * (max - min) + min;
}

function start(progress){

	if (progress == 'init') {
		$('#gbutton').clearQueue().fadeOut('fast').addClass('btn-warning').text('What\'s the name of the next Adam Gidwitz novel?');
		$('#startbutton').unbind().fadeOut('fast',function(){$('#startbutton').removeClass('btn-warning').text('...').fadeIn('fast');});
		$('#introtext').fadeOut('medium');
		$('#titlecontainer').slideUp('medium',function(){
		$('#titlecontainer').empty(); 
		$('#introtext').text('Oh, it\'s called...').fadeIn('medium',function(){
		$('#titlecontainer').slideDown('fast');			
		});
		});
		progress = 0;
	}

	var randomtime = getRandomArbitrary(300,1500);
	var continue_chance = getRandomArbitrary(1,10);

	if (progress < 1) {
		var newtext = getRandomEl(prep_phrase_array);
		setTimeout(function(){
			start(progress + getRandomArbitrary(0,.25)),
			$('#titlecontainer').text($('#titlecontainer').text() + ' ' + newtext);
			},
			randomtime);
	}
	else if (continue_chance > 7)
	{
		var newtext = getRandomEl(continue_array);
		setTimeout(function(){
			start(getRandomArbitrary(0,.25)),
			$('#titlecontainer').text($('#titlecontainer').text() + ' ' + newtext);
			},
			randomtime);
	}
	else
	{
		var newtext = getRandomEl(ender_array);
		setTimeout(function(){
			$('#titlecontainer').text($('#titlecontainer').text() + ' ' + newtext);
			$('#startbutton').delay(2000).fadeOut('medium',function(){
				$('#startbutton').addClass('btn-warning');
				$('#startbutton').fadeIn('medium').text('Tell me again!');
				$('#gbutton').delay(1500).fadeIn('medium');
				$('#startbutton').click(function(){start("init")});
			});
			},
			randomtime);
	}

}

function gidwitz(){
	var newtext = getRandomEl(g_array);
	$('#gbutton').fadeOut('fast',function(){$('#gbutton').removeClass('btn-warning').text('...').fadeIn('fast');});
	
	setTimeout(function(){
			$('#titlecontainer').text($('#titlecontainer').text() + newtext);
			$('#gbutton').delay(1000).fadeOut('medium', function(){$('#gbutton').addClass('btn-warning').text('What\'s the name of the next Adam Gidwitz novel?');});
	},2000);
}
