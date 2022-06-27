import { useContext, useEffect,useRef ,useState} from 'react'
import Addnote from './Addnote';
import noteContext from './context/notes/noteContext';
import Noteitems from './Noteitems';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes,databasenotes ,editNote} =context

    useEffect(()=>{

    databasenotes()
      // eslint-disable-next-line
    },[])

    // lecture 66
    const [userUpdateNote,setUserUpdateNote]=useState({etitle:'',edescription:'',etag:''})

    const ref =useRef(null)
    
    const updateNote=(currentNote)=>{
      setUserUpdateNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
      ref.current.click();
    }


    const handlechange=(e)=>{
      
      setUserUpdateNote({...userUpdateNote, [e.target.name]: e.target.value })
      // console.log(userUpdateNote)
    }
    
    const handleclick=(e)=>{
      e.preventDefault();
            editNote(userUpdateNote.etitle,userUpdateNote.edescription,userUpdateNote.etag)
         
    };
    // lecture 66


  return (
      <>

      {/* for lecture 66 */}


       <button type='button' className='btn btn-primary' data-bs-target='#exampleModal'>
        Launch demo modal
       </button>

       <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog' >
          <div className='modal-content'>
            <div className='modal header'>
              <h5 className='modal-title' id='exampleModalLabel'>Edit Note</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
            
            <form className='my-4'>
          <div className='mb-3'>
            <label htmlFor="etitle" className='form-label'>title</label>
            <input type="text" className='form-control' id='etitle' name='etitle' value={userUpdateNote.etitle}  onChange={handlechange}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="edescription" className='form-label'>description</label>
            <input type="text" className='form-control' id='edescription' name='edescription' value={userUpdateNote.edescription} onChange={handlechange} />
          </div>
          <div className='mb-3'>
            <label htmlFor="etag" className='form-label'>
                tag</label>
            <input type="text" className='form-control' id='etag' name='etag' value={userUpdateNote.etag} onChange={handlechange} />
          </div>
         
          
        </form>

            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary' onClick={handleclick} >UpdateNote</button>
            </div>
          </div>
        </div>
       </div>

      {/* for lecture 66 */}
              <Addnote/>
      <div className='row my-3'>
        <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <Noteitems key={note._id} updateNote={updateNote} note={note}/>
        })}
      </div>
         
       </>
      
    
  )
}

export default Notes
