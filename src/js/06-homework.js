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

/**
 * Промисификация дз
 */

// Task - 2

// const delay = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       /**
//        * Прокидвываем значение мс дальше
//        */
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// Task - 1

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// console.table(users);

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user
//       );

//       resolve(updatedUsers);
//     }, 1000);
//   });
// };

// const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */

// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Ajax', logger);

/*
 * Должно работать так
 */
// toggleUserState(users, 'Poly').then(logger);
// toggleUserState(users, 'Poly').then(logger);

// Task - 3

// -- Example --

// const product1 = {
//   id: 1,
//   price: 100,
//   count: 2,
// };
// const product2 = {
//   id: 2,
//   price: 200,
//   count: 5,
// };
// const product3 = {
//   id: 3,
//   price: 300,
//   count: 7,
// };
// const product4 = {
//   id: 4,
//   price: 400,
//   count: 10,
// };

// const errLog = function ({ id, count }) {
//   console.log(`В данном объекте ${id} осталось ${count} единиц`);
// };
// const esLog = function ({ sum, delay }) {
//   console.log(`Ваш заказ на ${sum} будет выполнен через ${delay} милисекунд`);
// };

// const toGetSumm = function (obj) {
//   let num = Math.floor(Math.random() * (20 - 1) + 1);
//   let ms = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
//   console.log('ms', ms);
//   console.log('num', num);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (obj.count >= num) {
//         obj.price * num;
//         res({ sum: obj.price * num, delay: ms });
//       } else {
//         rej(obj);
//       }
//     }, ms);
//   });
// };

// toGetSumm(product4, 1000).then(esLog).catch(errLog);
// toGetSumm(product3, 3000).then(esLog).catch(errLog);
// console.log(toGetSumm(product3, 1000));

const logSuccess = (id, time, amount) => {
  return `Transaction ${id} processed in ${time}ms. ${amount}$ deal`;
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  let delay = randomIntegerFromInterval(1000, 3000);
  let canProcess = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (canProcess) {
        transaction.ms = delay;
        res(logSuccess(transaction.id, transaction.ms, transaction.amount));
      } else {
        rej(transaction.id);
      }
    }, delay);
  });
};

// makeTransaction({ id: 70, amount: 150 }).then(console.log).catch(logError);
// makeTransaction({ id: 71, amount: 250 }).then(console.log).catch(logError);
// makeTransaction({ id: 72, amount: 100 }).then(console.log).catch(logError);
// makeTransaction({ id: 5, amount: 360 }).then(console.log).catch(logError);
// makeTransaction({ id: 1, amount: 270 }).then(console.log).catch(logError);

const students = [
  {
    name: 'user1',
    student: true,
    age: 22,
  },
  {
    name: 'user2',
    student: false,
    age: 23,
  },
  {
    name: 'user3',
    student: true,
    age: 24,
  },
  {
    name: 'user4',
    student: true,
    age: 21,
  },
  {
    name: 'user5',
    student: true,
    age: 50,
  },
  {
    name: 'user6',
    student: true,
    age: 20,
  },
  {
    name: 'user7',
    student: true,
    age: 27,
  },
  {
    name: 'user8',
    student: true,
    age: 26,
  },
  {
    name: 'user9',
    student: true,
    age: 23,
  },
];

const toSearchForStudent = (arr, min, max) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(arr.filter(student => student.age >= min && student.age <= max));
    }, 0);

    // rej(rejectOperation);
  });
};

const toShowStudents = students => {
  return console.table(students);
};

toSearchForStudent(students, 20, 26).then(toShowStudents);
