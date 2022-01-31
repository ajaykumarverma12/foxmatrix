import React from 'react'
import "../assets/css/video_header.css";
import computer_admin from "../assets/image/computer_admin.png";
import Frame from "../assets/image/Frame.png";
import Video_player from './Video_player';
function Video_header() {
    return (
        <div>
            <div className='conatiner-fluid '>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div>
                            <div className='img_video'>
                                <img src={Frame} />
                            </div>
                            <div className='img_video1'>
                                <img src={Frame} />
                            </div>
                            <div className='boder_value'>
                           <Video_player />
                            </div>
                            <img src={computer_admin} className='video_background_img' />
                          
                            <div className="d-flex justify-content-center">
                                <div className='itemvalue'>
                                    <form>
                                        <input type="text" placeholder='Enter full name *' className='text_value' />
                                        <input type="text" placeholder='Email address *' className='text_value' />
                                        <input type="text" placeholder=' Phone Number' className='text_value' />
                                        <input type="text" placeholder='Company name' className='text_value' />
                                        <input type="text" placeholder=' Company location' className='text_value' />
                                        <input type="text" placeholder=' Company website' className='text_value' />
                                        <button className='btn_video'>Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video_header
