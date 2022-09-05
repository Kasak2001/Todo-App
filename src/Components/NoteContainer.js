import React, {useEffect} from 'react'
import Note from './Note'
import '../Components/NoteContainer.css'

const NoteContainer = (props) => {

    return (
        <div className='note_container'>
            <h2 className='heading'>Notes</h2>
            <div className='note_container_notes'>
                {
                    (props.noteSend.length === 0) ? <h2>No notes present</h2>: props.noteSend.map((val, index) => {
                        return (
                            <Note key={val.id} 
                            note={ val}
                            delNote = {props.delNote}
                             />
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default NoteContainer
