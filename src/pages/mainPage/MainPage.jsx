import React, {useState} from 'react'

import Modal from 'react-modal';
import Note from '../../components/Note/Note'
import {FaPlus} from 'react-icons/fa';

import './MainPage.css'
import ModalContent from '../../components/ModalContent/ModalContent';


export default (props) => {
    const [modalIsOpen,setIsOpen]=useState(false);
    const [notes,setNotes] = useState([])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function registerValues(values){
        console.log(values)
        setNotes([...notes,values])
    }
    function removeNote(index){
        let tempNotes = notes
        let filtered = tempNotes.filter((note,i)=>{
            return note !== tempNotes[index]
        })
        setNotes(filtered)
    }
    return (
        <div className="home-page">
            
            <div className="note-table">
                {
                    notes.map((note,index) => <Note key={index} noteTitle={note.title} desc={note.description} handleNoteRemove={()=>removeNote(index)}></Note>  )
                }
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <ModalContent sendValues={(values)=>registerValues(values)}></ModalContent>
            </Modal>

            <button onClick={openModal} className="btn">
                <FaPlus size={20} color='#617587' />
            </button>
        </div>
    )
}





