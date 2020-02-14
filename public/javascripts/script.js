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


// Tabs - from https://rudrastyh.com/javascript/tabs.html
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
	

// Readmore- https://stackoverflow.com/questions/38296509/trim-text-using-jquery-with-clickable-more-but-keep-text-format
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


  
//   graph 
// Bloodpressure
var sData = {
	labels: ['7/31/2018', '11/7/2018', '2/11/2019', '4/3/2019','5/11/2019','7/18/2019', 'extra', 'extra'],
	datasets: [{
	  data: [117,70 ,70 ,100 , 106, 110, 100 ,140],
	  fill: false,
	  pointBackgroundColor: 'black',
	  borderColor: "black",
	  borderWidth:1,
	  pointHitRadius: 4,
	  pointRadius:2
	}],
   }
	
   var data = sData
	
   var options = {
	responsive: false,
	layout:{
		padding:{
			right:8
		}
	},
	legend: {
	  display: false
	}, scales: {
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
								  min: 70,
								   max: 140,
								   stepSize: 10,
								   data:[70,90,120,150],
								   callback: function(label, index, labels) {
									switch (label) {
									   case 70:
										  return "";
									   case 90:
										  return '';
										//   return '90';
									   case 100:
										   return '';
									  case 120:
										return '';

										// return '120';
									  case 140:
										  return '';
			   }
			 }
				   
				  }
		  }],
	  },
	 bands: {
	  yValueMin: 90,
	  yValueMax: 120,
	   //baseColorGradientColor:'red',
		//pointBackgroundColor: 'red',
		  //pointBackgroundColor: 'red',
		  bandLine: {
			  stroke:1,
			  colour:'gainsboro',
			  type: 'dashed'
		  },
		  belowMinThresholdColour: [
			  'red'
		  ],
		  aboveMaxThresholdColour: [
			  'red'
		  ],
	  },
	
	
   }
	
   var ctx = document.getElementById('myChart');
	
   let chart2 = new Chart(ctx, {
	type: 'line',
	data: data,
	options: options,
	responsive: true,
	maintainAspectRatio:false
	
   });
   
 
   
// Vertical line on graphs 
// var element = document.getElementById('graphs');

// var drawLines = function(event) {
//   var x = event.pageX;
//   var y = event.pageY;
  
//   var straightLine = element.querySelector('.straightLine');
//   var hrLine = element.querySelector('.hrLine');
  
//   var slTrans = 'translate(' + x + 'px, 0px)';
//   var hrTrans = 'translate(0px, ' + y + 'px)';
//   if(!straightLine) {
//      straightLine = document.createElement('div');
//      straightLine.classList.add('straightLine');
//      straightLine.style.height = "100%";
//      straightLine.style.width = '2px';
//      element.appendChild(straightLine);
//   }
//   straightLine.style.transform = slTrans;
  
//   if(!hrLine) {
//      hrLine = document.createElement('div');
//      hrLine.style.height = "2px";
//      hrLine.classList.add('hrLine');
//      hrLine.style.width = '100%';
//      element.appendChild(hrLine);
//   }
//   hrLine.style.transform = hrTrans;
// }

// element.addEventListener('mousemove', function(event) {
//    drawLines(event);
// });

// element.addEventListener('mousedown', function(event) {
//    drawLines(event);   
// });

// element.addEventListener('mouseup', function(event) {
//    drawLines(event);
// });

// element.addEventListener('mouseout', function(event) {
//    drawLines(event);
// });