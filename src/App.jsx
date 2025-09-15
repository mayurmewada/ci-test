import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/">
          <img src="https://www.webomates.com/wp-content/uploads/2020/05/continuous-testing-1-1024x507.png" className="logo" alt="ci-cd logo" />
        </a>
        <a href="/">
          <img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png" className="logo react" alt="docker logo" />
        </a>
      </div>
      <h1>CI / CD & Docker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
