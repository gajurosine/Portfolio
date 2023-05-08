import React from 'react';
import codes from '../../Asset/images/code.avif'
function Experience(props) {
    return (
        <div className='myExperience'>
     <div className='EX-content'>
    <h1>OVER 3 YEARS OF EXPERIENCE</h1>
    <p>My Experience</p>
         </div>
       <div className='my-experience'>
        <div className='develop'>
            <div>
            <img src={codes} alt='devolop experience' />
            </div>
            <div className='exp-desc'>
                <h2 className='tit-exp'>2023-Presents</h2>
                <p className='exp-develop'>Software  developer</p>
            </div>
            <div className='exp-butto'><button>CONTACT</button></div>
        </div>
       </div>
        </div>
    );
}

export default Experience;