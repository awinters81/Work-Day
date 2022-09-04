// So i know that I need variables for the date, and I think for the time blocks,
// and the scheduling areas. It looks like I'm also pulling from jQuery and Moment.js

//Date and Time

var currDate = moment().format("MMM Do YY");
var currTime = moment().format('h:mm:ss a');

// Let me create another time variable, since the work day scheduler is going by hour.

var currHour = moment().format('H')

//and I need to create variables that will pull from jQuery
// The current time is displayed, but it's static. Since it's not a requirement, I'll come back to it later.
// So now I have to figure out how I'm going to cycle through each time block.
// Let me start by creating my variables...
// It looks like the $ symbol will alow me to pull from jQuery and now . will reference the class 
//I need to pull from in my HTML file

var currDay = $("#currentDay");
var currClock = $("#currentTime");

// So I chose to reference these two class from my HTML file as they seem to be dealing with the
// actual time blocking itself

var timeBlock = $(".time-block")
var scheduling = $(".container")

// Also, from what I'm researching, I need to create an array because I need to store multiple records
// of text, so... I think my brackets would be empty. Since I have an array, is console.log coming into play 
// when I eventually create more functions?

var toDo = []

// Displaying Date and Time

currDay.text(currDate);
currClock.text(currTime);
