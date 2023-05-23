<div align="center">

# Приложение 1: Свойства и методы строк

</div>

<br />

<div align="center">

## Свойства строк

</div>

Строкам доступно только одно свойство — `length`.

<br />

<div align="center">

### `length`

</div>

Свойство `length` — возвращает количество символов в строке.

**Пример 1.1.** Работа свойства `length`.
```js
const str1 = 'Awesome';
const str2 = 'The Dark Knigth';

let result = str1.length;
console.log(result);
// 7

result = str2.length;
console.log(result);
// 15
```






<br />

<div align="center">

## Методы строк

</div>

Строки имеют множество методов, вот некоторые из них:
- `String.prototype.at()`
- `String.prototype.concat()`
- `String.prototype.endsWith()`
- `String.prototype.includes()`
- `String.prototype.indexOf()`
- `String.prototype.repeat()`
- `String.prototype.replace()`
- `String.prototype.slice()`
- `String.prototype.split()`
- `String.prototype.startsWith()`
- `String.prototype.substrings()`
- `String.prototype.toLowerCase()`
- `String.prototype.toUpperCase()`
- `String.prototype.trim()`





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.at()`

</div>

Метод `String.prototype.at()` — возвращает один символ строки, который находится по указанному индексу.

**Принимает:** `number` — индекс строки, чей символ нужно вернуть.

**Возвращает:** `string` или `undefined`.

<br />

**Пример.** Работа метода `at()`.
```js
const str = 'The Dark Knight';

console.log(str.at(0));
// T

console.log(str.at(4));
// D

console.log(str.at(99));
// undefined
```

<br />

Если указать отрицательный индекс, то поиск начнется с конца строки.

**Пример.** Работа метода `at()` при отрицательном индексе.
```js
const str = 'The Dark Knight';

let result = str.at(-1);
console.log(result);
// t

result = str.at(-6);
console.log(result);
// K
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.concat()`

</div>

Метод `String.prototype.concat()` — объединяет несколько строк в одну.

**Принимает:** неограниченное количество строк.

**Возвращает:** `string`.

<br />

**Пример.** Применение метода `concat()`.
```js
const str = 'The';

let result = str.concat('Dark');
console.log(result);
// TheDark

result = str.concat(' ', 'Dark');
console.log(result);
// The Dark

result = str.concat(' ', 'Dark', ' ', 'Knight');
console.log(result);
// The Dark Knigt
```

<br />

> Данный метод делает то же самое, что и конкатенация строк через оператор `+`.





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.endsWith()`

</div>

Метод `String.prototype.endsWith()` — проверяет, заканчивается ли строка указанными символами.

**Принимает:**
1. `string` — символы, которые нужно искать в конце строки.
2. `number` — конечная позиция, в которой символы должны быть найдены (опционально).

**Возвращает:** `boolean`.

<br />

**Пример.** Применение метода `endsWith()`.
```js
const str = 'The Dark Knigth';

let result = str.endsWith('gth');
console.log(result);
// true, так как строка заканчивается символами 'gth'

result = str.endsWith('The');
console.log(result);
// false, так как строка не заканчивается символами 'The'
```

<br />

**Пример.** Применение метода `endsWith()` с измененной позицией конца поиска.
```js
const str = 'The Dark Knigth';

let result = str.endsWith('Dark', 8);
console.log(result);
// true
// используя второй аргумент строка для поиска становится: 'The Dark' (8 символов)
// и эта строка заканчивается символами 'Dark'

result = str.endsWith('he', 3);
console.log(result);
// true
// так как строка из трех символов 'The' заканчивается на 'he'

result = str.endsWith('Knight', 6);
console.log(result);
// false
// так как строка из первых шести символов 'The Da' не заканчивается на 'Knight'
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.includes()`

</div>

Метод [`String.prototype.includes(searchString, position)`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes) — проверяет, есть ли переданная подстрока в текущей строке.

**Принимает:**
1. `string`, searchString — подстрока, которую нужно найти.
2. `number`, position — позиция, с которой нужно начинать поиск (опционально).

**Возвращает:** `boolean`.

<br />

