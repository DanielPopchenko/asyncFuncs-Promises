/**
 * Метод setInterval()
 * Говорит выполнять функцию через определенное кол-во времени
 *
 */

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);
// setInterval(logger, 2000, 2000);

/**
 * Очистка интервала с clearInteval()
 */

console.log('before');

let subscriptionCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (subscriptionCounter === 3 || hasSubscribed) {
    console.log('Пользователь подписался, останавливаем интервал');
    clearInterval(intervalId);
    // в переменную intervalId записывается id интервала
    // чтобы нам его отменить, нам надо получить доступ к id
    // и указать его в функции cleanInterval(тут)
    return;
  }

  // console.log(subscriptionCounter);
  console.log('Подпишись на рассылку!');
  // hasSubscribed = true;
  subscriptionCounter += 1;
}, 1000);

console.log('after');
