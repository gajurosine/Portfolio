import React from 'react';
import { Link } from 'react-router-dom';
import codes from '../../Asset/images/rince.jpg';
import scie from '../../Asset/images/cdv.jpg';
import robot from '../../Asset/images/coding.jpg';

function EDUCATION(props) {
    return (
        <div className='edu-content'>
            <div className='myExperience'>
                <div className='EX-content'>
                    <h1 className='years'> PRIMARY, O 'LEVEL  AND  A 'LEVEL</h1>
                    <p className='para-exp'>My EDUCATION</p>
                </div>
                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={codes} alt='devolop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2008-2016</h2>
                        <p className='exp-develop'>Nursery & Primary school</p>
                        <p className='exp-develop'>Ecole Les Petit Prince</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>

                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={scie} alt='devolop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2017-2020</h2>
                        <p className='exp-develop'>O' LEVEL</p>
                        <p className='exp-develop'>College Du Christ Roi , Nyanza</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>

                <div className='my-experience'>
                    <div className='develop-img'>
                        <img src={robot} alt='devolop experience' className='img_devops' />
                    </div>
                    <div className='exp-desc'>
                        <h2 className='tit-exp'>2021-2024</h2>
                        <p className='exp-develop'>A' LEVEL</p>
                        <p className='exp-develop'>Rwanda  Coding Academy</p>
                    </div>
                    <Link to="/contact" className='contactme1'>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default EDUCATION;
