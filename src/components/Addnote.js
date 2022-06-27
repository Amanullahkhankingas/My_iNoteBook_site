import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from './context/notes/noteContext';

const Addnote = () => {


    const context = useContext(noteContext);
    const {addNote} =context

  const [userInputNote,setUserInputNote] = useState({title:"",description:"",tag:""})


  
  
  const handlechange=(e)=>{
      
      setUserInputNote({...userInputNote, [e.target.name]: e.target.value })
      console.log(userInputNote)
    }
    
    const handleclick=(e)=>{
      // e.preventDefault();
            addNote(userInputNote.title,userInputNote.description,userInputNote.tag)
            // addNote(userInputNote.tag,userInputNote.title)
    };

  return (
    <div>
      <div className='container my-4'>
        <h1>Add a Notes</h1>
        <form className='my-4'>
          <div className='mb-3'>
            <label htmlFor="title" className='form-label'>title</label>
            <input type="text" className='form-control' id='title' name='title'   onChange={handlechange}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="description" className='form-label'>description</label>
            <input type="text" className='form-control' id='description' name='description' onChange={handlechange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="tag" className='form-label'>
                tag</label>
            <input type="text" className='form-control' id='tag' name='tag' onChange={handlechange} />
          </div>
         
          <button type='submit' className='btn btn-primary' onClick={handleclick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default Addnote
