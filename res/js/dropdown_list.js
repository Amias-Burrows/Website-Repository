var liskill = document.getElementById('skills');
var liachiev = document.getElementById('achiev');

function DropdownSkill() {
	if (liskill.style.display == '')
	{
		liskill.style.display = 'none';
	}
	else
	{
		liskill.style.display = '';
	}
}

function DropdownAchiev() {
	console.log("Called procedure");
	if (liachiev.style.display == '')
	{
		liachiev.style.display = 'none';
		console.log("Added hide property");
	}
	else
	{
		liachiev.style.display = '';
		console.log("Removed hide property");
	}
}
