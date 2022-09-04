// So i know that I need variables for the date, and I think for the time blocks,
// and the scheduling areas. It looks like I'm also pulling from jQuery and Moment.js

//Date and Time

var currDate = moment().format("MMM Do YY");
var currTime = moment().format('h:mm:ss a');

//and I need to create variables that will pull from jQuery
// I know I don't have to, but let me seee if I can display the current time...
// It looks like the $ symbol will alow me to pull from jQuery and # will refernence the id 
//I need to pull from in my HTML file

var currDay = $("#currentDay");
var currClock = $("#currentTime");

// Displaying Date and Time

currDay.text(currDate);
currClock.text(currTime);
