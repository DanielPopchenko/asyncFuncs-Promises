// console.log('before timeout');
// setTimeout(() => {
//   console.log('inside timeout');
// }, 2000);
// console.log('after timeout');

/**
 * setTimeout по сути вызывает глобальный обьект window
 * тоесть этот метод пришел с API браузера
 */

// const promise = delay => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(console.log('done'));
//     }, delay);
//   });
// };

// promise(2000);

// Урок в ютюбе (асинхронность, promises)
// console.log('before');
// setTimeout(() => {
//   console.log('hello');
// }, 1000);

// console.log('after');
// setTimeout(() => {
//   console.log('hello');
// }, 3000);
// console.log('afterX2');

// /**
//  * setTimeout может принимать в себя не только анонимные функции
//  * а и написанные выше в коде, принимает как ссылку на функцию
//  */

// function consoleLogHello() {
//   console.log('%c consoleLogHello -> hello', 'color:orange; font-size:15px');
// }

// setTimeout(consoleLogHello, 4000);

// console.log('before');

/**
 * консоль лог в таймауте будет 3 потому, что
 * это ассинхронная операция
 */
// setTimeout(() => {
//   console.log('inside timeout');
// }, 0);

// console.log('after');

// console.log('%c Requesting data...', 'color: grey; font-size:16px');

// Симулируем запрос на сервер

/**
 * Данный подход не очень правильный, так как много вложенности
 */
// setTimeout(() => {
//   console.log('%c Preparing data...', 'color: darkgrey; font-size:16px');

//   const backendData = {
//     server: 'aes',
//     port: 2000,
//     status: 'working',
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     backendData.status = 'resolved';

//     console.log('Data received', backendData);
//   }, 2000);
// }, 2000);

/**
 * Именно поэтому придумали промисы
 */

// console.log('%c Preparing data...', 'color: darkgrey; font-size:16px');
// recoding, using promises

// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     console.log('%c Requesting data...', 'color: grey; font-size:16px');

//     const backendData = {
//       server: 'aes',
//       port: 2000,
//       status: 'working',
//     };

//     resolve(backendData);
//   }, 2000);
// });

/*
 * Рассматриваем вариант, что он точно выполниться успешно
 */

// promise
//   .then(data => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//       }, 2000);
//     });
//   })
//   .then(clientData => {
//     console.log('Data received', clientData);
//     clientData.fromPromise = true;
//     clientData.a = 10;
//     return clientData;
//   })
//   .then(data => {
//     console.log('Modified data', data);
//   })
// finally срабатывает и если реджектится и если резолвится
// .finally(() => console.log('Finally method'));
/**
 * для примера ченим метод catch, который ловит ошибки
 */
// .catch(error => console.error('error', error));

/**
 * Из-за того что мы возвращаем промис, мы
 * можем делать чейнинг
 */

const sleep = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise resolved successfully in ${time}ms`);
    }, time);
  });
};

// sleep(2000).then(console.log);
// sleep(3000).then(console.log);

/**
 * Этот метод принимает в себя массив промисов и то что
 * описанно в теле метода, выполниться только тогда,
 * когла все промисы с массива выполнятся
 */
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('%c All promises completed', 'color: orange');
});

/**
 * Этот метод принимает в себя массив промисов и то что
 * описанно в теле метода, выполниться только тогда,
 * когла 1 промис с массива выполнился
 * - В нашем случае 1 промис выполнится через 2сек
 */
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('%c First promise completed', 'color: orange');
});