**Пример.** Работа метода `includes()`.
```js
const str = `The Dark Knigth`;

console.log(str.includes('Dark'));
// true
// В строке 'The Dark Knight' есть подстрока 'Dark'.

console.log(str.includes('rk Kn'));
// true

console.log(str.includes('the'));
// false
// Регистр символов имеет значение!
// В str есть подстрока 'The', но нет подстроки 'the'
```

<br />

**Пример.** Работа метода `includes()` с измененной позицией начала поиска.
```js
const str = `The Dark Knigth`;

console.log(str.includes('Dark', 4));
// true
// Со смещением 4 строка str становится 'Dark Knight',
// в которой содержится подстрока 'Dark'

console.log(str.includes('Dark', 9));
// false
// Со смещением 9 строка str становится 'Knight',
// в которой нет подстроки 'Dark'
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.indexOf()`

</div>

Метод `String.prototype.indexOf()` — возвращает индекс, по которому встречается первое вхождение переданной подстроки.

**Принимает:**
1. `string` — искомая подстрока.
2. `number` — позиция, с которой нужно начинать поиск (опционально).

**Возвращает:**
- `number` — индекс первого вхождения, если подстрока найдена.
- `-1` — если подстрока не найдена.

<br />

**Пример.** Работа метода `indexOf()`.
```js
const str = 'The Dark Knight';

console.log(str.indexOf('h'));
// 1
// Первая подстрока 'h' находится по индексу 1

console.log(str.indexOf('Dark'));
// 4
// Первая одстрока 'Dark' начинается с индекса 4

console.log(str.indexOf('wrong'));
// -1
// Так как подстрока 'wrong' не найдена в str
```

<br />

**Пример.** Работа метода `indexOf()` с измененной начальной позицией поиска.
```js
const str = 'Abracadabra';

console.log(str.indexOf('a', 0));
// 3
// Начиная с индекса 0, первая подстрока 'a' встречается по индексу 3.
// Регистр имеет значение! Подстрока 'A' и подстрока 'a' — это разные подстроки.

console.log(str.indexOf('a', 4));
// 5
// Начиная с индекса 4, первая подстрока 'a' встречается по индексу 5

console.log(str.indexOf('a', -2));
// 3
// Отрицательная позиция не допускается.
// Вместо -2, позиция автоматически устанавливается на 0.
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.repeat()`

</div>

Метод `String.prototype.repeat()` — возвращает строку, повторенную указанное количество раз.

**Принимает:** `number` — количество повторений.

**Возвращает:** `string`.

<br />

**Пример.**
```js
const str = 'Dark';

console.log(str.repeat(4));
// 'DarkDarkDarkDark'
// Строка 'Dark' повторена четыре раза

console.log(str.repeat(2));
// 'DarkDark'

console.log(str.repeat(0));
// ''
// Аргумент 0 возвращает пустую строку

console.log(str.repeat(-1));
// RangeError
// Отрицательный аргумент не поддерживается.
```






<br />
<hr />
<br />

<div align="center">

#### `String.prototype.replace()`

</div>

Метод `String.prototype.replace()` — возвращает строку, в которой указанная подстрока заменена на другую подстроку.

**Принимает:**
1. pattern `string || regexp` — шаблон, по которому будут искаться подстроки для замены.
2. replacement `string || function` — подстрока, на которую будет заменен шаблон.

**Возвращает:** `string`

**TODO:**
1. Доописать
2. Добавить примеры и описание функции как второго аргумента
3. Добавить примеры распространенных регулярок

<br />

**Пример.** Применение метода `replace()`, когда оба аргумента — строки.
```js
const str = 'The Dark Knight';

console.log(str.replace('Dark', 'Light'));
// The Light Knight
// Произведен поиск подстроки 'Dark', с последующей заменой на подстроку 'Light'

console.log(str.replace('he D', ''));
// Tark Knight
// Если второй аргумент — пустая строка, то найденная подстрока просто будет удалена

console.log(str.replace(' ', '_'));
// The_Dark Knight
// Первый найденный пробел заменен на нижнее подчеркивание.
// При этом остальные пробелы не тронуты.
```

**Пример.** Применение метода `replace()`, когда второй аргумент — функция.
```js
const str = 'Abra Abra Cadabra';

console.log(str.replace('Abra', () => {
  return 'Focus';
}));
// Focus Abra Cadabra
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.startsWith()`

</div>

Метод `String.prototype.startsWith()` — проверяет, начинается ли строка с указанных символов.

