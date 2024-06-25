import React from 'react'
import SubChild1 from './SubChild1'
import { useSelector, useDispatch } from 'react-redux'
import { divide } from '../features/showSlice'


const Child1 = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    return state.show.value;
  })
  return (
    <div>
      <h1>Child1 - value is = {data}</h1>

      <button onClick={()=>dispatch(divide())}>Devide by 2</button>

        <SubChild1 />
    </div>
    

  )
}

export default Child1