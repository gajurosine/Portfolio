import React from 'react';
import blog1 from '../../Asset/images/Tim.jpeg';
import blog2 from '../../Asset/images/image.jpeg';
import blog3 from '../../Asset/images/hand6.png';
import { Link } from 'react-router-dom';

function BLOG() {
  return (
    <div id="blog" className='blog-content'>
      <div className='blog-me'>
        <div className='blog'>
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
                <a href='https://rosineeshop-a3r3gnmfn-gajurosines-projects.vercel.app/#' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Rosine E-Shop
                </a>
                <p className='blog-paraa'>

                 Rosine E-Shop is a modern, responsive e-commerce web 
                  application built with ReactJS and Vite for the frontend, and designed to integrate with a backend API. It allows users to browse products, search and filter items, add products to a shopping cart, and proceed to 
                      checkout with a smooth, user-friendly experience.
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
                <a href='https://planner-0gyh.onrender.com/' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Smartchatbot
                </a>
                <p className='blog-paraa'>
                Daily Life Planner is a web-based application built with Flask that 
                helps users organize their daily activities efficiently. Users can 
                input their wake-up time, study hours, travel time, and tasks for the day,              </p>
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
