import React from 'react';
import { Link } from 'react-router-dom'; 
import codes from '../../Asset/images/code3.avif';
import scie from '../../Asset/images/back.avif';
import robot from '../../Asset/images/code.avif';

function Experience(props) {
    return (
        <div className='main-experience'>
            <div className='myExperience'>
                <div className='EX-content'>
                    <h1 className='years'>OVER 4 YEARS OF EXPERIENCE</h1>
                    <p className='para-exp'>My Experience</p>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={codes} alt='develop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2023-Last Year</h2>
                        <p className='exp-develop'>Software developer and Embedded Specialist</p>
                        <p className='exp-develop'>Web design</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={scie} alt='develop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2024-Present</h2>
                        <p className='exp-develop'>Web design </p>
                        <p className='exp-develop'>Data science</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={robot} alt='develop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2024-Present</h2>
                        <p className='exp-develop'>Robotics design</p>
                        <p className='exp-develop'>Web design</p>
                        <p className='exp-develop'>Embedded Specialist</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Experience;
