const findSeason = (a) => {
  if (isNaN(a) || a <= 0 || a >= 13) {
    do {
      alert ('Вы ввели не коректное значение');
      a = Number(prompt('Введите номер месяца'))
    }while (isNaN(a) || a <= 0 || a >= 13);
  }
  if (a === 1 || a === 2 || a === 12) {
    return 'Зима';
  } else if (a >= 3 && a <= 5) {
    return 'Весна';
  } else if (a >= 6 && a <= 8) {
    return 'Лето';
  } else {
    return 'Осень';
  }
}

const playFirstGame = () => {
  alert ('Ну что поехали !');
  let monthNumber = Number(prompt('Введите номер месяца.'));
  alert(findSeason(monthNumber));
}



const fructShow = () => {
  const fruct = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  alert(fruct.sort(() => Math.random() - 0.5));
  let answerOne = prompt('Чему равнялся первый элемент массива?');
  let answerTwo = prompt('Чему равнялся последний элемент массива?') ;
  if (answerOne == fruct[0] && answerTwo == fruct[fruct.length - 1]){
      return alert('Поздравляю, Вы угадали!');
  } else if (answerOne === fruct[0] || answerTwo === fruct[fruct.length - 1]){
      return alert ('Вы были близки к победе!');
  } else {
      return alert('Неправильно');
  }
  }


