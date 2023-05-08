import React from 'react';
import codes from '../../Asset/images/code.avif'
function Experience(props) {
    return (
        
        <div className='myExperience'>
     <div className='EX-content'>
    <h1 className='years'>OVER 3 YEARS OF EXPERIENCE</h1>
    <p className='para-exp'>My Experience</p>
         </div>
       <div className='my-experience'>
        <div className='develop-img'>
        <img src={codes} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Software  developer</p>
                <p className='exp-develop'>Web desing</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>



       <div className='my-experience'>
        <div className='develop-img'>
        <img src={codes} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Data science</p>
                <p className='exp-develop'>Web desing</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>





       <div className='my-experience'>
        <div className='develop-img'>
        <img src={codes} alt='devolop experience' className='img_devops' />
        </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Robotics design</p>
                <p className='exp-develop'>Web desing</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
       </div>
       
        </div>



     




    );
}

export default Experience;