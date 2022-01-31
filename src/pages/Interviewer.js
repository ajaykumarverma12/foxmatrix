import React from 'react';
import "../assets/css/interviewer.css";
import computer_admin from "../assets/image/computer_admin.png";
import Slider_image from '../component/Slider_image';
import interview_header from "../assets/image/interview_header.png";
import interview_img from "../assets/image/interview_img.png";
import interview_img1 from "../assets/image/interview_img1.png";
import Group277 from "../assets/image/Group277.png";
import inter_Group_274 from "../assets/image/inter_Group_274.png";
import GroupQus from "../assets/image/GroupQus.png";
import interview150 from "../assets/image/Group 150.png";
import interview_Frame1 from "../assets/image/interview_Frame1.png";
import interview_Frame from "../assets/image/interview_Frame.png";
import inter_Group_309 from "../assets/image/inter_Group_309.png";
import Frame from "../assets/image/Group 301.png";
import Frame1 from "../assets/image/Group 302.png";
function Interviewer() {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='about_top'>
                            <img src={interview_header} className='about_img' />
                            <p className='interview_center'>Interviewer</p>
                            <p className='interview_center1'>
                                Where Integrity, Growth, and Earning is
                                constantand you are the Alpha.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div class='interview_card'>
                            <img src={interview_img} />
                        </div>
                        <div class='interview_card'>
                            <h1 className='interview_text'>For Interviewer</h1>
                            <p className='interview_text1'>It’s good to use your talents and experience to filter out the best candidates from the rest. Yes, it’s about interviews! At FoxMatrix you evaluate candidates to determine the most suitable candidates for a specific job role.
                                A better way to utilise your experience that can benefitted.</p>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-5  offset-md-1'>
                        <div className='emp_box'>
                            <img src={interview_img1} />
                        </div>
                    </div>
                    <div className='col-md-6 top_about'>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={Group277} className='interview_icon' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Schedule Anytime </h1>
                                <p className='multiple_text'>
                                    Be it a Day or Night, weekend or weekdays, FoxMatrix Outsourcing Interviews stays awake to all the needs or assistance that you require.
                                    We remain active throughout the time
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={inter_Group_274} className='interview_icon' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Accessible dashboard </h1>
                                <p className='multiple_text'>
                                    The Matrix Dashboards is just the opposite to its term. It’s effortlessly accessible and needs no such expertise. Each detail is carved to the dashboard related to the Interviewer, Employer, Interview, Date, Feedback, and ratings and many more.
                                    The Dashboard is available for both the Employer and the Interviewer to check all the information that they need.
                                </p>
                            </div>

                        </div>
                        <div class="d-flex">
                            <div class="p-2">
                                <img src={GroupQus} className='interview_icon' />
                            </div>
                            <div class="p-2">
                                <h1 className='multiple'>Anytime Assistance </h1>
                                <p className='multiple_text'>
                                    For us, you matter. And for that we don’t care for our Saturdays, or Sundays or any other holiday or leaves.
                                    We care for you. And for that our assistance team stands by forever in your service
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='col-md-6  offset-md-1 top_access'>
                        <p className='multiple'>In-house profile Screening </p>
                        <p className='multiple_text'>
                            There is a lot of huss-fuss if you outsource your interviews.
                            It requires a lot to create an account and specially to screen all the resumes to the database to conduct the interviews. And it takes a lot time!
                        </p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={interview150} />
                    </div>
                    <div className='col-md-5 offset-md-1 top_access1'>
                        <img src={interview_Frame1} />
                    </div>
                    <div className='col-md-6 top_access'>
                        <p className='multiple'>Privacy</p>
                        <p className='multiple_text'>
                            We understand your concern for data breach. But we have the maximum security for profiles an identity and hence commit ourselves to the best safety.
                            We keep your data safe and completely secure and ensure your trust to be in a place.                        </p>
                    </div>
                    <div className='col-md-6 offset-md-1 top_access'>
                        <p className='multiple'>Earnings and Bonuses</p>
                        <p className='multiple_text'>
                            Spare your extra time and grab some extra earnings. Is it possible? Totally! Spare your time as an interviewer, interview your given candidates and earn! It’s simple as that. Extra time means extra bonuses. The more interviews you take, the more Matrix stars you get.
                            The more Matrix stars you get, the more you get recognitions and recommended.
                        </p>
                    </div>
                    <div className='col-md-5 top_access1'>
                        <img src={interview_Frame} />
                    </div>
                    <div className='col-md-11 offset-md-1'>
                            <p className='earn_money'>Earn Money & Recognized as a FoxMatrix Interviewer</p>
                        </div>
                        <div className='col-md-9 offset-md-1'> 
                        <img src={Frame} className='frame_interview' />
                        <img src={Frame1} className='eran_image1' />
                         <img src={inter_Group_309} className='earn_image' />
                        </div>
                    <div className='col-md-2'></div>
                        <div className='col-md-11 offset-md-1'>
                            <p className='interview_price'>Pricing</p>
                        </div>
                        <div className='col-md-12'>
                            <div className='interview_card1'>
                                <p className='video_interview'>Video</p>
                                <p className='video_interview1'>Video Interviews</p>
                                <p className='video_interview1'>Unlimited Interviews</p>
                                <p className='platform_fee'>Platform fee
                                    <span className='rupees_sign'>&#8377;</span>
                                    <span className='platform_rupees'>9,500 /M</span>
                                </p>
                                <p className='per_interview'>Interview Fee : Starts from 1000 per interview</p>
                                <button className='interview_start'><p className='start_text'>Get Started</p></button>
                            </div>
                        </div>
                    </div>
                    <Slider_image />
                </div>
            </div>
    )
}

export default Interviewer
