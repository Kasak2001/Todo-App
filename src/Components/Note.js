import React from 'react'
import '../Components/Note.css'

const Note = (props) => {
  return (
    <div className='note' style={{background: props.note.color}}>
      <textarea className='note_text' defaultValue={props.note.text}></textarea>
      <div className='footer'>
      <p>{props.note.time}</p>
      <i className="fa-solid fa-circle-minus del" onClick={()=> props.delNote(props.note.id)}></i>
      </div>
    </div>
  )
}

export default Note
