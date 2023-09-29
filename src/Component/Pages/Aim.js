import React from 'react';
import code from  '../../Asset/images/4.jpg'
import { AiTwotoneMail } from 'react-icons/ai';
import { FiMapPin ,FiFile , FiUser } from "react-icons/fi";

function AIM(props) {

    const handleDownloadClick = () => {
        const a = document.createElement('a')
        a.href = "/rosine.pdf.pdf"
        a.download = true
        a.click()
    }

    const handleContactClick = () => {
        const Mailto='gajurosine1@gmail.com';
           const subject ='hello dear';
           const body='i want to talk to you plz';
           const params=`subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
           window.location.href =`${Mailto}${params}`
          
          };
    
    return (
        <div className='contents'>
            <div className='introduction'>
                <div className='dev_greet'>
                    <div className='user'> <FiUser  className='fiuser-icon'/></div>
                    <h2 className='title' >Hi , I'm <span style={{color : '#e71414', fontSize:'43px' }} >Rosine</span></h2>
                    <p  style={{color:'#ffffff' ,fontSize:'25px' }}> Web design and  web developer  working at  my company</p>
                    <div className='user-info'>
                        <div className='info'>
                            <FiFile className='info-icon'/>
                            <span className='icon-desc' >Web design and developer </span>
                        </div>
                        <div className='info'>
                            <AiTwotoneMail  className='info-icon' />
                            <span className='icon-desc'>gajurosine1@gmail.com</span>
                        </div>
                        <div className='info'>
                            <FiMapPin   className='info-icon'/>
                            <span  className='icon-desc'>Rwand , kigali city</span>
                        </div>
                    </div>
                </div>
                <div className='downlods-butto'>
            
                    <button className='contactme' onClick={handleDownloadClick}>Download CV</button>
                    <button className='contactme' onClick={handleContactClick}>contact</button>
                </div>
            </div>
            <div className='pic_me'>
                <img  src={code} alt='codes' className='aim-imag' />               
            </div>
        </div>
    );
}

export default AIM;
