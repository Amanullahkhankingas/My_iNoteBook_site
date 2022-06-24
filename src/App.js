
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

function App() {
  return (
    <div className="App">
         {/* <h1>this is h1</h1> */}


         <NoteState>
         
         

         <BrowserRouter>
          <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      
    </Routes>
  </BrowserRouter>
  </NoteState>
    </div>
  );
}

export default App;
