/**
 * Показываем и скрываем добавляя/удаляя класс
 * Скрываем через определенное время
 * Скрываем при клике
 * Не забываем чистить таймер
 */

// const refs = {
//   notification: document.querySelector('.js-notification'),
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
// };

// let timeoutId = null;

// refs.notification.addEventListener('click', notificationClickHandler);

// showNotification();

// function notificationClickHandler() {
//   clearTimeout(timeoutId);
//   hideNotification();
// }

// function showNotification() {
//   refs.notification.classList.add('is-visible');

//   timeoutId = setTimeout(() => {
//     console.log('I`m calling hideNotification in callback from setTimeout');
//     hideNotification();
//   }, 3000);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }
