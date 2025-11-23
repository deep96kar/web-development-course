import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [setbtn, setshowbtn] = useState(true)

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Vite' },
    { id: 3, text: 'Build something awesome' },
  ])

  const Todo=({todo})=>{
    return(<>
    <div className="m-1 border-2">
      <div className="todo">{todo.id}</div>
      <div className="todo">{todo.text} </div>
      </div>
    </>)
  }
  
  return (
    <>
      <div className='flex justify-center m-2 font-bold text-2xl'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

{/* Rendering lists and conditional rendering */}
      {/* ternali operator:- */}
    {/* {setbtn ?<button>i will be shown only when second button in clicking</button>:""}      */}

    {setbtn ?<button>show btn is ture</button>:<button>show btn is false</button>}     {/*conditional rendering*/}

      {/* {setbtn && <button>i will be shown only when second button in clicking</button>} */}
      
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
            <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
       <button onClick={() => setshowbtn(!setbtn)}>
          this button will change the above button
        </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
