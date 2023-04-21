import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../css/Pilares.css";
function Pilares() {
  const first = require("../images/Team.jpg");
  const second = require("../images/Computador.jpeg");
  const third = require("../images/trans.jpg");

  return (
    <div className="container">
      <div className="contain2">
        <Card
          className="card"
          sx={{ maxWidth: 345, width: 345, maxHeight: 500, height: 500 }}
        >
          <CardActionArea style={{ paddingBottom: "4%" }}>
            <CardMedia
              component="img"
              height="300"
              image={second}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Learning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am a woman who is passionate about continuous learning, I
                enjoy learning from others, I believe that personal and
                professional growth are the fundamental basis for success.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card
          className="card"
          sx={{ maxWidth: 345, width: 345, maxHeight: 600, height: 500 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={first}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Team Work
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I believe that the success of a community or company is
                teamwork, the excellent work environment, I believe that
                empathy, understanding and communication allow us to achieve
                success.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card
          className="card"
          sx={{ maxWidth: 345, width: 345, maxHeight: "300", height: 500 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={third}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Transformation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am passionate about social transformation, I believe that we
                can all generate a small change in the place where we find
                ourselves, we all have the ability to transform or be
                transformed in a positive way.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Pilares;

{
  /* <div style={{ backgroundColor:'#F9F9F9', width: '100%', height: '100%', justifyContent: 'center', display:'flex'}}>
    <div style={{width: '100vw', height: '100vh',  flexDirection: 'row', display:'flex', alignItems:'center'}}>
      <p>
      Soy una mujer apasionada por la transformación social, por crear, experimentar y realizar cosas nuevas con 
      el objetivo que impacten para bien nuestra sociedad.
      Creo plenamente en el poder de la actividad física y el deporte para generar cambios en nuestra sociedad.
      Creo que la actividad física es una excelente herramienta para prevenir enfermedades no transmisibles.
      Creo que este campo es algo más que sudor, olor y color.
      La teoría puesta en práctica es nuestra mejor herramienta!
      </p>
    </div>
   <div>
     <img src={first} alt='' style={{maxWidth:'50vw', maxHeight: '50vh', marginRight:'10%'}}/>
     </div>
      </div> */
}
