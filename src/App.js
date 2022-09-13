import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'


function App(){
  const [mode,setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
        setMode("dark")
        document.body.style.backgroundColor='#231a56'
    }
    else{
        setMode("light")
        document.body.style.backgroundColor='white'
    }
  }
  return(
<>
<Navbar title="Text Editor" mode={mode} toggleMode={toggleMode}/>

<Textform name="Enter Text" mode={mode} />


<About/>
</>
);
}
export default App;