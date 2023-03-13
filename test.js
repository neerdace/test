var date = new Date();
const todaydate = document.querySelector('.date')
const todayday = document.querySelector('.day')
const todaytime = document.querySelector('.time')
const noofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const noofmonth = ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function printDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var month = noofmonth[month];
    var year = date.getFullYear();
    todaydate.innerHTML = day + " " + month + " " + year ;
}
printDate();

function printDay(){
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML = day;
}
printDay();


function printTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour -12;
        period = "PM";
    }
    if(hour < 10){
        hour = "0" + hour; 
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    var time = hour + ":" + min + ":" + sec + " " + period;
    document.querySelector(".time").innerHTML = time;
    setTimeout(printTime,1000)
}
printTime();
