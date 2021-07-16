var cover = document.getElementById('cover');
cover.addEventListener('click', flip);
var title = document.getElementById('title');
title.addEventListener('click', flip);
var content = document.getElementsByTagName('section')[0];
var footer = document.getElementsByTagName('footer')[0];

function flip() {
	if (cover.classList.contains('flipped')) {
		cover.classList.remove('flipped');

		cover.classList.add('show');
		
		content.style.display = 'flex';
		footer.style.display = 'flex';

		setTimeout(function() {
			title.style.display = 'flex';
			cover.style.display = 'none';

			setTimeout(function() {
				title.classList.add('show');
				title.classList.remove('flipped');
			}, 10);
		}, 1500);
	} else {
		title.classList.remove('show');

		content.style.display = 'none';
		footer.style.display = 'none';

		title.classList.add('flipped');

		setTimeout(function() {
			cover.style.display = 'flex';
			title.style.display = 'none';

			setTimeout(function() {
				cover.classList.remove('show');
				cover.classList.add('flipped');
			}, 10);
		}, 1500);
	}
}