**Принимает:**
  1. `string`, искомая подстрока — символы которые нужно искать в начале строки.
  2. `number`, индекс — начальная позиция поиска (опционально).

**Возвращает:** `boolean`.

<br />

**Пример.** Применение метода `startsWith()`.
```js
const str = 'The Dark Knight';

let result = str.startsWith('The');
console.log(result);
// true, так как строка начинается с 'The'

result = str.startsWith('Dark');
console.log(result);
// false, так как строка не начинается с 'Dark'
```

<br />

**Пример.** Применение метода `startsWith()` с измененной позицией начала поиска.
```js
const str = 'The Dark Knight';

let result = str.startsWith('Dark', 4);
console.log(result);
// true, так как с четвертого символа строка начинается с 'Dark'

result = str.startsWith('The', 4);
console.log(result);
// false, так как с четвертого символа строка не начинается с 'The'
```

<br />

<details><summary><b>Применение</b></summary>
<p>

1. Реализация функционала поиска или системы подсказок. Когда требуется выбрать только те элементы, которые начинаются со значения введенного пользователем.

```js
const cities = ['Москва', 'Минск', 'Новосибирск', 'Новороссийск'];
const userInput = 'Нов';

for (const city of cities) {
  if (city.startsWith(userInput)) {
    console.log(`Название города ${city} начинается с ${userInput}`);
  }
}
// Название города Новосибирск начинается с Нов
// Название города Новороссийск начинается с Нов
```

2. Валидация URL. Когда требуется проверить, что URL начинается с 'http://' или 'https://'. Такие проверки позволяют предотвратить уязвимости системы безопасности.

```js
let url = 'https://google.com';
console.log(url.startsWith('https://') || url.startsWith('http://'));
// true

url = 'http://google.com';
console.log(url.startsWith('https://') || url.startsWith('http://'));
// true

let url = 'other://google.com';
console.log(url.startsWith('https://') || url.startsWith('http://'));
// false
```

3. Валидация загрузки файлов. Когда требуется проверить, что файл начинается с определенного префикса.

4. Валидация пароля. Когда требуется проверить, что пароль не начинается с цифры, пробела или любого другого недопустимого символа в вашей системе.

</p>
</details>





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.toLowerCase()`

</div>

Метод `String.prototype.toLowerCase()` — приводит все символы строки к нижнему регистру (все прописные буквы заменяет на строчные).

**Принимает:** ничего

**Возвращает:** `string`

<br />

**Пример.**
```js
const str = 'The Dark Knight';

let result = str.toLowerCase();
console.log(result);
// the dark knight

const str2 = 'BATMAN';
result = str2.toLowerCase();
// batman
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.toUpperCase()`

</div>

Метод `String.prototype.toUpperCase()` — приводит все символы строки к верхнему регистру (все строчные буквы заменяет на прописные).

**Принимает:** ничего

**Возвращает:** `string`

<br />

**Пример.**
```js
const str = 'The Dark Knight';

let result = str.toUpperCase();
console.log(result);
// THE DARK KNIGHT
```





<br />
<hr />
<br />

<div align="center">

#### `String.prototype.trim()`

</div>

Метод `String.prototype.trim()` — удаляет пробелы в начале и конце строки.

**Принимает:** ничего.

**Возвращает:** `string`.

<br />

**Пример.** Работа метода `trim()`.
```js
const str = '   The Dark Knight      ';

console.log(str.trim());
// 'The Dark Knight'
// Пробелы в начале и конце строки удалены
```

<br />

<details><summary><b>Применение</b></summary>
<p>

1. Очищение данных от лишних символов. Как правило, пробелы удаляются в начале и конце строки после ввода пользователем данных в `input`, `textarea`. Например, пробелы в начале и конце полей "Имя", "Номер телефона", "Адрес", не несут полезную информацию, и их можно отбросить.

2. Сравнение строк. Строки `"Привет"` и `"  Привет  "` — это разные строки, поэтому перед сравнением строк, пробелы в начале и конце строк удаляются.

```js
console.log('8 (800) 123-45-67' === '   8 (800) 123-45-67   ');
// false

console.log('8 (800) 123-45-67'.trim() === '   8 (800) 123-45-67   '.trim());
// true
```

</p>
</details>




