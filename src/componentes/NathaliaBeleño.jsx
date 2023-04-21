import React from "react";
import azul from "../images/azul.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../css/NathaliaBeleño.css";
import { Button } from "bootstrap";
function NathaliaBeleño() {
  const first = require("../images/perfil.jpg");
  return (
    <div className="nathalia">
      <div className="divtext">
        <div className="containerText">
          <h4 className="saludo">Hi! I'm</h4>
          <h2 className="nombre">Nathalia </h2>
          <p className="nathaliaparrafo">
            I am a frontend developer with experience in web technologies like
            HTML, CSS, Javascript, React JS, Redux, Node JS and mobile like
            React-Native, App Inventor.
          </p>
          <div className="contenedorIcons">
            <a
              className="botones"
              href="https://wa.me/3007502315"
              target="https://wa.me/3007502315"
            >
              <WhatsAppIcon className="Icons" />
            </a>
            <a
              className="botones"
              href="https://github.com/NathaliaBele"
              target="https://github.com/NathaliaBele"
            >
              <GitHubIcon className="Icons" />
            </a>
            <a
              className="botones"
              href="https://www.linkedin.com/in/nathaliabele%C3%B1o/"
              target="https://www.linkedin.com/in/nathaliabele%C3%B1o/"
            >
              <LinkedInIcon className="Icons" />
            </a>
          </div>
        </div>
      </div>

      {/* <div>
    <img src={first} alt='' style={{maxWidth:'50vw ', maxHeight: '50vh'}}/>
    </div> */}
      <div className="img">
        <img src={first} alt="" className="img2" />
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default NathaliaBeleño;
