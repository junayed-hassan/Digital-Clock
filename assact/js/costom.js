let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondeElement = document.getElementById('seconde');
let ampmElement = document.getElementById('ampm');

function ourDigitalClock (){
    let now = new Date();
    let hoursNumber = (now.getHours()) > 12 ? (now.getHours()) -12 : (now.getHours());
    let minutesNumber = now.getMinutes();
    let secondeNumber = now.getSeconds();
    let ampmString = (now.getHours()) > 12 ? "PM" : "AM";


    hoursElement.innerHTML = (hoursNumber) < 10 ? "0" + (hoursNumber) : (hoursNumber);
    minutesElement.innerHTML = (minutesNumber) < 10 ? "0" + (minutesNumber) : (minutesNumber) ;
    secondeElement.innerHTML = (secondeNumber) < 10 ? "0" + (secondeNumber) : (secondeNumber) ;
    ampmElement.innerHTML = ampmString;
} 

setInterval(ourDigitalClock, 1000);