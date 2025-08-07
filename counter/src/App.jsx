import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);

  const addValue = () => {
    console.log("value added",Math.random());
    setCounter(counter+1);
  }


  return (
    <>
      <h1>Counter </h1>

      <h2>Counter value:{counter}</h2>
      <button
        onClick={addValue}
        >Add value</button>
      <br />
      <br />
      <button
        onClick={() => {
          if(counter>0){
            setCounter(counter-1);
          }
        }}
        >Remove value</button>
    </>
  )
}

export default App
