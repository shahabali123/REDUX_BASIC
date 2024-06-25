import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addByValue} from '../features/showSlice'

const Child2 = () => {
  const dispatch = useDispatch();
  const [value, setValue]= useState(0)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(value)
    dispatch(addByValue(value))
  }

  return (
    <div>
      <h1>This is Child2</h1>
      <p>The value i want to add is {value}</p>
      

      <form action="" onSubmit={submitHandler}>
      <input 
      type="number"  
      value={value}
      onChange={(event)=>setValue(event.target.value)} />
      <button>Add {value} in store</button>
      </form>  
    </div>
  )
}

export default Child2