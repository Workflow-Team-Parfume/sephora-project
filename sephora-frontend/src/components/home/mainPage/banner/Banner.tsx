import { Button, Container, Grid, Stack } from "@mui/material";
import "./banner.scss"
import { IBanner } from "./types";
import React from "react";
import { useTranslation } from "react-i18next";

const Banner: React.FC<{banner:IBanner, color:string, isLeft?:boolean}> 
= ({ banner, color, isLeft=false}) => {

    const { t } = useTranslation();

  return (
        <Container className="banner" style={{maxWidth:"100%"}} >
             <Grid container spacing={5} direction={isLeft ? "row-reverse" : "row"}>
                <Grid item md={6}>
                    <Stack spacing={11.25} className="bannerStack" style={{background:color}}>
                        <Stack spacing={5} maxWidth='600px'>
                            <div className="bannerTitle">{banner.title}</div>
                            <div className="bannerDescription">{banner.description}</div>
                        </Stack>
                        <Button className="bannerLink" href={banner.link}>{t('common.button.review')}</Button>
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
export default Banner;