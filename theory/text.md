<div align="center">

# Работа с текстом

</div>

<br />

Свойства для работы с текстом можно разбить на следующие категории:

- Подключение шрифта
  - `@font-face`

- Настройка шрифта:
  - `font-size`
  - `font-weight`
  - `font-family`
  - `font`
  - `text-transform`

- Стилизация шрифта:
  - `color`
  - `text-shadow`

- Работа с расположением букв:
  - `text-align`
  - `text-align-last`
  - `writing-mode`
  - `text-orientation`

- Работа с переносами и пробелами:
  - `word-spacing`
  - `letter-spacing`
  - `line-height`
  - `text-indent`
  - `white-space`

- Работа с переполнением
  - `word-break`
  - `overflow`
  - `text-overflow`
  - `-webkit-line-clamp`

- Колонки:
  - `column-count`
  - `column-width`
  - `columns`

- Работа с декоративной линией:
  - `text-decoration-line`
  - `text-decoration-color`
  - `text-decoration-style`
  - `text-decoration-thickness`
  - `text-decoration`
  - `text-underline-offset`




<br />
<br />

<div align="center">

## Подключение шрифта

</div>

<div align="center">

### `@font-face`

</div>

**Правило `@font-face`** — загружает шрифты с удаленного сервера или компьютера пользователя.

**Пример 1.1.** Написание правила `@font-face`.
```css
@font-face {
  font-family: Roboto;
  font-weight: 400;
  font-style: italic;
  src: url("./fonts/Roboto-Regular.ttf");
}

/* Далее в стилях мы можем обращаться к загруженному шрифту */
p {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: italic;
}
```

<br />

Где:
- `font-family` — название, по которому будет находиться загружаемый шрифт;
- `font-weight` — насыщенность, по которой будет находиться загружаемый шрифт;
- `font-style` — начертание, по которому будет находиться загружаемый шрифт;
- `src` — путь до файла со шрифтом.








<br />
<br />

<div align="center">

## Настройки шрифта

</div>

<div align="center">

### `font-size`

</div>

**Свойство `font-size`** — определяет размер шрифта.

В качестве единицы измерения можно использовать `px`, `rem`, `em`, `%`, и любую другую величину `length`.

**Пример 2.1.** Написание свойства `font-size`.
```css
html {
  font-size: 16px;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1em;
}

button {
  font-size: 120%;
}
```



<br />

<div align="center">

### `font-weight`

</div>

**Свойство `font-weight`** — определяет насыщенность шрифта.

Возможные значения: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `normal`, `bold`, `lighter`, `bolder`.

**Пример 3.1.** Написание свойства `font-weight`.
```css
h1 {
  font-weight: bold;
}

p {
  font-weight: normal;
}
```



<br />

<div align="center">

### `font-style`

</div>

**Свойство `font-style`** — определяет начертание шрифта.

Возможные значения:
- `normal` — обычная версия шрифта;
- `italic` — курсивная версия шрифта;
- `oblique` — наклоненная на 8-11 градусов версия обычного шрифта.

**Пример 4.1.** Написание свойства `font-style`.
```css
i {
  font-style: normal;
}

p {
  font-style: italic;
}
```



<br />

<div align="center">

### `font-family`

</div>

**Свойство `font-family`** — определяет шрифт.

Возможные значения:
- одно или несколько названий шрифтов, перечисленных через запятую;
- `serif` — универсальный шрифт с засечками;
- `sans-serif` — универсальный шрифт без засечек;
- `cursive` — универсальный курсивный шрифт;
- `fantasy` — универсальный декоративный шрифт;
- `monospace` — универсальный моноширинный шрифт.

После указания нужного шрифта, обязательно нужно добавить в конец один из универсальных шрифтов.

**Пример 6.1.** Написание свойства `font-family`.
```css
h1 {
  font-family: Verdana, sans-serif;
}

p {
  font-family: Georgia, serif;
}

blockquote {
  font-family: "Brush Script MT", cursive;
}

code {
  font-family: Courier, monospace;
}
```



<br />

<div align="center">

### `font`

</div>

**Свойство `font`** — сокращение для свойств `font-style`, `font-weight`, `font-size` и `font-family`.

