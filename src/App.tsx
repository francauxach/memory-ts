import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center bg-blue-900">
      <header className="text-center text-white">
        <p className="text-2xl">Hello Vite + React!</p>
        <p>
          <button className="px-4 py-2 rounded bg-gray-500 my-4" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
