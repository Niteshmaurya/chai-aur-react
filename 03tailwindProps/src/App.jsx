import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Nitesh",
    age : 21
  }
let newArr = [1,2,3,4]
  return (
    <>  
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
   <Card username = "chaiAurCode"  anotherObj = {myObj} someObj = {newArr} clickme = "touch Me" />
   <Card username="paris" clickme = "touch Me" />
    </>
  )
}

export default App

