<div align="center">

# Приложение 2: Свойства и методы массивов

</div>

<br />

<div align="center">

## Свойства массивов

</div>

Массивам доступно только одно свойство — `length`.

<br />

<div align="center">

### `length`

</div>

Свойство `length` — возвращает количество элементов в массиве.

**Пример 1.1.** Работа свойства `length`.
```js
const arr1 = [10, 20, 30, 40];
const arr2 = ['Мандалорец', 'Грогу', 'Фетт'];

let result = arr1.length;
console.log(result);
// 4

result = arr2.length;
console.log(result);
// 3
```






<br />

<div align="center">

## Методы строк

</div>

- `Array.prototype.at()`
- `Array.prototype.concat()`
- `Array.prototype.copyWithin()`
- `Array.prototype.entries()`
- `Array.prototype.every()`
- `Array.prototype.fill()`
- `Array.prototype.filter()`
- `Array.prototype.find()`
- `Array.prototype.findIndex()`
- `Array.prototype.findLast()`
- `Array.prototype.findLastIndex()`
- `Array.prototype.flat()`
- `Array.prototype.flatMap()`
- `Array.prototype.forEach()`
- `Array.prototype.group()`
- `Array.prototype.groupToMap()`
- `Array.prototype.includes()`
- `Array.prototype.indexOf()`
- `Array.prototype.join()`
- `Array.prototype.keys()`
- `Array.prototype.lastIndexOf()`
- `Array.prototype.map()`
- `Array.prototype.pop()`
- `Array.prototype.push()`
- `Array.prototype.reduce()`
- `Array.prototype.reduceRight()`
- `Array.prototype.reverse()`
- `Array.prototype.shift()`
- `Array.prototype.some()`
- `Array.prototype.sort()`
- `Array.prototype.splice()`
- `Array.prototype.toLocaleString()`
- `Array.prototype.toString()`
- `Array.prototype.unshift()`
- `Array.prototype.values()`
- `Array.from()`
- `Array.isArray()`
- `Array.of()`





<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.at()`

</div>

Метод [`Array.prototype.at(index)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at) — возвращает элемент массива по указанному индексу.

**Принимает:**
1. `number`, index — целое положительное или отрицательное число. При отрицательном значении, отсчет происходит с конца массива.

**Возвращает:** Элемент массива.

<br />

**Пример.** Пример метода `at()`.
```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(arr.at(0));
// Москва

console.log(arr.at(1));
// Новосибирск

console.log(arr.at(-1));
// Владивосток

console.log(arr.at(99));
// undefined
```

<br />


<details><summary><b>Аналоги</b></summary>
<p>

В большинстве случаев, для получения элемента массива удобнее использовать оператор доступа `array[index]`.

Однако, через метод `at()` гораздо удобнее получать элементы с конца массива.

```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

// получение последнего элемента через оператор доступа
console.log(arr[arr.length - 1]);
// Владивосток

// получение последнего элемента через метод at()
console.log(arr.at(-1));
// Владивосток

// оператор доступа возвращает undefined приотрицательном индексе
console.log(arr[-1]);
// undefined
```

</p>
</details>





<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.concat()`

</div>

Метод [`Array.prototype.concat(...array)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) — возвращает новый массив, который объединяет текущий массив с указанными в аргументах массивами.

**Принимает:**
1. `...array`, ...array — один или несколько массивов, которые будут объединены с текущим.

**Возвращает:** `array`, новый массив.

<br />

**Пример.** Пример метода `concat()`.
```js
const cities = ['Москва', 'Новосибирск'];
const anotherCities = ['Якутск', 'Владивосток'];

console.log(cities.concat(anotherCities));
// ['Москва', 'Новосиирск', 'Якутск', 'Владивосток']

console.log(cities.concat(anotherCities, ['Хабаровск', 'Красноярск']));
// ['Москва', 'Новосиирск', 'Якутск', 'Владивосток', 'Хабаровск', 'Красноярск']
```

