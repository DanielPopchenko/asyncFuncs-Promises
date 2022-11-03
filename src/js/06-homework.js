// console.log('hello');

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
//   '#736383',
//   '#222444',
//   '#124915',
//   '#465576',
// ];

// const refs = {
//   body: document.querySelector('body'),
//   startBtn: document.querySelector(`button[data-action='start']`),
//   stopBtn: document.querySelector(`button[data-action='stop']`),
//   output: document.querySelector('.output'),
// };

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const colorSwitcher = {
//   intervalId: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const newColor = colors[randomIntegerFromInterval(0, colors.length)];
//       console.log(newColor);
//       refs.body.style.background = newColor;
//     }, 1000);
//   },

//   stop() {
//     this.isActive = false;
//     clearInterval(this.intervalId);
//   },
// };

// refs.startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
// refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));

/**
 * ---- Timer ----
 */

// const refs = {
//   secs: document.querySelector('span[data-value="secs"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   days: document.querySelector('span[data-value="days"]'),
// };

// const timer = {
//   start() {
//     setInterval(() => {
//       const currentTime = Date.now();
//       const targetDate = new Date('Feb 24, 2022');
//       const deltaTime = targetDate - currentTime;
//       updateClockFace(deltaTime);
//     }, 1000);
//   },
// };

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function updateClockFace(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs.secs.textContent = `${secs}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${mins}`;
//   refs.days.textContent = `${days}`;
// }

// timer.start();

const refs = {
  daysRef: document.querySelector('p[data-value="days"]'),
  hoursRef: document.querySelector('p[data-value="hours"]'),
  minsRef: document.querySelector('p[data-value="mins"]'),
  secsRef: document.querySelector('p[data-value="secs"]'),
};

setInterval(updateClockFace, 1000);

function updateClockFace() {
  const countDate = new Date('Feb 20, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  refs.daysRef.textContent = textDay;
  refs.minsRef.textContent = textMinute;
  refs.hoursRef.textContent = textHour;
  refs.secsRef.textContent = textSecond;
}

updateClockFace();

// const targetDate = new Date('Jul 17, 2021');
// let newTime = {};
// const timer = {
//   start() {
//     setInterval(() => {
//       updateClockface();
//       updateTime();
//     }, 1000);
//   },
// };
// timer.start();

// function updateClockface() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;
//   newTime.days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   newTime.hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   newTime.mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   newTime.secs = pad(Math.floor((time % (1000 * 60)) / 1000));
// }
// function updateTime() {
//   refs.daysRef.textContent = `${newTime.days}`;
//   refs.hoursRef.textContent = `${newTime.hours}`;
//   refs.minsRef.textContent = `${newTime.mins}`;
//   refs.secsRef.textContent = `${newTime.secs}`;
// }
// function pad(value) {
//   return String(value).padStart(2, '0');
// }
