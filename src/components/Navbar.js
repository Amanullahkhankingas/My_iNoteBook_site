import React from 'react'
import {Link,useLocation} from "react-router-dom";
// import { useEffect } from 'react';
import {useNavigate} from "react-router-dom"



const Navbar = () => {
const navigate= useNavigate();

  let Location = useLocation();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }

  // useEffect(()=>{
  //   console.log(Location.pathname)
  // },[Location])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${Location.pathname === "/"?"active" :""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${Location.pathname === "/about"?"active " :""}`}   to="about">About</Link>
        </li>
        
        
      </ul>
      
    </div>
   {/* <div className='d-flex'>
    <Link className="btn btn-primary mx-1 " role="button" to="/signup">Sign UP</Link>
    <Link className="btn btn-primary mx-1" role="button" to="/login">Log In</Link>
   </div> */}
   {!(localStorage.getItem('token'))?<div className='d-flex'>
    <Link className="btn btn-primary mx-1 " role="button" to="/signup">Sign UP</Link>
    <Link className="btn btn-primary mx-1" role="button" to="/login">Log In</Link>
   </div> : <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
  </div>
</nav>
    </div>
  )
}

export default Navbar