**Пример 7.1.** Написание свойства `font`.
```css
p {
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
  font-family: Arial, sans-serif;

  font: italic bold 40px Arial, sans-serif;
}
```



<br />

<div align="center">

### `text-transform`

</div>

**Свойство `text-transform`** — определяет, какие буквы отобразить прописными, а какие строчными.

Возможные значения:
- `none` — без изменений;
- `capitalize` — делает первую букву каждого слова прописной;
- `uppercase` — делает все буквы прописными;
- `lowercase` — делает все буквы строчными.

**Пример 5.1.** Написание свойства `text-transform`.
```css
h1 {
  text-transform: uppercase;
}

p {
  text-transform: capitalize;
}
```










<br />
<br />

<div align="center">

## Стилизация шрифта

</div>

<div align="center">

### `color`

</div>

**Свойство `color`** — устанавливает цвет текста.


**Пример 8.1.** Написание свойства `color`.
```css
h1 {
  color: lightcoral;
}

blockquote {
  color: rgba(0, 255, 0, 0.5);
}

p {
  color: #0000FF;
}
```



<br />

<div align="center">

### `text-shadow`

</div>

**Свойство `text-shadow`** — задает тень под текстом.

Синтаксис:
- первый параметр — смещение тени по горизонтали;
- второй параметр — смещение тени по вертикали;
- третий параметр — размытость тени;
- четвертый параметр — цвет тени.

**Пример 9.1.** Написание свойства `text-shadow`.
```css
h1 {
  text-shadow: 40px 40px 10px rgba(255, 0, 0, .5);
}
```



<br />

<div align="center">

## Работа с расположением букв

</div>

<div align="center">

### `text-align`

</div>

**Свойство `text-align`** — определяет выравнивание контента по горизонтали.

Возможные значения:
- `left` — выравнивание по левому краю;
- `right` — выравнивание по правому краю;
- `center` — выравнивание по центру;
- `justify` — выравнивает текст так, чтобы его левые и правые границы соприкасались с границами родительского элемента.

**Пример 10.1.** Написание свойства `text-align`.
```css
h1 {
  text-align: center;
}

blockquote {
  text-align: right;
}
```



<br />

<div align="center">

### `text-align-last`

</div>

**Свойство `text-align-last`** — определяет выравнивание последней строки по горизонтали.

Возможные значения:
- `left` — выравнивание по левому краю;
- `right` — выравнивание по правому краю;
- `center` — выравнивание по центру;
- `justify` — выравнивает последнюю строку так, чтобы её левые и правые границы соприкасались с границами родительского элемента.

**Пример 11.1.** Написание свойства `text-align-last`.
```css
p {
  text-align-last: center;
}
```



<br />

<div align="center">

### `writing-mode`

</div>

**Свойство `writing-mode`** — определяет, как будет расположен контент: вертикально или горизонтально.

Возможные значения:
- `horizontal-tb` — располагает контент горизонтально слева направо;
- `vertical-rl` — располагает контент вертикально сверху вниз, по-горизонтали справа налево;
- `vertical-lr` — располагает контент вертикально сверху вниз, по-горизонтали слева направо.

**Пример 12.1.** Написание свойства `writing-mode`.
```css
p {
  writing-mode: vertical-rl;
}
```



<br />

<div align="center">

### `text-orientation`

</div>

**Свойство `text-orientation`** — определяет ориентацию букв в тексте. Это свойство будет работать только если `writing-mode` установлен в `vertical-rl` или `vertical-lr`.

Возможные значения:
- `mixed` — поворачивает буквы на 90 градусов;
- `upright` — размещает буквы в вертикальном положении.

**Пример 13.1.** Написание свойства `text-orientation`.
```css
p {
  writing-mode: vertical-lr;
  text-orientation: upright;
}
```









<br />
<br />

<div align="center">

## Работа с переносами и пробелами

</div>

<div align="center">

### `word-spacing`

</div>

**Свойство `word-spacing`** — определяет расстояние между словами в тексте.

**Пример 14.1.** Написание свойства `word-spacing`.
```css
h1 {
  word-spacing: 6px;
}

p {
  word-spacing: -2px;
}
```



