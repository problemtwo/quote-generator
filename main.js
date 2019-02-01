window.onload = function() {
	var generate = document.getElementById('generate');
	var quote = document.getElementById('quote');

	var quotes = [
		'My biggest fear about becoming a zombie is all the walking that I’d have to do.',
		'I don’t mean to brag, but I put together a puzzle in 1 day and the box said 2-4 years.',
		'Life is too short to be serious all the time. So, if you can’t laugh at yourself, call me… I’ll laugh at you.',
		'Living on earth may be tough, but it includes a free ride around the sun each year.',
		'Life is like a hot bath. It feels good while you’re in it, but the longer you stay in, the more wrinkled you get.',
		'I hope life isn’t a joke, because I don’t get it.',
		'Life was much easier when apple and blackberry were just fruits.',
		'You never know what you have until… you clean your room.',
		'Not to brag or anything, but I can forget what I’m doing while I’m doing it.',
		'Today we will live in the moment unless it’s unpleasant in which case me will eat a cookie. - Cookie Monster',
		'When life knocks you down… stay there and take a nap.',
		'I won’t be impressed with technology until I can download food.',
		'Common sense is like deodorant. The people who need it most never use it.',
		'If you’re too open-minded, your brains will fall out - Lawrence Ferlinghetti',
		'You know what I like most about people? Pets. - Jarod Kintz',
		'Life would be tragic if it weren’t funny - Stephen Hawking'
	];

	quote.innerHTML = '_';

	function randomQuote() {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	generate.onclick = function() {
		var q = randomQuote();
		var i = 0;

		var loop1 = setInterval(function() {
			if(quote.innerHTML === '_'){
				var loop2 = setInterval(function() {
					if(i >= q.length) { clearInterval(loop2); return; }
					quote.innerHTML = quote.innerHTML.substring(0,quote.innerHTML.length - 1) + q.charAt(i++) + '_';
				},1000/24);
				clearInterval(loop1);
				return;
			}
			quote.innerHTML = quote.innerHTML.substring(1);
		},1000/24);

	}
}
