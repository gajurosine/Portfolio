import React from 'react';
import codes from '../../Asset/images/code3.avif'
import scie from '../../Asset/images/back.avif'
import robot from '../../Asset/images/code.avif'

function Experience(props) {
    const handleContactClick = () => {
        const Mailto='gajurosine1@gmail.com';
           const subject ='hello dear';
           const body='i want to talk to you plz';
           const params=`subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
           window.location.href =`${Mailto}${params}`
          
          };


    return (
        <div className='main-experience'>
        <div className='myExperience'>
     <div className='EX-content'>
    <h1 className='years'>OVER 4 YEARS OF EXPERIENCE</h1>
    <p className='para-exp'>My Experience</p>
         </div>
       <div className='my-experience'>
        <div className='develop-img'>
        <img src={codes} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Software  developer and Embedded Specialist</p>
                <p className='exp-develop'>Web desing</p>
            </div>
            <button className='contactme1' onClick={handleContactClick}>contact</button>
            
       </div>



       <div className='my-experience'>
        <div className='develop-img'>
        <img src={scie} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Data science</p>
                <p className='exp-develop'>Web desing</p>
            </div>
            <button className='contactme1' onClick={handleContactClick}>contact</button>
                   </div>





       <div className='my-experience'>
        <div className='develop-img'>
        <img src={robot} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2024-Presents</h2>
                <p className='exp-develop'>Robotics design</p>
                <p className='exp-develop'>Web desing</p>
                <p className='exp-develop'>Embedded Specialist</p>

            </div>
            <button className='contactme1' onClick={handleContactClick}>contact</button>
    
       </div>
       
        </div>     
</div>



    );
}

export default Experience;