<br />


<details><summary><b>Аналоги</b></summary>
<p>

Данный метод делает то же самое, что и сокращенная запись вида `[...array, ...array]`;

```js
const cities = ['Москва', 'Новосибирск'];
const anotherCities = ['Якутск', 'Владивосток'];

console.log(cities.concat(anotherCities));
// ['Москва', 'Новосиирск', 'Якутск', 'Владивосток']

console.log([...cities, ...anotherCities]);
// ['Москва', 'Новосиирск', 'Якутск', 'Владивосток']
```

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.copyWithin()`

</div>

Метод [`Array.prototype.copyWithin(target, start, end)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) — копирует часть массива и вставляет в указанное место этого же массива (перезатирая элементы, которые уже есть в массиве). Данный метод не изменяет длину массива.

**Принимает:**
1. `number`, target — позиция, в которую будет вставлена копия массива.
2. `number`, start — с какого индекса начинать копирование.
3. `number`, end — до какого индекса копировать (не включительно). Если аргумент не указан, то элементы будут скопированы до конца массива.

**Возвращает:** Измененный массив.

<br />

**Пример.** Пример метода `copyWithin()`.
```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Хабаровск', 'Владивосток'];

console.log(arr.copyWithin(0, 3));
// ['Хабаровск', 'Владивосток', 'Якутск', 'Хабаровск', 'Владивосток']
// Метод скопировал элементы начиная с третьего и до конца массива.
// Далее эти элементы были вставлены в начало массива.

console.log(arr);
// ['Хабаровск', 'Владивосток', 'Якутск', 'Хабаровск', 'Владивосток']
// Исходный массив был изменен
```

<br />

```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Хабаровск', 'Владивосток'];

console.log(arr.copyWithin(2, 0));
// ['Москва', 'Новосибирск', 'Москва', 'Новосибирск', 'Якутск']
// Метод скопировал элементы начиная с нулевого и до конца массива.
// Далее эти элементы были вставлены в массив, начиная с индекса 2.
```

<br />

```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Хабаровск', 'Владивосток'];

console.log(arr.copyWithin(2, 0, 2));
// ['Москва', 'Новосибирск', 'Москва', 'Новосибирск', 'Владивосток']
// Метод скопировал элементы с нулевого по второй (не включительно).
// Далее эти элементы были вставлены в массив, начиная с индекса 2.
```

<br />


<details><summary><b>Применение</b></summary>
<p>

```js
const arr = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];
```

</p>
</details>








<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.every()`

</div>

Метод [`Array.prototype.every(callback, this)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every) — проверяет, удовлетворяют ли все элементы массива указанному условию.

**Принимает:**
1. `function`, `callback(currentValue, index, array)` — функция, которая проверяет каждый элемент массива на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае. При возвращении `false` — цикл моментально прерывается.
  - `currentValue` — текущий элемент массива;
  - `index` — индекс текущего элемента массива (опционально);
  - `array` — текущий массив (опционально).
2. `this` — передает в `callback` указанный объект `this` (опционально).


**Возвращает:** `boolean`.

<br />

**Пример.** Вывод в консоль значений параметров `callback`.
```js
const cities = ['Москва', 'Новосибирск', 'Новороссийск'];

cities.every((currentValue, index, array) => {
  console.log(currentValue, index, array);
  return true;
});
// 'Москва', 0, ['Москва', 'Новосибирск', 'Новороссийск']
// 'Новосибирск', 1, ['Москва', 'Новосибирск', 'Новороссийск']
// 'Новороссийск', 2, ['Москва', 'Новосибирск', 'Новороссийск']
```

<br />

