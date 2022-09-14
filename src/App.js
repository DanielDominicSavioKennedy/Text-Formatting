import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App(){
  const [mode,setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
        setMode("dark")
        document.body.style.backgroundColor='#231a56'
        showAlert("Dark mode has been enabled","success")
    }
    else{
        setMode("light")
        document.body.style.backgroundColor='white'
        
        showAlert("light mode has been enabled","success")
    }
  }
  const [alert,setAlert]=useState(null)

  const showAlert=(msg,type)=>{
                  setAlert({
                    msg:msg,
                    type:type
                  })
                  setTimeout(() => {
                    setAlert(null)
                  }, 1500)

  }

  return(
<>
<Navbar title="Text Editor" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}></Alert>
<Textform name="Enter Text" showAlert={showAlert} mode={mode} />
<About/>
</>
);
}
export default App;