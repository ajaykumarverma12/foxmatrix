import React from 'react'
import "../assets/css/employer.css";
import Slider_image from "../component/Slider_image";
import emp_image2 from "../assets/image/emp_image2.png";
import emp_image1 from "../assets/image/emp_image1.png";
import emp_Group_224 from "../assets/image/emp_Group_224.png";
import emp_image from "../assets/image/emp_image.png";
import emp_Group_274 from "../assets/image/emp_Group_274.png";
import emp_Group_275 from "../assets/image/emp_Group_275.png";
import emp_Group_276 from "../assets/image/emp_Group_276.png";
import Frame_emp from "../assets/image/Frame_emp.png";
import Frame_emp1 from "../assets/image/Frame_emp1.png";
import about_frame from "../assets/image/about_frame.png";
import about_frame1 from "../assets/image/Group 149.png";
import Demo_form from '../component/Demo_form';
function Employer() {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='about_top'>
                            <img src={emp_image2} className='emp_img' />
                            <p className='employer_center'>Employer</p>
                            <p className='employer_center1'>We Outsource interviews to make your
                                day better</p>
                        </div>
                    </div>
                    <div className='col-md-11  offset-md-1'>
                        <div class='employer_card'>
                            <img src={emp_image1} />
                        </div>
                        <div class='employer_card'>
                            <p className='emp_text'>For Employer</p>
                            <p className='emp_text1'> A leading platform that amplifies your interview experience and make it easy for you. Perfect interviewers who have expertise and professionalism to filter out the finest of talents that suits your needs and requirements. 
                            </p>
                               <p className='emp_text1'>Being employer you have to keep an eye on the task and results that are crucial.We understand that and therefore we have a personalised dashboard to take a sneak-peek on all your required needs.</p> 
                        </div>
                    </div>

                    <div className='col-md-10  offset-md-1'>
                        <h1 className='employer_text'>How do we help?</h1>
                        <p className='employer_text1'>We match the right interviewers with job types creating a healthy ecosystem for candidate assessments</p>
                    </div>
                    <div className='col-md-9  offset-md-1 '>
                        <img src={emp_Group_224} className='emp_img1' />
                    </div>
                    <div className='col-md-2 '>
                    </div>
                    <div className='col-md-11 offset-md-1'>
                        <Demo_form />
                    </div>
                    <div className='col-md-5 offset-md-1 top_about'>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={emp_Group_274} className='emp_icon_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Personalised Dashboard </h1>
                                <p className='multiple_text'>
                                    The Matrix Dashboards is just the opposite to its term. It’s effortlessly accessible and needs no such expertise.
                                    Each detail is carved to the dashboard related to the Interviewer, Employer, Interview, Date, Feedback, and ratings and many more.
                                    The Dashboard is available for both the Employer and the Interviewer to check all the information that they need
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={emp_Group_275} className='emp_icon_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>In-house profile Screening  </h1>
                                <p className='multiple_text'>
                                    There is a lot of huss-fuss if you outsource your interviews.
                                    It requires a lot to create an account and specially to screen all the resumes to the database to conduct the interviews. And it takes a lot time!
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={emp_Group_276} className='emp_icon_img' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Varieties of Technology Experts </h1>
                                <p className='multiple_text'>
                                    Numerous technologies takes birth day by day. And FoxMatrix Outsourcing interviews takes care of all. We have professional experts with ample of experiences to test and interview the candidates.
                                    From Java to Ruby and all that you can imagine! We got you covered.
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='emp_box'>
                            <img src={emp_image} />

                        </div>
                    </div>
                    <div className='col-md-6 offset-md-1 top_access'>
                        <p className='multiple'>Efficient recruiting </p>
                        <p className='multiple_text'>
                            FoxMatrix outsourcing interviews increases the chances to hire a candidate by 20 times! Skill, knowledge, and a lot more elements are filtered to offer you a desired candidate that outperforms your expectations.
                            Our professional experts dig deep to the candidates and finds the one excelsior that you need!
                        </p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={Frame_emp} />
                    </div>
                    <div className='col-md-5  offset-md-1 top_access1'>
                        <img src={Frame_emp1} />

                    </div>
                    <div className='col-md-6 top_access'>
                        <p className='multiple'>Schedule Anytime </p>
                        <p className='multiple_text'>
                            Be it a Day or Night, weekend or weekdays, FoxMatrix Outsourcing Interviews stays awake to all the needs or assistance that you require. We remain active throughout the time.
                        </p>
                    </div>
                    <div className='col-md-6  offset-md-1 top_access'>
                        <p className='multiple'>In-web Coding</p>
                        <p className='multiple_text'>
                            While interviewing and checking a candidate, FoxMatrix delivers a In-web coding chat.
                            This chat box can be used to test the coding skill and fundamentals of an individual, virtually
                        </p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={about_frame} />
                    </div>
                    <div className='col-md-5 offset-md-1 top_access1'>
                        <img src={about_frame1} />
                    </div>
                    <div className='col-md-6 top_access'>
                        <p className='multiple'>Regular Feedback </p>
                        <p className='multiple_text'>
                            A last but the most important element is feedback. It needs a thorough check to determine feedback. Communication, personality, knowledge, and all the aspect that are considered by the employer, are determined to provide complete feedback.
                            FoxMatrix draws solid talents to meet your expectations. It makes your technical interview outsourcing seamless and hassle-free. Being art & science, it requires a sharp eye to filter talent and exceptional experience to grab that ONE candidate that you need!

                        </p>
                    </div>
                    <Slider_image />
                </div>
            </div>
        </div>
    )
}

export default Employer
