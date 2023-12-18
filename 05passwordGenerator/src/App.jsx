import { useState,useCallback, useEffect,useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setpassword] = useState("")


  // useRef hook tudum
  const passwordRef = useRef(null)


  const passwordGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str = str + "0123456789"
    if(charAllowed) str = str + "!@#$%^&*()_+=[]{}\|~`"

    for(let i =0;i< length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)
  },[length,numberAllowed,charAllowed,setpassword])


  const copyPasswordToClipBoard = useCallback(()=>{
    let max=50;
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);

    window.navigator.clipboard.writeText(password)
  },[password])

  
  

  // passwordGen()   this doesn't work becasue we are not controllin what to render, it is controlled by setValue,setState    so we use useEffect hook
useEffect(() => {
  passwordGen()
},[length,numberAllowed,charAllowed,passwordGen])

  return (
    <>
      
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 text-3xl bg-gray-800'>
      <h1 className='text-white text-center my-4'>Password generator </h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-1'>
        <input type="text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'   
        readOnly
        ref = {passwordRef}
        /> 
         <button
         onClick={copyPasswordToClipBoard }
         
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        <div className='flex text-sm gap-x-1'>
          <div className='flex item-center gap x-1'>
            <input 
            type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange = {(e)=> {setLength(e.target.value)}}
            /> 
                <br /><label>Length :  { length}</label>
          </div>
          <div className='flex item-center gap-x-1'></div>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          
          id = "numberInput"
          onChange={()=>{
            setnumberAllowed((prev)=> !prev); 
          }} />
          <label htmlFor="numberInput">Numbers</label>

          <div className='flex item-center gap-x-1'></div>
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id = "charInput"
          onChange={()=>{
            setcharAllowed((prev)=> !prev); 
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
