import {useState} from 'react'
function App() {
  const[calc,setCalc]=useState('')
  const[result,setResult]=useState('')

  const ops=['/','x','-','+','.']

  const UpdateCalc=value=>{
    if(
      ops.includes(value)&&calc===''||
      ops.includes(value)&&ops.includes(calc.slice(-1))
    )
    {
      return
    }
    setCalc(calc+value)
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  const CreateDigits=()=>{
    const digits=[];
    for(let i=1; i<10; i++){
      digits.push(<button onClick={()=>UpdateCalc(i.toString())}key={i}>{i}</button>)
    }
    return digits;
  }
  const Calculater=()=>{
    setCalc(eval(calc).toString());
  }
  const deleteLast=()=>{
    if(calc ===''){
      return;
    }
    const value=calc.slice(0,-1)
    setCalc(value)
  }
  return (
    <div className="App">
     <div className="calculator">
      <div className="display">
        {result ? <span>{result}</span>:''}&nbsp;
        {calc || "0"}
      </div>
      <div className="operator">
         <button onClick={()=>UpdateCalc('/')}>/</button>
         <button onClick={()=>UpdateCalc('x')}>x</button>
         <button onClick={()=>UpdateCalc('-')}>-</button>
         <button onClick={()=>UpdateCalc('+')}>+</button>

         <button onClick={deleteLast}>DEL</button>
      </div>
      <div className="digits">
        {CreateDigits()}
      <button onClick={()=>UpdateCalc('0')}>0</button>
      <button onClick={()=>UpdateCalc('.')}>.</button>

      <button onClick={Calculater}>=</button>
      </div>
     </div>
    </div>
  );
}

export default App;
