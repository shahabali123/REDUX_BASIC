import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply } from '../features/showSlice';

const SubChild1 = () => {
  const dispatch = useDispatch();

  const data = useSelector((state)=>{
    return state.show.value;
  })

  return (
    <div>
        <h3>Sub Child Value = {data}</h3>
        <button onClick={()=>dispatch(increment())}>Add one</button>
        <button onClick={()=>dispatch(decrement())}>Minus one</button>
        <button
        onClick={()=>dispatch(multiply())}
        >Multiply by 2</button>
    </div>
  )
}

export default SubChild1
