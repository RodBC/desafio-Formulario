import React from "react";
import './form.css';
import lock from './lock.svg'
import mail from './mail.svg'

export const Forms = () => {
    return(
        <>
            <p className="form-label">E-mail</p>
            <form className="form-complete">
                <img className='icon' src={mail} alt='mail'/>        
                <input className="form-label" id='input' type='text' size={13}></input>
            </form>
            <p className="form-label">Password</p>
            <form  className="form-complete">
                <input className="form-label" id='input' type='text' size={13}></input>
            </form>
        </>
)}