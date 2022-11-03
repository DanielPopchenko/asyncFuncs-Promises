// const fetchUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3;

//       if (success) {
//         const user = { name: userName, age: 30, posts: 80 };
//         resolve(user);
//       }

//       const error = 'Error occured!';

//       reject(error);
//     }, 1000);
//   });
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }

// function onFetchUserError(error) {
//   console.log(`%c ${error}`, 'color:red; font-size: 20px');
// }

const makePromise = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      const output = `delay: ${delay}`;
      resolve(console.log(output));
    }, delay);
  });
};

/**
 * Здесь мы просто регистрируем функции, это синхронные операции
 * Неважно в каком порядке мы их зарегистрируем
 */
makePromise(11000);
makePromise(5000);
makePromise(1000);
makePromise(9000);
makePromise(7000);

/**
 * 1) Регистрация этих 5 функций ставится на стэк,
 *    в порядке 11000 после 5000, 1000, 9000, 7000
 * 2) После чего в своем порядке идут на Web Apis,
 * 3) 1000 мс выполняется быстрее всех, поэтому именно она
 *    первой идет на стэк вызовов и срабатывает, после срабатывает
 *    5000, 7000, 9000, 11000.
 *
 *
 */
