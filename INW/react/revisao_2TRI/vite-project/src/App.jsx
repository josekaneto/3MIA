import { useState } from 'react';
import './App.css'

function App() {

  const [contador, setContador] = useState(0)

  function handleClick(){
      setContador((estadoAnterior) =>{
        estadoAnterior + 1;
      });
      console.log(contador);
  }
  
  return (
    <>
      <p>{contador}</p>
      <button onClick={handleClick}>aumentar</button>
    </>
  )
}

export default App
