<div align="center">

# Анимация через transition

</div>

<br />

**Анимация** — это изменение значения свойства элемента.

Один из способов плавной анимации — использование свойства `transition`.



<br />

<div align="center">

## `transition-duration`

</div>

**Свойство `transition-duration`** — определяет продолжительность выполнения анимации.

Значение указывается в секундах или миллисекундах.

**Пример 1.1.** Использование свойства `transition-duration`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition-duration: 1s;
}

.block:hover {
  height: 300px;
  background: lightblue;
}
```

<br />

В примере выше, высота элемента будет увеличиваться с 200px до 300px, а цвет фона будет меняться с красного на синий в течение одной секунды.



<br />

<div align="center">

## `transition-property`

</div>

**Свойство `transition-property`** — определяет свойства, которые будут анимированы.

Возможные значения:
- `all` — значение по-умолчанию, анимирует все свойства;
- любые названия свойств через пробел, которые нужно анимировать.

**Пример 2.1.** Использование свойства `transition-property`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition-duration: 1s;
  transition-property: height;
}

.block:hover {
  height: 300px;
  background: lightblue;
}
```

<br />

В примере выше, высота будет плавно анимирована, а цвет фона — нет (по причине того, что в `transition-property` значение `background` не указано).



<br />

<div align="center">

## `transition-delay`

</div>

**Свойство `transition-delay`** — определяет задержку перед началом выполнения анимации.

**Пример 3.1.** Использование свойства `transition-delay`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition-duration: 1s;
  transition-delay: 0.5s;
}

.block:hover {
  height: 300px;
  background: lightblue;
}
```

<br />

В примере выше, элемент начнет проигрывание анимации только через пол секунды после наведения на него курсора мыши.



<br />

<div align="center">

## `transition-timing-function`

</div>

**Свойство `transition-timing-function`** — определяет как будут вычисляться промежуточные значения, как будет выполняться анимация.

Возможные значения:
- `linear` — анимация будет выполняться линейно;
- `ease-in` — анимация начинается медленно и ускоряется со временем;
- `ease-out` — анимация начинается быстро и замедляется со временем;
- `ease-in-out` — анимация начинается медленно, затем ускоряется, а под конец снова замедляется;
- `cubic-bezier()` — инструмент для построения собственного процесса выполнения анимации;
- `steps()` — отрывистая/пошаговая анимация.

**Пример 4.1.** Написание свойства `transition-timing-function`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}

.block:hover {
  height: 300px;
  background: lightblue;
}
```



<br />

<div align="center">

## `transition`

</div>

**Свойство `transition`** — сокращение для свойств `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`.

**Пример 5.1.** Написание свойства `transition`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition: backround 1s ease-in 0.5s;
}

.block:hover {
  background: lightblue;
}
```



<br />

<div align="center">

## Что можно анимировать плавно

</div>

Давайте разберем вопрос что можно анимировать, а что нельзя.

Во-первых, вы можете добиться плавности анимации только в тех свойствах, у которых значения состоят из цифр, или как-то под капотом конвертируются в перечисляемое состояние. То есть такие свойства как `display` или `visibility` плавно анимировать не получится. Потому что там есть определенные значения без промежуточных перечислимых вариантов.

Во-вторых, будьте осторожны с анимацией свойств `width`, `height`, `margin` и подобных, которые влияют на поток. Причина: влияние на поток приводит к перестройке макета. Для анимации размеров элементов используйте свойство `transform`.



<br />

<div align="center">

## `transform`

</div>

**Свойство `transform`** — позволяет поворачивать, увеличивать или смещать элемент без влияния на поток.

Возможные значения:
- функция `scaleX()` — позволяет изменять масштаб элемента по горизонтали. Чем больше значение, тем больше масштаб;
- функция `scaleY()` позволяет изменять масштаб элемента по вертикали.
- функция `scale()` — сокращение предыдущих функций, где сперва указывается масштабирование по горизонтали, а через запятую — масштабирование по вертикали;
- функция `rotate()` — позволяет поворачивать элемент. Значение должно быть указано в градусах, в единице измерения `deg`;
- функция `translateX()` — смещает элемент по горизонтали. Чем больше значение — тем правее элемент;
- функция `translateY()` — смещает элемент по вертикали. Чем больше значение — тем ниже элемент;
- функция `translate()` — это сокращение для смещения по горизонтали и вертикали.

**Пример 6.1.** Написание свойства `transform`.
```html
<div class="block"></div>
```

```css
.block {
  width: 200px;
  height: 200px;
  background: lightcoral;
  transition: 1s;
}

.block:hover {
  transform: rotate(180deg) scale(2, 2);
}
```

<br />

В примере выше, элемент будет прокручен на 180 градусов и увеличен в размерах в два раза.
