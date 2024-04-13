import React from 'react';
import rosine from '../../Asset/images/resume.jpg'

function RESUME(props) {
    return (
        <div className='resume-content'>
            <div className='resume'>
                <div className='resume-dev'>
                    <h1 className='years'> 3 + Years of experience</h1>
                    <p className='para-exp'>My RESUME</p>
                    
                        <img src={rosine} alt='my resume' className='resume-img' />
                </div>
            </div>
        </div>
    );
}

export default RESUME;
