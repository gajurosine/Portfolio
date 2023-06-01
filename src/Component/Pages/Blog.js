import React from 'react';
import blog1 from '../../Asset/images/code.avif';
function BLOG(props) {
    return (
        <div className='blog-content'>
        <div className='blog-me'>
            <div className='blog'>
            <h1 className='years'> VISIT AND GIVE ME YOUR FEEDBACK</h1>
            <p className='para-exp'>My BLOG</p>
            </div>
            <div className='all-blogs'>
                <div className='my-blog'>
                <div className='blog1'>
                    <img src={blog1} alt='blogs' className='img-blog-img' />
                </div>
                <div className='blog-desc'>
                    <h1 className='blog-head'>SOFTWARE</h1>
                    <p className='blog-paraa'>what is software, who is a software, what is required to be a software
                        what is the benefits of being a software , read more
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
                        what is the benefits of being a software , read more
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
                        what is the benefits of being a software , read more
                    </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}

export default BLOG;