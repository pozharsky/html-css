<div align="center">

# Тесты для главы 1

</div>

Предположите результат, который будет выведен в консоль в каждом из примеров.

Проверьте себя, запустив эти примеры в браузере.





<br />
<br />

<div align="center">

## Число

</div>

**Пример 1.1.** Сложение.
```js
console.log(5 + 3);
console.log(2 + 3 + 4 + 5);
console.log((-2 + 2) + (-3 + -5));
```

<br />

**Пример 1.2.** Вычитание.
```js
console.log(5 - 10);
console.log(2 + 3 - 5);
console.log(2 + (3 - 5));
```

<br />

**Пример 1.3.** Умножение.
```js
console.log(7 * 8);
console.log(2 * 2 * 2 * 2 * 2 * 2);
console.log(5 + 3 * 2);
console.log((5 + 3) * 2);
```

<br />

**Пример 1.4.** Деление.
```js
console.log(10 / 2);
console.log(9 / 2);
console.log(4 / 2 * 4);
console.log(4 / (2 * 4));
```

<br />

**Пример 1.5.** Остаток от деления.
```js
console.log(10 % 5);
console.log(10 % 8);
console.log(10 % 10);
console.log(10 % 13);
```

<br />

**Пример 1.6.** Еще остаток от деления.
```js
console.log(9 % 2);
console.log(15 % 4);
console.log(8 % 7);
console.log(2 % 15);
console.log(4 % 100);
```

<br />

**Пример 1.7.** Комбинирование операторов.
```js
console.log(4 % 5 * 2);
console.log(6 / (5 % 3));
console.log(2 + 15 % 13);
console.log(44 - 44 % 44);
```

<br />

**Пример 1.8.** Возведение в степень.
```js
console.log(2 ** 2);
console.log(2 ** 3);
console.log(3 ** 2);
console.log(3 ** 4);
```

<br />

**Пример 1.9.** Будет ли такое складываться?
```js
console.log(1_000_000 + 2_000_000);
```

<br />

**Пример 1.10.** Сложение чисел в экспоненциальной записи.
```js
console.log(1e3 + 2e3);
console.log(1.5e2 + 2.3e2);
```

<br />

**Пример 1.11.** Деление на ноль.
```js
console.log(25 / 0);
console.log(-40 / 0);
```

<br />

**Пример 1.12.** Бесконечность.
```js
console.log(3 + Infinity);
console.log(Infinity - 5);
console.log(Infinity * 2);
```

<br />

**Пример 1.13.** Бесконечность.
```js
console.log(3 + Infinity);
console.log(Infinity - 5);
console.log(Infinity * 2);
```

<br />

**Пример 1.14.** Запятые.
```js
console.log(10,20 - 30);
console.log(10,20 - 30,40);
```





<br />
<br />

<div align="center">

## Строка

</div>

**Пример 2.1.** Вывод строк в консоль.
```js
console.log('home');
console.log("kitchen");
console.log(`bedroom`);
```

<br />

**Пример 2.2.** Конкатенация строк.
```js
console.log('Welcome' + '!');
console.log('John' + 'Rose');
console.log("Together" + "We" + "Stand");
console.log(`html` + 'css' + "javascript" + `react`);
```

<br />

**Пример 2.3.** Конкатенация с пробелами между строк.
```js
console.log('Purchase: ' + 'bed');
console.log('Create' + ' a project');

console.log('Watch' + ' ' + 'TV');
console.log('a' + ' ' + 'b' + ' ' + 'c');
console.log('a' + ', ' + 'b' + ', ' + 'c');
console.log('One     ' + '     ' + '     two')
```

<br />

**Пример 2.4.** Длина строки.
```js
console.log('wall'.length);
console.log('cabinet'.length);
console.log(''.length);
```

<br />

**Пример 2.5.** Получение символа строки.
```js
console.log('cat'[0]);
console.log('cat'[1]);
console.log('cat'[2]);
console.log('cat'[3]);
console.log('cat'[1 + 1 + 0]);
```

<br />

**Пример 2.6.** Выражение в операторе доступа.
```js
console.log('desk'['desk'.length - 1]);
console.log('commode'['commode'.length - 1]);
console.log('commode'['commode'.length]);
console.log('dress'['dress'.length - 1]);
```





<br />
<br />

<div align="center">

## Логический тип

</div>

**Пример 3.1.** Значения логического типа.
```js
console.log(true);
console.log(false);
```

<br />

**Пример 3.2** Что-то пошло не так.
```js
console.log(TRUE);
console.log(False);
```

<br />

**Пример 3.3.** Оператор логического отрицания.
```js
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!!true);
console.log(!!!!!!true);
```

