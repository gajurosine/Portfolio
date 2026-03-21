import React from 'react';
import blog2 from '../../Asset/images/animals.jpg';
import Microsoft from '../../Asset/images/Microsoft Office.jpg';
function AllBlogs() {
  return (
    <div style={{ padding: '1rem' }}>
    <div className='blog-desc'>
                {/* BLOG 2 */}
                          <div className='all-blogs'>
                            <div className='my-blog'>
                              <div className='blog1'>
                                <img src={blog2} alt='blogs' className='img-blog-img' loading='lazy' decoding='async' />
                              </div>
                              <div className='blog-desc'>
                                <a href='https://gajurosine1.wixsite.com/roshop' className='blog-head' target='_blank' rel='noopener noreferrer'>
                                  E-Commerce Platform
                                </a>
                                <p className='blog-paraa'>
                
                                 This project is a responsive e-commerce platform built to sell both physical and digital products. It delivers a smooth shopping experience with product browsing, category filtering, cart management, and checkout.
                                </p>
                              </div>
                            </div>
                          </div>

                           {/* MS EXPERT */}
                                    <div className='all-blogs'>
                                      <div className='my-blog'>
                                        <div className='blog1'>
                                          <img src={Microsoft} alt='blogs' className='img-blog-img' loading='lazy' decoding='async' />
                                        </div>
                                        <div className='blog-desc'>
                                          <a href='https://1drv.ms/x/c/4769059fa69576eb/EaB9uCUIMypLmsaNP-YhZwYBfjV9_mY4PM-evrLYGBDzmg?e=Q0q42n&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0' className='blog-head' target='_blank' rel='noopener noreferrer'>
                                           Microsoft Office Productivity Project
                                          </a>
                                          <p className='blog-paraa'>
                                            This project highlights my practical skills in Microsoft Excel, Word, and PowerPoint. I used these tools to organize documents, analyze data, and build clear presentations for professional communication.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
              </div>
    </div>
  );
}

export default AllBlogs;
