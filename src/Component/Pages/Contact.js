import React, { useState } from 'react';
import hand from "../../Asset/images/hand2.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
              <h2 className='contact-head'>ROSINE NZAMBAZAMARIYA</h2>
              <p className='what-do'>A Front-end Developer</p>
              <p className='what-do'>
                I am available at every open opportunity and free for freelance work contact via and call me on my contact
              </p>
              <a href='https://www.facebook.com/alia.rosine.3'> <FontAwesomeIcon icon={faFacebook} className='conatc-icons'/> </a>
               <a href='https://www.facebook.com/alia.rosine.3'><FontAwesomeIcon icon={faWhatsapp} className='conatc-icons' /></a>
               <a href='https://www.instagram.com/r_o_s_i_ne/'><FontAwesomeIcon icon={faInstagram} className='conatc-icons' /></a>
               <a href='https://www.linkedin.com/in/gaju-rosine-810728238/'><FontAwesomeIcon icon={faLinkedin}  className='conatc-icons'/></a>
            </div>
          </div>
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <label >Name</label>
              <input type='text' name='names' value={names} onChange={handleInputChange} required />
              <label className='phone-info'>phoneNumber</label>
              <input type='text' name='phoneName' value={phoneName} onChange={handleInputChange} required  />
              <label>email</label>
              <input type='text' name='email' value={email} onChange={handleInputChange} required />
              <label>Subject</label>
              <input type='text' name='subject' value={subject} onChange={handleInputChange} required />
              <label>message</label>
              <input type='text' name='message' value={message} onChange={handleInputChange} required className='message-info'/>
              <button type='submit' className='submit-button'>Submit</button>
            </form>
            {Submitted && <div className='submit-message'>Message submitted</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CONTACT;
