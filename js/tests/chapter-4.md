<div align="center">

# Тесты для главы 4

</div>

Предположите результат, который будет выведен в консоль в каждом из примеров.

Проверьте себя, запустив эти примеры в браузере.





<br />
<br />

<div align="center">

## Ключ

</div>

**Пример 1.1.** Что будет выведено в консоль?
```js
console.log({
  first name: 'Артур'
});
```

<br />

**Пример 1.2.** Что будет выведено в консоль?
```js
console.log({
  last_name: 'Дойл'
});
```

<br />

**Пример 1.3.** Что будет выведено в консоль?
```js
console.log({
  another-name: 'Конан'
});
```

<br />

**Пример 1.4.** Число в кавычках.
```js
console.log({
  '0': true
});
```

<br />

**Пример 1.5.** Число в качестве ключа.
```js
console.log({
  20: 'C-3PO'
});
```

<br />

**Пример 1.6.** Дробное число в качестве ключа.
```js
console.log({
  10.40: 'BB-8'
});
```

<br />

**Пример 1.7.** Число в квадратных скобках.
```js
console.log({
  [500]: 'R2-D2'
});
```

<br />

**Пример 1.8.** Дробное число в квадратных скобках.
```js
console.log({
  [2.500]: 'HK-47'
});
```

<br />

**Пример 1.9.** Число с набором символов.
```js
console.log({
  100years: false
});
```


<br />

**Пример 1.10.** Какое название ключа будет у объекта?
```js
const key = 'name';

console.log({
  key: 'Фродо'
});
```

<br />

**Пример 1.11.** Какое название ключа будет у объекта?
```js
const key = 'name';

console.log({
  [key]: 'Гендальф'
});
```

**Пример 1.12.** Какое название ключа будет у объекта?
```js
const key = 'name';

console.log({
  ['key']: 'Саурон'
});
```

<br />

**Пример 1.13.** Какое название ключа будет у объекта?
```js
function getKey() {
  'name';
}

console.log({
  getKey: 'Фродо'
});
```

<br />

**Пример 1.14.** Какое название ключа будет у объекта?
```js
function getKey() {
  'name';
}

console.log({
  getKey(): 'Фродо'
});
```

<br />

**Пример 1.15.** Какое название ключа будет у объекта?
```js
function getKey() {
  'name';
}

console.log({
  [getKey]: 'Фродо'
});
```

<br />

**Пример 1.16.** Какое название ключа будет у объекта?
```js
function getKey() {
  'name';
}

console.log({
  [getKey()]: 'Фродо'
});
```

<br />

**Пример 1.17.** ВКакое название ключа будет у объекта?
```js
function getKey() {
  return 'name';
}

console.log({
  [getKey()]: 'Фродо'
});
```

<br />

**Пример 1.18.** Какое название ключа будет у объекта?
```js
console.log({
  {}: 'Спок'
});
```

<br />

**Пример 1.19.** Какое название ключа будет у объекта?
```js
console.log({
  []: 'Ухура'
});
```






<br />
<br />

<div align="center">

## Значение свойства объекта

</div>

**Пример 2.1.** Все ли значения являются допустимыми?
```js
console.log({
  name: 'Alice',
  age: 42,
  married: true,
  children: ['Jade', 'Marcus', 'Samanta'],
  sayHi: () => {
    console.log('Hello!');
  }
});
```

<br />

**Пример 2.2.** Допустима ли подобная структура объекта?
```js
console.log({
  characters: {
    rings: ['Фродо', 'Гендальф'],
    stars: ['Скайокер', 'Вейдер']
  },
  books: {
    king: {
      1977: 'Сияние',
      1980: 'Туман',
      1986: 'Оно'
    }
  }
});
```

<br />

**Пример 2.3.** Какое значение будет у свойства объекта?
```js
const title = 'Доктор Сон';

console.log({
  book: title
});
```

<br />

