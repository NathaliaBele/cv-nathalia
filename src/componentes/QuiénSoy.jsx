import React from "react";
import futbol from "../images/futbol.jpg";
import "../css/QuiénSoy.css";

function Habilidades() {
  const first = require("../images/azul.jpg");
  return (
    <div className="containerquiensoy">
      <div className="containeracerca">
        <div className="containerAcercademi">
          <h4 className="titleh4">About me</h4>
          <p className="pacercademi">
            I am a woman passionate about continuous learning, I enjoy personal
            and professional growth. I love playing sports, listening to music,
            contemplating nature, helping the people around me, reading, sharing
            quality time with the important people in my life. I like to lead
            and be led.
          </p>
        </div>
        <img src={first} alt="" className="imagenFutbol" />
      </div>
    </div>
  );
}

export default Habilidades;

/* 
   <div
          style={{
            width: "100vw",
            height: "80vh",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#F9F9F9",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <div style={{backgroundColor:'blue', padding: '3%', display:'flex', flexDirection: 'column', width: '30vw'}}>
            <h4
              style={{
                fontSize: "120%",
                color: "#0C7FB0",
                letterSpacing: "2px",
                alignISelf: "center",
                textAlign: "center",
              }}
            >
              Contacto
            </h4>
            <form ref={form} onSubmit={sendEmail} style={{justifyContent:'', fontSize:'65%',display:'flex', flexDirection: 'column'}}>
              <label>Nombre:</label>
              <input type="text" name="user_name" />
              <label>Correo:</label>
              <input type="email" name="user_email" />
              <label>Mensaje:</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
     
        </div>
 */
