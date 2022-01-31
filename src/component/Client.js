import React from 'react';
import Vector_image from "../assets/image/Vector_image.png";
import java from "../assets/image/java.svg";
import "../assets/css/client.css";
import node from "../assets/image/node.png";
import react from "../assets/image/react.png";
import angular from "../assets/image/angular.png";
import asp from "../assets/image/asp.png";
import php from "../assets/image/php.png";
import flutter from "../assets/image/flutter.png";
import aws from "../assets/image/aws.png";
import python from "../assets/image/python.png";
import vue from "../assets/image/vue.png";
import android from "../assets/image/android.png";
import ios from "../assets/image/ios.svg";
import adobe from "../assets/image/adobe.png";
import drupal from "../assets/image/drupal.png";
import ruby from "../assets/image/ruby.png";
import tibco from '../assets/image/tibco.png'
import pwa from '../assets/image/pwa.png'
import amazon_rds from '../assets/image/amazon_rds.png'
import veeva from '../assets/image/veeva.png'
import wintel from '../assets/image/wintel.png'
import uipath from '../assets/image/uipath.png';
import asterisk from '../assets/image/asterisk.png';
import blueprism from '../assets/image/blueprism.png';
import sap_hybris from '../assets/image/sap_hybris.png';
import kubernates from '../assets/image/kubernates.png';
import linux from '../assets/image/linux.png';
import amazons3 from '../assets/image/amazons3.png';
function Client() {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row no-pad'>
                    <div className='col-md-12'>
                        <div className='vector'>
                            <img src={Vector_image} />
                            <p className='centered'>Tech Expertise</p>
                            <div className="container1">
                                <div class="card">
                                    <img src={java} />
                                    <p className='langauge'>Java</p>
                                </div>
                                <div className="card">
                                    <img src={node} />
                                    <p className='langauge'>Node.js</p>
                                </div>
                                <div className="card">
                                    <img src={react} />
                                    <p className='langauge'>React Native & React JS</p>
                                </div>
                                <div className="card">
                                    <img src={angular} />
                                    <p className='langauge'>Angular JS </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="item">
                        <div className="card">
                            <img src={asp} />
                            <p className='langauge'>.NET</p>
                        </div>
                        <div className="card">
                            <img src={php} />
                            <p className='langauge'>PHP</p>
                        </div>
                        <div className="card">
                            <img src={flutter} />
                            <p className='langauge'>Flutter</p>
                        </div>
                        <div className="card">
                            <img src={aws} />
                            <p className='langauge'>AWS</p>
                        </div>
                        <div className="card">
                            <img src={python} />
                            <p className='langauge'>Python</p>
                        </div>
                        <div className="card">
                            <img src={vue} />
                            <p className='langauge'>Vue JS</p>
                        </div>
                        <div className="card">
                            <img src={android} />
                            <p className='langauge'>Android</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="item1">
                        <div className="card">
                            <img src={ios} />
                            <p className='langauge'>iOS</p>
                        </div>
                        <div className="card">
                            <img src={adobe} />
                            <p className='langauge'>AEM</p>
                        </div>
                        <div className="card">
                            <img src={drupal} />
                            <p className='langauge'>Drupal</p>
                        </div>
                        <div className="card">
                            <img src={ruby} />
                            <p className='langauge'>Ruby on Rails </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 skill_content'>
                <div className='row no-pad'>
                    <div className='col-md-5  offset-md-1'>
                        <p className='skill'>Niche Skills</p>
                    </div>
                    <div className='col-md-12'>
                        <div id="cont">
                            <div className="box">
                                <img src={tibco} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={pwa} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={amazon_rds} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={veeva} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={wintel} className='card_img_item' />
                            </div>
                            <div className="box" >
                                <img src={uipath} className='card_img_item' />

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div id="cont">
                            <div className="box">
                                <img src={asterisk} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={blueprism} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={sap_hybris} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={kubernates} className='card_img_item' />
                            </div>
                            <div className="box">
                                <img src={linux} className='card_img_item' />
                            </div>
                            <div className="box" >
                                <img src={amazons3} className='card_img_item' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Client
