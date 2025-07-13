import React from 'react';
import code from '../../Asset/images/f.jpg';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiMapPin, FiFile } from 'react-icons/fi';

function Aim() {

  const handleDownloadClick = () => {
    const a = document.createElement('a');
    a.href = '/rosine.pdf.pdf'; // Make sure this file is in your public folder
    a.download = true;
    a.click();
  };

  const handleContactClick = () => {
    // Since Aim will be inside Home, navigate to #contact on home page
    window.location.href = '/#contact'; 
  };

  return (
    <section id="aim" className='contents'>
      <div className='introduction'>
        <div className='dev_greet'>
          <h2 className='title'>
            Hi, I'am <span style={{ color: '#e71414', fontSize: '30px' }}>Rosine</span>
          </h2>
          <p style={{ color: '#ffffff', fontSize: '18px' }}>
            Web design and web developer working at my company
          </p>

          <div className='user-info'>
            <div className='info'>
              <FiFile className='info-icon' />
              <span className='icon-desc'>Web design and developer</span>
            </div>
            <div className='info'>
              <AiTwotoneMail className='info-icon' />
              <span className='icon-desc'>gajurosine1@gmail.com</span>
            </div>
            <div className='info'>
              <FiMapPin className='info-icon' />
              <span className='icon-desc'>Rwanda, Kigali City</span>
            </div>
          </div>
        </div>

        <div className='downlods-butto'>
          <button className='contactme' onClick={handleDownloadClick}>
            Download CV
          </button>
          <button className='contactme' onClick={handleContactClick}>
            Contact
          </button>
        </div>
      </div>

      <div className='pic_me'>
        <img src={code} alt='coding' className='aim-imag' />
      </div>
    </section>
  );
}

export default Aim;
