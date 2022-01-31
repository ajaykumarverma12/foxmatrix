import React, { useEffect, useState } from 'react';
import "../assets/css/contact.css";
import contact from "../assets/image/contact.png";
import location from "../assets/image/location.png";
import whatsapp_img from "../assets/image/whatsapp_img.png";
import email_img from "../assets/image/email_img.png";



function ContactUs() {
    return (
        <div>
            <div className='conatiner-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='about_top'>
                            <img src={contact} />
                            <p className='contact_center'>Contact</p>
                            <p className='contact_center1'>Reach Us</p>
                        </div>
                    </div>
                    <div className='col-md-10 offset-md-1 top_map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224368.3937140012!2d77.25804165398831!3d28.516983404631674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1642749694925!5m2!1sen!2sin"
                            width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-4">
                                <div className='contactus_box1'>
                                    <p className='contact_add'>Address</p>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-1">
                                                <img src={location} className='location_add' />
                                            </div>
                                            <div class="col-md-auto">
                                                <p className='location_add1'>A-36, Sector 4, Noida - 201301, Uttar Pradesh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col-md-4">
                                    <div className='card_contactus'>
                                        <p className='location_Employer'>For Employer/Sales </p>
                                        <p><img src={whatsapp_img} className='number_contact' /><span className='number_contact1'>+91 7827 214 738</span></p>
                                        <p><img src={email_img} className='number_contact' /><span className='number_contact1'>sales@foxmatrix.com</span></p>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div className='card_contactus'>
                                        <p className='location_Employer'>For Interviewer</p>
                                        <p><img src={whatsapp_img} className='number_contact' /><span className='number_contact1'>+91 7007 965 311</span></p>
                                        <p><img src={email_img} className='number_contact' /><span className='number_contact1'>support@foxmatrix.com</span></p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div className='card_contactus'>
                                        <p className='location_Employer'> For Candidate</p>
                                        <p>
                                            <img src={whatsapp_img} className='number_contact' />
                                            <span className='number_contact1'>+91 7007 965 311</span>
                                        </p>
                                        <p>
                                            <img src={email_img} className='number_contact' />
                                            <span className='number_contact1'>pragya.tiwari@foxmatrix.com</span>
                                        </p>
                                    </div>
                                </div>
                              
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs