import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-purple-blue-700'>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='bg-gradient-green-blue-500'>Vite + React</h1>
      <h1 className='bg-gradient-blue-green-500'>Vite + React</h1>
      <h1 className='bg-gradient-green-blue-dayblue-500'>Vite + React</h1>
      <h1 className='bg-gradient-dayblue-blue-green-500'>Vite + React</h1>
      <h1 className='bg-gradient-green-blue-dayblue-600'>Vite + React</h1>
      <h1 className='bg-gradient-dayblue-blue-green-600'>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='text-gradient-green-blue-500'>
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-gradient-blue-green-500'>
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-gradient-green-blue-dayblue-500'>
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-gradient-dayblue-blue-green-500'>
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-gradient-dayblue-blue-green-600'>
        Click on the Vite and React logos to learn more
      </p>
      <p className='text-gradient-dayblue-blue-green-600'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App
