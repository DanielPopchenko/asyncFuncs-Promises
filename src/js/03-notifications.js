/**
 * Показываем и скрываем добавляя/удаляя класс
 * Скрываем через определенное время
 * Скрываем при клике
 * Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector('.js-notification'),
};

refs.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
  console.log('👽');
}

function showNotification() {
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
