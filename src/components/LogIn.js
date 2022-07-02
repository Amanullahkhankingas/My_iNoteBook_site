import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
const LogIn = () => {

  //  const history=useHistory();
    
    const [credentials,setCredentials] =useState({email:'',password:''})
    
    const handleSubmit= async(e)=>{

        e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          
        },
       
       
        body:JSON.stringify({email:credentials.email,password:credentials.password})
      })
     
    
    const  user= await response.json()
     console.log(user)
    if(user.success){
      //save the authentication token and redirect
      localStorage.setItem('token',user.userToken)
      // history.push("/")
    }
    else{
      alert("Wrong password or email")
    }


     

    }


    const handlechange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div>
      {/* this is the login page */}

      <form  onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="email" className="form-label">Emaill address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handlechange} value={credentials.email} aria-describedby="emailhelp"/>
            <div id="emailHelp" className="form-text">we will never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handlechange} value={credentials.password} aria-describedby="emailhelp"/>
            
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    </div>
  )
}

export default LogIn
