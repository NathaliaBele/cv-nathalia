import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-bootstrap";
import "../css/Contacto.css";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "react-bootstrap/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Iconos from './Icons'
// import modalI from './ModalI'
import "../css/Contacto.css";
import { Box, Modal } from "@mui/material";
function Contacto() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const first = require("../images/firstphoto.jpg");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hshnghy",
        "template_lowfkyb",
        form.current,
        "Lk4D7jC8HwkkTPZ0P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div className="containerContacto">
        <div className="containerForm">
          <Iconos/>
          {/* <div className="form">
            Skills
          </div>

          <p className="message">
            "Nuestro propósito se encuentra donde la necesidad de este mundo,
            nuestro deseo y nuestra pasión más grande se intersectan"
          </p> */}
        </div>
      </div>
      <div className="footer">
        <h1 style={{ alignSelf: "center", right: "8px" }}>NSBA</h1>
        <p style={{ alignSelf: "center" }}>
          <br />
          Nathalia Beleño 2023 All rights reserved
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "none !important",
          }}
        >
          <a
            style={{ borderBottomColor: "#061820", justifyContent: "center" }}
            href="https://wa.me/3007502315"
            target="https://wa.me/3007502315"
          >
            <WhatsAppIcon
              style={{
                color: "white",
                fontSize: "40px",
                display: "flex",
                borderBottom: "none !important",
                alignSelf: "center",
                outline: "none",
              }}
            />
          </a>
          <a
            style={{ borderBottomColor: "#061820", justifyContent: "center" }}
            href="https://github.com/NathaliaBele"
            target="https://github.com/NathaliaBele"
          >
            <GitHubIcon
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: "40px",
              }}
            />
          </a>
          <a
            style={{ borderBottomColor: "white", justifyContent: "center" }}
            href="https://www.linkedin.com/in/nathaliabele%C3%B1o/"
            target="https://www.linkedin.com/in/nathaliabele%C3%B1o/"
          >
            <LinkedInIcon
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: "40px",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contacto;
