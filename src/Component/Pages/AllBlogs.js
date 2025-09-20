import React from 'react';
import blog2 from '../../Asset/images/animals.jpg';
import Microsoft from '../../Asset/images/Microsoft Office.jpg';
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

                           {/* MS EXPERT */}
                                    <div className='all-blogs'>
                                      <div className='my-blog'>
                                        <div className='blog1'>
                                          <img src={Microsoft} alt='blogs' className='img-blog-img' style={{ width: "88%", height: "115%" }} />
                                        </div>
                                        <div className='blog-desc'>
                                          <a href='https://1drv.ms/x/c/4769059fa69576eb/EaB9uCUIMypLmsaNP-YhZwYBfjV9_mY4PM-evrLYGBDzmg?e=Q0q42n&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0' className='blog-head' target='_blank' rel='noopener noreferrer'>
                                           Exploring Microsoft Office Tools
                                          </a>
                                          <p className='blog-paraa'>
                                            I took a big step in improving my skills with Microsoft Office.
                                            I spent time learning and practicing tools like Excel, Word, and PowerPoint. This project shows how I can use Microsoft applications to create organized documents, analyze data, and design simple presentations. It’s the start of my journey 
                                           toward becoming more confident and productive using Microsoft tools.</p>
                                        </div>
                                      </div>
                                    </div>
              </div>
    </div>
  );
}

export default AllBlogs;
