<div align="center">

# Тесты для главы 3

</div>

Предположите результат, который будет выведен в консоль в каждом из примеров.

Проверьте себя, запустив эти примеры в браузере.





<br />
<br />

<div align="center">

## Объявление и вызов функции

</div>

**Пример 1.1.** Вывод функции в консоль.
```js
const login = function() {
  console.log('login function');
};

console.log(login);
```

<br />

**Пример 1.2.** Вызов Function Definition после объявления.
```js
const login = function() {
  console.log('login function');
};

login();
```

<br />

**Пример 1.3.** Вызов Function Definition до объявления.
```js
login();

const login = function() {
  console.log('login function');
};
```

<br />

**Пример 1.4.** Вызов Function Declaration после объявления.
```js
function getPrice() {
  console.log('cost is 1700');
}

getPrice();
```

**Пример 1.5.** Вызов Function Declaration до объявления.
```js
getPrice();

function getPrice() {
  console.log('cost is 1700');
}
```

<br />

**Пример 1.6.** Вызов стрелочной функции.
```js
const checkValidation = () => {
  console.log('data is valid');
};

checkValidation();
```

<br />

**Пример 1.7.** Какая будет очередь вывода текста в консоль?
```js
console.log('one');

function log() {
  console.log('two');
  console.log('three');
}

console.log('four');
log();
console.log('five');
```

<br />

**Пример 1.8.** Ещё один пример на очередь выполнения.
```js
console.log('one');
log();
console.log('two');

function log() {
  console.log('three');
  console.log('four');
}

console.log('five');
```

<br />

**Пример 1.9.** Последний пример на очередь выполнения.
```js
console.log('one');

function log() {
  console.log('two');
  console.log('three');
}

log;
console.log('four');
```

<br />

**Пример 1.10** Какие из функций являются анонимными?
```js
function first() {}

const second = function () {};

const third = () => {};

let four = function fn() {};
```

<br />

**Пример 1.11.** Сколько раз в консоль выведется надпись "one more"?
```js
function showOneMore() {
  console.log('one more');
}

showOneMore();
showOneMore();
showOneMore();
showOneMore();
```

<br />

**Пример 1.12.** Вызов функции из переменной.
```js
function originalFn() {
  console.log('printed');
}

const copyFn = originalFn;

originalFn();
copyFn();
```

**Пример 1.13.** По какому имени доступен вызов функции?
```js
const outerName = function innerName() {
  console.log(outerName);
  console.log(innerName);
}

outerName();
innerName();
```





<br />
<br />

<div align="center">

## Внешние и локальные переменные

</div>

**Пример 2.1.** Использование внешней переменной.
```js
const name = 'Jessica';

function greeting() {
  console.log('Hello, ' + name);
}

greeting();
```

<br />

**Пример 2.2.** Использование внешней переменной, объявленной до вызова функции.
```js
function greeting() {
  console.log('Hello, ' + name);
}

const name = 'Robert';

greeting();
```

<br />

**Пример 2.3.** Использование внешней переменной, объявленной после вызова функции.
```js
function greeting() {
  console.log('Hello, ' + name);
}

greeting();

const name = 'Mike';
```

<br />

**Пример 2.4.** Внешняя переменная против локальной переменной.
```js
const image = 'toad';

function showImage() {
  const image = 'lizard';
  console.log(image);
}

showImage();
```

<br />

**Пример 2.5.** Внешняя переменная против локальной переменной. Часть 2.
```js
const image = 'toad';

function showImage() {
  console.log(image);
  const image = 'lizard';
}

showImage();
```

<br />

**Пример 2.6.** Доступ к локальной переменной другой функции.
```js
function getUser() {
  const user = 'editor';
}

function getPass() {
  const pass = 'qwerty';
  console.log(pass);
  console.log(user);
}

getUser();
getPass();
```

<br />

**Пример 2.7.** Изменение внешней переменной.
```js
let url = 'google.com';

function changeUrl() {
  url = 'yandex.ru';
}

console.log(url);
changeUrl();
console.log(url);
```

<br />

**Пример 2.8.** До и после изменения внешней переменной.
```js
let price = 1000;

function changePrice() {
  price = 2000;
}

function showPrice() {
  console.log(price);
}

showPrice();
changePrice();
showPrice();
```

<br />

