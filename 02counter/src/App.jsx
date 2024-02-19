import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)


    // let counter = 15
  
   
  function addValue(){
    // counter++;
    setCounter(counter+1)   // ye batches me divide karta hai isliye ek sath 4 ka addition nahi ho sakega 
    // iska solution hai ki tum prevCounter define karke karo 
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    // console.log(counter)
  }

const removeValue = () =>{
  if(counter<1){
    return <h2>You can not go below 0</h2>
  }
  setCounter(counter -1) 

}
  return (
   <>
   <h1> React Js</h1>
   <h1>Counter value : {counter}</h1>

   <button 
   onClick={addValue}>Add Value {counter}</button> 
    <br />
   <button
   onClick={removeValue}>Remove Value {counter} </button>
   </>
  )
}
   
export default App 
//9326661281 janki maurya
