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

    // 1️⃣ Send message to admin/friend
    emailjs.sendForm(
      'service_0virnqi',
      'template_z938mzs',  // admin template
      formRef.current,
      'L0Kj-5bp42pe58x9B'
    )
    .then(() => {
      console.log('✅ Message sent to admin');

      // 2️⃣ Send auto-reply to user
      return emailjs.sendForm(
        'service_0virnqi',
        'template_w89j9t7',  // auto-reply template
        formRef.current,
        'L0Kj-5bp42pe58x9B'
      );
    })
    .then(() => {
      console.log('✅ Auto-reply sent to user');

      // ✅ Show thank-you message in the UI
      setSubmitted(true);

      // Optional: clear form fields
      formRef.current.reset();
    })
    .catch((err) => {
      console.error('❌ EmailJS error:', err.text);

      // Even if something fails, show thank-you in UI
      setSubmitted(true);
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
              <p className='what-do'>My chat is always open if you want to ask me something or know about something you can send message here and I'll reply asap. And also I’m available for freelance work.</p>
              <a href='https://web.facebook.com/alia.rosine.3/'><FontAwesomeIcon icon={faFacebook} className='contact-icons' /></a>
              <a href='https://wa.me/250789577032'><FontAwesomeIcon icon={faWhatsapp} className='contact-icons' /></a>
              <a href='https://www.instagram.com/daily.drive07/'><FontAwesomeIcon icon={faInstagram} className='contact-icons' /></a>
              <a href='https://www.linkedin.com/in/rosine-nzambazamariya-810728238/'><FontAwesomeIcon icon={faLinkedin} className='contact-icons' /></a>
            </div>
          </div>

          <div className='contact-form'>
            {submitted ? (
              <div className='submit-message'>
                ✅ Thank you for reaching out.
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