**Пример 2.4.** Является ли данная запись свойства допустимой?
```js
const title = 'Мистер Мерседес';

console.log({
  title
});
```

<br />

**Пример 2.5.** Какое значение будет у свойства объекта?
```js
function getValue() {
  'Темная башня';
}

console.log({
  title: getValue
});
```

<br />

**Пример 2.6.** Какое значение будет у свойства объекта?
```js
function getValue() {
  return 'Ловец снов';
}

console.log({
  title: getValue
});
```

<br />

**Пример 2.7.** Какое значение будет у свойства объекта?
```js
function getValue() {
  'Кэрри';
}

console.log({
  title: getValue()
});
```

<br />

**Пример 2.8.** Какое значение будет у свойства объекта?
```js
function getValue() {
  return 'Мизери';
}

console.log({
  title: getValue()
});
```

<br />

**Пример 2.9.** Какие значения будут у свойств объекта?
```js
function getBook() {
  return 'Чужак';
}

function getYear() {
  2018;
}

const title = getBook();
const year = getYear();

console.log({
  title,
  year
});
```





<br />
<br />

<div align="center">

## Получение значения свойства объекта

</div>

**Пример 3.1.** Что будет выведено в консоль?
```js
const person = {
  name: 'Alice',
  age: 42,
  married: true,
  children: ['Jade', 'Marcus', 'Samanta'],
  sayHi: () => {
    console.log('Hello!');
  }
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.married);
console.log(person.children);
console.log(person.sayHi);
console.log(person.sayHi());
console.log(person.unknown);
```

<br />

**Пример 3.2.** Что будет выведено в консоль?
```js
const car = {
  brand: 'lexus',
  year: 2015,
  hasDoors: true,
  beep: function () {
    console.log('Beep!');
  }
};

console.log(car);
console.log(car['brand']);
console.log(car['hasDoors']);
console.log(car['beep']);
console.log(car['beep']());
console.log(car['unknown']);
```

<br />

**Пример 3.3.** Что будет выведено в консоль?
```js
const animal = {
  kingdom: 'animalia',
  population: 339000,
  getType: () => {
    console.log('Type genus is Ursus');
  }
};

const property1 = 'kingdom';
const property2 = 'population';
const property3 = 'getType';
const property4 = 'unknown';

console.log(animal[property1]);
console.log(animal[property2]);
console.log(animal[property3]);
console.log(animal[property4]);
```

<br />

**Пример 3.4.** Что будет выведено в консоль?
```js
console.log({
  title: 'Audi',
  year: 1990
}.year);
```

<br />

**Пример 3.5.** Что будет выведено в консоль?
```js
console.log({
  title: 'Audi',
  year: 1990
}.'year');
```

<br />

**Пример 3.6.** Несколько свойств с одинаковым ключом.
```js
const object = {
  width: 800,
  height: 600,
  width: 1920,
  height: 1080
};

console.log(object);
```

<br />

**Пример 3.7.** Что будет выведено в консоль?
```js
const phrases = {
  hello: () => {
    console.log('Hello!');
  },
  hi: () => {
    console.log('hi');
  },
  goodbuy: function () {
    console.log('Goodbuy!');
  },
};

const prop = 'hi';

phrases.hello();
phrases['goodbuy']();
phrases[prop]();
```

<br />

**Пример 3.8.** Что будет выведено в консоль?
```js
const funcs = {
  getNumber: () => {
    return 5;
  },
  getString: () => {
    return 'hello';
  },
  getArray: () => {
    return [1, 2, 3];
  }
};

console.log(funcs.getNumber() + 10);
console.log(funcs.getString()[2]);
console.log(funcs.getArray()[0]);
```

<br />

**Пример 3.9.** Сокращенная запись функции.
```js
const obj = {
  func() {
    console.log('wow!');
  }
}

obj.func();
```

<br />

