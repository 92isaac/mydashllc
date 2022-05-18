import React, { useState } from 'react'

const Form = () => {
    const [field, setField] =useState({email: '', password:"", confirmPassword:"", name: '', tel:"", checkbox: false,})
  return (
    <form>
    <h1 className="create-account-label">Create an account</h1>
    <div>
        <label>Your email</label>
        <input type="email" className="input" placeholder="" value={field.email} onChange={(e)=>{setField({...field, email:e.target.value})}}/>
    </div>
    <div>
        <label>Your password</label>
        <input type="password" className="input" placeholder="" value={field.password} onChange={(e)=>{setField({...field, password:e.bubbles})}}/>
    </div>
    <div>
        <label>Confirm your password</label>
        <input type="password" className="input" placeholder="" value={field.confirmPassword} onChange={(e)=>{setField({...field, confirmPassword:e.target.value})}}/>
    </div>
    <div>
        <label>Your full name</label>
        <input type="name" className="input" placeholder="" value={field.name} onChange={(e)=>{setField({...field, name:e.target.value})}}/>
    </div>
    <div>
        <label>Your phone number</label>
        <input type="tel" className="input" placeholder="" value={field.tel} onChange={(e)=>{setField({...field, tel: e.target.value})}}/>
    </div>
    <div className='checkbox'>
        <input type="checkbox" value={field.checkbox} onChange={(e)=>{setField({...field, checkbox: true})}}/>
        <label>I read and agrees terms and conditions</label>
    </div>

    <button type="submit" className="btn">Create account</button>

</form>
  )
}

export default Form