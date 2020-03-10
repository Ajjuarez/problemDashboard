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
//code goes here need to figure this out

// Searchbar
//autofill searchbar, this is a dependancy we need to get rid of. This is for example purposes. 
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
	var layout=document.getElementById("layout");
	var lines1=document.getElementById('insertContent1');
	var lines2=document.getElementById('insertContent2');
	var lines3=document.getElementById('insertContent3');

	if (x.innerHTML === "Hide Graphs") {
		x.innerHTML = "Show Graphs";
	} else {
		x.innerHTML = "Hide Graphs";
	}

	graphs.classList.toggle("toggleGraphs");
	meds.classList.toggle("toggleMeds");
	labs.classList.toggle("toggleLabs");
	social.classList.toggle("toggleSocial");
	layout.classList.toggle("toggleLayout");
	lines1.classList.toggle("toggleLines1");
	lines2.classList.toggle("toggleLines2");
	lines3.classList.toggle("toggleLines3");
}



// Read in JSON for physician notes 
var url="storedFiles/physicianNotes.json"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

//create new array to store notes
var jsonObject = request.responseText;
var docNote = JSON.parse(jsonObject);

// console.log(docNote);

function noteFunction(noteIndexNumber, locationNumber){
	
	// pointers to where the data will go in the webpage. These are all listed numerically in order so no need for guess work 
	var contentLocation = 'insertContent' + locationNumber
	var specialtyLocation='tab'+ locationNumber
	var contentContainer='content_'+locationNumber
	var modalLoc='insert'+locationNumber
	var noteTitleLoc ='note'+locationNumber
	var noteAuthLoc='author' +locationNumber
	var noteDateLoc='date'+locationNumber


	//note name
	var noteType= docNote[noteIndexNumber].type;
	// insert into html
	document.getElementById(noteTitleLoc).innerHTML= noteType

	// note Author
	var noteAuthor = docNote[noteIndexNumber].author;
	// insert into html
	document.getElementById(noteAuthLoc).innerHTML= "by " + noteAuthor


	// Tab labels 
	var noteSpecialty = docNote[noteIndexNumber].specialty;
	document.getElementById(specialtyLocation).innerHTML= noteSpecialty;

	// note date
	var noteDate= docNote[noteIndexNumber].date;
	//insert into html
	document.getElementById(noteDateLoc).innerHTML= noteDate;

	//content of note
	var noteContent=docNote[noteIndexNumber].content;
	//format notes
	var noteContentUpdate=noteContent.replace(/\n/g,"<br>");

	// Insert into HTML
	document.getElementById(contentLocation).innerHTML= noteContentUpdate;
	document.getElementById(modalLoc).innerHTML=noteContentUpdate;
	// console.log(noteContentUpdate);

	//Truncate text in text display with jquery dotdotdot: if you want to continue to troubleshoot a more responsive
	//fix for content truncating, this might work with more debugging. I have left the dependancies commented out in
	//the footer.ejs if you want to try this again. You need to remove all instances of -webkit-line-clamp from styles.css first.

	// document.addEventListener( "DOMContentLoaded", () => {
	// 	var text = document.getElementById(contentContainer);
	// var options = {
	// 	// height:90,
	// 	// Prevents the <a class="read-more" /> from being removed
	// 	// keep: '.read-more',
	// 	//truncates on words not letters
	// 	// truncate: "word",
	// 	// watch: "window",
	// 	// height: 60,

	// };
	// new Dotdotdot(text, options);
	// console.log(text);
	//  });
	
}

//note function fills all the note spaces and modals. Arguments passed are the index number of the note in its file, and the location number 
//for where it will reside in the html
noteFunction(0,'1');
noteFunction(1,'2');
noteFunction(2,'3');
// noteFunction(3,'4'); //-'other' tab
noteFunction(4,'5');
noteFunction(5,'6');
// noteFunction(6,'7'); //-'other' tab