<br />

<div align="center">

### `letter-spacing`

</div>

**Свойство `letter-spacing`** — определяет расстояние между символами в тексте.

**Пример 15.1.** Написание свойства `letter-spacing`.
```css
h1 {
  letter-spacing: 10px;
}

p {
  letter-spacing: -1px;
}
```



<br />

<div align="center">

### `line-height`

</div>

**Свойство `line-height`** — определяет величину пространства между строками.

Возможные значения:
- `px`, `rem`, `em`, `%` и другие единицы измерения `length`;
- коэффициент (обычно число от 1 до 3) — определяет значение, как `font-size * line-height`.

**Пример 16.1.** Написание свойства `line-height`.
```css
blockquote {
  line-height: 30px;
}

h1 {
  font-size: 40px;
  line-height: 1; /* 1 * 40px, то есть результат будет 40px */
}

p {
  font-size: 20px;
  line-height: 1.5; /* 1.5 * 20, то есть результат будет 30px */
}
```



<br />

<div align="center">

### `text-indent`

</div>

**Свойства `text-indent`** — определяет отступ перед первой строкой текста.

**Пример 17.1.** Написание свойства `text-indent`.
```css
p {
  text-indent: 50px;
}
```



<br />

<div align="center">

### `white-space`

</div>

**Свойство `white-space`** — управляет пробельными символами.

Возможные значения:
- `normal` — если строка не вмещается в блок — то она будет перенесена; несколько пробелов подряд будут объединены в один;
- `nowrap` — если строка не вмещается в блок — она не будет перенесена; несколько пробелов подряд будут объединены в один;
- `pre` — строки переносятся только там, где мы явно это укажем с помощью специальных символов или тега <br>; несколько пробелов подряд не объединяются;
- `pre-wrap` — если строка не вмещается в блок — то она будет перенесена; также строки переносятся там, где указаны специальные символы или тег `<br>`; несколько пробелов подряд не объединяются;
- `pre-line` — если строка не вмещается в блок — то она будет перенесена; также строки переносятся там, где указаны специальные символы или тег `<br>`; несколько пробелов подряд объединяются в один
- `break-spaces` — поведение похожее на `pre-wrap`, но со следующими отличиями:
  - последовательности пробелов сохраняются так, как они указаны в источнике, включая пробелы на концах строк;
  - строки переносятся по любым пробелам, в том числе в середине последовательности пробелов;
  - пробелы занимают место и не висят на концах строк, а значит влияют на внутренние размеры (`min-content` и `max-content`).


**Пример 18.1.** Написание свойства `white-space`.
```css
p {
  white-space: nowrap;
}
```








<br />
<br />

<div align="center">

## Работа с переполнением

</div>

<div align="center">

### `word-break`

</div>

**Свойство `word-break`** — определяет, где будет установлен перевод на новую строку, если слово не вмещается в блок.

Возможные значения:
- `normal` — перевод будет осуществляться только на месте пробельных символов. Если слово начинается с начала блока и не влезает в него — то оно не будет никак обработано;
- `break-all` — если слово не вмещается, то остаток будет перенесен на новую строку.

**Пример 19.1.** Написание свойства `word-break`.
```css
p {
  word-break: break-all;
}
```



<br />

<div align="center">

### `overflow`

</div>

**Свойство `overflow`** — определяет, как будет отображаться контент при переполнении.

Возможные значения:
- `visible` — значение по-умолчанию, при котором переполненное содержимое не скрывается;
- `hidden` — переполненное содержимое обрезается и скрывается;
- `scroll` — переполненное содержимое скрывается, но при этом добавляются полосы прокрутки для контента. Если контент не был переполнен, полосы прокрутки все равно добавляются;
- `auto` — переполненное содержимое скрывается, но при этом добавляются полосы прокрутки для контента. Если контент не был переполнен, полосы прокрутки скрываются.

Обратите внимание, что между значениями `scroll` и `auto` на MacOS разницы нет, оба значения отображают полосу прокрутки только при наведении.

**Пример 20.1.** Написание свойства `overflow`.
```css
p {
  width: 100px;
  height: 45px;
  background: #ccc;
  overflow: hidden;
}
```



