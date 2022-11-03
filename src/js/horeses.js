const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Эта функция сама по себе запускает 1 лошадь
const run = horse => {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

console.log('%c Заезд начался!', 'color:yellow; font-size:20px');

const promises = horses.map(run);
// console.log(promises);

/**
 * - Promise.race - ждет пока самый быстрый добегает
 *   после него вызывается Promise.all
 */
Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c 🎉 Победил ${horse}, финишировал за ${time}ms`,
    'color:coral; font-size:20px'
  );
});

/**
 * Этот колбэк в then выполнится только тогда, когла
 * все промисы выполняться
 *
 * - Если хотябы 1 промис реджектнится, то эта функция не выполнится
 */
Promise.all(promises)
  .then(results => {
    console.log('%c Заезд окончен 🏁', 'color: orange; font-size:20px');
    console.table(results);
  })
  .catch(console.log);

/**
 * catch(console.log) - словит значение ошибки и законсолит
 * тоже самое что и .catch(error => console.log(error))
 */
