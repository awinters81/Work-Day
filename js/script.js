// So i know that I need variables for the date, and I think for the time blocks,
// and the scheduling areas. It looks like I'm also pulling from jQuery and Moment.js

//So for the date and time, that's being pulled from Moment...

var currDate = moment().format("MMM Do YY");
var currTime = moment().format('h:mm:ss a');

//and I need to create variables that will pull from jQuery
//So, let me start with the date...
// It looks like the $ symbol will alow me to pull from jQuery and # will refernence the id 
//I need to pull from in my HTML file

var currDay = $("#currentDay");

// I need to display the date, so I need to create a function that will allow me to do that?
// so I didn't need the $ in front to create this function, having it in the var above is already telling the script that we're pulling from
// jQuery and I forgot to add a semi colon previously...

currDay.text(currDate);