**Пример 3.10.** Что будет выведено в консоль?
```js
function getObj() {
  return {
    name: 'Оби-Ван'
  };
}

console.log(getObj());
console.log(getObj().name);
console.log(getObj()['name']);
console.log(getObj()['year']);
```

<br />

**Пример 3.11.** Что будет выведено в консоль?
```js
function getObj() {
  return {
    name: 'Кеноби'
  };
}

function getKey() {
  return 'name';
}

console.log(getKey()[getObj()]);
```

<br />

**Пример 3.12.** Что будет выведено в консоль?
```js
function getObj() {
  return {
    name: 'Кеноби'
  };
}

function getKey() {
  return 'name';
}

console.log(getObj()[getKey()]);
```

<br />

**Пример 3.13.** Что будет выведено в консоль?
```js
const obj = {
  0: true,
  1: false,
  2: NaN
};

let i = 0;
console.log(obj[i]);

let i = 1;
console.log(obj[i]);

let i = 2;
console.log(obj[i]);
```

<br />

**Пример 3.14.** Что будет выведено в консоль?
```js
const obj = {
  20.30: 'Дробное число'
};

console.log(obj[20.30]);
console.log(obj['20.30']);
```



<br />
<br />

<div align="center">

## Добавление свойств в объект

</div>

**Пример 4.1.** Добавление свойства в объект.
```js
const obj = {};

obj.int numbers = [2, 5, 9];

console.log(obj);
```

<br />

**Пример 4.2.** Добавление свойств в объект.
```js
const house = {};

house.cost = 1_000_000;
house.hasRoof = true;

console.log(house);
```

<br />

**Пример 4.3.** Добавление свойств в объект.
```js
const house = {};

house[cost] = 1_000_000;
house[hasRoof] = true;

console.log(house);
```

<br />

**Пример 4.4.** Добавление свойства в объект.
```js
const plant = {};

plant['color'] = 'green';

console.log(plant);
```

<br />

**Пример 4.5.** Добавление свойства в объект.
```js
const good = {};
const key = 'title';

good.key = 'Телефон';

console.log(good);
```

<br />

**Пример 4.6.** Добавление свойства в объект.
```js
const good = {};
const key = 'title';

good[key] = 'Мобильный телефон';

console.log(good);
```

<br />

**Пример 4.7.** Что будет выведено в консоль?
```js
const phone = {}['cost'] = 1000;

console.log(phone);
```

<br />

**Пример 4.8.** Что будет выведено в консоль?
```js
const phone = {}.cost = 2000;

console.log(phone);
```

<br />

**Пример 4.9.** Что будет выведено в консоль?
```js
function getKey() {
  return 'cost';
}

const phone = {};
phone[getKey()] = '1500';

console.log(phone);
```





<br />
<br />

<div align="center">

## Изменение значения свойства объекта

</div>

**Пример 5.1.** Изменение значения свойств в объекте.
```js
const article = {
  title: 'Global warming',
  date: '20.01.2005',
  author: 'Michael'
};

const prop = 'author';

article.title = 'Global cooling';
article['date'] = '17.08.2503';
article[author] = 'Samuel';

console.log(article);
```





<br />
<br />

<div align="center">

## Удаление свойства из объекта

</div>

**Пример 6.1.** Удаление свойств из объекта.
```js
const position = {
  top: 0,
  bottom: 100,
  left: 50,
  right: 25,
};

delete position.left;
delete position['right'];

console.log(position);
```





<br />
<br />

<div align="center">

## Извлечение значений из объекта

</div>

**Пример 7.1.** Что будет выведено в консоль?
```js
const book = {
  title: 'Властелин колец',
  year: 1954
};

const title = book.title;
const year = book['year'];
const count = book['count'];

console.log(title);
console.log(year);
console.log(count);
```

<br />

**Пример 7.2.** Что будет выведено в консоль?
```js
const book = {
  title: 'Под куполом',
  year: 2009
};

const [title, year] = book;

console.log(title);
console.log(year);
```

