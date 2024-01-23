import { Button, Container } from "@mui/material";
import "./banner.scss"
import { IBanner_2 } from "../../types";
import React from "react";

const Banner_2 : React.FC<{banner: IBanner_2}> 
= ({ banner }) => {
  return (
        <Container style={{maxWidth:"100%", 
        position:"relative"}} >
           <img style={{width:'100%'}} src={banner.image}/>
           <Button id='butBanner' variant="outlined" href={banner.link}>Переглянути</Button>
        </Container>
    );
};

export default Banner_2;