import { useState } from 'react'
import BallAnimation from './BallAnimation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BallAnimation />
    </>
  )
}

export default App
