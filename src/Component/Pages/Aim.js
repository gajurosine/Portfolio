import React from 'react';
import code from  '../../Asset/images/code3.avif'
import { AiTwotoneMail } from 'react-icons/ai';
import { FiMapPin ,FiFile , FiUser } from "react-icons/fi";

function AIM(props) {

    const handleDownloadClick = () => {
        window.location.href='https://www.figma.com/proto/zJimVSvmhNpyEtMIykyBEu/resume?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1';
    }

    const handleContactClick = () => {
      window.location.href='mailto:gajurosine1@gmail.com';
    }
    

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
                    <button className='contactme' onClick={handleContactClick}>Contact</button>
                </div>
            </div>
            <div className='pic_me'>
                <img  src={code} alt='codes' className='aim-imag' />               
            </div>
        </div>
    );
}

export default AIM;
