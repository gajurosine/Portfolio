import React, { useState } from 'react';
import hand from "../../Asset/images/hand2.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact(props) {
  const [state, setState] = useState({
    names: '',
    phoneName: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
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
    const { names, phoneName, email, subject, message } = state;
    // Format the email body
    const mailtoLink = `mailto:gajurosine1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\nFrom: ' + names + '\nPhone: ' + phoneName + '\nEmail: ' + email)}`;
    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
    // Set submitted state to true
    setState((prevState) => ({
      ...prevState,
      submitted: true,
    }));
  };

  const { names, email, subject, message, phoneName, submitted } = state;

  return (
    <div className='contact-content'>
      <div className='contact-here'>
        <div className='contacts'>
          <h1 className='contact-head'>Contact</h1>
          <p className='para-contact'>GET IN TOUCH WITH ME</p>
        </div>
        <div className='contact-info'>
          <div className='contact-side1'>
            <div className='contact-hand'>
              <img src={hand} alt='shaking hands' className='shaking-hand' />
            </div>
            <div className='info-contact'>
              <h2 className='contact-head'>Rosine Nzambazamariya </h2>
              <p className='what-do'>Front-end Developer and Embedd Specialist</p>
              <p className='what-do'>
                I am available at every open opportunity and free for freelance work contact via and call me on my contact
              </p>
              <a href='https://www.facebook.com/alia.rosine.3'> <FontAwesomeIcon icon={faFacebook} className='contact-icons'/> </a>
              <a href='https://www.facebook.com/alia.rosine.3'><FontAwesomeIcon icon={faWhatsapp} className='contact-icons' /></a>
              <a href='https://www.instagram.com/r_o_s_i_ne/'><FontAwesomeIcon icon={faInstagram} className='contact-icons' /></a>
              <a href='https://www.linkedin.com/in/gaju-rosine-810728238/'><FontAwesomeIcon icon={faLinkedin}  className='contact-icons'/></a>
            </div>
          </div>
          <div className='contact-form'>
            {submitted ? (
              <div className='submit-message'>Message submitted</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input type='text' name='names' value={names} onChange={handleInputChange} required />
                <label className='phone-info'>Phone Number</label>
                <input type='text' name='phoneName' value={phoneName} onChange={handleInputChange} required  />
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleInputChange} required />
                <label>Subject</label>
                <input type='text' name='subject' value={subject} onChange={handleInputChange} required />
                <label>Message</label>
                <textarea name='message' value={message} onChange={handleInputChange} required className='message-info'/>
                <button type='submit' className='submit-button'>Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
