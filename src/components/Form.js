import './Formstyle.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your Email" />
            <label>Subject</label>
            <input type="text" placeholder="Enter your Subject" />
            <label>Message</label>
          <textarea rows="6" placeholder='type your message here'/>
          <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form