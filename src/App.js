import './App.css';
import Alert from './Components.js/Alert';
import Clock from './Components.js/Clock';
import Navbar from './Components.js/Navbar';
import Textform from './Components.js/Textform';
import React, { useState } from 'react'


function App() {

  const [color, setColor] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type 
    })

  }

  const changeColor = () => {
    console.log("sueess")
    if (color === "light") {
      setColor("dark")
      document.body.style.backgroundColor = "#4D3436"
      setText("Disable Dark Mode")
      showalert("Dark mode has been enabled", "success")
     
      setTimeout(() => {
        showalert("");
      }, 1500);
    } else {
      setColor("light")
      setText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showalert("Dark mode has been disbled", "success")
      setTimeout(() => {
        showalert("");
      }, 1500); 

    } 

  } 

 


  return (

    <>
    <Navbar titles="Text Analyzer" mode={color} toggle={changeColor} Text={text} />
      <Alert alert={alert} />
      <div className="container">
        <Textform heading="Convert Your Text" mode={color} Alert={alert} showAlert={showalert} />
      </div> 

      
    </> 

  );
}

export default App;
