import React from "react";
import { Modal } from "react-bootstrap";
import "../assets/css/formcontact.css";
import Form_image from "../assets/image/Form_image.png";
import Group_form from "../assets/image/Group_form.png";
import org_icon from "../assets/image/org_icon.png";
import call_icon from "../assets/image/call_icon.png";
import email_icon from "../assets/image/email_icon.png";
import select_img from "../assets/image/select_img.png";



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Body className="model_body">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={Form_image} className="form_img" />
            </div>
            <div className="col-md-6">
              <p className="idea_talk">Let's Talk About Your Idea</p>
              <label><img src={Group_form} className="icon_form_img" /> </label>
              <input type="text" className="no-outline" placeholder="Enter Full Name*" />
              <div className="org">
                <label><img src={org_icon} className="icon_form_img" /> </label>
                <input type="text" className="no-outline" placeholder="Organziation *" />
              </div>
              <div className="org">
                <label><img src={call_icon} className="icon_form_img" /> </label>
                <input type="text" className="no-outline" placeholder="Phone *" />
              </div>
              <div className="org">
                <label><img src={email_icon} className="icon_form_img" /> </label>
                <input type="text" className="no-outline" placeholder="Email *" />
              </div>
              <div className="org">
                <label><img src={select_img} className="icon_form_img" /> </label>
                <select name="cars" className="no-outline" id="cars">
                  <option value="volvo">How did you come to know about us? *</option>
                </select>
              </div>
              <button className="btn_form">
                <span className="call_btn">Call Back</span>
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>

    </Modal>
  );
}

function Demo_form() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className='Demo_btn' onClick={() => setModalShow(true)}>
        <p className='btn_text1'>Book a Demo</p>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Demo_form