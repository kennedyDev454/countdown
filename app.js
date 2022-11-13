const days = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");


function countdown() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1
  const futureDate = new Date(`January 01 ${nextYear} 00:00:00`);
  const diff = futureDate.getTime() - now.getTime();

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;

  insertTime(day, hour, minutes, second);
}

function insertTime(day, hour, minutes, second) {
   days.innerHTML = `${formatDate(day)}`
   hours.innerHTML = `${formatDate(hour)}`
   minutes.innerHTML = `${formatDate(minutes)}`
   seconds.innerHTML = `${formatDate(second)}`
}


function formatDate(value) {
 return  String(value).length === 1 ? `0${value}` : value

}

setInterval(countdown, 1000);

countdown();
