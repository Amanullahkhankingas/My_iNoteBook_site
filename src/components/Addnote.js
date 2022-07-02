import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from './context/notes/noteContext';

const Addnote = (props) => {


    const context = useContext(noteContext);
    const {addNote} =context

  const [userInputNote,setUserInputNote] = useState({title:"",description:"",tag:""})

  
  
  const handlechange=(e)=>{
      
      setUserInputNote({...userInputNote, [e.target.name]: e.target.value })
      // console.log(userInputNote)
    }
    
    const handleclick=(e)=>{
      e.preventDefault();
            // addNote(userInputNote.title,userInputNote.description,userInputNote.tag)
            addNote(userInputNote)
            setUserInputNote({title:"",description:"",tag:""})

            props.renderAlert("success","Added Note Successfully")
    };

  return (
    <div>
      <div className='container my-4'>
        <h1>Add a Notes</h1>
        <form className='my-4'>
          <div className='mb-3'>
            <label htmlFor="title" className='form-label'>title</label>
            <input type="text" className='form-control' id='title' name='title'  value={userInputNote.title}   onChange={handlechange}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="description" className='form-label'>description</label>
            <input type="text" className='form-control' id='description' name='description' value={userInputNote.description} onChange={handlechange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="tag" className='form-label'>
                tag</label>
            <input type="text" className='form-control' id='tag' name='tag' value={userInputNote.tag} onChange={handlechange} />
          </div>
         
          <button type='submit' disabled={userInputNote.title.length <3 || userInputNote.description.length <5} className='btn btn-primary' onClick={handleclick}>Add Note</button>
          {/* <button type='submit'  className='btn btn-primary' onClick={handleclick}>Add Note</button> */}

        </form>
      </div>
    </div>
  )
}

export default Addnote
