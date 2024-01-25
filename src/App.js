
import './App.css';
import { useState } from 'react';
import React from 'react'      
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { Switch ,Route } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      showAlert("Dark Mode is Enable","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enable","success");
    }
  }
  const togglegreyMode=()=>{
    if(mode==='light'){
      setmode('secondary');
      document.body.style.backgroundColor="grey";
      showAlert("Grey Mode is Enable","light");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enable","success");
    }
  }
  const toggleGreenMode=()=>{
    if(mode==='light'){
      setmode('success');
      document.body.style.backgroundColor="green";
      showAlert("Green Mode is Enable","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enable","success");
    }
  }
  const toggleRedMode=()=>{
    if(mode==='light'){
      setmode('danger');
      document.body.style.backgroundColor="black";
      showAlert("Red Mode is Enable","danger");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enable","success");
    }
  }

  return (
    <>
    <Router>
<Navbar title="Coderx" about='About' mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode} togglegreyMode={togglegreyMode} />
<Alert alert={alert}/>
<div className="container">
<Routes>
          <Route  exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Text Box" mode={mode} toggleMode={toggleMode} showAlert={showAlert} toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode} togglegreyMode={togglegreyMode} setAlert={setAlert}/>} />
        </Routes>
</div>
    </Router>
    </>
  );
}

export default App;
