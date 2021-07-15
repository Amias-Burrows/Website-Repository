var colour = "dark";

function colourChanger() {
	var navBar = document.getElementById("colourChanger");
	var image = document.getElementById("colourImage");
	var debugBtn = document.getElementById("debugBtn");
	var ccBtn = document.getElementById("ccBtn");
				
	if (colour == "light") {
		colour = "dark";

		navBar.classList.remove("navbar-light");
		navBar.classList.add("navbar-dark");
		navBar.classList.remove("bg-light");
		navBar.classList.add("bg-dark");
		debugBtn.classList.remove("btn-outline-dark");
		debugBtn.classList.add("btn-outline-light");
		ccBtn.classList.remove("btn-outline-dark");
		ccBtn.classList.add("btn-outline-light");
		image.src = "https://amias-burrows.co.uk/resources/images/personal/amias_logo_light.png";
	} else if (colour == "dark") {
		colour = "light";

		navBar.classList.remove("navbar-dark");
		navBar.classList.add("navbar-light");
		navBar.classList.remove("bg-dark");
		navBar.classList.add("bg-light");
		debugBtn.classList.remove("btn-outline-light");
		debugBtn.classList.add("btn-outline-dark");
		ccBtn.classList.remove("btn-outline-light");
		ccBtn.classList.add("btn-outline-dark");
		image.src = "https://amias-burrows.co.uk/resources/images/personal/amias_logo_dark.png";
	};
};