**Пример.** Пример метода `every()`.
```js
const cities = ['Москва', 'Новосибирск', 'Новороссийск'];
const names = ['Игорь', 'Ян', 'Игнат'];

// Проверяем, что все строки в массиве имеют длину больше четырех
function checkLength(currentValue, index, array) {
  return currentValue.length > 4;
}

let result = cities.every(checkLength);
console.log(result);
// true
// То есть все города в массиве имеют длину больше четырех.

let result = names.every(checkLength);
console.log(result);
// false
// То есть не все имена имеют длину больше четырех
```

<br />


<details><summary><b>Применение</b></summary>
<p>

1. Проверка наличия свойств во всех объектах. Когда необходимо проверить, что каждый элемент массива имеет определенное свойство.

```js
const users = [
  { name: 'Иван', age: 21 },
  { name: 'Стас', age: 37 },
  { name: 'Андрей' }
];

const result = users.every((user) => {
  return user.hasOwnProperty('age')
});

console.log(result);
// false
// У последнего пользователя отсутствует свойство 'age'.
```

<br />

2. Проверка корректности заполнения формы. Когда необходимо проверить, что все поля формы заполнены.

```js
const formFields = [
  { name: 'username', value: 'admin' },
  { name: 'password', value: '12345' },
  { name: 'email', value: 'admin@mail.com' }
];

const result = formFields.every((field) => {
  return formFields.value !== '';
});

console.log(result);
// true
// У всех элементов массива заполнено свойство 'value'.
```

<br />

3. Проверка наличия элемента во всех подмассивах.

```js
const matrix = [
  [1, 2, 3],
  [4, 3, 6],
  [3, 8, 9]
];

const result = matrix.every((subArray) => {
  return subArray.includes(3);
});

console.log(result);
// true
// Во всех подмассивах есть элемент '3'.
```

<br />

И другие ситуации, когда необходимо проверить на соблюдение условию каждый элемент массива.


</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.fill()`

</div>

Метод [`Array.prototype.fill(value, start, end)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) — заполняет все элементы массива по указанным индексам одним и тем же значением.

**Принимает:**
1. `any`, value — значение, заполняющее массив.
2. `number`, start — начальный индекс (опционально).
3. `number`, end — конечный индекс, не включительно (опционально).

**Возвращает:** Измененный массив.

<br />

**Пример.** Пример метода `fill()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(cities.fill('Тикси'));
// ['Тикси', 'Тикси', 'Тикси', 'Тикси']
// Все элементы массива были изменены
```

<br />

**Пример.** Пример метода `fill()` с указанием индексов.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(cities.fill('Тикси', 1, 3));
// ['Москва', 'Тикси', 'Тикси', 'Владивосток']
// Элементы массива с 1 по 3 (не включительно) были изменены.
```

<br />


<details><summary><b>Применение</b></summary>
<p>

1. Инициализация массива с начальными значениями. В примере ниже создается новый массив из пяти элементов и заполняется нулями. Это может быть полезно, когда необходим массив заданной длины с заполненными начальными значениями.

```js
const arr = new Array(5).fill(0);

console.log(arr);
// [0, 0, 0, 0, 0]
```

<br />

2. Создание матрицы с начальными значениями.

```js
const matrix = new Array(3).fill(new Array(3).fill(0));

console.log(matrix);
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
```

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.filter()`

</div>

