import React from 'react';
import blog1 from '../../Asset/images/hand1.jpg.jpg';
import blog2 from '../../Asset/images/e-commerce.jpeg';
import blog3 from '../../Asset/images/hand6.png';
import { Link } from 'react-router-dom';

function BLOG() {
  return (
    <div id="blog" className='blog-content'>
      <div className='blog-me'>
        <div className='blog'>
          <h1 className='years'>VISIT AND GIVE ME YOUR FEEDBACK</h1>
          <p className='para-exp'>My BLOG</p>
        </div>

        <div className='all'>

          {/* BLOG 1 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog3} alt='blogs' className='img-blog-img' />
              </div>
              <div className='blog-desc'>
                <a href='http://bm-trade.42web.io/index.php' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Confarm
                </a>
                <p className='blog-paraa'>
                  Confarm is a solution for hearing-impaired users, converting sign language into speech so communication is easier and more inclusive.
                </p>
              </div>
            </div>
          </div>

          {/* BLOG 2 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog2} alt='blogs' className='img-blog-img' />
              </div>
              <div className='blog-desc'>
                <a href='https://gajurosine1.wixsite.com/rosiib-blog' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  E-Commerce
                </a>
                <p className='blog-paraa'>
                  A web platform that allows local people to trade products online and connect with other nearby sellers.
                </p>
              </div>
            </div>
          </div>

          {/* BLOG 3 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog1} alt='blogs' className='img-blog-img' />
              </div>
              <div className='blog-desc'>
                <a href='https://gajurosine1.wixsite.com/roshop' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Software
                </a>
                <p className='blog-paraa'>
                  A chatbot designed to connect Africans through smart local communication without depending on foreign solutions.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ✅ VIEW ALL BUTTON */}
        <div className="view-all-wrapper">
          <Link to="/all-blogs" className="view-all-btn">
            View All
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BLOG;
