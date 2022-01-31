import React from "react";
import "../assets/css/slider.css";
import Carousel from "react-elastic-carousel";
import java from "../assets/image/java.svg";
import Sahil from "../assets/image/Sahil.jpg";
import MukulSharma from "../assets/image/MukulSharma.jpeg";
import AkhilBhatia from "../assets/image/AkhilBhatia.jpeg";
import ShamsheAlam from "../assets/image/ShamsheAlam.jpeg";
import NirbhayAgrawal from "../assets/image/NirbhayAgrawal.jpeg";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];
function Slider_image() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 offset-md-1">
            <p className='heading_slider1'>What Our Experts Say</p>
          </div>
        
          <div className="col-md-12">
            <div className="slidercard">
              <Carousel breakPoints={breakPoints}>
                <div className='tabpanel'>
                  <div>
                    <img src={Sahil} className="cardImg" />
                    <p className="card_text">I have been conducting interviews to utilizing foxmatrix the foxmatrix app & taking interviews for a while now
                      & I will be using this platform to share my own experience about foxmatrix & the way it helps interviewers like me
                    </p>
                    <p className="text_name">Sahil</p>
                    <p className="lang">PHP</p> 
                  </div>
                </div>
                <div className='tabpanel'>
                  <div>
                    <img src={MukulSharma} className="cardImg" />
                    <p className="card_text">
                      With the FoxMarix, it becomes very easy to keep track of all scheduled interviews & keeping track all of them.
                    </p>

                    <p className="text_name">Mukul Sharma</p>
                    <p className="lang">Java</p>
                  </div>
                </div>
                <div className='tabpanel'>
                  <div>
                    <img src={AkhilBhatia} className="cardImg" />
                    <p className="card_text">
                      I would say that foxmatrix is a tool that has given us a very reliable platform on which we can basely take interviews we can summit candidate feedback
                    </p>
                    <p className="text_name">Akhil Bhatia</p>
                    <p className="lang">Java</p>
                  </div>
                </div>
                <div className='tabpanel'>
                  <div>
                    <img src={ShamsheAlam} className="cardImg" />
                    <p className="card_text">I have been conducting interviews to utilizing foxmatrix the foxmatrix app & taking interviews for a while now
                      & I will be using this platform to share my own experience about foxmatrix & the way it helps interviewers like me
                    </p>
                    <p className="text_name">Shamshe Alam</p>
                    <p className="lang">PHP</p>
                  </div>
                </div>
                <div className='tabpanel'>
                  <div>
                    <img src={NirbhayAgrawal} className="cardImg" />
                    <p className="card_text">I have been conducting interviews to utilizing foxmatrix the foxmatrix app & taking interviews for a while now
                      & I will be using this platform to share my own experience about foxmatrix & the way it helps interviewers like me
                    </p>
                    <p className="text_name">Nirbhay Agrawal</p>
                    <p className="lang">PHP</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider_image