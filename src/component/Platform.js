import React from 'react';
import "../assets/css/platform.css";
import Group303 from "../assets/image/Group303.png";
import Circle from "../assets/image/Circle.png";
import Group from "../assets/image/Group.png";
import Group276 from "../assets/image/Group276.png";
import circlevector from "../assets/image/circlevector.png";
import Group277 from "../assets/image/Group277.png";
import Group_icon from "../assets/image/Group_icon.png";
import GroupQus from "../assets/image/GroupQus.png";
import vector_high from "../assets/image/vector_high.png";
function Platform() {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row no-pad'>
                    <div className='img_to_img'>
                        <img src={Group303} className="paltform_img" />
                        <div className='top_platform'>
                            <p className='plat_text'>What makes us different?</p>
                            <p className='plat1_text1'>We match the right interviewers with job types creating a healthy ecosystem for candidate assessments.</p>
                            <div className='box_height'>
                                <div id="contain1">
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={Group} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Superfast screen to interview</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={Group} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Provide complete feedback with two way interviews</p>
                                        </div>
                                    </div>

                                </div>
                                <div id="contain1">
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={Group276} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Wide range of technology (niche skills) experts</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={circlevector} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Video recording</p>
                                        </div>
                                    </div>

                                </div>
                                <div id="contain1">
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={Group277} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p> Weekday & Off hours working</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={Group_icon} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Improved candidate</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="contain1">
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={GroupQus} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Anytime assistance (24*7)</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className='item_plat'>
                                            <img src={vector_high} className='img_platform' />
                                        </div>
                                        <div className='item_plat2'>
                                            <p>Unbiased hiring</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Circle} className='paltform_img1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform
