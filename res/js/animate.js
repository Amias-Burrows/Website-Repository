var cover = document.getElementById('cover');
cover.addEventListener('click', flip);
var title = document.getElementById('title');
var content = document.getElementsByTagName('section')[0];
var footer = document.getElementsByTagName('footer')[0];
var shadeCover = document.getElementById('shade1');
var shadeFace = document.getElementById('shade2');
shadeFace.classList.add('on');

function flip() {
	if (cover.classList.contains('flipped')) {
		cover.removeEventListener('click', flip);
		cover.classList.remove('flipped');

		shadeCover.classList.add('on');

		cover.classList.add('show');
		
		content.style.display = 'flex';
		footer.style.display = 'flex';

		setTimeout(function() {
			title.style.display = 'flex';
			cover.style.display = 'none';

			shadeFace.classList.remove('on');

			setTimeout(function() {
				title.classList.remove('flipped');
				title.classList.add('show');
				setTimeout(function() {
					title.addEventListener('click', flip);
				}, 1000);
			}, 10);
		}, 1000);
	} else {
		title.removeEventListener('click', flip);
		title.classList.remove('show');

		shadeFace.classList.add('on');

		content.style.display = 'none';
		footer.style.display = 'none';

		title.classList.add('flipped');

		setTimeout(function() {
			cover.style.display = 'flex';
			title.style.display = 'none';

			shadeCover.classList.remove('on');

			setTimeout(function() {
				cover.classList.remove('show');
				cover.classList.add('flipped');
				setTimeout(function() {
					cover.addEventListener('click', flip);
				}, 1000);
			}, 10);
		}, 1000);
	}
}
