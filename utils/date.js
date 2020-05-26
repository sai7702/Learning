class sai{

toAndFromDates(numberofdays){

var theDate = new Date();
var myNewDate = new Date(theDate);
myNewDate.setDate(myNewDate.getDate() + numberofdays );// shouldnt be hard coded
var d= myNewDate
//console.log(d)

var month = d.toLocaleString('default', { month: 'long' });
var currMonth = month.slice(0,3)

var day = d.toLocaleString('default', { weekday: 'long' });
var currday = day.slice(0,3)

var Year = d.getFullYear()

var date = d.getDate()

var FDateTextab= currday + " " + currMonth + " " + date + " " + Year
//console.log(FDateTextab)
return FDateTextab
}}

module.exports= new sai();