  
  
  
  // Поле, на котором всё будет происходить, — тоже как бы переменная
  const canvas = document.getElementById('game');
  // Кнопка для старата игры
  const buttonStart = document.getElementsByClassName('animated-button1');
  // Классическая змейка — двухмерная, сделаем такую же
  const context = canvas.getContext('2d');
  // Размер одной клеточки на поле — 16 пикселей
  const grid = 16;
  // Служебная переменная, которая отвечает за скорость змейки
  let count = 0;
  // А вот и сама змейка
  let snake = {
    // Начальные координаты
    x: 0,
    y: 0,
    // Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
    dx: grid,
    dy: 0,
    // Тащим за собой хвост, который пока пустой
    tail: [],
    // Стартовая длина змейки — 6 клеточек
    snakeBody: 6
  };
  // А это — еда. Представим, что это красные яблоки.
  var apple = {
    // Начальные координаты яблока
    x: 320,
    y: 320
  };
  // Генератор случайных чисел в заданном диапазоне
  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random () * (max - min + 1)) + min;
  // }
  // Игровой цикл — основной процесс, внутри которого будет всё происходить
  function loop() {
    // Хитрая функция, которая замедляет скорость игры с 60 кадров в секунду до 15 (60/15 = 4)
    requestAnimationFrame(loop);

    context.fillStyle = '#66cc66';

    snake.tail.forEach(function (cell, index) {
      //Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
      context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    })

      // Двигаем змейку с нужной скоростью
      snake.x += snake.dx;
      snake.y += snake.dy;


    //Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
        snake.tail.unshift({ x: snake.x, y: snake.y });

    //Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно освобождает клетки после себя
    if (snake.tail.length > snake.snakeBody) {
      console.log(snake.tail)
      console.log(snake.tail.length)
      console.log(snake.snakeBody)
      console.log('x')
      snake.tail.pop();
      console.log(snake.tail.length)
    }


    // if (snake.x < 0) {
    //   snake.x = canvas.width;
    // }
    // else if (snake.x > canvas.width) {
    //   snake.x = 0;
    // }
  
        // // Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
        // snake.tail.unshift({ x: snake.x, y: snake.y });

 

    // Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет
    // if (++count < 30) {
    //   return;
    // }
    // // Обнуляем переменную скорости
    // count = 0;
    // // Очищаем игровое поле
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // // Двигаем змейку с нужной скоростью
    // snake.x += snake.dx;
    // snake.y += snake.dy;
    // Если змейка достигла края поля по горизонтали — продолжаем её движение с противоположной строны
    // if (snake.x < 0) {
    //   snake.x = canvas.width - grid;
    // }
    // else if (snake.x >= canvas.width) {
    //   snake.x = 0;
    // }
    // Делаем то же самое для движения по вертикали
    // if (snake.y < 0) {
    //   snake.y = canvas.height - grid;
    // }
    // else if (snake.y >= canvas.height) {
    //   snake.y = 0;
    // }
    // // Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
    // snake.cells.unshift({ x: snake.x, y: snake.y });
    // // Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно освобождает клетки после себя
    // if (snake.cells.length > snake.maxCells) {
    //   snake.cells.pop();
    // }
    // // Рисуем еду — красное яблоко
    // context.fillStyle = '#d32f2f';
    // context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
    // // Одно движение змейки — один новый нарисованный квадратик 
    // context.fillStyle = '#66cc66';
    // // Обрабатываем каждый элемент змейки
    // snake.tail.forEach(function (cell, index) {
      // Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
      // context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    //   // Если змейка добралась до яблока...
    //   if (cell.x === apple.x && cell.y === apple.y) {
    //     // увеличиваем длину змейки
    //     snake.maxCells++;
    //     // Рисуем новое яблочко
    //     // Помним, что размер холста у нас 400x400, при этом он разбит на ячейки — 25 в каждую сторону
    //     apple.x = getRandomInt(0, 25) * grid;
    //     apple.y = getRandomInt(0, 25) * grid;
    //   }
    //   // Проверяем, не столкнулась ли змея сама с собой
    //   // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
    //   for (var i = index + 1; i < snake.cells.length; i++) {
    //     // Если такие клетки есть — начинаем игру заново
    //     if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
    //       // Задаём стартовые параметры основным переменным
    //       snake.x = 160;
    //       snake.y = 160;
    //       snake.cells = [];
    //       snake.maxCells = 4;
    //       snake.dx = grid;
    //       snake.dy = 0;
    //       // Ставим яблочко в случайное место
    //       apple.x = getRandomInt(0, 25) * grid;
    //       apple.y = getRandomInt(0, 25) * grid;
    //     }
    //   }
    // });
  }
  // Смотрим, какие нажимаются клавиши, и реагируем на них нужным образом
  document.addEventListener('keydown', function (e) {
    // Дополнительно проверяем такой момент: если змейка движется, например, влево, то ещё одно нажатие влево или вправо ничего не поменяет — змейка продолжит двигаться в ту же сторону, что и раньше. Это сделано для того, чтобы не разворачивать весь массив со змейкой на лету и не усложнять код игры.
    // Стрелка влево
    // Если нажата стрелка влево, и при этом змейка никуда не движется по горизонтали…
    if (e.which === 37 && snake.dx === 0) {
      // то даём ей движение по горизонтали, влево, а вертикальное — останавливаем
      // Та же самая логика будет и в остальных кнопках
      snake.dx = -grid;
      snake.dy = 0;
    }
    // Стрелка вверх
    else if (e.which === 38 && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    // Стрелка вправо
    else if (e.which === 39 && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
    // Стрелка вниз
    else if (e.which === 40 && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });

  // Запускаем игру
  const startGame = () => {

    document.querySelector('.animated-button').classList.add('hidden'); 
    requestAnimationFrame(loop);
  }
  
  document.addEventListener('click', startGame)


  window.onload = console.log("load");

  window.onresize = console.log("onresize");