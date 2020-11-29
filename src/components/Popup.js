import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import HoverImage from "react-hover-image"
import reactHook from "../resource/reacthooks.png"
import reactHook2 from "../resource/reactHook2.jpg"
import "./project.css"

const Popup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>
        <p 
         className="thumnail"
         onClick={handleShow}>
            Launch demo modal
        </p>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <HoverImage className="c" 
                    src={reactHook}
                    hoverSrc={reactHook2}
                    // onMouseOut={()=>setShown(true)}
                    // onMouseOver={()=>setShown(false)}
                    // style="transition: ease-out 0.3s"
                    />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                <Button  href="https://www.naver.com">
                    Move
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default Popup;