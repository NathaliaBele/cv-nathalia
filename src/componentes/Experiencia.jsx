import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../css/Experiencia.css";
function Experiencia() {
  const first = require("../images/james-harrison-vpOeXr5wmR4-unsplash.jpg");

  return (
    <>
      <div className="container">
        <div className="container2">
          <div className="half">
            <h4 className="h4">Experience</h4>
            <p className="parr">
              I have developed projects and have been a teaching assistant for
              students in the world of full-stack development. During my career
              in the world of programming I have enjoyed being self-taught, I
              have supported my educational training with bootcamps, online
              courses and I have surrounded myself with people with more
              experience where I have been able to acquire technical and
              personal skills. In the month of September 2022 I was hired by a
              company called "COSINTE LTDA" located in the Chicó Norte sector,
              where I held the position of Media and Platforms Administrator
              performing functions such as: Development of the mobile
              application of the platform of said company, make configurations
              and implement new functionalities to the company's web platform
              and customer service. I held this position until February of this
              year.
            </p>
          </div>
          <img src={first} alt="" className="imagenE" />
        </div>
      </div>
    </>
  );
}

export default Experiencia;
