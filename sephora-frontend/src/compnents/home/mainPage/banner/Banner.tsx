import { Button, Container, Grid, Stack } from "@mui/material";
import "./banner.scss"
import { IBanner } from "../../types";

export function Banner (banner:IBanner, color:string, isLeft:boolean=false) {
  return (
        <Container style={{maxWidth:"100%"}} >
             <Grid container spacing={2.5} direction={isLeft ? "row-reverse" : "row"}>
                <Grid item md={6}>
                <Stack spacing={10.25} id="bannerStack" style={{background:color}}>
                    <Stack spacing={2.5}>
                        <div className="bannerTitle">{banner.title}</div>
                        <div className="bannerDescription">{banner.description}</div>
                    </Stack>

                    <Button id="bannerLink" variant="outlined" href={banner.link}>Переглянути</Button>
                </Stack>
                </Grid>

                <Grid item md={6}>
                    <img style={{ width: "100%", height:"100%" }} src={banner.image} alt=
                    {banner.title}/>
                </Grid>
            </Grid>
          </Container>
    );
}