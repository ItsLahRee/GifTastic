//Create an Array of Strings, var TOPICS (humanEmotions)
var topics="sad"; "happy"; "excited"; "bored"; "amused"; 
//push method to add words

//App should create buttons out of Topics in the Array

//Hint: try using a loop that appends a button for each string in the array

//On-click event for buttons; grabs 10 STATIC giphs 

//Place them on the page (document.write?)

// AJAX Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?" + search + "api-key=SoLLp4B9Mr4BOQSDiXFLJuzDaNWbwHR6";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

