function gettingJSON() {
	//Display the forecast
	// Your code here.

	//Set default location if one isn't provided
	let location;

	// Your code here.
	// location = "Ann Arbor"
	location = document.querySelector("#location").value
	if (location == '') {
		location = 'Ann Arbor'
	} 
	console.log("Location is : " + location);

	//set default temperature format if one isn't provided
	let format;

	// Your code here.
	fah_checkbox = document.querySelector("#fahrenheit").checked;
	cel_checkbox = document.querySelector("#celcius").checked;
	if (fah_checkbox == 1 && cel_checkbox == 0) {
		format = 'imperial';
	} else if (fah_checkbox == 0 && cel_checkbox == 1) {
		format = 'metric';
	} else {
	format = 'imperial';
	}
	console.log(fah_checkbox);
	console.log(cel_checkbox);
	console.log("Format is " + format);

	//set the query  
	let query;
	// Your code here.  
	api_key = "7bfa5200d359cc416d596cd3958b72d5";

	console.log("Query is :" + query);

	//Create and set variables for each of the elements you
	//need to update, location, temp, the image, etc.

	let loc;
	let temp;
	let tempImg;
	// Your code here.


	$.getJSON(query, function (json) {
		//Use returned json to update the values of the three 
		//elements in HTML.  
		//I would print the JSON to the console
		// Your code here.

	});
}