// // Tabs for notes- from https://rudrastyh.com/javascript/tabs.html
function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
	document.getElementById(rudr_tab_content).style.visibility = 'visible';
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var x = document.getElementsByClassName("tabmenu");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tabmenu'; 
	}
	document.getElementById(rudr_tab_id).className = 'tabmenu active';
}

// // Tabs for procedures- from https://rudrastyh.com/javascript/tabs.html
function rudrSwitchTab2(rudr_tab_id2, rudr_tab_content2) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName("tabcontent2");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content2).style.display = 'block'; // display the content of the tab we need
	document.getElementById(rudr_tab_content2).style.visibility = 'visible';
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var x = document.getElementsByClassName("tabmenu2");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tabmenu2'; 
	}
	document.getElementById(rudr_tab_id2).className = 'tabmenu2 active2';
}

// copy function to grap text from free text note
function copyFunction() {
	var copyText = document.getElementById("editableText");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");


	// alert("Copied the text: " + copyText.value);
	var tooltip = document.getElementById("myTooltip");
  	tooltip.innerHTML = "Copied!";
  }

  //tooltip for copy button
  function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
  }


// https://github.com/moment/moment/issues/2781
//date format in time since/duration scale for the date scale
var timeSince = function(date) {
	if (typeof date !== 'object') {
	  date = new Date(date);
	}
  
	var seconds = Math.floor((new Date() - date) / 1000);
	var intervalType;
  
	var interval = Math.floor(seconds / 2592000);
	  if (interval >= 1) {
		intervalType = 'm';
	  } else {
		interval = Math.floor(seconds / 86400);
		if (interval >= 1) {
		  intervalType = 'd';
		} else {
		  interval = Math.floor(seconds / 3600);
		  if (interval >= 1) {
			intervalType = "h";
		  } else {
			interval = Math.floor(seconds / 60);
			if (interval >= 1) {
			  intervalType = "m";
			} else {
			  interval = seconds;
			  intervalType = "s";
			}
		  }
		}
	  }
  
	return interval + ' ' + intervalType;
  };

//create an array of 12 months before now
var datesForScale=new Array();
for (let i = 0; i < 13; i++) {
	datesForScale.push(moment().subtract(i,"months"));
}
// console.log(datesForScale);
//need to reverse order so it goes from 12 to 1
var rev=datesForScale.reverse();

// create an array of the new formatted dates to use in timescale
dateScale = new Array();
rev.forEach(function(item,i){
	dateScale[i]= timeSince(rev[i]); 
});

//Add this to get rid of the zero at the right side of the graph
dateScale[12]="0"


//Instantiated the DATE SCALE at top of graphs
//format: it is a small graph with no data
var y = document.getElementById('time').getContext('2d');
var timechart = new Chart(y, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: dateScale,
    },
    // Configuration options go here
    options: {
		responsive:true,
		maintainAspectRatio: false,
		layout:{
			padding:{
				// left:2,
				bottom:4,
				right:10,
			},},
		legend: {display: false},
		scales: {
        	xAxes: [{
            	gridLines: {
                	display: true,
					drawBorder: false,
					tickMarkLength:0,
            	},
				ticks:{
					fontSize: 10,
					display:true,
					// autoSkip : true,
					source:'labels',
					//skip labels if you want to have less duration markers
                    callback: function(tick, index, array) {
                              return (index % 3) ? "" : tick;
                               },
					maxRotation:0,
					minRotation:0,
					font: function(context) {
						var width = context.chart.width;
						var size = Math.round(width / 32);
		
						return {
							weight: 'bold',
							size: size
						};
					}
				}
        	}],
        	yAxes: [{
            	gridLines: {
                	display: false,
					drawBorder:false,
           		},
				ticks:{display:false,}
        	}]
    	},
		tooltips: {display:false,},
	}
});


// Read in CSV files - unfortunately the data in the graphs is being pulled from two CSV files. I didnt have time to create and use a JSON file
//file with the data
var url="storedFiles/randLabGenGaus.csv"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

