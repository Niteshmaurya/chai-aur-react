import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <h1>Custom App Created By Nitesh  </h1>
  )
}

const otherElement  = (
    <a href="https://www.google.com/" target ="_blank">Visit Google</a>
)  

const anotherUser = " chair aur Nitesh"
const reactElement = React.createElement(      // this is defined by react facebook developers
    'a',
    {href : "https://www.google.com/", target : 'blank'},
    'click me to visit google',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  reactElement
  <App/>
  <MyApp/>
  </>


)    
