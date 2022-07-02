import React, { useState } from 'react';
// import React  from 'react';
import noteContext from './noteContext';
// npm install cors 
// import axios from 'axios';




const NoteState = (props) => {
  
  // let notesinitial =[
  //   {
  //     "_id": "62b5b0e9fc54526ee3ea4a93",
  //     "user": "62b55c82d6e8fd8eca58cc30",
  //     "title": "javad vala",
  //     "description": "javad kay private notes hay ya",
  //     "tag": "javad is my classmate",
  //     "date": "2022-06-24T12:41:13.279Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "62b5b0ebfc54526ee3ea4a95",
  //     "user": "62b55c82d6e8fd8eca58cc30",
  //     "title": "javad vala",
  //     "description": "javad kay private notes hay ya",
  //     "tag": "javad is my classmate",
  //     "date": "2022-06-24T12:41:15.097Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "62b5b0eb21fc54526ee3ea4a95",
  //     "user": "62b55c82d6e8fd8eca58cc30",
  //     "title": "javad vala",
  //     "description": "javad kay private notes hay ya",
  //     "tag": "javad is my classmate",
  //     "date": "2022-06-24T12:41:15.097Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "62b5b0eb4334fc54526ee3ea4a95",
  //     "user": "62b55c82d6e8fd8eca58cc30",
  //     "title": "javad vala",
  //     "description": "javad kay private notes hay ya",
  //     "tag": "javad is my classmate",
  //     "date": "2022-06-24T12:41:15.097Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "62b5b0ebfc345354526ee3ea4a95",
  //     "user": "62b55c82d6e8fd8eca58cc30",
  //     "title": "javad vala",
  //     "description": "javad kay private notes hay ya",
  //     "tag": "javad is my classmate",
  //     "date": "2022-06-24T12:41:15.097Z",
  //     "__v": 0
  //   },
  // ];


  // const [notes, setNotes]= useState(notesinitial);
 
  const notesinitial=[];
  const [notes, setNotes]= useState(notesinitial);



    const host = "http://localhost:5000"


    //get all notes form database of the login user 'hit the backend api call from browser and fetching notes by user id, we pass a user login token in header and take id from its  '
    
    const databasenotes = async ()=>{

   // API Call 
   const response = await fetch(`${host}/api/notes/fetchallnotes`,{

    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDRjNTg0M2ViMDcwNWVlMzgzNTA1In0sImlhdCI6MTY1Njc4NzcxNH0.W1Ll7JNj7JHkMJ31ZdO_fqlZe5cHoI1tuJhtywIoHpk'
    }
  });
  const json =await response.json()
  // console.log("json")
  setNotes(json)
   
}


    
    //functionality to add user note to the data base  with the id of the user ,which user is giving requiest
    const addNote = async(userInputNote) => {
   

      // const note = await axios.post('http://localhost/api/notes/createNotes', {'title':'title', 'description':'description', 'tag':'tag'})
      // .then((res)=>{
      //   console.log(res)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })

      
    
  //     // To Do API Call 

  //  // API Call 
  // const response = await fetch(`http://localhost:5000/api/notes/createNotes`,{
      const response = await fetch(`${host}/api/notes/createNotes`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDRjNTg0M2ViMDcwNWVlMzgzNTA1In0sImlhdCI6MTY1Njc4NzcxNH0.W1Ll7JNj7JHkMJ31ZdO_fqlZe5cHoI1tuJhtywIoHpk'
          },
         
          // body:JSON.stringify({title:title, description:description, tag:tag})
            // body:JSON.stringify({title:userInputNote.title, description:userInputNote.description, tag:userInputNote.tag})
          body:JSON.stringify(userInputNote)
        })
       
      
      const  note= await response.json()
      setNotes(notes.concat(note))



    //  //client site

      // const userAddNote = {
      //   "_id": note._id,
      //   "user": note.user,
      //   "title": note.title,
      //   "description": note.description,
      //   "tag": note.tag,
      //   "date": "2022-06-24T12:41:15.097Z",
      //   "__v": 0
      // };
      
      // setNotes(notes.concat(userAddNote))

      // console.log(note.title + " this is the title")
      
    };
    






    //functionality to delete user note from the data base ,user only delete its own notes and can not delete other user notes
    const deleteNote=async(id)=>{
     
      
 // API Call 
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDRjNTg0M2ViMDcwNWVlMzgzNTA1In0sImlhdCI6MTY1Njc4NzcxNH0.W1Ll7JNj7JHkMJ31ZdO_fqlZe5cHoI1tuJhtywIoHpk'
        },
       
      });
      const json =await response.json()
      console.log(json)




      // console.log("ths id of the delete note is " + id)
      const newNote= notes.filter((note)=>{ return note._id !== id})
      setNotes(newNote)
      
    }


    //functionality to delete user note from the data base ,user only delete its own notes and can not delete other user notes
          //  Edit Note of the user 

    
    const editNote= async(updateNote)=>{
      // console.log(id)

      // API Call 

        // console.log(updateNote)

      const response = await fetch(`${host}/api/notes/updatenotes/${updateNote.id}/`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDRjNTg0M2ViMDcwNWVlMzgzNTA1In0sImlhdCI6MTY1Njc4NzcxNH0.W1Ll7JNj7JHkMJ31ZdO_fqlZe5cHoI1tuJhtywIoHpk'
          },
            body:JSON.stringify({title:updateNote.title, description:updateNote.description,tag:updateNote.tag})
        })
       
      const  note=await response.json()
        console.log(note)
        

      

   
      //  const [newNote,setNewNote] = useState(note)

      // Logic to edit in clint site
      const newNotes=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
          if(element._id===updateNote.id) {
            newNotes[index].title=updateNote.title
            newNotes[index].description=updateNote.description
            newNotes[index].tag=updateNote.tag
            break;
          }
        setNotes(newNotes)
        
      }
    }
  return (
    <div>
      
      {/* <noteContext.Provider value={{state, update_the_state}} > */}
      {/* <noteContext.Provider value={{notes,addNote,deleteNote,editNote,GetAllNoteFromDatabase}} > */}
      <noteContext.Provider value={{notes, addNote, deleteNote, editNote, databasenotes}} >
        {props.children}
      </noteContext.Provider>
    </div>
  )
}

export default NoteState
