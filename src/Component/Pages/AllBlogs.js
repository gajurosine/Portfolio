import React from 'react';
import blog2 from '../../Asset/images/animals.jpg';

function AllBlogs() {
  return (
    <div style={{ padding: '2rem' }}>
    <div className='blog-desc'>
                {/* BLOG 2 */}
                          <div className='all-blogs'>
                            <div className='my-blog'>
                              <div className='blog1'>
                                <img src={blog2} alt='blogs' className='img-blog-img' />
                              </div>
                              <div className='blog-desc'>
                                <a href='https://gajurosine1.wixsite.com/roshop' className='blog-head' target='_blank' rel='noopener noreferrer'>
                                  E-commerce
                                </a>
                                <p className='blog-paraa'>
                
                                 This e-commerce web application is a modern, responsive platform designed to sell both local physical products and digital goods. It provides a smooth and intuitive shopping experience, allowing users to browse products, filter by category or 
                                 type, add items to a cart, and complete checkout..
                                </p>
                              </div>
                            </div>
                          </div>
              </div>
    </div>
  );
}

export default AllBlogs;
