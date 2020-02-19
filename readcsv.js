// Read in CSVs 
var url="storedFiles/labs.csv"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

var csvData = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  csvData.push(jsonObject[i].split(','));
}
// Retrived data from csv file content
console.log(csvData[1][1]);
$('#lab_table').html(csvData[1][1]);


// Read in CSVs 
var url="storedFiles/labvalues.csv"
var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

var csvData = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  csvData.push(jsonObject[i].split(','));
}
// Retrived data from csv file content
console.log(csvData[1][1]);
$('#lab_table2').html(csvData[1][1]);