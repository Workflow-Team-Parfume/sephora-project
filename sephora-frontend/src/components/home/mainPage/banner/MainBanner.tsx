import { Button, Container, Grid, Typography } from "@mui/material";
import "./banner.scss"
// import { IMainBanner } from "./types";
import mainBanner1 from "../../image/banner/main1.png";
import mainBanner2 from "../../image/banner/main2.png";
import { useTranslation } from "react-i18next";

const banner1 = {
    title:'Знижка 20% на товар найменшої вартості за умови придбання двох акційних товарів Hugo Boss',
    description:null,
    link:'',
    image: mainBanner1
}

const banner2 = {
    title:'Відкрийте унікальні продукти Cosmed!',
    description:'Це бренд космецевтики, яка подбає про найвибагливішу шкіру',
    link:'',
    image: mainBanner2
}


const MainBanner = () => {
    const { t } = useTranslation();

  return (
        <Container className="mainBanner" style={{maxWidth:"100%"}} >
            <Grid container>

            <Grid item lg={6} style={{position:"relative"}}>
                <img style={{ width: "100%", height:"100%" }}  src={banner1.image}/>
                <Typography className='bannerTitle1'>{banner1.title}</Typography>
                <Button className='butMainBanner' href={banner1.link}>{t('common.button.moreDetails')}</Button>
            </Grid>

            <Grid item lg={6} style={{position:"relative"}}>
                <img style={{ width: "100%", height:"100%" }}  src={banner2.image}/>
                <Typography className='bannerTitle2'>{banner2.title}</Typography>
                <Typography className='bannerDes'>{banner2.description}</Typography>
            </Grid>

            </Grid>
        </Container>
    );
}

export default MainBanner