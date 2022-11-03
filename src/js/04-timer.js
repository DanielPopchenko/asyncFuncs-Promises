const refs = {
  clockaface: document.querySelector('.js-clockface'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      /**
       * Если таймер хотябы один раз запустился, то выходим из функции
       */
      return;
    }

    this.isActive = true;
    const startTime = Date.now(); // при нажатии на кнопку, сохраниться текущее время
    updateClockFace(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      updateClockFace(deltaTime);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    /**
     * Эта функция ожидает в себя кол-во милисекунд
     * если мы передадим 0, то с 0 мс не может быть
     * ни секунды, ни часа итд
     * И при остановке таймера у нас будет обнуляться наш таймер
     */
    updateClockFace(0);
    console.log('Stopped');
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
/**
 * ! Когда мы передаем метод обьекта как callback в обработчик событий, то
 * ! this в нашем случае будет кнопка на которую кликнули
 * ! и останавливаться таймер не будет
 * - ! Поэтому надо забиндить
 */
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockFace(time) {
  const secs = pad(parseInt((time / 1000) % 60));
  const minutes = pad(parseInt((time / (1000 * 60)) % 60));
  const hours = pad(parseInt((time / (1000 * 60 * 60)) % 24));

  refs.clockaface.textContent = `${hours}:${minutes}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// function msToTime(duration) {
//   var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = parseInt((duration / 1000) % 60),
//     minutes = parseInt((duration / (1000 * 60)) % 60),
//     hours = parseInt((duration / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
// }
