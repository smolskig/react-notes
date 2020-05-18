import React,{useState} from 'react'
import './Note.css'

import { FaTimes, FaArrowLeft} from 'react-icons/fa';

export default props =>{
    const [customClass,setCustomClass] = useState('note')
    const [values,setValues] = useState (
        {
            title: '',
            description: ''
        })

    function registerTitle(e) {
        setValues({title: e.target.value,description: values.description})
    }
    function registerDescription(e) {
        setValues({title: values.title,description: e.target.value})
    }

    function openNote(){
        setCustomClass('note noteOpen')
    }
    function closeNote(){
        setCustomClass('note')
        return props.sendValues(values)
    }

    function templateTitle(){
        if(customClass === 'note noteOpen'){
            return (
                <>
                    <input type="text" className="titleField" value={values.title} onChange={registerTitle} placeholder="Insira o Título aqui" />
                        <span className="closeBtn" onClick={closeNote}>
                            <FaArrowLeft/>
                        </span>
                </>
            )
        }else{
            return (
                <>
                    <span>{props.noteTitle}</span>
                    <span className="closeBtn" onClick={()=> props.handleNoteRemove()}>
                        <FaTimes/>
                    </span>
                </>
            )
        }
    }
    function templateDescription(){
        if(customClass === 'note noteOpen'){
            return (
                <div className="description"  onClick={openNote}>
                    <textarea className="descriptionField" value={values.description} onChange={registerDescription} placeholder="O que deseja anotar ?" />
                </div>
            )
        }else{
            return (
                <div className="pd description"  onClick={openNote}>
                    <span>{props.desc}</span>
                </div>
            )
        }
    }

    return(
    <div className={customClass}>
        <div className="title"> 
            {
                templateTitle()
            }
        </div>
            {
                templateDescription()
            }
    </div>
)}