<br />

<div align="center">

### `text-overflow`

</div>

**Свойство `text-overflow`** — определяет, как будет отображаться текст при переполнении. Работает только в связке со свойствами `overflow: hidden` и `white-space: nowrap`.

Возможные значения:
- `clip` — переполненный текст просто обрезается;
- `ellipsis` — добавляет троеточие в конце переполненного текста.

**Пример 21.1.** Написание свойства `text-overflow`.
```css
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```



<br />

<div align="center">

### `-webkit-line-clamp`

</div>

> Данное свойство поддерживается только с префиксом `-webkit`.

**Свойство `-webkit-line-clamp`** — ограничивает максимальное количество строк в блоке.

Это свойство работает только в связке с двумя другими свойствами:
- `display` со значением `-webkit-box` или `-webkit-inline-box`;
- `-webkit-box-orient: vertical`.

**Пример 22.1.** Написание свойства `-webkit-line-clamp`.
```css
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```









<br />
<br />

<div align="center">

## Колонки

</div>

<div align="center">

### `column-count`

</div>

**Свойство `column-count`** — разбивает контент на указанное количество колонок.

**Пример 22.1.** Написание свойства `column-count`.
```css
p {
  column-count: 2;
}
```



<br />

<div align="center">

### `column-width`

</div>

**Свойство `column-width`** — разбивает контент на несколько колонок указанной ширины.

Возможные значения:
- `auto` — разбиения на колонки происходить не будет;
- `px`, `rem`, `em`, `%` и другие единицы `length`.


**Пример 23.1.** Написание свойства `column-width`.
```css
p {
  column-width: 200px;
}
```



<br />

<div align="center">

### `columns`

</div>

**Свойство `columns`** — сокращенная запись для свойств `column-count` и `column-width`.

**Пример 24.1.** Написание свойства `columns`.
```css
p {
  columns: 2 auto;
}
```










<br />
<br />

<div align="center">

## Работа с декоративной линией

</div>

<div align="center">

### `text-decoration-line`

</div>

**Свойство `text-decoration-line`** — определяет декоративную линию у текста.

Возможные значения:
- `none` — линия отсутствует;
- `underline` — линия под текстом;
- `overline` — линия над текстом;
- `line-through` — линия перечеркивающая текст.

**Пример 25.1.** Написание свойства `text-decoration-line`.
```css
p {
  text-decoration-line: underline;
}

blockquote {
  text-decoration-line: underline overline; /* можно создать сразу несколько линий */
}
```



<br />

<div align="center">

### `text-decoration-color`

</div>

**Свойство `text-decoration-color`** — определяет цвет декоративной линии.

**Пример 25.1.** Написание свойства `text-decoration-color`.
```css
p {
  text-decoration-line: overline;
  text-decoration-color: lightblue;
}
```



<br />

<div align="center">

### `text-decoration-style`

</div>

**Свойство `text-decoration-style`** — определяет вид декоративной линии.

Возможные значения:
- `solid` — сплошная линия;
- `double` — двойная линия;
- `dashed` — пунктирная линия;
- `dotted` — линия из точек;
- `wavy` — волнистая линия.

**Пример 25.1.** Написание свойства `text-decoration-style`.
```css
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}
```



<br />

<div align="center">

### `text-decoration-thickness`

</div>

**Свойство `text-decoration-thickness`** — определяет толщину декоративной линии.

**Пример 25.1.** Написание свойства `text-decoration-thickness`.
```css
p {
  text-decoration-line: underline;
  text-decoration-thickness: 4px;
}
```



<br />

<div align="center">

### `text-decoration`

</div>

**Свойство `text-decoration`** — сокращенная запись для `text-decoration-line`, `text-decoration-color`, `text-decoration-style` и `text-decoration-thickness`.

**Пример 25.1.** Написание свойства `text-decoration`.
```css
p {
  text-decoration: underline wavy red 4px;
}
```



<br />

<div align="center">

### `text-underline-offset`

</div>

**Свойство `text-underline-offset`** — устанавливает расстояние между декоративной линией и текстом.

```css
p {
  text-decoration: underline;
  text-underline-offset: 10px;
}
```








