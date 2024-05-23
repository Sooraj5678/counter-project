import { useState } from 'react'
import './App.css';

function App() {

  let [counter, setcounter] = useState(0)

  let addvalue = () => {

    if (counter ==  20) {
      setcounter(counter = 20)
    }
    else {
      setcounter(counter + 1)

    }
  }
  let removeValue = () => {
    if (counter == 0) { 
      setcounter(counter - 0)
    }

    else {
      setcounter(counter - 1)
    }
  }


  return (
    <div className="App">
      <h1> sooraj presents</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addvalue}>add  me </button>
      <button onClick={removeValue}>remove me </button>
    </div>
  );
}



export default App;
