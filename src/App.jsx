import { useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const data = useSelector((state)=>{
    return state.show.value;
  })

  return (
    <div style={{display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "black",
      color: "white",
      flexDirection: "column",
      gap: "20px",
    }}>
     <h1>App Value = {data}</h1>
     <Child1  />
     <hr />
     <Child2 />
    </div>
  )
}

export default App