**Пример 2.9.** Выбор из внешней и локальной переменной.
```js
const name = 'Zeus';

function initialName() {
  const name = 'Poseidon';
}

initialName();
console.log(name);
```

<br />

**Пример 2.10.** Получение локальной переменной.
```js
function setColor() {
  const color = 'orange';
}

setColor();
console.log(color);
```

<br />

**Пример 2.11.** Изменение массива внутри функции.
```js
const colors = ['red', 'green', 'blue'];

function changeColors() {
  colors[0] = 'white';
}

changeColors();
console.log(colors);
```

<br />

**Пример 2.12.** Изменение объекта внутри функции.
```js
const bear = { kingdom: 'animalia', class: 'mammalia' };

function updateInfoABoutBears() {
  bear.class = 'chondrichthyes';
}

updateInfoABoutBears();
console.log(bear);
```

<br />






<br />
<br />

<div align="center">

## Функции внутри функции

</div>

**Пример 3.1.** Функция в функции.
```js
function outer() {
  console.log('outer function');

  function inner() {
    console.log('inner function');
  }
}

outer();
```

<br />

**Пример 3.2.** Вызов внутренней функции.
```js
function pickPizza() {
  console.log('You picked a pizza!');
  
  function getCost() {
    console.log('Pizza cost 10$');
  }
  
  getCost();
}

pickPizza();
```

<br />

**Пример 3.3.** Вызов внешней функции.
```js
function getCost() {
  console.log('Pizza cost 10$');
}

function pickPizza() {
  console.log('You picked a pizza!');
  getCost();
}

pickPizza();
```

<br />

**Пример 3.4.** Какие константы будут видны во внутренней функции?
```js
const inputText = 'enter text';

function pressButton() {
  const buttonText = 'click me';

  function showText() {
    console.log(inputText);
    console.log(buttonText);
  }
  
  showText();
}

pressButton();
```

<br />

**Пример 3.5.** Какие константы будут видны у функции, вызванной внутри другой функции?
```js
const inputText = 'enter text';

function showText() {
  console.log(inputText);
  console.log(buttonText);
}

function pressButton() {
  const buttonText = 'click me';
  showText();
}

pressButton(); 
```

<br />

**Пример 3.6.** Удали это!
```js
function removeTitle() {
  console.log('title removed');
}

const removeAuthor = function() {
  console.log('author removed');
}

const removeDate = () => {
  console.log('date removed');
}

function remove() {
  removeDate();
  removeTitle();
  removeAuthor();
}

remove();
```

<br />

**Пример 3.7.** Какой будет порядок вывода в консоль?
```js
function setAuthor() {
  console.log('author setted');
}

function setTitle() {
  setRating();
  console.log('title setted');
}

function set() {
  console.log('start set');
  setDate();
}

function setDate() {
  setAuthor();
  console.log('date setted');
  setYear();

  function setMonth() {
    console.log('month setted');
    setTitle();
  }
  function setYear() {
    setMonth();
    console.log('year setted');
  }
}

function setRating() {
  console.log('rating setted');
}

set();
```




<br />
<br />

<div align="center">

## Параметры функции

</div>

**Пример 4.1.** Передача параметра в функцию.
```js
function printMessage(message) {
  console.log(message);
}

printMessage('You can do it!');
```

<br />

**Пример 4.2.** Передача нескольких параметров.
```js
function showBasket(item1, item2, item3) {
  console.log(item1);
  console.log(item2);
  console.log(item3);
}

showBasket('water', 'snack', 'bubble gum')
```

<br />

**Пример 4.3.** Лишние параметры.
```js
function postRequest(url, port, message, options) {
  console.log(url);
  console.log(port);
  console.log(message);
  console.log(options);
}

postRequest('google.com', 3000)
```

<br />

**Пример 4.4.** Какой `isValid` будет выведен в консоль?
```js
const isValid = false;

function checkValidation(isValid) {
  console.log(isValid);
}

checkValidation(true)
```

<br />

**Пример 4.5.** Что будет если параметр не передан, но есть такая переменная снаружи?
```js
const price = 500;
const discount = 15;

function calcDiscount(price, discount) {
  console.log(price);
  console.log(discount);
}

calcDiscount(800);
```

<br />

