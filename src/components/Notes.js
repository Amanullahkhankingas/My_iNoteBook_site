import { useContext, useEffect,useRef ,useState} from 'react'
// import { useContext, useEffect, useState } from 'react'
import Addnote from './Addnote';
import noteContext from './context/notes/noteContext';
import Noteitems from './Noteitems';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Notes = (props) => {

  const navigate=useNavigate();

         const {renderAlert} = props;

  const context = useContext(noteContext);
  const { notes, databasenotes, editNote } = context

  useEffect(() => {

    if(localStorage.getItem("token")){

      databasenotes();
    }
    else{
      // navigate("/login")
      navigate("/Firstlogin")
    }

    // databasenotes();

    // eslint-disable-next-line


  })
  // }, [])

  // lecture 66
  // const [userUpdateNote,setUserUpdateNote]=useState({etitle:'',edescription:'',etag:''})
  const [userUpdateNote, setUserUpdateNote] = useState({title:"",description:"",tag:""})

  const ref =useRef(null);
  const refClose =useRef(null);

  const updateNote = (currentNote) => {
    // setUserUpdateNote({eid:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    setUserUpdateNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag })
    ref.current.click();
    // console.log(currentNote + "updatenote fuction")
  }
  
  
  const handlechange = (e) => {
    
    setUserUpdateNote({ ...userUpdateNote, [e.target.name]: e.target.value })
    // console.log(userUpdateNote)
  }
  
  const handleClickUpdateNote = (e) => {
    e.preventDefault();
    editNote(userUpdateNote)
    refClose.current.click();

    // editNote({id:userUpdateNote.id, title:userUpdateNote.title, description:userUpdateNote.description, tag:userUpdateNote.tag})
    // console.log(userUpdateNote._id, userUpdateNote.title, userUpdateNote.description, userUpdateNote.tag)
    // console.log(userUpdateNote.id)


    props.renderAlert("success","Updated Note Successfully")

  };
  // lecture 66


  return (
    <>

      {/* for lecture 66 */}


     


      
      <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form className='my-4'>
                <div className='mb-3'>
                  <label htmlFor="etitle" className='form-label'>title</label>
                  <input type="text" className='form-control' id='title' name='title' value={userUpdateNote.title} onChange={handlechange} />
                </div>
                <div className='mb-3'>
                  <label htmlFor="edescription" className='form-label'>description</label>
                  <input type="text" className='form-control' id='description' name='description' value={userUpdateNote.description} onChange={handlechange} />
                </div>
                <div className='mb-3'>
                  <label htmlFor="etag" className='form-label'>
                    tag</label>
                  <input type="text" className='form-control' id='etag' name='tag' value={userUpdateNote.tag} onChange={handlechange} />
                </div>


              </form>


            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClickUpdateNote}>Edit Note</button>
            </div>
          </div>
        </div>
      </div>

      {/* for lecture 66 */}
      <Addnote renderAlert={renderAlert}/>
      <div className='row my-3'>
        <h1>Your Notes</h1>
        <div className='container mx-2 my-3 text-danger'>
          {notes.length === 0 && 'You have Nathing'}
        </div>
        {notes.map((note) => {
          return <Noteitems key={note._id} updateNote={updateNote} note={note} renderAlert={renderAlert} />
        })}
      </div>

    </>


  )
}

export default Notes
