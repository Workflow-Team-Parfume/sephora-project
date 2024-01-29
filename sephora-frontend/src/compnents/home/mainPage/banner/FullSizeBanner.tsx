import { Button, Container } from "@mui/material";
import "./banner.scss"
import { IFullSizeBanner } from "./types";
import React from "react";

const FullSizeBanner : React.FC<{banner: IFullSizeBanner}> 
= ({ banner }) => {
  return (
        <Container style={{maxWidth:"100%", 
        position:"relative"}} >
           <img style={{width:'100%'}} src={banner.image}/>
           <Button id='butBanner' variant="outlined" href={banner.link}>Переглянути</Button>
        </Container>
    );
};

export default FullSizeBanner;