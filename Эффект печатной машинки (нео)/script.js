const t = [
  'Wake up Neo ... \n',
  'The Matrix has you \n'
];


function typeText() {
  let line = 0;
  let count = 0;
  let out = '';
  let htmlOut = document.querySelector('.out');

  function typeLine() {

    // рисум строку
    let interval = setTimeout(function () {
      out += t[line][count];
      htmlOut.innerHTML = out + '|';
      count++;

      // проверки
      // не закончилась ли строка
      if (count >= t[line].length) {
        count = 0;
        line++;
        if (line === t.length) {
          clearTimeout(interval); // останавливаю счетчик
          htmlOut.innerHTML = out; // убираем вертикальную черту
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(350 * 2.0)));
  }
  typeLine();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


typeText();