<br />

**Пример 7.3.** Что будет выведено в консоль?
```js
const { name, age } = {
  name: 'Джон',
  age: 20
};

console.log(name);
console.log(age);
```

<br />

**Пример 7.4.** Что будет выведено в консоль?
```js
const book = {
  title: '11/22/63',
  year: 2011
};

const { title, year } = book;

console.log(title);
console.log(year);
```

<br />

**Пример 7.5.** Что будет выведено в консоль?
```js
const book = {
  title: '11/22/63',
  year: 2011
};

const { title: name, year: time } = book;

console.log(name);
console.log(time);

console.log(title);
console.log(year);
```

<br />

**Пример 7.6.** Изменение извлеченных переменных.
```js
const keyboard = {
  color: 'white',
  keys: 72
};

let { color, keys } = keyboard;

color = 'black';
keys = 66;

console.log(keyboard);
console.log(color);
console.log(keys);
```

<br />

**Пример 7.7.** Изменение значений извлеченного массива.
```js
const car = {
  brand: 'BMW',
  components: ['engine', 'wheels']
};

let { components } = car;

components[0] = 'lights';
components[1] = 'doors';

console.log(car);
console.log(components);
```





<br />
<br />

<div align="center">

## Методы

</div>

**Пример 8.1.** Что будет выведено в консоль?
```js
const obj = {
  arrayFn: () => {
    return 'array function';
  },
};

console.log(obj.arrayFn);
```

<br />

**Пример 8.2.** Что будет выведено в консоль?
```js
const obj = {
  arrayFn: () => {
    return 'array function';
  },
};

console.log(obj.arrayFn());
```

<br />

**Пример 8.3.** Что будет выведено в консоль?
```js
const house = {
  info() {
    function getPrice() {
      return 20_000_000;
    }
    
    function getCity() {
      return 'Москва'
    }
    
    return getCity() + ': ' + getPrice() + ' руб.';
  },
};

console.log(house.info());
```




<br />
<br />

<div align="center">

## Ключевое слово `this`

</div>

**Пример 9.1.** Вывод `this` в консоль.
```js
console.log(this);
```

<br />

**Пример 9.2.** Вывод `this` в вызванной функции.
```js
function printThis() {
  console.log(this);
}

printThis();
```

<br />

**Пример 9.3.** Вывод `this` в вызванной стрелочной функции.
```js
const printThis = () => {
  console.log(this);
}

printThis();
```

<br />

**Пример 9.4.** Значение `this` в качестве параметра функции.
```js
function printThis(this) {
  console.log(this);
}

printThis({ title: 'something' });
```

<br />

**Пример 9.5.** Вывод `this` во внутренней функции.
```js
function outerPrint() {
  function innerPrint() {
    console.log(this);
  }
  
  innerPrint();
}

outerPrint();
```

<br />

**Пример 9.6.** Вывод `this` в вызванном методе объекта.
```js
const obj = {
  title: 'The Lord of the Rings',
  showTitle: function() {
    console.log(this);
  }
};

obj.showTitle();
```

<br />

**Пример 9.7.** Вывод `this` в вызванном стрелочном методе объекта.
```js
const obj = {
  title: 'The Lord of the Rings',
  showTitle: () => {
    console.log(this);
  }
};

obj.showTitle();
```

<br />

**Пример 9.8.** Вывод `this` в функции, вызванной внутри объекта.
```js
const obj = {
  title: 'The Lord of the Rings',
  showTitle: function() {
    function printThis() {
      console.log(this);
    }
    
    printThis();
  }
};

obj.showTitle();
```

<br />

**Пример 9.9.** Вывод `this` в стрелочной функции, вызванной внутри объекта.
```js
const obj = {
  title: 'The Lord of the Rings',
  showTitle: function() {
    const printThis = () => {
      console.log(this);
    }
    
    printThis();
  }
};

obj.showTitle();
```

