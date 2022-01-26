import React from "react";
import './form.css';
import lock from './assets/lock.svg'
import mail from './assets/mail.svg'

export const Forms = () => {
    return(
        <>
            <p className="form-label">E-mail</p>
            <form className="form-complete">
                <img className='icon' src={mail} alt='mail'/>        
                <input className="form-label" id='input' type='text' size={13}></input>
            </form>
            <p className="form-label">Senha</p>
            <form  className="form-complete">
            <img className='icon' src={lock} alt='mail'/>        
                <input className="form-label" id='input' type='password' size={13}></input>
            </form>

        </>
)}