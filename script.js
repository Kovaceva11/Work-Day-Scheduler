// Moment declaration for day and time 
moment();
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTime = currentTime.startOf("hour");
// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");
