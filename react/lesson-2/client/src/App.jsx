import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function requestData() {
  fetch('http://localhost:3000/')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err)
    })
}

function App() {
  const [list, setList] = useState([]);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  async function handleClick() {
    await fetch('http://localhost:3000/get-list')
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        setList(res.items)
      })
      .catch(err => console.error(err));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // await fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err))

    // ECMAScript6
    await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        login,
        pass
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function handleLoginChange(e) {
    setLogin(e.target.value)
  }

  function handlePassChange(e) {
    setPass(e.target.value)
  }

  return (
    <>
      <button onClick={handleClick}>Обновить список</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="login" value={login} onChange={handleLoginChange} />
        <input type="password" name="pass" value={pass} onChange={handlePassChange} />
        <button>Отправить</button>
      </form>
    </>
  )
}

export default App