<br />

**Пример 9.10.** Вывод `this` в объекте объекта.
```js
const obj = {
  title: 'The Lord of the Rings',
  subObj: {
    title: 'Shine',
    showTitle: () => {
      console.log(this);
    }
  }
};

obj.subObj.showTitle();
```

<br />

**Пример 9.11.** Вывод `this` в вызванной отдельно функции.
```js
const obj = {
  showTitle: function() {
    console.log(this);
  }
}

const show = obj.showTitle();
show();
```

<br />

**Пример 9.12.** Вывод `this` в побочной функции.
```js
const obj = {
  show: function() {
    this.hide()
  },
  hide: function() {
    console.log(this)
  }
}

obj.show()
```

<br />

**Пример 9.13.** Вывод `this` в функции, написанной через сокращенную запись.
```js
const obj = {
  func() {
    console.log(this);
  }
};

obj.func();

const func = obj.func;
func();
```

<br />

**Пример 9.14.** Получение параметра из `this`.
```js
const superhero = {
  name: 'Spider-Man',
  showName: function() {
    console.log(this.name);
  }
};

superhero.showName();
```

<br />

**Пример 9.15.** Получение нескольких параметров из `this`.
```js
const obj = {
  name: 'John',
  age: 30,
  greeting: function() {
    console.log('Welcome, ' + this.name + '. Your age is ' + this.age);
  }
};

obj.greeting();
```





<br />
<br />

<div align="center">

## Методы `call()`, `apply()`, `bind()`

</div>

**Пример 10.1.** Вызов `call()`.
```js
function func() {
  console.log(this);
}

func.call({ name: 'Frodo' });
```

<br />

**Пример 10.2.** Вызов `call()` у стрелочной функции.
```js
const func = () => {
  console.log(this);
}

func.call({ name: 'Frodo' });
```

<br />

**Пример 10.3.** Вызов `call()` с параметрами.
```js
function func(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}

const obj = { name: 'Frodo' };

func.call(obj, 'Sam', 'Din');
```

<br />

**Пример 10.4.** Вызов `apply()`.
```js
function func() {
  console.log(this);
}

func.apply({ title: 'book' });
```

<br />

**Пример 10.5.** Вызов `apply()` у стрелочной функции.
```js
const func = () => {
  console.log(this);
}

func.apply({ title: 'book' });
```

<br />

**Пример 10.6.** Вызов `apply()` с параметрами.
```js
function func(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}

const obj = { title: 'book' };

func.apply(obj, 10, true);
```

<br />

**Пример 10.7.** Что будет выведено в консоль?
```js
function func() {
  console.log(this);
}

func.bind({ something: 'more' });
```

<br />

**Пример 10.8.** Вызов `bind()`.
```js
function func() {
  console.log(this);
}

const newFunc = func.bind({ something: 'more' });
newFunc();
```

<br />

**Пример 10.9.** Вызов `bind()` у стрелочной функции.
```js
const func = () => {
  console.log(this);
}

const newFunc = func.bind({ something: 'more' });
newFunc();
```

<br />

**Пример 10.10.** Вызов `bind()` с параметрами.
```js
function func(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}

const obj = { something: 'more' };

const newFunc = func.bind(obj, 'one', 'two');
newFunc();
```

<br />

**Пример 10.11.** Вызов `bind()` с параметрами.
```js
function func(arg1, arg2) {
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}

const obj = { something: 'more' };

const newFunc = func.bind(obj);
newFunc('one', 'two');
```

<br />

**Пример 10.12.** Всё вместе.
```js
function greeting() {
  console.log('Welcome, ' + this.name + '. Your age is ' + this.age);
}

greeting.call({ name: 'Liam', age: 18 });
greeting.apply({ name: 'Rose', age: 20 });
greeting.bind({ name: 'Arnold', age: 22 });
```
