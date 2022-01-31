import React, { useEffect, useState } from 'react'
import can_image from "../assets/image/can_image.png";
import "../assets/css/candidate.css";
import process from "../assets/image/Group 317.png";
import image_23 from "../assets/image/image 23.png";
import image_232 from "../assets/image/image 23-2.png";
import ecommerce from "../assets/image/ecommerce.png";
import hospital from "../assets/image/hospital.png";
import banking from "../assets/image/banking.png";
import education from "../assets/image/education.png";
import fluent_people from "../assets/image/fluent_people-24-regular.png";
import timer from "../assets/image/Group 5.png";
import Group303 from "../assets/image/Group303.png";
import Group333 from "../assets/image/Group 333.png";
import Vector from "../assets/image/Vector.png";
import Group335 from "../assets/image/Group 335.png";
import Group332 from "../assets/image/Group 332.png";
import Group1 from "../assets/image/Group-1.png";
import Group334 from "../assets/image/Group 334.png";
import Group229 from "../assets/image/Group 299.png";
import Group_write from "../assets/image/Group_write.png";
import interview_img1 from "../assets/image/interview_img1.png";
import { useHistory } from 'react-router-dom';
import Form_contact from '../component/Form_contact';
import Video_player from '../component/Video_player';
import ContactUs from "../pages/ContactUs";
function Candidate() {
    const data = [
        {
            "id": "001",
            "label1": "Minutes ",
            "label2": "Interview taken",
            "number": "3000000+",
            "duration": "5"
        },
        {
            "id": "002",
            "label3": "Total Interviewers",
            "label4": "with niche skills",
            "number": "200+",
            "duration": "5"
        },
    ]
    const [count, setcount] = useState('0');
    const [count1, setcount1] = useState('1');
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            let start = 0;
            const end = parseInt(data[i].number.substring(0, 3))
            if(data[0] == data[i]){
                if (start === end) return;
                let totalTime = parseInt(data[i].duration);
                let incrementTime = (totalTime / end) * 1000;
                let timer = setInterval(() => {
                    start += 1;
                    setcount(String(start) + data[i].number.substring(3))
                    if (start === end) clearInterval(timer)
                }, incrementTime)
            }
            if(data[1] == data[i]){
                if (start === end) return;
                let totalTime = parseInt(data[i].duration);
                let incrementTime = (totalTime / end) * 1000;
                let timer = setInterval(() => {
                    start += 1;
                    setcount1(String(start) + data[i].number.substring(3))
                    if (start === end) clearInterval(timer)
                }, incrementTime)
            }
          
        }
        
    }, [])
    const history = useHistory();
    const handleAbout = () => {
        history.push(<ContactUs />)
        console.log(history.push('/contact'));
    }
    

    return (
        <div>
            <div class="container-fluid p-0 headerfixed">
                <div class="row no-pad">
                    <div class="col-md-6">
                        <img src={can_image} className='candidate_img' />
                        <div>
                            <p className='candidate_text'>Get yourself Prepare for Interview</p>
                            <p className='candidate_text1'>Know a lot more about your current industry with our experts.</p>

                            {/* <button className='button_candidate'>
                                <p className='button_candidate1'>Book a Demo</p>
                            </button> */}
                            <Form_contact />
                        </div>
                    </div>
                    <div class="col-md-6 mid_content">
                        <div>
                            <p className='mid_contentsub'>Are you facing problem?</p>
                            <div className="grid_middle">
                                <div></div>
                                <div className="grid_top_cand">
                                    <p className='grid1_text_cand'>Assessing yourself?</p>
                                </div>
                                <div><div class="circle a-slide" data-animation="once"></div>
                                </div>
                            </div>
                            <div class="grid_middle1">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div class="grid1_candidate">
                                    <p className='grid1_text_cand'>Getting job?</p>
                                </div>
                            </div>

                            <div className="grid_middle">
                                <div>
                                </div>

                                <div className="grid1_candidate">
                                    <p className='grid1_text_cand'>Updating yourself with current happenings?</p>
                                </div>
                                <div>
                                    <div class="circle1 a-slide" data-animation="once"></div>
                                </div>
                            </div>
                            <div class="grid_middle1">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div class="grid1_candidate">
                                    <p className='grid1_text_cand'>Lack of confidence in virtual interview?</p>
                                </div>
                            </div>
                            <div className="grid_middle">
                                <div>
                                    <div class="circle2 a-slide" data-animation="once"></div>
                                </div>
                                <div>
                                    <div class="circle2 a-slide" data-animation="once"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-11 offset-md-1'>
                        <p className='job'>How it works?</p>
                    </div>
                    <div className='col-md-9 offset-md-1'>
                        <img src={process} className='process_cand' />
                    </div>
                    <div className='col-md-11 offset-md-1'>
                        <a href='https://www.foxmatrix.com/web/signup'>
                        <button className='button_cand'><p className='button_cand1'>Join Us</p></button>
                        </a>
                    </div>
                    <div className='col-md-12'>
                        <div className='industries'>
                            <div className='col-md-10  offset-md-1'>
                                <p className='industries_text'>Industries</p>
                            </div>
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={image_23} />
                                            </div>
                                            <p className='candidate_heading'>Sales & Marketing</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={image_232} />
                                            </div>
                                            <p className='candidate_heading'>Healthcare</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={ecommerce} />
                                            </div>
                                            <p className='candidate_heading'>E-commerce </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row justify-content-md-center">
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={hospital} />
                                            </div>
                                            <p className='candidate_heading'>Hospitality</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={banking} />
                                            </div>
                                            <p className='candidate_heading'>Banking & Fintech</p>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div className='candidate_box'>
                                            <div className='blog_img_cand'>
                                                <img src={education} />
                                            </div>
                                            <p className='candidate_heading'>Education</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-4">
                                <div className='icon_candidate'>
                                    <img src={fluent_people} />
                                    <p className='total_interview'>{data[1].label3}</p>
                                    <p className='with_skill'>{data[1].label4}</p>
                                    <p className='total_skill'>{count1}</p>
                                </div>
                            </div>
                            <div class="col-md-auto">
                                <div className='icon_candidate'>
                                    <img src={timer} />
                                    <p className='total_interview'>{data[0].label1}</p>
                                    <p className='with_skill'>{data[0].label1}</p>
                                    <p className='total_skill1'>{count}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='back_candidate'>
                            <div className='col-md-8 offset-md-2'>
                            <p className='candidate_pos'>How we can make your experience better?</p>
                            
                            </div>
                        <div class="container candidate_contain">
                            <div class="row justify-content">
                                <div class="col-md-3 offset-md-1">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group333} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Easily Accessible</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Vector} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Complete feedback with recording</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 offset-md-1">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group335} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Hassle free process</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group_write} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Whiteboards</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 offset-md-1">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group332} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Minimal fee</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group1} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Experts on various technology</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 offset-md-1">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group334} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>No off time to prepare</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div className='candidate_item'>
                                        <div className='item_plat_candidate'>
                                            <img src={Group229} />
                                        </div>
                                        <div className='item_plat_candidate1'>
                                            <p>Video recorded interview</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-12'>
                        <div className='boxitem_candidate'>
                          <img src={interview_img1} />
                          <div className='border_boxitem'>
                              <Video_player />
                          </div>
                        </div>
                    </div>
                  
                    <div className='text_love'>
                   <div className='col-md-11 offset-md-1'>
                       <p className='text_hear'>We’d love to hear from you</p>
                   </div>
                   <div className='col-md-11 offset-md-1'>
                       <p className='text_hear1'>We match the right interviewers with job types creating a healthy ecosystem for candidate assessments</p>
                   </div>
                   <div className='col-md-11 offset-md-1'>
                      <button className='button_contact'><p className='button_contact_text' onClick={handleAbout}>Contact Us</p></button>
                   </div>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default Candidate
