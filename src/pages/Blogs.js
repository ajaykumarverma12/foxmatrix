import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/blog.css";

import blog from "../assets/image/blog.png";
import blog1 from "../assets/image/1_9DURnpGE4EYb5ibFOdr1dQ.jpeg";
import outsource from "../assets/image/outsource.png";
import barriers from "../assets/image/barriers.jpg";
import outsource_image from "../assets/image/outsource_image.jpg";
import recruitment from "../assets/image/recruitment.jpeg";
import linkdin_fox from "../assets/image/1634192539384.jpg";
import python_interview from "../assets/image/python_interview.jpeg";
import successful from "../assets/image/successful.jpeg";




function Blogs() {
    return (
        <div>
            <div className='conatiner-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='about_top'>
                            <img src={blog} className='about_img' />
                            <p className='blog_center'>Blog</p>
                            <p className='blog_center1'>
                                We are committed towards improving recruitment trends
                            </p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-4">
                                <a  href='https://akshika-jain.medium.com/outsourcing-6f438892691a'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={blog1} />
                                    </div>
                                    <p className='blog_text'>Outsourcing</p>
                                    <p className='date_text'>Akshika Jain  07th Jan 2022</p>
                                    <p className='blog_text_date'>Employees are the most important asset of any business organization....</p>
                                </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href='https://www.atoallinks.com/2021/tips-to-choose-an-effective-interview-outsourcing-service-provider/'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={outsource} />
                                    </div>
                                    <p className='blog_text'>Tips to Choose an Effective Interview Outsourcing Service Provider</p>
                                    <p className='date_text'> akshika.jain, 6 months ago</p>
                                    <p className='blog_text_date'>The past couple of decades.....</p>
                                </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href='https://mytrendingstories.com/mohit-jha/outsourcing-an-interview-in-gefvil'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={blog} />
                                    </div>
                                    <p className='blog_text'>Outsourcing an interview in 2021</p>
                                    <p className='date_text'>Mohit Jha, Aug 25, 2021</p>
                                    <p className='blog_text_date'>The right employees are bliss for any business. A carefully....</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-4">
                                <a href='https://telegra.ph/Barriers-To-Conducting-The-Interview-Process-09-07'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={barriers} />
                                    </div>
                                    <p className='blog_text'>Barriers to conducting The Interview Process</p>
                                    <p className='date_text'>September 07, 2021</p>
                                    <p className='blog_text_date'>Every company follows a specific process to interview....</p>
                                </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href='https://www.atoallinks.com/2021/outsourcing-interview-an-upgrade/'>           
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={outsource_image} />
                                    </div>
                                    <p className='blog_text'>Outsourcing Interview: An Upgrade</p>
                                    <p className='date_text'>MohitJha, 4 months ago</p>
                                    <p className='blog_text_date'>Hiring new talent and acquiring the best-skilled candidates would be....</p>
                                </div>
                                </a>   
                            </div>
                            <div class="col-md-4">
                                <a href='https://medium.com/@rishabh.bhardwaj_24187/outsourcing-the-new-normal-for-traditional-hiring-e320e7c89419'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={recruitment} />
                                    </div>
                                    <p className='blog_text'>Outsourcing: The new normal for Traditional Hiring</p>
                                    <p className='date_text'>Rishabh Bhardwaj, oct 8,2021</p>
                                    <p className='blog_text_date'>Recent years have seen enormous growth in recruitment....</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-4">
                                <a href='https://www.linkedin.com/pulse/java-its-interview-foxmatrix/?published=t'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={linkdin_fox} />
                                    </div>
                                    <p className='blog_text'>Java and its interview</p>
                                    <p className='date_text'>October 14, 2021</p>
                                    <p className='blog_text_date'>Java is responsible for most of the world's software development....</p>
                                </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href='https://www.launchora.com/story/best-python-interview-questions-and-answers-guide'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={python_interview} />
                                    </div>
                                    <p className='blog_text'>Best Python Interview Questions and Answers guide </p>
                                    <p className='date_text'>Yashika Thakur</p>
                                    <p className='blog_text_date'>Do you wonder what you will have....</p>
                                </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href='https://medium.com/@rishabh.bhardwaj_24187/what-to-know-about-recruitment-outsourcing-challenges-and-solutions-4462f9d884ad'>
                                <div className='blog_box'>
                                    <div className='blog_img_item'>
                                        <img src={successful} />
                                    </div>
                                    <p className='blog_text'>What to Know About Recruitme Challenges and Solutions?</p>
                                    <p className='date_text'>Rishabh Bhardwaj Nov 23,2021</p>
                                    <p className='blog_text_date'>Even the most successful companies....</p>
                                </div>
                                </a>
                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blogs
