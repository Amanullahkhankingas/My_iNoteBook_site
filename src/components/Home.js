import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <h1>this is home</h1> */}
      <div className='container my-4'>
        <h1>Add a Notes</h1>
        <form className='my-4'>
          <div className='mb-3'>
            <label for="exampleInputEmail1" className='form-label'>Email adress</label>
            <input type="email" className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
            <div id='emailHelp' className='form-text'>We'll never share your email with anyone else</div>
          </div>
          <div className='mb-3'>
            <label for="exampleInputPassword1" className='form-label'>Password</label>
            <input type="password" className='form-control' id='exampleInputpassword1' />
          </div>
          <div className='mb-3 form-check'>
            <input type="checkbox" className='form-check-input' id='examplecheck1' />
            <label for="examplecheck1" className='form-check-label'>Check me out</label>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <div className='container my-4'>
        <h1>Your Notes</h1>
      </div>
    </div>
  )
}

export default Home
