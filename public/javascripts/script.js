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

// Searchbar
//autofill searchbar
	new Def.Autocompleter.Search('icd10', 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name',
	{tableFormat: true, valueCols: [0,1], colHeaders: ['Code', 'Name']});
	//console.log(Autocompleter[valueCols]);



//masonry
	var elem = document.querySelector('.grid');
	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 200
	});
	
	// element argument can be a selector string
	//   for an individual element
	var msnry = new Masonry( '.grid', {
	  // options
	});


