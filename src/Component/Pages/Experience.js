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
                    <p className='para-exp'>Professional Experience</p>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={codes} alt='develop experience' className='img_devops' loading='lazy' decoding='async' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2023 - 2024</h2>
                        <p className='exp-develop'>Software Developer and Embedded Systems Specialist</p>
                        <p className='exp-develop'>Delivered responsive web interfaces and product features</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={scie} alt='develop experience' className='img_devops' loading='lazy' decoding='async' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2024 - Present</h2>
                        <p className='exp-develop'>Frontend Development</p>
                        <p className='exp-develop'>Data Analysis and Practical Data Science</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={robot} alt='develop experience' className='img_devops' loading='lazy' decoding='async' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2024 - Present</h2>
                        <p className='exp-develop'>Robotics Prototyping and Systems Design</p>
                        <p className='exp-develop'>Web Application Design and Development</p>
                        <p className='exp-develop'>Embedded Systems Implementation</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Experience;
