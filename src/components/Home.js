// import React from 'react'
import { useContext } from 'react'
import noteContext from './context/notes/noteContext';

const Home = () => {
  const context = useContext(noteContext);
  const {note,setNote} =context

  return (
    <div>
      {/* <h1>this is home</h1> */}
      <div className='container my-4'>
        <h1>Add a Notes</h1>
        <form className='my-4'>
          <div className='mb-3'>
            <label for="exampleInputEmail1" className='form-label'>Email address</label>
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
        {note.map((note)=>{
          return note.title + " " + note.date + " ,"
        })}
      </div>
    </div>
  )
}

export default Home
