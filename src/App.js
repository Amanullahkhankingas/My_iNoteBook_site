
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './components/context/notes/NoteState';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

import { useState } from 'react';

function App() {
  const [alert,setAlert] = useState(null);

  const renderAlert= (type,message)=>{
    setAlert({type:type, msg:message})
    
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }
  
  return (
    <div className="App">
      {/* <h1>this is h1</h1> */}


      <NoteState>



        <BrowserRouter>
          <Navbar />
          {/* <Alert message={"this is the alert message"}/> */}
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home renderAlert={renderAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp renderAlert={renderAlert} />} />
              <Route path="/login" element={<LogIn renderAlert={renderAlert} />} />
              

            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
