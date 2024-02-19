import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import  Profile from './Components/Profile'
import UserContext from './context/UserContext'


function App() {

  return (
    <UserContextProvider>
      <h1>Why and what </h1>
      <Login/>
       <Profile/>
     </UserContextProvider>
  )
}

export default App
