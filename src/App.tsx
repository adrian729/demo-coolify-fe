import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex justify-center items-center gap-2">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        className="cursor-pointer min-w-24 text-xl font-semibold bg-gray-300 border-2 rounded-md"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
    </div>
  )
}

export default App
