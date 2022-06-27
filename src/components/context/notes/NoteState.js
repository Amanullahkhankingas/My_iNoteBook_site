import React, { useState } from 'react';
// import React  from 'react';
import noteContext from './noteContext';

// npm install cors 





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
      'Contect-Type':'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOTdkY2U2OWFlOTQyYTJjYjcyY2UxIn0sImlhdCI6MTY1NjMyMzUzNX0.Nkf8TPcN7TzZ1rWos5Gjo_PkpFQ9iQn0iYZI_nl8sW8'
    },
  });
  const json =await response.json()
  console.log("json")
  setNotes(json)
   
}


    
    //functionality to add user note to the data base  with the id of the user ,which user is giving requiest
    const addNote = async (title,description,tag)=>{
      // To Do API Call 

   // API Call 
      // const response = await fetch(`${host}/api/notes/createNotes`,{
      //   method:'POST',
      //   headers:{
      //     'Contect-Type':'application/json',
      //     'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOTdkY2U2OWFlOTQyYTJjYjcyY2UxIn0sImlhdCI6MTY1NjMyMzUzNX0.Nkf8TPcN7TzZ1rWos5Gjo_PkpFQ9iQn0iYZI_nl8sW8'
      //   },
      //   body: JSON.stringify({title,description,tag})

      // });
      // const json =response.json()
      
    //   const  note=response.json()
    //   setNotes(notes.concat(note))



    //  //client site

      const userAddNote = {
        "_id": "88b5b0ebfc54526eegfg3ea4a95",
        "user": "62b55c82d6e8fd8eca58cc30",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-06-24T12:41:15.097Z",
        "__v": 0
      };
      
      setNotes(notes.concat(userAddNote))
      console.log(title)
      
    }
    






    //functionality to delete user note from the data base ,user only delete its own notes and can not delete other user notes
    const deleteNote=async(id)=>{
     
      
 // API Call 
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`,{
        method:'DELETE',
        headers:{
          'Contect-Type':'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiOTdkY2U2OWFlOTQyYTJjYjcyY2UxIn0sImlhdCI6MTY1NjMyMzUzNX0.Nkf8TPcN7TzZ1rWos5Gjo_PkpFQ9iQn0iYZI_nl8sW8'
        },
       
      });
      const json =response.json()
      console.log(json)




      // console.log("ths id of the delete note is " + id)
      const newNote= notes.filter((note)=>{ return note._id !== id})
      setNotes(newNote)
      
    }


    //functionality to delete user note from the data base ,user only delete its own notes and can not delete other user notes
          //  Edit Note of hte user 

    // const editNote= async({id,title,description,tag})=>{

    //   // API Call 
    //   const response = await fetch(`${host}/api/notes//updatenotes/${id}`,{
    //     method:'POST',
    //     headers:{
    //       'Contect-Type':'application/json',
    //       'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNTVjODJkNmU4ZmQ4ZWNhNThjYzMwIn0sImlhdCI6MTY1NjA1MzQ1NH0.oUaV4lDl8DnPXZBlWRQPSS0JwJAYZrnEn6bXPT8-WVw'
    //     },
    //     body: JSON.stringify(title,description,tag)
    //   });
      // const json =response.json()
   
       

      // Logic to edit in clint site
      // const newNotes=JSON.parse(JSON.stringify(notes))
      // for (let index = 0; index < newNotes.length; index++) {
      //   const element = newNotes[index];
      //   if(element._id===id) {
      //     newNotes[index].title=title,
      //     newNotes[index].description=description,
      //     newNotes[index].tag=tag
      //     break;
      //   }
      //   setNotes(newNotes)
        
      // }
    // }
  return (
    <div>
      
      {/* <noteContext.Provider value={{state, update_the_state}} > */}
      {/* <noteContext.Provider value={{notes,addNote,deleteNote,editNote,GetAllNoteFromDatabase}} > */}
      <noteContext.Provider value={{notes,addNote,deleteNote,databasenotes}} >
        {props.children}
      </noteContext.Provider>
    </div>
  )
}

export default NoteState
