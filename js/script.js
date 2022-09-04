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

// so let me try to create a function that shows what the object is in the console.log
// I think it works, it did call the empty brackets in the console

function startDay(){
    console.log(toDo);
}

// Okay so... I think i need to create a function that will allow me to do something in each time block...
// I already have a timeblock var, so I'll try to do something with that...
// I would still be using jQuery syntax, so I think my function would be similar to how i did the date and time.
// it just wouldn't be a text option.
// So I found .each, which states that the function would be excuted on each value defined. I have to create another
// function inside. more variables, then?
// So I need it for each timeblock.

timeBlock.each()

// Displaying Date and Time

currDay.text(currDate);
currClock.text(currTime);
