// import React, { useState } from 'react';
import React  from 'react';
import noteContext from './noteContext';



const NoteState = (props) => {

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
      <noteContext.Provider value={{}} >
        {props.children}
      </noteContext.Provider>
    </div>
  )
}

export default NoteState
