import { Button, Container, Grid } from "@mui/material";
import "./banner.scss"
import { IMainBanner } from "../../types";

export function MainBanner (banners:IMainBanner[]) {
  return (
        <Container sx={{ py: 8 }} style={{margin: 0, maxWidth:"100%", 
        position:"relative"}} >
             <Grid container>
                {banners.map((banner) => (
        <Grid item lg={6} style={{position:"relative"}}>
           <img style={{width:'100%'}} src={banner.image}/>
           <Button id='butBanner' variant="outlined" href={banner.link}>Переглянути</Button>
        </Grid>
                ))}
            </Grid>
        </Container>
    );
}