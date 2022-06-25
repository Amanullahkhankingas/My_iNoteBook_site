import { useContext } from 'react'
import noteContext from './context/notes/noteContext';
import Noteitems from './Noteitems';

const Notes = () => {

    const context = useContext(noteContext);
    const {note,setNote} =context

  return (
    
          <div className='row my-3'>
        <h1>Your Notes</h1>
        {note.map((note)=>{
          return <Noteitems key={note._id} note={note}/>
        })}
      </div>

      
    
  )
}

export default Notes