**Пример 4.6.** Передача переменных в качестве параметров.
```js
const bird = ['hawk', 'parrot', 'thrush'];
const fish = ['carp', 'shark'];

function updateDatabase(item1, item2) {
  console.log(item1);
  console.log(item2);
}

updateDatabase(bird, fish);
```

<br />

**Пример 4.7.** Отсутствие параметров.
```js
function print() {
  console.log('printed');
}

print('message', null, { isHidden: false });
```

<br />

**Пример 4.8.** Сложение.
```js
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(5, 10);
sum(7, 23);
sum(-20, -3);
```

<br />

**Пример 4.9.** Усложняем сложение.
```js
function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}

sum(1, 2, 3, 4, 5);
sum(-3, -2, 0, 2, 3);
```

<br />

**Пример 4.10.** Выводим адрес пользователя.
```js
function showAddress(city, street, house) {
  console.log(city + street + house);
}

showAddress('Moscow', 'Lenina st.', 20);
```

<br />

**Пример 4.11.** Пропуск некоторых параметров.
```js
function buildHouse(woods, instruments, workers) {
  console.log(woods);
  console.log(instruments);
  console.log(workers);
}

buildHouse( , , 3);
```

<br />

**Пример 4.12.** Ссылочный тип данных, переданный как параметр.
```js
const numbers = [10, 20, 30];

function changeFirstElement(arr) {
  arr[0] = 50;
  console.log(arr);
}

changeFirstElement(numbers);
console.log(numbers);
```

<br />

**Пример 4.13.** Объект, переданный как параметр.
```js
const person = { name: 'Leonard', year: 1850 };

function updateObject(obj) {
  obj.year = 2022;
  console.log(obj);
}

updateObject(person);
console.log(person);
```





<br />
<br />

<div align="center">

## Параметры по-умолчанию

</div>

**Пример 5.1.** Отсутствие входных данных.
```js
function showArguments(arg1, arg2, arg3) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}

showArguments();
```

<br />

**Пример 5.2.** Использование параметров по-умолчанию.
```js
function showArguments(arg1 = 'something', arg2, arg3 = [1, 2, 3]) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}

showArguments();
```

<br />

**Пример 5.3.** Какое из значений будет выведено в консоль?
```js
function greeting(name = 'user') {
  console.log('Welcome, ' + name)
}

greeting('admin')
```

<br />

**Пример 5.4.** Отсутствие параметров по-умолчанию.
```js
function multiply(a, b) {
  console.log(a * b);
}

multiply(4);
```

<br />

**Пример 5.5.** Присутствие параметров по-умолчанию.
```js
function multiply(a = 1, b = 1) {
  console.log(a * b);
}

multiply(4);
```





<br />
<br />

<div align="center">

## Остаточные параметры

</div>

**Пример 6.1.** Остаточные параметры без передачи аргументов.
```js
function hold(...rest) {
  console.log(rest);
}

hold();
```

<br />

**Пример 6.2.** Использование остаточных параметров.
```js
function holdNumbers(...rest) {
  console.log(rest);
}

holdNumbers(1, 3, 5, 7);
```

<br />

**Пример 6.3.** Что будет в `a`, что будет в `rest`?
```js
function holdNumbers(a, ...rest) {
  console.log(a);
  console.log(rest);
}

holdNumbers(1, 3, 5, 7);
```

<br />

**Пример 6.4.** Ещё больше параметров.
```js
function holdNumbers(a, b, c, ...rest) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}

holdNumbers(1, 3, 5, 7);
```

<br />

**Пример 6.5.** Когда не осталось аргументов для остаточных параметров.
```js
function holdNumbers(a, b, c, d, ...rest) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(rest);
}

holdNumbers(1, 3, 5, 7);
```

<br />

**Пример 6.6.** Складываем всё ненужное в остаточные параметры.
```js
function createUser(name, age, ...rest) {
  console.log(name);
  console.log(age);
  console.log(rest);
}

createUser('John', 30, 'password', 'Tokyo')
```

<br />

**Пример 6.7.** Остаточные параметры — это массив.
```js
function putItems(...rest) {
  console.log(rest[0]);
  console.log(rest[1]);
  console.log(rest[2]);
  console.log(rest[3]);
}

putItems('good', 50, [1, 2, 3]);
```






<br />
<br />

<div align="center">

## Возврат значения

</div>

**Пример 7.1.** Остановка выполнения.
```js
console.log('first line');

return;

console.log('second line');
```

