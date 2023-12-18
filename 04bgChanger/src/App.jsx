import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (

    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xlg bg-white px-4 py-2 rounded-2xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-xlg text-white'
            style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "green" }}>Green</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "Pink" }}>Pink</button>
          <button
            onClick={() => setColor("grey")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "grey" }}>grey</button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "yellow" }}>yellow</button>
          <button
            onClick={() => setColor("salmon")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "salmon" }}>salmon</button>
          <button
            onClick={() => setColor("lavender")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: "lavender" }}>lavender</button>
        </div></div>
    </div>

  )
}

export default App
