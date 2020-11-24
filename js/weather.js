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
	if (fah_checkbox == 0 && cel_checkbox == 1) {
		format = 'metric';
	} else {
	format = 'imperial';
	}
	console.log("Format is " + format);

	//set the query  
	let query;
	// Your code here.  
	api_key = "7bfa5200d359cc416d596cd3958b72d5";
	query = 'https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid='+api_key+'&units='+format;
	console.log("Query is :" + query);

	//Create and set variables for each of the elements you
	//need to update, location, temp, the image, etc.

	let loc;
	let temp;
	let tempImg;
	// Your code here.
	document.getElementById('forecast').style.display = "block"
	loc = document.getElementById('loc')
	temp = document.getElementById('temp')
	tempImg = document.getElementById('tempImg')

	$.getJSON(query, function (json) {
		//Use returned json to update the values of the three 
		//elements in HTML.  
		//I would print the JSON to the console
		// Your code here.
		console.log(JSON.stringify(json));
		loc.innerHTML = json.name
		temp.innerHTML = json.main.temp + ' with ' + json.weather[0].description
		tempImg.src = "http://openweathermap.org/img/wn/"+ json.weather[0].icon +"@2x.png"
		tempImg.alt = "Weather icon for "+ json.weather[0].description
		tempImg.title = "Weather Icon"
	});
}