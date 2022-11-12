const days = document.querySelector(".day");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const intro = document.querySelector(".intro-date");

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
  intro.innerHTML = `
    <div class="days">
        <span class="day">${formatDate(day)}</span>
        <span>Days</span>
    </div>
    <div class="hours">
        <span class="hour">${formatDate(hour)}</span>
        <span>Hours</span>
    </div>
    <div class="minutes">
        <span class="minute">${formatDate(minutes)}</span>
        <span>Minutes</span>
    </div>
    <div class="seconds">
        <span class="second">${formatDate(second)}</span>
        <span>Seconds</span>
    </div>
    `;
}


function formatDate(value) {
 return  String(value).length === 1 ? `0${value}` : value

}

setInterval(countdown, 1000);

countdown();
