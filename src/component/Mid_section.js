import React from 'react' 
import slider_img from "../assets/image/slider_img.png";
import "../assets/css/mid_section.css";
import process_bg_img from "../assets/image/process_bg_img.png";
import process from "../assets/image/process image.png";
import Form_contact from './Form_contact';
import Demo_form from './Demo_form';
function Mid_section() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
        <div class="container-fluid p-0 headerfixed">
          <div class="row no-pad">
            <div class="col-md-6">
              <img src={slider_img} className='img_middle' />
              <div> 
                <p className='centered_text'>We Outsource Interviews </p>
                {/* <button className='button_style'>
                  <p className='btn_text1'>Book a Demo</p>
                </button> */}
                <Form_contact />
              </div>
            </div>
            <div class="col-md-6 mid_content">
              <div>
                <p className='mid_contentsub'>Are you facing problem?</p>
                <div className="grid_middle">
                  <div></div>
                  <div className="grid_top">
                    <p className='grid1_text'>Interviewing your candidates?</p>
                  </div>
                  <div><div class="circle a-slide" data-animation="once"></div>
                  </div>
                </div>
                <div class="grid_middle1">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div class="grid1">
                    <p className='grid1_text'>Conducting two way interviews?</p>
                  </div>
                </div>
 
                <div className="grid_middle">
                  <div>
                  </div>

                  <div className="grid1">
                    <p className='grid1_text'>Insufficient HR bandwidth ?</p>
                  </div>
                  <div>
                    <div class="circle1 a-slide" data-animation="once"></div>
                  </div>
                </div>
                <div class="grid_middle1">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div class="grid1">
                    <p className='grid1_text'>Poor in Employee Conversion ratio?</p>
                  </div>
                </div>
                <div className="grid_middle">
                  <div>
                    <div class="circle2 a-slide" data-animation="once"></div>
                  </div>
                  <div className="grid1">
                    <p className='grid3_text'>Hiring cost to much?</p>
                  </div>
                  <div>
                    <div class="circle2 a-slide" data-animation="once"></div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className='col-md-11  offset-md-1'>
              <p className='job'>How do we help?</p>
              <p className='job_title'>We match the right interviewers with job types creating a healthy ecosystem for candidate assessments.</p>
            </div>
            <div className='img_to_img'>
              <img src={process_bg_img} className="Process_img" />
              <img src={process} className='process_img1' />
            </div>
         
            <div className='col-md-11  offset-md-1'>
              {/* <button className='btn2'>
                <p className='btn_text2'>Book a Demo</p>
              </button> */}
              <Demo_form />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mid_section
