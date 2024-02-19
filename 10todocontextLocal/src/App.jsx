import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Contexts'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
function App() {
const [todos,setTodos] = useState([])
  

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
  }

  const toggleCompete= (id) =>{
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,compelted:!prevTodo.compelted} : prevTodo))
  }

  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length >0){
      setTodos(todos)
    }
  }, [])
  
useEffect (()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <TodoProvider value = {{todos,addTodo,deleteTodo,updateTodo,toggleCompete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>{
                           <div key={todo.id}
                           className='w-full'>
                            <TodoItem todo={todo}/>

                           </div>
                        })}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

// dekho imp baat ki local storage jo hota hai browser ka jaise setData and getData type to ye kya hota hai ki kabhi bhi na json object ko nahi leta hai aur nahi deta hai  ye sirf string pe kaam karta hai to uspe hi dhyan rakhna hai baki sab to moh maya hai 


// useEffect --> query kar sakta hai local storage se and agar aapko koi function banani hai jo local storage me jake saari values leke aega jo kuch bhi available hai ye sab website ke load hote hi kar deta hai to ise dhyan me rakhna

// CHALO kuch likhte hai kyuki na ye thoda sa problamatic sa ho gaya hai par chal to raha hai actually adat nahi hai na isliye ye sab ho raha hai warna baki sab thik se hi chal raha hai dekhte hai abhi age ka experience kaisa hota hai par hai ab thoda sa to interest aa raha hai dekhte hai age kya hoga mtlb yaha par bhi likha hi sakte hai mai mana nahi kar raha hu lekin agar kuch aur adjustment h to ab dekhna kitna maja aega code karne me bhi aur code sikhne me bhi this is the best position which I have worked till now so it is quite impresive lets see how it will be in future but this is the best position I mean I am very comfortable while typing
// and my back will also strt while typing that's what I wanted to make from many times so that I can code effortlessly so now I am very happy seriosly lets see how It will go in future but I am very i can also lock this this is the lock position 
// now lets learn something and lets try learning redux which is very important now test this one this is also chalo ab batana kaisa laga raha hai kyuki na yaha kuch bhi bol lo ye sahi hai to sahi hai hai ab ispe koi aur baat nahi hogi bas thik hai na isliye chalo code karte hai kyuki ye ek aisa topic hai jispe jitna bhi baat karo kam hi rahega 