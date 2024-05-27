import React from 'react'
import { useReducer } from 'react'

function Counter() {
  let intialValue = (state,input)=>{
    return state+input 
  }
  let [count,dispatch] = useReducer(intialValue,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(1)
      }} >increase</button>
      {/* <input type="text" ref={data} className='border-pink-500 border-2'/> */}
    </div>
  )
}
    

export default Counter