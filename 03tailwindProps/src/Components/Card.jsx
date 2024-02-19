import React from 'react'

function Card({username, clickme}) {
  console.log("Props",username)
  // console.log("apka username hai - ",username)
  return (
    <div className ="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1703237288996-9bb1d3f71a54?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="AirMax Pro"
    className ="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>  
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className ="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {clickme} →
    </button>
  </div>
</div> 
  )
}

export default Card