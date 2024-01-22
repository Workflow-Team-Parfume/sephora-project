import { Button, Container } from "@mui/material";
import "./banner.scss"
import { IBanner_2 } from "../../types";

export function Banner_2 (banner:IBanner_2) {
  return (
        <Container style={{maxWidth:"100%", 
        position:"relative"}} >
           <img style={{width:'100%'}} src={banner.image}/>
           <Button id='butBanner' variant="outlined" href={banner.link}>Переглянути</Button>
        </Container>
    );
}