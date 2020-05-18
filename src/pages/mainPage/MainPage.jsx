import React, {useState} from 'react'

import Note from '../../components/Note/Note'
import {FaPlus} from 'react-icons/fa';

import './MainPage.css'


export default (props) => {
    const [notes,setNotes] = useState([])

    function registerValues(){
        const defaultValue = {
            title: '',
            description: ''
        }
        setNotes([...notes,defaultValue])
    }
    function removeNote(index){
        let tempNotes = notes
        let filtered = tempNotes.filter((note)=>{
            return note !== tempNotes[index]
        })
        setNotes(filtered)
    }
    function addNote(values,index){
        let tempNotes = notes
        tempNotes[index] = values
        console.log('tempNotes',tempNotes)
        setNotes([...tempNotes])
        
    }
    return (
        <div className="home-page">
            
            <div className="note-table">
                {
                    notes.map((note,index) => <Note key={index} noteTitle={note.title} desc={note.description} handleNoteRemove={()=>removeNote(index)} sendValues={(values)=> addNote(values,index)}></Note>  )
                }
            </div>
            
            <button onClick={registerValues} className="btn">
                <FaPlus size={20} color='#617587' />
            </button>
        </div>
    )
}