<br />

**Пример 7.2.** Без оператора `return`.
```js
function getFive() {
  5;
}

console.log(getFive());
```

<br />

**Пример 7.3.** С оператором `return`, но без выражения после него.
```js
function getFive() {
  5;
  return;
}

console.log(getFive());
```

<br />

**Пример 7.4.** С оператором `return` и выражением.
```js
function getFive() {
  return 5;
}

console.log(getFive());
```

<br />

**Пример 7.5.** Суммирование без оператора `return`.
```js
function sum(a, b) {
  a + b;
}

const result = sum(5, 3);
console.log(result);
```

<br />

**Пример 7.6.** Суммирование с оператором `return`.
```js
function sum(a, b) {
  return a + b;
}

const result = sum(5, 3);
console.log(result);
```

<br />

**Пример 7.7.** Вычисление некой формулы.
```js
function calculate(a, b, c) {
  const result = a + b - c;
  return result;
}

console.log(calculate(1, 2, 3));
console.log(calculate(7, -4, 1));
console.log(calculate(50, 20, 10));
```

<br />

**Пример 7.8.** Составление приветствия.
```js
function welcome(user) {
  return 'Welcome, ' + user;
}

function getAge(age) {
  return 'Your age is ' + age;
}

const result1 = welcome('John');
const result2 = getAge(28);

console.log(result1 + '. ' + result2);
console.log(welcome('Steve') + '. ' + getAge(19));
```

<br />

**Пример 7.9.** Внезапный `return`.
```js
function printLines() {
  console.log('first line');
  return;
  console.log('second line');
}

printLines();
```

<br />

**Пример 7.10.** Несколько операторов `return`.
```js
function returnNumbers() {
  return 1;
  return 2;
  return 3;
}

console.log(returnNumbers());
```

<br />

**Пример 7.11.** Возвращение значения из внутренней функции.
```js
function outer(a, b) {
  function inner() {
    a + b;
  }
  
  return inner();
}

const result = outer(2, 4);
console.log(result);
```

<br />

**Пример 7.12.** Ещё одна попытка вернуть значение из внутренней функции.
```js
function outer(a, b) {
  function inner() {
    return a + b;
  }
  
  return inner();
}

const result = outer(2, 4);
console.log(result);
```

<br />

**Пример 7.13.** Возвращаем число из функции.
```js
function getTen() {
  return 10;
}

console.log(getTen() + 5);
console.log(getTen() - 2);
console.log(getTen() % 3);
```

<br />

**Пример 7.14.** Возвращаем строку из функции.
```js
function getHello() {
  return 'hello';
}

console.log(getHello()[0]);
console.log(getHello()[2]);
console.log(getHello()[getHello().length - 1]);
```

<br />

**Пример 7.15.** Возвращаем логический тип из функций.
```js
function checkLogin() {
  return true;
}

function checkPass() {
  return true;
}

function checkConnection() {
  return false;
}

console.log(checkLogin() && checkPass());
console.log(checkLogin() && checkConnection());
console.log(checkPass() || checkConnection());
console.log(checkConnection() || checkLogin());
```





<br />
<br />

<div align="center">

### Самовызывающиеся и чистые функции

</div>

**Пример 8.1.** Самовызывающаяся функция.
```js
(function () {
  console.log('is it works?');
})();
```

<br />

**Пример 8.2.** Несколько самовызывающихся функций.
```js
(() => {
  const role = 'player';
  console.log(role);
})();

(function () {
  const role = 'captain';
  console.log(role);
})();
```

<br />

**Пример 8.3.** Область видимости самовызывающихся функций.
```js
(() => {
  const rating = '5 stars';
  console.log(rating);
})();

(function () {
  console.log(rating);
})();
```

<br />

**Пример 8.4.** Является ли функция `update` чистой?
```js
let index = 0;

function update() {
  index = 1;
  return index;
}

update();
```

<br />

**Пример 8.5.** Является ли функция `sum` чистой?
```js
let num1 = 4;
let num2 = 5;

function sum(a, b) {
  return a + b;
}

sum(num1, num2);
```

<br />

**Пример 8.6.** Является ли функция `changeFirstElement` чистой?
```js
const goods = ['chair', 'table'];

function changeFirstElement(items) {
  items[0] = 'monitor';
}

changeFirstElement(goods)
```
