
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
   const [mode,setMode] = useState('light');
   const [alert,setAlert] = useState(null);
   const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type
    })
   }
   const toggleMode = () => {
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("dark mode is on","success");
   }else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode is on","success");

   }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar title = "Text change" aboutText="About form"/> */}
   <Navbar title = "TextChange" mode = {mode}  toggleMode={toggleMode}/>
   <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path="/about"> */}
     {/* <About/> */}
      {/* </Route> */}
    
      {/* <Route exact path="/"> */}
      <TextForm showAlert= {showAlert} heading= " Enter your text" mode = {mode}/>
      {/* </Route> */}
    {/* </Routes> */}
    <Alert alert = {alert}/>  
  
   </div>
   {/* </Router> */}

</>
  );
}

export default App;
