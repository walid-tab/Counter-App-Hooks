import { useEffect, useState } from 'react';
import Counter from './Components/Counter'
function App() {
  const [show,setShow]=useState(true)
  useEffect(()=>{
    console.log('Component did update')
  },[show])
  return (
    <div className="App">
        <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
      {show && <Counter/>}
    </div>
  );
}

export default App;
