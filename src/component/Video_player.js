import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../assets/css/video_player.css";
import Leaflet_Video_VO from "../assets/image/Leaflet_Video_VO.mp4";
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Body>
                <video width="100%" className="video_play" controls>
                <source src={Leaflet_Video_VO} />
                </video>
            </Modal.Body>
        </Modal>
    );
}

function Video_player() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
                        <p className='play_text'>Take a Tour</p>
            <figure>
  <button name="play" onClick={() => setModalShow(true)}></button>
</figure>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Video_player