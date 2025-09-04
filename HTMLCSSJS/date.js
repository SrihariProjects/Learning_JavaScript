
//for getting current date and time
var myDate=new Date();
console.log(myDate);

//for getting past date and time
var myPastDate=new Date(2020,0,1);
console.log(myPastDate);

//for getting future date and time
//january-->0
//december-->11

var myFutureDate=new Date(2025,11,31);
console.log(myFutureDate);

var birthday=new Date(2000,5,15,5,45,45);
console.log(birthday);

//get the month if the date(0-11)
console.log(birthday.getMonth());

//get the date of the month(1-31)
console.log(birthday.getDate());    

//get the day of the week(0-6)
console.log(birthday.getDay());

//get the hours(0-23)
console.log(birthday.getHours());

//get the number of milliseconds since january 1,1970
console.log(birthday.getTime());