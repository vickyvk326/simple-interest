import './App.css';
import {useState} from 'react'
function App() {

  const [simpleIntererst, setSimpleInterest] = useState("Principal amount = Rs. 2000, Rate = 5%, Time = 1 year");
  const [principal, setPrincipal] = useState(2000);
  const [rate, setRate] = useState(0.05);
  const [time, setTime] = useState(1);
  const calculate=()=>{
    setSimpleInterest("Rs. "+principal*rate*time)
  }  

  return (
    <div className="App">
      <header className="App-header">
      {simpleIntererst}
      <button onClick={calculate}>  Calculate Simple Intererst   </button>
      </header>
    </div>
  );
}

export default App;