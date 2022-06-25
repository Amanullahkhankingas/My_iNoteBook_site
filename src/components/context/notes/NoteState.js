import React, { useState } from 'react';
// import React  from 'react';
import noteContext from './noteContext';





const NoteState = (props) => {
  
  let notesinitial =[
    {
      "_id": "62b5b0e9fc54526ee3ea4a93",
      "user": "62b55c82d6e8fd8eca58cc30",
      "title": "javad vala",
      "description": "javad kay private notes hay ya",
      "tag": "javad is my classmate",
      "date": "2022-06-24T12:41:13.279Z",
      "__v": 0
    },
    {
      "_id": "62b5b0ebfc54526ee3ea4a95",
      "user": "62b55c82d6e8fd8eca58cc30",
      "title": "javad vala",
      "description": "javad kay private notes hay ya",
      "tag": "javad is my classmate",
      "date": "2022-06-24T12:41:15.097Z",
      "__v": 0
    }
  ];
  let [note, setNote]= useState(notesinitial);

    // let s1 = {
    //     "name":"killer",
    //     "age":"22 year old"
    // }

    // const update_the_state =()=>{
    //    setTimeout(() => {
    //     setState({
    //         "name":"shabaz",
    //         "age":"15 year old"
    //     })
    //    }, 2000);
    // }

    // const [state, setState] = useState(s1)
  return (
    <div>
      
      {/* <noteContext.Provider value={{state, update_the_state}} > */}
      <noteContext.Provider value={{note,setNote}} >
        {props.children}
      </noteContext.Provider>
    </div>
  )
}

export default NoteState
