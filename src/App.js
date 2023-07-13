// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import Textform from './components/Textform'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";







function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = { <About mode={mode}/>}> </Route>
           
           
          <Route exact path="/" element = {
          <Textform showAlert = {showAlert} heading="Enter the text to analyze below." mode={mode}/>
           }> 
          
          {/* <Textform showAlert = {showAlert} heading="Enter the text to analyze below." mode={mode}/>  */}
           </Route> 
         </Routes> 
      </div>
         </Router> 

      

    </>

  );
}

export default App;
