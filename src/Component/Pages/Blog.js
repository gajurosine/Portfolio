import React from 'react';
import blog1 from '../../Asset/images/hand1.jpg.jpg';
import blog2 from '../../Asset/images/e-commerce.jpeg';
import blog3 from '../../Asset/images/hand6.png';
function BLOG(props) {
    return (
        <div className='blog-content'>
        <div className='blog-me'>
            <div className='blog'>
            <h1 className='years'> VISIT AND GIVE ME YOUR FEEDBACK</h1>
            <p className='para-exp'>My BLOG</p>
            </div>
            <div className='all'>
            <div className='all-blogs'>
                <div className='my-blog'>
                <div className='blog1'>
                    <img src={blog3} alt='blogs' className='img-blog-img' />
                </div>
                <div className='blog-desc'>
                    <h1 className='blog-head'>Confarm </h1>
                    <p className='blog-paraa'>what is software, which help people with deaf disability to communicate with the 
                    people without disability and other who don't know the the sign language 
                    </p>
                    </div>
                </div>
            </div>

            <div className='all-blogs'>
                <div className='my-blog'>
                <div className='blog1'>
                    <img src={blog2} alt='blogs' className='img-blog-img' />
                </div>
                <div className='blog-desc'>
                    <h1 className='blog-head'>E-Commerce </h1>
                    <p className='blog-paraa'>what is a web appication which allow local people to trade their product online
                    and also help them to get the product from the other local people 
                    </p>
                    </div>
                </div>
            </div>


            <div className='all-blogs'>
                <div className='my-blog'>
                <div className='blog1'>
                    <img src={blog1} alt='blogs' className='img-blog-img' />
                </div>
                <div className='blog-desc'>
                    <h1 className='blog-head'>SOFTWARE</h1>
                    <p className='blog-paraa'>what is software, who is a software, what is required to be a software
                        what is the benefits of being a software .
                    </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
    );
}

export default BLOG;