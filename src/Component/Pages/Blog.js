import React from 'react';
import blog1 from '../../Asset/images/hand1.jpg.jpg';
import blog2 from '../../Asset/images/e-commerce.jpeg';
import blog3 from '../../Asset/images/hand6.png';
import { Link } from 'react-router-dom';
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
                     <Link to='/http://bm-trade.42web.io/index.php' className='blog-head'> 
                     Confarm
                    </Link>
                    <p className='blog-paraa'>Communication is often difficult to obtain by hearing-impaired people since their sign language is only understood by
                     a few normal people. On the contrary, the spoken language is hard to understand due to their hearing impairment. The conventional method by converting sign language into  speech . 
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
                     <Link to='https://gajurosine1.wixsite.com/rosiib-blog' className='blog-head'> 
                     E-Commerce 
                    </Link>
                    <p className='blog-paraa'>whis is a web appication which allow local people to trade their product online
                    and also help them to get the product from the other local people .
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
                    <Link to='/http://bm-trade.42web.io/index.php' className='blog-head'> 
                    SOFTWARE
                    </Link>
                    <p className='blog-paraa'>this is a chatbot which allows people to communicate all over the africa that can help us 
                    as african to get in torch , we can't always waiting for the white people to support or provide the opportunity to us , so we must loock the solution among as not other excpections.
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