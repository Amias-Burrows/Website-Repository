var cover = document.getElementById('cover');
cover.addEventListener('click', flip);
var title = document.getElementById('title');
var content = document.getElementsByTagName('section')[0];
var footer = document.getElementsByTagName('footer')[0];
var scroll = document.getElementById('arrow');

function flip() {
	if (cover.classList.contains('flipped')) {
		cover.removeEventListener('click', flip);
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
				setTimeout(function() {
					title.addEventListener('click', flip);
					scroll.style.display = "block";
				}, 1000);
			}, 10);
		}, 1000);
	} else {
		scroll.style.display = "none";
		title.removeEventListener('click', flip);
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
				setTimeout(function() {
					cover.addEventListener('click', flip);
				}, 1000);
			}, 10);
		}, 1000);
	}
}
