import React, { useEffect, useState } from 'react'
import About from "../pages/About";
import "../assets/css/experts.css";
import interview from "../assets/image/unsplash_JBwcenOuRCg.png";
import interview1 from "../assets/image/unsplash_376KN_ISplE.png";
import conforge from "../assets/image/wb_12.png";
import NOB from "../assets/image/wb_7.png";
import xeb from "../assets/image/wb_14.png";
import urban from "../assets/image/wb_13.jpg";
import Tvs from "../assets/image/wb_3.png";
import rpa from "../assets/image/wb_11.png";
import Uplers from "../assets/image/Uplers.png";
import Eucloid_img from "../assets/image/wb_8.png";
import Lumiqa from "../assets/image/wb_6.png";
import ifcus from "../assets/image/wb_5.png";
import smart from "../assets/image/wb_2.png";
import electrif from "../assets/image/wb_10.png";
import innovation from "../assets/image/innovation.png";
import intell from "../assets/image/wb_9.png";
import { useHistory } from 'react-router-dom';
function Experts() {
    const data = [
        {
            "id": "001",
            "label1": "Minutes ",
            "label2": "Interview taken",
            "number": "200+",
            "duration": "5"
        },
        {
            "id": "002",
            "label3": "Interviewers",
            "label4": "with niche skills",
            "number": "3000000+",
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
        history.push(<About />)
        console.log(history.push('/about'));
    }

    return (
        <div>
            <div className='container-fluid expert'>
                <div className='row'>
                    <div className='col-md-5  offset-md-1'>
                        <h1 className='expert_text'>Our experts evaluate potential hires with our established dashboard</h1>
                        <p className='expert_para'>FoxMatrix outsourcing interviews match the right interviewers with job types and create a healthy ecosystem for candidate assessments.
                        </p>
                        <p className='expert_para'>Our experts evaluate potential hires with our established dashboard.</p>
                        <p className='expert_para'>The Matrix dashboard is, where detailed data to the respective candidates are displayed to evaluate and determine the suitability to hire that specific employee.</p>
                        <button className='btn_class' onClick={handleAbout}>
                            <p className='btn_text'>Read More</p>
                        </button>
                    </div>
                    <div className='col-md-6'>
                        <div className="wrapper">
                            <div className="one">
                                <img src={interview} />
                            </div>
                            <div className="two">
                                <img src={interview1} />
                            </div>
                            <div className="three">
                                <p className="text_label1"> {data[1].label3}</p>
                                <p className="text_label2">{data[1].label4}</p>
                                <p className='count'> {count}</p>
                            </div>
                            <div className="four">
                                <p className="text_label1"> {data[0].label1}</p>
                                <p className="text_label2">{data[0].label2}</p>
                                <p className='count'> {count1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 offset-md-1'>
                        <p className='our_client'>Our Client</p>
                    </div>
                    <div className='col-md-12'>
                        <div className='expert_img'>
                            <div class="d-flex justify-content-center content_text">
                                <div class="video_box">
                                    <img src={conforge} />
                                </div>
                                <div class=" video_box">
                                    <img src={NOB} />
                                </div>
                                <div class="video_box">
                                    <img src={xeb} />
                                </div>
                                <div class="video_box">
                                    <img src={urban} />
                                </div>
                            </div>
                            <div class="d-flex justify-content-center center_text">
                                <div class=" video_box">
                                    <img src={Tvs} className='comapny_img' />
                                </div>
                                <div class="video_box">
                                    <img src={rpa} />
                                </div>
                                <div class="video_box">
                                    <img src={Uplers} />

                                </div>
                                <div class="video_box">
                                    <img src={Eucloid_img} />

                                </div>
                                <div class="video_box">
                                    <img src={Lumiqa} />

                                </div>
                                <div class="video_box">
                                    <img src={ifcus} />

                                </div>
                            </div>
                            <div class="d-flex justify-content-center center_text">
                                <div class="video_box">
                                    <img src={smart} />

                                </div>
                                <div class="video_box">
                                    <img src={electrif} />

                                </div>
                                <div class="video_box">
                                    <img src={innovation} />

                                </div>
                                <div class="video_box">
                                    <img src={intell} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experts
