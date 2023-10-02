import React from 'react';
import resume from '../../CV/rosine.pdf';
function RESUME(props) {
    return (
        <div className='resume-content'>
            <div className='resume'>
                <div className='resume-dev'>
                <h1 className='years'> 3 + Years of  experience</h1>
                <p className='para-exp'>My RESUME</p>
                <div>
                    <img src={resume} alt='my resume' className='resume-img' />
                </div>
                </div>
            </div>
        </div>
    );
}

export default RESUME;