var labs = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  labs.push(jsonObject[i].split(','));
}

//file with the dates
var url="storedFiles/randLabDates.csv"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

var labDates = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  labDates.push(jsonObject[i].split(','));
}


// graph FUNCTION SHOULD START HERE AND IS PASSED A VALUE FOR THE ROW NUMBER 
//(The dates are on the same row and this value should not be changed)
function labFunction(name, graphLabel, graphLocation){

	// create an array of names
	var indexPull=new Array();
	for (let i = 0; i < labs.length; i++) {
		indexPull.push(labs[i][0]);
	}
	//so it wont be case sensitive
	var upname=name.toUpperCase()
	//finds the index number
	var nameIndex = indexPull.indexOf(upname);
	//this is the variable the rest of the code will 
	//reference now. It contains the index number as an integer
	var dataIndex =Number(nameIndex);


	// pull data from csv 
	var datesPull=new Array();
	var valuesPull =new Array();
	for (let i = 5; i < labDates.length; i++) {
		datesPull.push(labDates[dataIndex][i]);
		// valuesPull.push((Number(values[i][1])).toFixed(2)); with rounding
		valuesPull.push((Number(labs[dataIndex][i])));
	}


	//assign values to varibles to use in the graphs
	var graphName=labs[dataIndex][1]
	var units=labs[dataIndex][4]
	var rangeMin= Number(labs[dataIndex][2])
	var rangeMax= Number(labs[dataIndex][3])
	// var displayMin = rangeMin -20 //not sure if we need
	// var displayMax = rangeMax-20
	var dateArray = datesPull
	var data1=valuesPull

	//convert to real javascript dates 
	dates = new Array();
	dateArray.forEach(function(item,i){
		dates[i]= new Date(dateArray[i]); 
	});
	// console.log(dates);

	//simple date for the tooltips on graphs as 00/00/0000
	//NOTE: for some reason this is subtracting a day from the actual date
	dateTips = new Array(); 
	dates.forEach(function(item,i){
		dateTips[i]= moment(dates[i]).format('L')
	});


	// Line graph structure 
	// (reverse the order of the graphs)- this makes the graph go from oldest dates to newer dates,
	//if this need changes, simply swap now and yearAgo variable names
	var now = moment()
	var yearAgo = moment(now).subtract(1,'years')

	//set min and max values
	var type = 'line'
	var data = {
		labels: dateTips,
		datasets: [{
			data: data1,
			fill: false,
			borderColor: 'rgba(0, 0, 0, .4)',
			borderWidth:1.5,
			pointHitRadius: 4,
			pointRadius:2,
			lineTension:0
		}],
	}		
	var options = {
		responsive: true,
		maintainAspectRatio:false,
		layout:{
			padding:{
				right:10,
				bottom:0,
				top:10
			},
		},
		legend: {
		display: false
		}, 
		scales: {
			xAxes: [{
				type: "time",
				time: {
					unit: 'month',
					displayFormats: {
					second: 'MM DD'
					},
					min: yearAgo,
					max: now
				},
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
					// autoSkip:false,
					fontSize: 8,
					beginAtZero: false,
					////this is where the yscale is created for the graphs, I did not have time to make this work as in the specs
					// suggestedMin:rangeMin - 1,
					// suggestedMax:rangeMax + 1,
				// 	callback: function(value) {
				// ////fix side labels with some sort of band label-lookup
				// 	console.log(value);
				// 	// var mingoal = rangeMin
				// 	// var maxgoal = rangeMax
				// 	// var closestmin = value.reduce(function(prev, curr) {
				// 	// 	return (Math.abs(curr - goal) < Math.abs(prev - mingoal) ? curr : prev);
				// 	//   });
				// 	// var closestmax = value.reduce(function(prev, curr) {
				// 	// 	return (Math.abs(curr - goal) < Math.abs(prev - maxgoal) ? curr : prev);
				// 	//   });
				// 	// switch (value) {
				// 	// 	case closestmin:
				// 	// 		return rangeMin; 
				// 	// 	case closestmax:
				// 	// 		return rangeMax; 
				// 	// }

				// }     
				}
			}],
		},

		//min and max color change of the graph line 
		bands: {
		yValueMin: rangeMin, 
		yValueMax: rangeMax, 

			//color of the band lines
			bandLine: {
				stroke: 0.5, 
				colour: 'rgba(0, 0, 0, 0.4)',
				type: 'dashed', 
				// label: 'M',                 
				fontSize: '12',
				fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
				fontStyle: 'normal',
			},

			//below the minimum normal value
			belowMinThresholdColour: [
				'rgba(240, 52, 52, 1)'
			],
			//above the maximum normal value
			aboveMaxThresholdColour: [
				'rgba(240, 52, 52, 1)'
			],
		},
		tooltips: {
		enabled: true,
		caretSize: 5,
		bodyFontSize: 10,
		position: 'nearest',
		displayColors: false,
		callbacks: {
		// use label callback to return the desired label
		label: function(tooltipItem,) {
			return tooltipItem.yLabel+ units +" - " + tooltipItem.xLabel;
		},
		// remove title
		title: function() {
			return;
		}
		}
		}
	}


   
