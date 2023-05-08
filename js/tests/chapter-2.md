<div align="center">

# Тесты для главы 2

</div>

Предположите результат, который будет выведен в консоль в каждом из примеров.

Проверьте себя, запустив эти примеры в браузере.





<br />
<br />

<div align="center">

## Именование переменных

</div>


**Пример 1.1.** Пробелы в имени переменной.
```js
let my name = 'C3PO';
console.log(my name);
```

<br />

**Пример 1.2.** Дефисы в имени переменной.
```js
let my-name = 'Hyphen';
console.log(my-name);
```

<br />

**Пример 1.3.** Нижнее подчеркивание в имени переменной.
```js
let undescore_name = false;
console.log(undescore_name);
```

<br />

**Пример 1.4.** Верблюжья нотация.
```js
let camelName = true;
console.log(camelName);
```

<br />

**Пример 1.5.** Имя с прописной буквы.
```js
let ClassName = 'This is for class';
console.log(ClassName);
```

<br />

**Пример 1.6.** Цифры в имени переменной.
```js
let digit100 = 100;
console.log(digit100);
```

<br />

**Пример 1.7.** Цифры в начале имени переменной.
```js
let 50prefix = 50;
console.log(50prefix);
```



<br />
<br />

<div align="center">

## Использование до объявления и без значений

</div>

**Пример 2.1.** Что будет если использовать переменную до её объявления?
```js
console.log(number);
let number = 50;
```

<br />

**Пример 2.2.** А константу?
```js
console.log(number);
const number = 50;
```

<br />

**Пример 2.3.** А если `var`?
```js
console.log(number);
var number = 50;
```

<br />

**Пример 2.4.** Инициализация пустой `let`-переменной.
```js
let withouValue;
console.log(withouValue);
```

<br />

**Пример 2.5.** Инициализация пустой константы.
```js
const withouValue;
console.log(withouValue);
```

<br />

**Пример 2.6.** Инициализация пустой `var`-переменной
```js
var withouValue;
console.log(withouValue);
```




<br />
<br />

<div align="center">

## Значения переменных

</div>

**Пример 3.1.** Что может хранить переменная?
```js
const number = 100;
const string = 'Hello';
const boolean = true;
const array = [1, 2, 3];
const object = { name: 'John', age: 20 };

console.log(number);
console.log(string);
console.log(boolean);
console.log(array);
console.log(object);
```

<br />

**Пример 3.2.** Доступ к символам числа.
```js
const number = 10;

console.log(number[0]);
console.log(number[1]);
```

<br />

**Пример 3.3.** Доступ к символам строки.
```js
const str = 'Стол';

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
```

<br />

**Пример 3.4.** Доступ к элементам массива по индексу.
```js
const furniture = ['table', 'chair', 'commode'];

console.log(furniture[0]);
console.log(furniture[1]);
console.log(furniture[2]);
console.log(furniture[3]);
```

<br />

**Пример 3.5.** Доступ к элементам массива по строке.
```js
const furniture = ['table', 'chair', 'commode'];

console.log(furniture['table']);
console.log(furniture['chair']);
console.log(furniture['commode']);
```

<br />

**Пример 3.6.** Доступ к значениям свойств объекта.
```js
const good = {
  title: 'microphone',
  cost: 25000,
  isPopular: true
};

console.log(good.title);
console.log(good['cost']);
console.log(good['isPopular']);
console.log(good.another);
console.log(good['another']);
```

<br />

**Пример 3.7.** Можно ли объявить несколько констант подряд таким образом?
```js
const a = 1, const b = 5, const c = 9;

console.log(a);
console.log(b);
console.log(c);
```

<br />

**Пример 3.8.** А таким?
```js
const a = 1, b = 5, c = 9;

console.log(a);
console.log(b);
console.log(c);
```

<br />

**Пример 3.9.** Присваивание по цепочке.
```js
const a = b = c = 'something';

console.log(a);
console.log(b);
console.log(c);
```

<br />

**Пример 3.10.** Присваивание по цепочке с литералом посередине.
```js
const a = 20 = c = 'something';

console.log(a);
console.log(c);
```

<br />

**Пример 3.11.** Присваивание по цепочке с литералом объекта посередине.
```js
const a = { name: 'John' } = c = 'something';

console.log(a);
console.log(c);
```





<br />
<br />

<div align="center">

