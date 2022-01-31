import React from 'react'
import  "../assets/css/footer.css";
import Header_selector_icon from "../assets/image/Header_selector_icon.png";
import twitter from "../assets/image/twitter.png";
import facebook from "../assets/image/facebook.png";
import linkedin from "../assets/image/linkedin.png";
import arrow from "../assets/image/arrow.png";

function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={Header_selector_icon} className='footer_icon' />
                            <p className='Footer'>FOXMATRIX</p> 
                            <p className='footer_content'>FoxMatrix is an aggregator platform, where Employers can outsource candidate assessment to external interviewers to make their hiring process more efficient and faster.
                                Our vision is to facilitate quality assessment at a faster pace than ever before.
                            </p>
                            <p className='Footer'>Connected:
                                <div class="grid-container">
                                    <div class="grid-item"><img src={twitter} /></div>
                                    <div class="grid-item"><img src={facebook} /></div>
                                    <div class="grid-item"><img src={linkedin} /></div>
                                </div>
                            </p>
                        </div>
                        <div className='col-md-2'>
                            <p className='Footer_middle'>Useful Links</p>
                            <div className='Footer_middle1'>
                                <p className='footer_text'><img src={arrow} /> About Us</p>
                                <p className='footer_text'><img src={arrow} /> Blog</p>
                                <p className='footer_text'><img src={arrow} /> Career</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p className='Footer_middle'>For Employer/Interviewer</p>
                            <div className='Footer_middle1'>
                                <p>Employer/Sales (India)</p>
                            </div>
                            <div className='Footer_mid_content'>
                                <p>+91 7827 214 738</p>
                                <p>sales@foxmatrix.com</p>
                            </div>
                            <div className='footer_last'>
                                <p>Interviewer Enquiry</p>
                            </div>
                            <div className='Footer_mid_content'>
                                <p>+91 7007 965 311</p>
                                <p>support@foxmatrix.com</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                        <p className='Footer_middle'>For Candidate</p>
                        <div className='Footer_middle1'>
                                <p>+91 7007 965 311</p>
                                <p>pragya.tiwari@foxmatrix.com</p>
                            </div>
                            <p className='Footer'>Connected:
                                <div class="grid-container">
                                    <div class="grid-item"><img src={twitter} /></div>
                                    <div class="grid-item"><img src={facebook} /></div>
                                    <div class="grid-item"><img src={linkedin} /></div>
                                </div>
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div className='line'>
                </div>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-9'>
                            <p className='copyright'>Copyright © @2019 FoxMatrix. All rights reserved</p>
                        </div>
                        <div className='col-md-3'>
                            <div class="flex_container">
                                <div className='copyright'>Privacy</div>
                                <div className='copyright'>Term of use</div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer
