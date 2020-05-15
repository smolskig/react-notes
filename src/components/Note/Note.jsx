import React from 'react'
import './Note.css'

import {FaTimes} from 'react-icons/fa';


export default props =>{
    return(
    <div className="note">
        <div className="title">
            <span>{props.noteTitle}</span>
            <span className="closeBtn" onClick={()=>props.handleNoteRemove()}>
                <FaTimes/>
            </span>
        </div>
        <div className="description">
            <span>{props.desc}</span>
        </div>
    </div>
)}
