/**
 * Метод setTimeout()
 */

/**
 * Этот метод регистрирует вызов отложенной функции,
 * которая записана между квадратных скобок через 3 сек,
 * если он может ее вызвать.
 * Пока весь синхронный код не выполнится, ассинхронная
 * функция не выполниться никогда, даже если указано выполнись
 * через 3 сек
 */

// const logger = function () {
//   console.log('log when callback-func called after 3s');
// };

// setTimeout(logger, 3000);

// Ассинхронность кода
// console.log('before');
// setTimeout(logger, 3000); // запомнил что надо выполнить через 3сек
// console.log('after');

/**
 * Очистка таймаута с clearTimeout()
 */

const logger = timer => {
  console.log(`Лог через ${timer}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCanselTimer = Math.random() > 0.3;
console.log(shouldCanselTimer);

if (shouldCanselTimer) {
  clearTimeout(timerId);
}

/**
 * второе число 2000 запишется в параметр переданной функции (timer)
 */
