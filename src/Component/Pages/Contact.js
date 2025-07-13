import React, { useState, useRef } from 'react';
import hand from "../../Asset/images/hand2.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 1. Send to Rosine (your admin inbox)
    emailjs.sendForm(
      'service_0virnqi',            // your EmailJS service ID
      'template_z938mzs',           // updated template for admin (Rosine)
      formRef.current,
      'L0Kj-5bp42pe58x9B'           // your public key
    )
    .then((result) => {
      console.log('✅ Message sent to Rosine:', result.text);
    })
    .catch((error) => {
      console.error('❌ Failed to send to Rosine:', error.text);
    });

    // ✅ 2. Send auto-reply to user
    emailjs.sendForm(
      'service_0virnqi',
      'template_w89j9t7',           // auto-reply to sender
      formRef.current,
      'L0Kj-5bp42pe58x9B'
    )
    .then((result) => {
      console.log('✅ Auto-reply sent to user:', result.text);
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('❌ Auto-reply failed:', error.text);
      alert("Message failed to send. Please try again.");
    });
  };

  return (
    <div id="contact" className='contact-content'>
      <div className='contact-here'>
        <div className='contacts'>
          <h1 className='contact-head'>Contact</h1>
          <p className='para-contact'>GET IN TOUCH WITH ME</p>
        </div>
        <div className='contact-info'>
          <div className='contact-side1'>
            <img src={hand} alt='shaking hands' className='shaking-hand' />
            <div className='info-contact'>
              <h2 className='contact-head'>Rosine Nzambazamariya</h2>
              <p className='what-do'>Front-end Developer and Embedded Specialist</p>
              <p className='what-do'>I’m available for freelance work. Contact me anytime.</p>
              <a href='https://www.facebook.com/alia.rosine.3'><FontAwesomeIcon icon={faFacebook} className='contact-icons' /></a>
              <a href='https://wa.me/250789577032'><FontAwesomeIcon icon={faWhatsapp} className='contact-icons' /></a>
              <a href='https://www.instagram.com/r_o_s_i_ne/'><FontAwesomeIcon icon={faInstagram} className='contact-icons' /></a>
              <a href='https://www.linkedin.com/in/gaju-rosine-810728238/'><FontAwesomeIcon icon={faLinkedin} className='contact-icons' /></a>
            </div>
          </div>

          <div className='contact-form'>
            {submitted ? (
              <div className='submit-message'>
                Message submitted. Thanks! We’ll get in touch soon.
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='names' required />
                <label>Phone</label>
                <input type='text' name='phoneName' required />
                <label>Email</label>
                <input type='email' name='email' required />
                <label>Subject</label>
                <input type='text' name='subject' required />
                <label>Message</label>
                <textarea name='message' className='message-info' required />
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
