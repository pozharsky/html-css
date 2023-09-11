const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const list = [
  { id: 1, title: 'Заголовок 1' },
  { id: 2, title: 'Заголовок 2' },
  { id: 3, title: 'Заголовок 3' },
  { id: 4, title: 'Заголовок 4' },
]

const validLogin = 'admin'
const validPass = '123'

// Настройка маршрутов
app.get('/get-list', (req, res) => {
  res.json({
    items: list
  });
});

app.post('/auth', (req, res) => {
  const data = req.body;

  let isValid = false;
  if (data.login === validLogin && data.pass === validPass) {
    isValid = true;
  }

  res.json({
    isValid,
  })
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