//update the graph labels
// console.log(graphName);
document.getElementById(graphLabel).innerHTML= graphName;

//instantiate graph
var x= document.getElementById(graphLocation);
new Chart(x, {
		type:type,
		data:data,
		options:options
	});

}


// instantiate all 6 graphs 
//labFunction(name of the lab- not case sensitive but needs to be spelled correctly, 
//				"div id for where the label will reside",
//				"div id for where the graph will reside")
labFunction("potassium", "name1", "chart1");
labFunction("sodium", "name2", "chart2");
labFunction("co2", "name3", "chart3");
labFunction("creatinine", "name4", "chart4");
labFunction("chlorine", "name5", "chart5");
labFunction("calcium", "name6", "chart6");





// Read in JSON for physician notes 
var url="storedFiles/labs.json"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

//create new array to store notes
var jsonObject = request.responseText;
var tableData = JSON.parse(jsonObject);


var table = new Tabulator("#labs-table", {
	height:200, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
	data:tableData, //assign data to table
	layout:"fitColumns", //fit columns to width of table (optional)
	columns:[ //Define Table Columns
		{title:"Lab", field:"Name"},
		{title:"Value", field:"measurement"},
		// {title:"Min", field:"Min"},
		// {title:"Max",field:"Max"},
		{title:"Units", field:"Units"},
		{title:"Date", field:"date"}
	],
	rowClick:function(e, row){ //trigger an alert message when the row is clicked
		// alert("Row " + row.getData().id + " Clicked!!!!");
	},
});



// Read in JSON for physician notes 
var url="storedFiles/meds.json"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

//create new array to store notes
var jsonObject = request.responseText;
var tableData = JSON.parse(jsonObject);


var table = new Tabulator("#meds-table", {
	height:200, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
	data:tableData, //assign data to table
	layout:"fitColumns", //fit columns to width of table (optional)
	columns:[ //Define Table Columns
		{title:"Med", field:"name"},
		{title:"Dose", field:"dose"},
		{title:"Unit", field:"dose unit"},
		{title:"Freq",field:"freq"},
		{title:"Route", field:"route"},
		{title:"Last Fill", field:"last fill date"},
		{title:"Coverage", field:"coverage"},
		{title:"Remaining Fills", field:"anticipated remaining fills"}
	],
	rowClick:function(e, row){ //trigger an alert message when the row is clicked
		// alert("Row " + row.getData().id + " Clicked!!!!");
	},
});


// line on graph - am still trouble shooting
$(wrap).on('mousemove', function(e) {
	var xPos = e.pageX;
	var yPos = e.pageY;
	// console.log(xPos, yPos);
	$('.line-out').css({
	  'top': yPos-400,
	  'left': xPos-10,
	  
	});
  });