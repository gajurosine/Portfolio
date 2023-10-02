import React, { useState } from 'react';
import hand from "../../Asset/images/hand2.avif";

function CONTACT(props) {
  const [state, setState] = useState({
    names: '',
    phoneName: '',
    email: '',
    subject: '',
    message: '',
    Submitted: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      Submitted: true,
    }));
  };

  const { names, email, subject, message, phoneName, Submitted } = state;

  return (
    <div className='contact-content'>
      <div className='contact-here'>
        <div className='contacts'>
          {/* <a href='http://localhost:3000/contact'>contact</a>- */}
          <h1 className='contact-head'>Contact</h1>
          <p className='para-contact'>GET IN TOUCH WITH ME</p>
        </div>
        <div className='contact-info'>
          <div className='contact-side1'>
            <div className='contact-hand'>
              <img src={hand} alt='shaking hands' className='shaking-hand' />
            </div>
            <div className='info-contact'>
              <h2 className='contact-head'>Nice to meet you</h2>
              <p className='what-do'>Student at RCA</p>
              <p className='work-info'>
                I am available at every open opportunity and free for freelance work contact via and call me on my contact
              </p>
            </div>
          </div>
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <label >Name</label>
              <input type='text' name='names' value={names} onChange={handleInputChange} required className='name-info' />
              <label className='phone-info'>phoneNumber</label>
              <input type='text' name='phoneName' value={phoneName} onChange={handleInputChange} required  className='name-info'/>
              <label>email</label>
              <input type='text' name='email' value={email} onChange={handleInputChange} required />
              <label>Subject</label>
              <input type='text' name='subject' value={subject} onChange={handleInputChange} required />
              <label>message</label>
              <input type='text' name='message' value={message} onChange={handleInputChange} required className='message-info'/>
              <button type='submit' className='submit-button'>Submit</button>
            </form>
            {Submitted && <div>Message submitted</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CONTACT;
