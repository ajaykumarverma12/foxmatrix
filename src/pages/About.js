import React from 'react'
import "../assets/css/about.css";
import unsplash_3fPXt37X6UQ from "../assets/image/unsplash_3fPXt37X6UQ.png";
import about_man from "../assets/image/about_man.png";
import about_typing from "../assets/image/about_typing.png";
import about_meeting from "../assets/image/about_meeting.png";
import about_meeting1 from "../assets/image/about_meeting1.png";
import Frame from "../assets/image/Group 301.png";
import Frame1 from "../assets/image/Group 302.png";
import icon from "../assets/image/Group 162.png";
import icon1 from "../assets/image/Group 159.png";
import icon2 from "../assets/image/Group 161.png";
import img_about from "../assets/image/Group 146.png";
import img_about1 from "../assets/image/Group 150.png";
import img_about2 from "../assets/image/Group 149.png";
import about_frame from "../assets/image/about_frame.png";
function About() {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='about_top'>
                            <img src={unsplash_3fPXt37X6UQ} className='about_img' />
                            <p className='about_center'>About</p>
                            <p className='about_center1'>Our experts evaluate potential hires with
                                our established dashboard</p>
                        </div>
                    </div>
                    <div className='col-md-5  offset-md-1'>
                        <div className='card_about_img'>
                            <div className='card_about'>
                                <img src={about_man} />
                            </div>

                            <div className='card_about'>
                                <img src={about_typing} />
                            </div>

                            <div className='card_about1'>
                                <img src={Frame} />
                            </div>
                            <div className='card_about2'>
                                <img src={Frame1} />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='about_card_text'>
                            <p className='card_us'>About Us</p>
                            <p className='card_subus'>FoxMatrix outsourcing interviews match the right interviewers with job types and create a healthy ecosystem for candidate assessments.</p>
                              <p className='card_subus'>Our experts evaluate potential hires with our established dashboard.</p>  
                             <p className='card_subus'>The Matrix dashboard is, where detailed data to the respective candidates are displayed to evaluate and determine the suitability to hire that specific employee.</p>   
                        </div>
                    </div>
                    <div className='col-md-5 offset-md-1 top_about'>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={icon} className='icon_about_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Multiple interviewers </h1>
                                <p className='multiple_text'>
                                    Being one of the coolest platforms to outsource your interviews, FoxMatrix filters the best experts and professionals to interview your candidates.
                                    We care to offer you the finest of outsourcing and bring you the quality that you wander for
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={icon1} className='icon_about_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Easily accessible process </h1>
                                <p className='multiple_text'>
                                    FoxMatrix Outsourcing interviews brings a hassle-free accessible process. All you have is to do is visit our website and let us know about the interviews and details that you want us to take.
                                    Yes! It’s that simple
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={icon2} className='icon_about_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Efficient recruiting </h1>
                                <p className='multiple_text'>
                                    FoxMatrix outsourcing interviews increases the chances to hire a candidate by 20 times! Skill, knowledge, and a lot more elements are filtered to offer you a desired candidate that outperforms your expectations.
                                    Our professional experts dig deep to the candidates and finds the one excelsior that you need!
                                </p>
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='col-md-6 top_about'>
                        <div className='card_about_img'>
                            <div className='card_interview'>
                                <img src={about_meeting} />
                            </div>
                            <div className='card_interview'>
                                <img src={about_meeting1} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 offset-md-1 top_access'>
                        <p className='multiple'>Accessible dashboard</p>
                        <p className='multiple_text'>The Matrix Dashboards is just the opposite to its term. It’s effortlessly accessible and needs no such expertise. Each detail is carved to the dashboard related to the Interviewer, Employer, Interview, Date, Feedback, and ratings and many more.
                            The Dashboard is available for both the Employer and the Interviewer to check all the information that they need</p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={img_about} />
                    </div>
                    <div className='col-md-5  offset-md-1 top_access1'>
                        <img src={img_about1} />
                    </div>
                    <div className='col-md-6 top_access'>
                        <p className='multiple'>In-house profile Screening</p>
                        <p className='multiple_text'>
                            There is a lot of huss-fuss if you outsource your interviews. It requires a lot to create an account and specially to screen all the resumes to the database to conduct the interviews. And it takes a lot time!
                            FoxMatrix, releases you from this burden. No more lengthy procedure to follow. FoxMatrix covers you for this hefty process. Just sit back and relax, we got your back!
                        </p>
                    </div>
                    <div className='col-md-6  offset-md-1 top_access'>
                        <p className='multiple'>In-web Coding </p>
                        <p className='multiple_text'>
                            While interviewing and checking a candidate, FoxMatrix delivers a In-web coding chat.
                            This chat box can be used to test the coding skill and fundamentals of an individual, virtually
                        </p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={about_frame} />
                    </div>
                    <div className='col-md-5  offset-md-1 top_access1'>
                        <img src={img_about2} />
                    </div>
                    <div className='col-md-6 top_access'>
                        <p className='multiple'>Regular Feedback </p>
                        <p className='multiple_text'>A last but the most important element is feedback. It needs a thorough check to determine feedback. Communication, personality, knowledge, and all the aspect that are considered by the employer, are determined to provide complete feedback.

                            FoxMatrix draws solid talents to meet your expectations. It makes your technical interview outsourcing seamless and hassle-free. Being art & science, it requires a sharp eye to filter talent and exceptional experience to grab that ONE candidate that you need!
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
