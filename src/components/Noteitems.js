import React from 'react'

const Noteitems = (props) => {
    const {note} =props
    // const noteE =props.note //we can also set props like that
  return (
        <div className='col-md-3'>
    
      {/* {note.title}
      {note.description} */}

      <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{note.title}</h5>
            <p className='card-text'>{note.description}</p>
            <i className='far fa-trash-alt mx-3'></i>
            <i className='far fa-edit mx-3'></i>
            {/* <a href='#' className='btn btn-primary'>Go somewhere</a> */}
        </div>
        </div>
      </div>



   
  )
}

export default Noteitems
