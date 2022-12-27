const hourdiv = document.getElementById("hour"),
  minutediv = document.getElementById("minutes"),
  seconddiv = document.getElementById("seconds"),
  sessiondiv = document.getElementById("session"),
  dateinfo=document.getElementById("day-date-container");


function gettime() {
  let date = new Date(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds(),
    session = "AM";

  if (hh == 0) {
        hh = 12;
    }
  if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    sessiondiv.innerText = session;
    hourdiv.innerText = hh;
    minutediv.innerText = mm;
    seconddiv.innerText = ss;
    let t = setTimeout(() => gettime(), 1000);
    }

document.addEventListener("DOMcontentLoaded", gettime());

function dayInfo(){
 let  date = new Date(),

 days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
 dayName = days[date.getDay()], // day

 month= ["January","February","March","April","May","June","July","August","September","October","November","December"],
 monthName = month[date.getMonth()], //months from 1-12

 year = date.getUTCFullYear(); //yyyy; 

 dateinfo.innerText=`${dayName}  ${monthName} ${year}`
}
dayInfo()