import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import input_main_icon from "../../../../assets/images/input_main_icon.svg";
import deliveryImage1 from "../../../../assets/images/deliveryImage1.svg";
import deliveryImage2 from "../../../../assets/images/deliveryImage2.svg";
import deliveryImage3 from "../../../../assets/images/deliveryImage3.svg";
import deliveryImage4 from "../../../../assets/images/deliveryImage4.svg";
import deliveryImage5 from "../../../../assets/images/deliveryImage5.svg";
import deliveryImage6 from "../../../../assets/images/deliveryImage6.svg";
import './deliveryMain.scss';
import { useTranslation } from "react-i18next";

const DeliveryMain = () => {
  const { t } = useTranslation();
const deliveries = [
  {
    image: deliveryImage1,
    title: t('deliveryOptions.freeByCourier'),
    description: t('deliveryOptions.freeByCourier.details')
  },
  {
    image: deliveryImage2,
    title: t('deliveryOptions.pickup'),
    description: t('deliveryOptions.pickup.details')
  },
  {
    image: deliveryImage3,
    title: t('deliveryOptions.newPost'),
    description: t('deliveryOptions.newPost.details')
  },
  {
    image: deliveryImage4,
    title: t('deliveryOptions.ukrposhta'),
    description: t('deliveryOptions.ukrposhta.details')
  },
  {
    image: deliveryImage5,
    title: t('deliveryOptions.meest'),
    description: t('deliveryOptions.meest.details')
  },
  {
    image: deliveryImage6,
    title: t('deliveryOptions.byCourier'),
    description: t('deliveryOptions.byCourier.details')
  }
]
  return (
    <>
      <Container
        className="mainPageDelivery"
        style={{maxWidth: "80%", justifyContent: "center", margin: '140px auto'}}
      >
       
       <Stack
          alignItems="center"
          justifyContent='center'
          spacing={15}
        >
          <Stack
            sx={{background:'#FAFAFA', width: '55%', padding: '50px 30px'}}
            alignItems="center"
            justifyContent='center'
            spacing={7.5}
          >
            <Stack spacing={3} alignItems="center"
            justifyContent='center'>
              <Typography className="title">{t('delivery.weMakeYouHappy')}</Typography>
              <Typography className="titleDesc">{t('delivery.enterTheName')}</Typography>
            </Stack>
            <Input
              id="standard-adornment-password"
              type='text'
              sx={{ width: '75%' }}
              classes={{ underline: 'custom-input-underline' }}
              className='titleDesc'
              endAdornment={
                <IconButton size="small" aria-label="toggle password visibility">
                  <img src={input_main_icon} alt=""/>
                </IconButton>
              }
              placeholder={t('delivery.search')}
            />
          </Stack>

          <Stack spacing={10} alignItems='center'>
            <Typography className="title">{t('deliveryOptions')}</Typography>
            <Grid container spacing={2}>
              {deliveries.map((delivery) => (
                <Grid item xs={12} md={6} lg={4}>
                  <Button href="/" style={{textDecoration:'none'}}>
                    <Stack alignItems="center" className="delivery" justifyContent='center' spacing={4}>
                      <Stack sx={{height: '94px', justifyContent: 'center'}}>
                        <img src={delivery.image} alt={delivery.title} />
                      </Stack>
                      <Stack alignItems="center" justifyContent='center' spacing={1}>
                      <Typography className="deliveriesTitle">
                        {delivery.title}
                      </Typography>
                      <Typography className="deliveriesText">
                        {delivery.description}
                      </Typography>
                      </Stack>
                    </Stack>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
export default DeliveryMain;