import React from 'react';
import code from  '../../Asset/images/loxa.png'
import { AiTwotoneMail } from 'react-icons/ai';
import { FiMapPin ,FiFile , FiUser } from "react-icons/fi";
function AIM(props) {
    return (
        <div className='contents'>
              <div className='improduction'>
                <div className='dev_greet'>
                <div className='user'> <FiUser  className='fiuser-icon'/></div>
                <h2 className='title' >Hi , I'm <span style={{color : '#e71414', fontSize:'40px' }} >Rosine</span></h2>
                <p  style={{color:'#ffffff' ,fontSize:'20px' }}> Web design and  web developer  working at  my company</p>
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
                <button className='contactme'>DownloadsCV</button>
                <button className='contactme'>Contact</button>
              </div>
              </div>
                 
                <div className='pic_me'>
                 <img  src={code} alt='codes' className='aim-imag'></img>               
              </div>

        </div>
    );
}

export default AIM;