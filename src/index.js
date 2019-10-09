module.exports = function multiply(first, second) {
  let one = first.split('').reverse(); // разделяет сторку и реверсит;
  let two = second.split('').reverse();
  let massiv = [];
  let i = 0 //second loop;
  for (let n = 0; n < one.length; n++) {    // складывает как в столбик два числа
    for (let k = 0; k < two.length; k++) {
      let m = one[n] * two[k];
      massiv[n + k] = (massiv[n + k]) ? massiv[n + k] + m : m;
    }
  }

  for (; i < massiv.length; i++) {       //добивает остаток из прошлого массива
    const num = massiv[i] % 10;
    const move = Math.floor(massiv[i] / 10);
    massiv[i] = num;

    if (massiv[i + 1]) {
     massiv[i + 1] += move;
    } else if (move != 0) {
      massiv[i + 1] = move;
    }
  }

  return massiv.reverse().join('');
}