Метод [`Array.prototype.filter(callback, this)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) — создает новый массив, помещая в него все элементы прошедшие проверку.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая проверяет каждый элемент на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `filter()`.
2. `this` — задает функции `callback` указанный `this` (опционально).

**Возвращает:** `array`, новый массив.

<br />

**Пример.** Пример метода `filter()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Новороссийск'];

// Помещаем в новый массив только те города, в которых присутствует буква 'н'
const result = cities.filter((element) => {
  return element.toLowerCase().includes('н');
});

console.log(result);
// ['Новосибирск', 'Новороссийск']
```

<br />

<details><summary><b>Применение</b></summary>
<p>

1. Выбор пользователей по условию. Например, когда необходимо выбрать пользователей старше 18 лет.

```js
const users = [
  { name: 'Миша', age: 13 },
  { name: 'Саша', age: 19 },
  { name: 'Кирилл', age: 17 },
];

const result = users.filter((user) => {
  return user.age >= 18;
});

console.log(result);
// [
//   { name: 'Саша', age: 19 }
// ]
```

<br />

2. Фильтрация товаров по цене. Наприме, когда необходимо отсеять товары дороже 2000 руб.

```js
const products = [
  { title: 'Чайник', price: 990 },
  { title: 'Микроволновка', price: 1950 },
  { title: 'Холодильник', price: 8990 }
];

const result = products.filter((product) => {
  return product.price < 2000;
});

console.log(result);
// [
//   { title: 'Чайник', price: 990 },
//   { title: 'Микроволновка', price: 1950 }
// ]
```

<br />

И другие ситуации (фильтрация постов, песен, задач, городов), когда необходимо отфильтровать элементы в массиве, выбрав только необходимые.

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.find()`

</div>

Метод [`Array.prototype.find(callback, this)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find) — возвращает первый найденный элемент массива, который удовлетворяет условию.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая проверяет каждый элемент на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `find()`.
2. `this` — задает функции callback указанный this (опционально).

**Возвращает:** Элемент массива или `undefined`.

<br />

**Пример.** Пример метода `find()`.
```js
const cities = [
  { id: 1, city: 'Москва' },
  { id: 2, city: 'Новосибирск' },
  { id: 3, city: 'Москва' },
  { id: 4, city: 'Калуга' },
];

console.log(cities.find((element) => {
  return element.city === 'Москва';
}));
// { id: 1, city: 'Москва' }
```

<br />

<details><summary><b>Применение</b></summary>
<p>

1. Нахождение нужного пользователя. Например, когда требуется достать из массива первого пользователя, у которого хватает денег на покупку товара.

```js
const customers = [
  { name: 'Валентин', balance: 4000 },
  { name: 'Артем', balance: 10000 },
  { name: 'Константин', balance: 12000 },
];

const result = customers.find((user) => {
  return user.balance > 5000;
});

console.log(result);
// { name: 'Артем', balance: 10000 }
```

<br />

2. Поиск пользователя по id. Когда требуется достать определенного пользователя из массива.

```js
const users = [
  { id: 1, login: 'gendalf' },
  { id: 2, login: 'ralph' },
];

const result = users.find((user) => {
  return user.id === 2;
});

console.log(result);
// { id: 2, login: 'ralph' }
```

<br />

А так же:
- найти статью по дате;
- найти задачу по названию;
- и другие ситуации, когда необходимо достать определенный элемент из массива.

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.findIndex()`

</div>

Метод [`Array.prototype.findIndex()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) — возвращает первый найденный индекс элемента массива, который удовлетворяет условию.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая проверяет каждый элемент на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `findIndex()`.
2. `this` — задает функции callback указанный this (опционально).

**Возвращает:** `number`, индекс элемента массива или `-1` (если элемент не найден).

<br />

**Пример.** Пример метода `findIndex()`.
```js
const cities = [
  { id: 1, city: 'Москва' },
  { id: 2, city: 'Новосибирск' },
  { id: 3, city: 'Москва' },
  { id: 4, city: 'Калуга' },
];

console.log(cities.findIndex((element) => {
  return element.city === 'Москва';
}));
// 0
```

<br />


<details><summary><b>Применение</b></summary>
<p>

Применение точно такое же, как и описано в методе `Array.prototype.find()`.

Данный метод необходим в ситуациях, когда требуется получить индекс элемента, вместо значения элемента.

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.findLast()`

</div>

Метод [`Array.prototype.findLast()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) — возвращает последний найденный элемент массива, который удовлетворяет условию.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая проверяет каждый элемент на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `findLast()`.
2. `this` — задает функции callback указанный this (опционально).

**Возвращает:** Элемент массива или `undefined`.

<br />

**Пример.** Пример метода `findLast()`.
```js
const cities = [
  { id: 1, city: 'Москва' },
  { id: 2, city: 'Новосибирск' },
  { id: 3, city: 'Москва' },
  { id: 4, city: 'Калуга' },
];

console.log(cities.findLast((element) => {
  return element.city === 'Москва';
}));
// { id: 3, city: 'Москва' }
```

<br />


<details><summary><b>Применение</b></summary>
<p>

1. Получение последнего элемента. Например, когда в чате необходимо получить последнее отправленное сообщение определенного пользователя.

```js
const messages = [
  { login: 'admin', text: 'Привет!' },
  { login: 'user', text: 'Привет' },
  { login: 'user', text: 'Как дела?' },
  { login: 'admin', text: 'Отлично' },
  { login: 'user', text: 'У меня тоже все хорошо' }
];

const result = messages.findLast((message) => {
  return message.login === 'admin';
});

console.log(result);
// { login: 'admin', text: 'Отлично' }
```

<br />

2. Найти последний фильм определенного года.

```js
const movies = [
  { title: 'Звездные войны', year: 1978 },
  { title: 'Вспомнить всё', year: 1990 },
  { title: 'Супермен', year: 1978 },
  { title: 'Один дома', year: 1990 }
];

const result = movies.findLast((movie) => {
  return movie.year === 1978;
});

console.log(result);
// { title: 'Супермен', year: 1978 }
```

А также:
- найти последнюю статью по определенному тегу;
- найти последнюю фотографию определенного пользователя;
- и другие ситуации, когда необходимо найти последний элемент по определенному условию.

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.findLastIndex()`

</div>

Метод [`Array.prototype.findLastIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) — возвращает последний найденный индекс элемента массива, который удовлетворяет условию.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая проверяет каждый элемент на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `findLastIndex()`.
2. `this` — задает функции callback указанный this (опционально).

**Возвращает:** `number`, индекс элемента массива или `-1` (если элемент не найден).

<br />

**Пример.** Пример метода `findLastIndex()`.
```js
const cities = [
  { id: 1, city: 'Москва' },
  { id: 2, city: 'Новосибирск' },
  { id: 3, city: 'Москва' },
  { id: 4, city: 'Калуга' },
];

console.log(cities.findLastIndex((element) => {
  return element.city === 'Москва';
}));
// 2
```

<br />

<details><summary><b>Применение</b></summary>
<p>

Применение точно такое же, как и описано в методе `Array.prototype.findLast()`.

Данный метод необходим в ситуациях, когда требуется получить индекс элемента, вместо значения элемента.

</p>
</details>









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.flat()`

</div>

Метод [`Array.prototype.flat(depth)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — возвращает новый массив, в который помещаются элементы вложенных подмассивов.

**Принимает:**
1. `number`, depth — на сколько уровней вложенности действует работа метода (по-умолчанию `1`).

**Возвращает:** `array`, новый массив.

<br />

**Пример.** Пример метода `flat()`.
```js
const cities = [
  'Москва',
  ['Новосибирск', 'Якутск'],
  [['Владивосток', 'Хабаровск']]
];

console.log(cities.flat());
// [
//   'Москва', 'Новосибирск', 'Якутск',
//   ['Владивосток', 'Хабаровск']
// ]
// Каждый из внутренних массивов на первом уровне вложенности был раскрыт
```

<br />

**Пример.** Пример метода `flat()` с передачей аргумента `depth`.
```js
const cities = [
  'Москва',
  ['Новосибирск', 'Якутск'],
  [['Владивосток', 'Хабаровск']]
];

console.log(cities.flat(2));
// [ 'Москва', 'Новосибирск', 'Якутск', 'Владивосток', 'Хабаровск' ]
// Массивы на первом и втором уровне вложенности были раскрыты
```

<br />


<details><summary><b>Фишки</b></summary>
<p>

Если уровень вложенности массивов заранее неизвестен, можно в качестве аргумента `depth` передать значение `Infinity`. Тогда Javascript будет раскрывать все встреченные вложенные массивы.

```js
const products = [
  ['Чайник', 'Микроволновка'],
  ['Компьютер', 'Монитор'],
  [[[['Хлеб']]]]
];

const result = products.flat(Infinity);
console.log(result);
// ['Чайник', 'Микроволновка', 'Компьютер', 'Монитор', 'Хлеб']
```

</p>
</details>

<details><summary><b>Применение</b></summary>
<p>

1. Раскрытие сгруппированных массивов. Например, когда требуется раскрыть товары в каталоге, которые были разбиты на категории.

```js
const products = [
  ['Чайник', 'Микроволновка'],
  ['Компьютер', 'Монитор'],
  ['Хлеб']
];

const result = products.flat();
console.log(result);
// ['Чайник', 'Микроволновка', 'Компьютер', 'Монитор', 'Хлеб']
```

<br />

2. Раскрытие вложенных массивов статей, сгруппированных по разным категориям.

```js
const articles = [
  ['Как выучить JS', 'Как работает метод flat'],
  ['Что такое CSS']
];

const result = articles.flat();
console.log(result);
// ['Как выучить JS', 'Как работает метод flat', 'Что такое CSS']
```

<br />

И другие ситуации, когда требуется вытащить элементы вложенных подмассивов в отдельный массив.

</p>
</details>











<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.forEach()`

</div>

Метод [`Array.prototype.forEach(callback, this)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) — применяет функцию `callback` к каждому элементу массива.

**Принимает:**
1. `function`, `callback(element, index, array)` — функция, которая будет вызвана для каждого элемента массива.
  - `element` — текущий итерируемый элемент;
  - `index` — индекс итерируемого элемента;
  - `array` — ссылка на массив, на котором был вызван метод `forEach()`.
2. `this` — задает функции callback указанный this (опционально).

**Возвращает:** `undefined`.

<br />

**Пример.** Пример метода `forEach()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

cities.forEach((city, index) => {
  console.log(city, index);
});
// Москва, 0
// Новосибирск, 1
// Якутск, 2
// Владивосток, 3
```

<br />


<details><summary><b>Применение</b></summary>
<p>

Данный метод может быть использован, как более лаконичная форма записи циклов `for`, `while` или `do ... while`.

</p>
</details>










<br />
<hr />
<br />

<div align="center">

#### `Array.isArray()`

</div>

Метод [`Array.isArray(element)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) — возвращает `true`, если переданный аргумент это массив, и `false` в ином случае.

**Принимает:**
1. `any`, element — любой элемент.

**Возвращает:** `boolean`.

<br />

**Пример.** Пример метода `isArray()`.
```js
const number = 100;
const string = 'Строка';
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];
const object = { name: 'Игорь' };

console.log(Array.isArray(number));  // false
console.log(Array.isArray(string));  // false
console.log(Array.isArray(cities));  // true
console.log(Array.isArray(object));  // false
```








<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.join()`

</div>

Метод [`Array.prototype.join(separator)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) — объединяет все элементы массива в строку.

**Принимает:**
1. `string`, separator — строка, которая будет вставлена между каждым элементом массива (опционально, по-умолчанию вставляется символ `,`).

**Возвращает:** `string`.

<br />

**Пример.** Пример метода `join()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск'];

console.log(cities.join());
// Москва,Новосибирск,Якутск
// Массив был преобразован в строку, а между элементами вставлена запятая (так как запятая — это separator по-умолчанию).

console.log(cities.join(' '));
// Москва Новосибирск Якутск

console.log(cities.join('123'));
// Москва123Новосибирск123Якутск
```











<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.pop()`

</div>

Метод [`Array.prototype.pop()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) — убирает последний элемент из массива и возвращает его значение.

**Принимает:** ничего.

**Возвращает:** последний элемент массива.

<br />

**Пример.** Пример метода `pop()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(cities.pop());
// Владивосток

console.log(cities.pop());
// Якутск

console.log(cities);
// ['Москва', 'Новосибирск']
// Исходный массив был изменен
```









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.push()`

</div>

Метод [`Array.prototype.push(...elements)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) — добавляет один или несколько элементов в конец массива.

**Принимает:**
1. `...any`, `...elements` — любые элементы, которые будут вставлены в конец массива.

**Возвращает:** `number`, длина массива после изменений.

<br />

**Пример.** Пример метода `push()`.
```js
const cities = ['Москва', 'Новосибирск'];

console.log(cities.push('Якутск', 'Владивосток'));
// 4
// Так как теперь в массиве четыре элемента

console.log(cities);
// ['Москва', 'Новосибирск', 'Якутск', 'Владивосток']
```











<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.reverse()`

</div>

Метод [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) — меняет порядок элементов массива на обратный.

**Принимает:** ничего.

**Возвращает:** `array`, измененный массив.

<br />

**Пример.** Пример метода `reverse()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(cities.reverse());
// ['Владивосток', 'Якутск', 'Новосибирск', 'Москва']

console.log(cities)
// ['Владивосток', 'Якутск', 'Новосибирск', 'Москва']
// Исходный массив изменен
```









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.shift()`

</div>

Метод [`Array.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) — убирает первый элемент массива и возвращает его значение.

**Принимает:** ничего.

**Возвращает:** первый элемент массива.

<br />

**Пример.** Пример метода `shift()`.
```js
const cities = ['Москва', 'Новосибирск', 'Якутск', 'Владивосток'];

console.log(cities.shift());
// Москва

console.log(cities.shift());
// Новосибирск

console.log(cities);
// ['Якутск', 'Владивосток']
```









<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.some()`

</div>

Метод [`Array.prototype.some(callback, this)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) — проверяет, удовлетворяет ли хотя бы один элемент массива указанному условию.

**Принимает:**
1. `function`, `callback(currentValue, index, array)` — функция, которая проверяет каждый элемент массива на удовлетворение условию. Функция должна вернуть `true` — если элемент удовлетворяет условию, и `false` — в ином случае.
  - `currentValue` — текущий элемент массива;
  - `index` — индекс текущего элемента массива (опционально);
  - `array` — текущий массив (опционально).
2. `this` — передает в `callback` указанный объект `this` (опционально).

**Возвращает:** `boolean`.

<br />

**Пример.** Пример метода `some()`.
```js
const cities = ['Москва', 'Новосибирск', 'Тверь'];
const names = ['Игорь', 'Ян', 'Игнат'];

// Проверяем, что все строки в массиве имеют длину больше четырех
function checkLength(currentValue, index, array) {
  return currentValue.length > 7;
}

let result = cities.some(checkLength);
console.log(result);
// true
// То есть хотя бы один город в массиве имеет длину больше семи.

let result = names.some(checkLength);
console.log(result);
// false
// То есть ни одно из имен не имеет длину больше семи
```














<br />
<hr />
<br />

<div align="center">

#### `Array.prototype.unshift()`

</div>

Метод [`Array.prototype.unshift(...elements)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) — добавляет один или несколько элементов в начало массива.

**Принимает:**
1. `...any`, `...elements` — любые элементы, которые будут вставлены в начало массива.

**Возвращает:** `number`, длина массива после изменений.

<br />

**Пример.** Пример метода `unshift()`.
```js
const cities = ['Москва', 'Новосибирск'];

console.log(cities.unshift('Якутск', 'Владивосток'));
// 4
// Так как теперь в массиве четыре элемента

console.log(cities);
// ['Якутск', 'Владивосток', 'Москва', 'Новосибирск']
```






