<br />

**Пример 3.4.** Оператор логического И.
```js
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
```

<br />

**Пример 3.5.** Оператор логического ИЛИ.
```js
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
```

<br />

**Пример 3.6.** Множество логических операторов.
```js
console.log(false || true || false);
console.log(false || false || false || false || true);
console.log(true && true && true);
console.log(true && true && true && false);
```

<br />

**Пример 3.7.** Комбинирование операторов.
```js
console.log(false || true && true);
console.log(false && true || true);
console.log(true && (false || true));
```

<br />

**Пример 3.8.** Еще несколько примеров.
```js
console.log(true && !false);
console.log(!true || !true);
console.log(false || false || !false);
```





<br />
<br />

<div align="center">

## `undefined`

</div>

**Пример 4.1.** Вывод в консоль `undefined`.
```js
console.log(undefined);
```

<br />

**Пример 4.2.** Попытка получить `undefined`.
```js
console.log('Крот'[0]);
console.log('Крот'[4]);
```





<br />
<br />

<div align="center">

## `null`

</div>

**Пример 5.1.** Вывод в консоль `null`.
```js
console.log(null);
```





<br />
<br />

<div align="center">

## Массив

</div>

**Пример 6.1.** Вывод в консоль массивов.
```js
console.log([]);
console.log([1, 2, 3, 4]);
console.log(['James', 'Mia']);
console.log([true, false]);
console.log(['Daniel', 100, true, -40.5, false]);
```

<br />

**Пример 6.2.** Вложенные массивы.
```js
console.log([[1, 2], [3, 4]]);
console.log([['one'], ['two'], ['three', 'four']]);
console.log([[[[[['too nested array']]]]]]);
```

<br />

**Пример 6.3.** Получение элементов массива.
```js
console.log(['Egypt', 'Turkey', 'China'][0]);
console.log(['Egypt', 'Turkey', 'China'][1]);
console.log(['Egypt', 'Turkey', 'China'][2]);
console.log(['Egypt', 'Turkey', 'China'][3]);
console.log(['Egypt', 'Turkey', 'China'][0 + 1 + 1]);
```

<br />

**Пример 6.4.** Длина массива.
```js
console.log([10, 20, 30].length);
console.log([10, 20].length);
console.log([].length);
```

<br />

**Пример 6.5.** Последний элемент массива.
```js
console.log(['chair', 'cup'][['chair', 'cup'].length - 1]);
console.log(['chair', 'cup'][['chair', 'cup'].length]);
console.log([5, 15, 20][[5, 15, 20].length - 1]);
console.log([5, 15, 20][[5, 15, 20].length]);
```





<br />
<br />

<div align="center">

## Объект

</div>

**Пример 7.1.** Вывод объектов в консоль.
```js
console.log({});

console.log({
  title: 'Life of Pi'
});

console.log({
  title: 'Ghostbusters',
  year: 1984
});

console.log({
  name: 'John',
  age: 32,
  married: true
});
```

<br />

**Пример 7.2.** Получение значений.
```js
console.log({
  title: 'Star Wars VII',
  year: 2015,
  starring: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']
}.title);

console.log({
  title: 'Star Wars VII',
  year: 2015,
  starring: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']
}.age);

console.log({
  title: 'Star Wars VII',
  year: 2015,
  starring: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']
}.starring);

console.log({
  title: 'Star Wars VII',
  year: 2015,
  starring: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher']
}.budget);
```

<br />

**Пример 7.3.** Получение значений через оператор доступа.
```js
console.log({
  title: 'Star Wars VII',
  year: 2015
}['title']);

console.log({
  title: 'Star Wars VII',
  year: 2015
}['age']);

console.log({
  'release date': '01.02.2003'
}['release date']);

console.log({
  'release date': '01.02.2003'
}['something']);
```

<br />

**Пример 7.4.** Получение значений по свойствам в виде числа.
```js
console.log({
  0: 'apple',
  1: 'orange',
  2: 'peach'
}[0]);

console.log({
  0: 'apple',
  1: 'orange',
  2: 'peach'
}[1]);

console.log({
  0: 'apple',
  1: 'orange',
  2: 'peach'
}[2]);

console.log({
  0: 'apple',
  1: 'orange',
  2: 'peach'
}[3]);
```





<br />
<br />

<div align="center">

### Функция

</div>

**Пример 8.1.** Вывод функции в консоль.
```js
console.log(function show() {})
```

**Пример 8.2.** Функция.
```js
function show() {
  console.log('Hello');
}
```

**Пример 8.3.** Запуск функции.
```js
function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
  console.log('Here we go!');
}

countdown();
```
