import React,{useState} from 'react'

import {FaPaperPlane} from 'react-icons/fa';
import './ModalContent.css'

export default (props) => {
    const [values,setValues]=useState(
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
    function clearFields() {
        props.sendValues(values)
        setValues({title: '',description: ''})
    }
    return (
        <div className="modal-content">
            <input type="text" className="titleField" value={values.title} onChange={registerTitle} placeholder="Insira o Título aqui" />
            <textarea className="descriptionField" value={values.description} onChange={registerDescription} placeholder="O que deseja anotar ?" />
            <button className="btn" onClick={() => clearFields() } >
                <FaPaperPlane></FaPaperPlane>
            </button>
        </div>
    )
}