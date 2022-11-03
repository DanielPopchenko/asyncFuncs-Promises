// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.3;
//   setTimeout(() => {
//     if (success) {
//       resolve('Success');
//     }

//     reject('Error');
//   }, 1000);
// });

/**
 * Если промис выполнился успешно, то у нас выполниться
 * этот console.log
 *
 *
 * - Промис, если ты выполнишься успешно, вызови эту функцию
 * и тебе прийдет какое то значение
 * 'Error' в случае неудачи
 * 'seccess' в случае удачи
 */

// promise.then(
//   // выполняется если успешно
//   result => console.log(result),
//   // выполняется если неуспешно
//   error => console.log(error)
// );

// --- переписываем тоже самое только с catch

/**
 * Тот же принцип
 * Если выполняется то  выводим резалт,
 * Если нет, то эрор
 *
 * Результат колбека мы можем получить только в then or catch
 */

// let data;

// console.log('Data before the promise', data);

// Все эти фенкции выполняться ассинхронно
// promise
//   .then(result => {
//     console.log(`%c${result}`, 'color:green; font-size:20px');
//     data = result;
//     console.log('Data inside the promise', data);
//   })
//   .catch(error => {
//     console.log(`%c${error}`, 'color:red; font-size:20px');
//     data = error;
//     console.log('Data inside the promise', data);
//   });

// // Chain Promise -> then() -> catch()

// console.log('Data after the promise', data);

/**
 * --- Использование метода finally
 */

// let isLoading = false;

// isLoading = true;

// /**
//  * И в случае ошибки и в случае успеха мне надо сбросить isLoading
//  */

// promise
//   .then(result => {
//     console.log(`%c${result}`, 'color:green; font-size:20px');
//     data = result;
//     console.log('Data inside the promise', data);
//     // isLoading = false;
//   })
//   .catch(error => {
//     console.log(`%c${error}`, 'color:red; font-size:20px');
//     data = error;
//     console.log('Data inside the promise', data);
//     // isLoading = false;
//   })
//   .finally(() => {
//     /**
//      * Когда promise перейдет из pending в settled
//      * сделай мне это.
//      * И нам не надо будет дублировать код (Менять и там и там isLoading)
//      */
//     isLoading = false;

//     /**
//      * Код внутри этого метода вызывается и для then и для catch
//      *
//      * И не надо дублировать код
//      */
//   });

// // Chain Promise -> then() -> catch()

// console.log('Data after the promise', data);

// Chaining

const promise = new Promise(resolve => {
  resolve(5);
});

promise
  .then(x => {
    console.log('x:', x);

    return x * 2;
  })
  .then(y => {
    console.log('y:', y);

    return y * 2;
  })
  .then(c => {
    console.log('c:', c);
  })
  .catch(error => console.log(error));

// Зенов может быть много, катч всегда один
