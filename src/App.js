
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

function App() {
  return (
    <div className="App">
         {/* <h1>this is h1</h1> */}


         
         
         

         {/* <BrowserRouter>
    <Routes>
      
      <Route exact path="/about" ><Home/>
      <Route exact path="/about" ><Navbar/>
      <Route exact path="/about" ><About/>
      
    </Routes>
  </BrowserRouter> */}
         <BrowserRouter>
          <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