## Изменение значения переменных

</div>

**Пример 4.1.** Повторное определение переменной через `let`.
```js
let width = 1920;
console.log(width);

let width = 1024;
console.log(width);
```

<br />

**Пример 3.2.** Повторное определение переменной через `const`.
```js
const height = 1080;
console.log(height);

const height = 800;
console.log(height);
```

<br />

**Пример 3.3.** Повторное определение переменной через `var`.
```js
var size = 320;
console.log(size);

var size = 240;
console.log(size);
```

<br />

**Пример 3.4.** Работа с переменной без оператора присваивания.
```js
let age = 20;
console.log(age);

age + 1;
console.log(age);

age + 30;
console.log(age);
```

<br />

**Пример 4.5.** Работа с переменной с оператором присваивания.
```js
let fruit = 'apple';
console.log(fruit);

fruit = 'orange';
console.log(fruit);

fruit = 'peach';
console.log(fruit);
```

<br />

**Пример 4.6.** Изменение константы.
```js
const planet = 'Earth';
console.log(planet);

planet = 'Mars';
console.log(planet);
```

<br />

**Пример 4.7.** Можно ли менять тип данных одной переменной?
```js
let any = 'string';
console.log(any);

any = 50;
console.log(any);

any = ['something', false, 500];
console.log(any);

any = true;
console.log(any);
```

<br />

**Пример 4.8.** Использование сокращенного оператора присваивания.
```js
let year = 1990;
console.log(age);

age += 1;
console.log(age);

age += 1;
console.log(age);
```





<br />
<br />

<div align="center">

## Изменение примитивов

</div>

**Пример 5.1.** Присваивание переменным значения других переменных.
```js
let num1 = 30;
let num2 = 60;

let a = num1;
let b = num2;

console.log(num1);
console.log(num2);
console.log(a);
console.log(b);

a = 15;
b = 10;

console.log(num1);
console.log(num2);
console.log(a);
console.log(b);
```

<br />

**Пример 5.2.** Несколько присваиваний подряд.
```js
let a = null;
let b = true;
let c = false;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
```

<br />

**Пример 5.3.** Переопределение числа.
```js
let year = 1950;
let newYear = year;
newYear = 2000;

console.log(year);
console.log(newYear);
```

<br />

**Пример 5.4.** Операции с числом.
```js
let x = 5;
let y = 10;

console.log(x + 2);
console.log(y + 3);
console.log(x + y);
console.log(x + 2 + y + 3);
console.log(x - y);
console.log(x * y);
console.log(x / (y - 5));
```

<br />

**Пример 5.5.** Операции со строкой.
```js
let firstName = 'Jack';
let lastName = 'Depp';

console.log(firstName + lastName);
console.log(firstName + ', ' + lastName);
```





<br />
<br />

<div align="center">

## Изменение ссылочных типов

</div>

**Пример 6.1.** Изменение значений константного массива.
```js
const cities = ['Moscow', 'Tokyo', 'Bogota'];
cities[1] = 'Denver';
cities[2] = 'Helsinki';
console.log(cities);
```

<br />

**Пример 6.2.** Изменение значений константного объекта.
```js
const address = { city: 'Novosibirsk', street: 'Lenina' };
address.city = 'Sochi';
address['street'] = 15;
console.log(address);
```

<br />

**Пример 6.3.** Переопределение константного массива.
```js
const oceans = ['Atlantic', 'Pacific'];
oceans = ['Indian', 'Arctic'];
console.log(oceans);
```

<br />

**Пример 6.4.** Переопределение значения массива.
```js
let numbers = [1, 2, 3];
let anotherNumbers = numbers;

anotherNumbers[0] = 99;

console.log(numbers);
console.log(anotherNumbers);
```

<br />

**Пример 6.5.** Переопределение нескольких значений массива.
```js
const names = ['Jack', 'Nick', 'Rose'];
const fruits = names;

fruits[0] = 'apple';
fruits[2] = 'orange';

console.log(names);
console.log(fruits);
```

<br />

**Пример 6.6.** Переопределение значений объекта.
```js
const house = {
  wallColor: 'green',
  hasRoof: true,
  owner: 'Jack'
};

const neighborHouse = house;

neighborHouse.wallColor = 'red';
neighborHouse['hasRoof'] = false;

console.log(house);
console.log(neighborHouse);
```
