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
//code goes here



// Searchbar
//autofill searchbar
	new Def.Autocompleter.Search('icd10', 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&df=code,name',
	{tableFormat: true, valueCols: [0,1], colHeaders: ['Code', 'Name']});
	//console.log(Autocompleter[valueCols]);



//toggle graphs on and off and switch the layout at the same time
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


// Tabs for notes- from https://rudrastyh.com/javascript/tabs.html
function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
 
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var x = document.getElementsByClassName("tabmenu");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tabmenu'; 
	}
	document.getElementById(rudr_tab_id).className = 'tabmenu active';
}


// Insert text into modal
	var content = $('.content').html();
	var theDiv = $('.insert').html(content);
	//need to figure out how to do this dynamically


// Read More button after length- https://stackoverflow.com/questions/38296509/trim-text-using-jquery-with-clickable-more-but-keep-text-format
	var minimized_elements = $('.content'); 

	minimized_elements.each(function() {
	var t = $(this).html();
	//set the length of small note here
	if (t.length < 200) return;

	$(this).html(
		t.slice(0, 200) + '<a href="#ex1" rel="modal:open" class="more">Read More</a>' 
	);
	// the problem might be here with id='#ex1' - i think it needs to call on a different href 
	// in order to display a different text in the modal
	});



// copy from note
function copyFunction() {
	var copyText = document.getElementById("editableText");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");


	// alert("Copied the text: " + copyText.value);
	var tooltip = document.getElementById("myTooltip");
  	tooltip.innerHTML = "Copied!";
  }

  function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
  }


  
//GRAPHS
//need to figure out how to draw in data for these:
var graphName="Example Name"
var units="mm"
var rangeMin= 90
var rangeMax= 120
var displayMin = rangeMin -20
var displayMax = rangeMax +20
var dates =['7/31/2018', '11/7/2018', '2/11/2019', '4/3/2019','5/11/2019','7/18/2019', 'extra', 'extra']
var data1=[117,70 ,70 ,100 , 106, 110, 100 ,140]


//  graph structure -may have to figure out how to work with data that has no upper or lower limit
var type = 'line'
var sData = {
	labels: dates,
	datasets: [{
	  data: data1,
	  fill: false,
	//   pointBackgroundColor: 'black',
	  borderColor: "black",
	  borderWidth:1,
	  pointHitRadius: 4,
	  pointRadius:2
	}],
   }		
var options = {
	responsive: true,
	maintainAspectRatio:false,
	layout:{
		padding:{
			right:8,
			bottom:2
		},
	},
	legend: {
	  display: false
	}, 
	scales: {
		xAxes: [{
			gridLines: {
				  display: false,
				  drawBorder: false,
			},
			ticks:{display:false,
			}
		  }],
		yAxes: [{
			gridLines: {
				display: false,
				drawBorder: false,
				scaleLabel: {
							show: false,
							labelString: 'Value'
							},
	
			  },
			ticks:{
				beginAtZero: false,
				min: displayMin, //yvaluemin-20
				max: displayMax,//yvalueMax+20
				stepSize: 1, 
				callback: function(label, index, labels) {
					  switch (label) {
								case rangeMin:
									return rangeMin; 
								case rangeMax:
									return rangeMax; 
			   }
			 }	   
			}
		  }],
	  },
	//min and max color change of the graph line 
	bands: {
	  yValueMin: rangeMin, 
	  yValueMax: rangeMax, 

	  //color of the dashed lines
	  bandLine: {
		stroke: 0.5, 
		colour: 'gainsboro',
		type: 'dashed' // 'solid' or 'dashed'
		},

	//below the minimum normal value
	belowMinThresholdColour: [
		'red'
	],
	//above the maximum normal value
	aboveMaxThresholdColour: [
		'red'
	],

	  },
	  
	tooltips: {
	enabled: true,
	caretSize: 5,
	bodyFontSize: 11,
	position: 'nearest',
	displayColors: false,
	callbacks: {
	// use label callback to return the desired label
	label: function(tooltipItem, data) {
		return tooltipItem.yLabel+ units +" - " + tooltipItem.xLabel;
	},
	// remove title
	title: function(tooltipItem, data) {
		return;

	}
	}
	}
   }

//insert the graphs into the canvas areas
var x= document.getElementsByClassName("chart");
var i;
for(i=0; i< x.length; i++){
	new Chart(x[i], {
		type:type,
		data:sData,
		options:options
	});
}
   










