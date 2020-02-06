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


// //readmore.js by https://jedfoster.com/Readmore.js/   
$('.displayText').readmore({
			speed: 500,
			collapsedHeight: 75,
			moreLink: '<a href="#" class="moreLess">Read More...</a>',
			lessLink: '<a href="#" class="moreLess">Read Less</a>',
			heightMargin: 16
		});