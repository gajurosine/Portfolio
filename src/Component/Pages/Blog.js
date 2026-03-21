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
          <p className='para-exp'>Featured Projects</p>
        </div>

        <div className='all'>

          {/* BLOG 1 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog3} alt='blogs' className='img-blog-img' loading='lazy' decoding='async' />
              </div>
              <div className='blog-desc'>
                <a href='http://bm-trade.42web.io/index.php' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  ConFarm
                </a>
                <p className='blog-paraa'>
                  ConFarm is an accessibility-focused solution that translates sign language into speech, helping hearing-impaired users communicate more easily and confidently.
                </p>
              </div>
            </div>
          </div>

          {/* BLOG 2 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog2} alt='blogs' className='img-blog-img' loading='lazy' decoding='async' />
              </div>
              <div className='blog-desc'>
                <a href='https://rosineeshop-a3r3gnmfn-gajurosines-projects.vercel.app/#' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Rosine E-Shop
                </a>
                <p className='blog-paraa'>

                 Rosine E-Shop is a responsive e-commerce application built with React and Vite. It enables customers to browse products, filter by category, manage a cart, and complete checkout through a clear and user-friendly flow.
                </p>
              </div>
            </div>
          </div>

          {/* BLOG 3 */}
          <div className='all-blogs'>
            <div className='my-blog'>
              <div className='blog1'>
                <img src={blog1} alt='blogs' className='img-blog-img' loading='lazy' decoding='async' />
              </div>
              <div className='blog-desc'>
                <a href='https://planner-0gyh.onrender.com/' className='blog-head' target='_blank' rel='noopener noreferrer'>
                  Daily Life Planner
                </a>
                <p className='blog-paraa'>
                Daily Life Planner is a Flask-based productivity app that helps users organize schedules, set priorities, and manage daily tasks with a simple and practical interface.
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
