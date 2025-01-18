import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeddingInvitation from './WeddingInvitation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WeddingInvitation/>
    </>
  )
}

export default App
