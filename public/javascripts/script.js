// Responsive menu
//Responsiveness for buttons for viewing options
	function menuSmall() {
	var x = document.getElementById("butOptions");
	if (x.className === "optionBar") {
		x.className += " responsive";
	} else {
		x.className = "optionBar";
	}
	}


//Clickoutside the menu div and it goes away
//problems- need to be able to click on the button, right now if you click 
//outside the dropdown, you have to click twice, also the menu disapears 
//when you make the screen bigger
// $(document).mouseup(function (e)
//                     {
//   var container = $("#containerSelector"); // YOUR CONTAINER SELECTOR
//   var element = $("#elementSelector");


//   if (!container.is(e.target) // if the target of the click isn't the container...
//       && container.has(e.target).length === 0) // ... nor a descendant of the container
//   {
//     element.hide();
//   }
//   else
//   	element.show();

// });




// Searchbar
//autofill searchbar
	new Def.Autocompleter.Search('icd10', 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name',
	{tableFormat: true, valueCols: [0,1], colHeaders: ['Code', 'Name']});
	//console.log(Autocompleter[valueCols]);




function toggleGraphsFunction(){
	var graphs = document.getElementById("graphs");
	var meds = document.getElementById("meds");
	var labs = document.getElementById("labs");
	var social = document.getElementById("social");
	var x = document.getElementById("butName");

	if (x.innerHTML === "Hide Graphs") {
		x.innerHTML = "Show Graphs";
	} else {
		x.innerHTML = "Hide Graphs";
	}

	graphs.classList.toggle("toggleGraphs");
	meds.classList.toggle("toggleMeds");
	labs.classList.toggle("toggleLabs");
	social.classList.toggle("toggleSocial");

}


