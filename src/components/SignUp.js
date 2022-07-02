import React ,{useState} from 'react'
// import { useHistory } from 'react-router-dom'

const SignUp = (props) => {

  // const history= useHistory();

  const [createUserCredentials,setCreateUserCredentials] =useState({name:'',email:'',password:'',conformPassword:''})
  
    
  const handleSubmit= async(e)=>{

      e.preventDefault();
      // const {name, email,password} =createUserCredentials

  const response = await fetch(`http://localhost:5000/api/auth/createUser`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        
      },
     
     
      body:JSON.stringify({name:createUserCredentials.name, email:createUserCredentials.email,password:createUserCredentials.password})
    })
   
  
  const  CreateUserResponse= await response.json()
   console.log(CreateUserResponse)
  if(CreateUserResponse.success){
    //save the authentication token and redirect
    localStorage.setItem('token',CreateUserResponse.userToken)
    // history.push("/")
    props.renderAlert("success","Create your account Successfully")
  }
  else{
    // alert("Invaled credentials")
    props.renderAlert("danger","Invaled details - Provide right information")
  }
  
  console.log(CreateUserResponse.success)

   

  }


  const handlechange=(e)=>{
      setCreateUserCredentials({...createUserCredentials,[e.target.name]:e.target.value})
  }
  return (
    <div>

      
<form  onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={handlechange} value={createUserCredentials.name} />
           
        </div>
        <div className='mb-3'>
            <label htmlFor="email" className="form-label">Emaill address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handlechange} value={createUserCredentials.email} aria-describedby="emailhelp"/>
            <div id="emailHelp" className="form-text">we will never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handlechange} value={createUserCredentials.password} minLength='5' required />
            
        </div>
        <div className='mb-3'>
            <label htmlFor="conformPassword" className="form-label">Conform Password</label>
            <input type="password" className="form-control" id="conformPassword" name="conformPassword" onChange={handlechange} value={createUserCredentials.conformPassword} minLength='5' required />
            
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

      {/* this is the signup page */}
    </div>
  )
}

export default SignUp
