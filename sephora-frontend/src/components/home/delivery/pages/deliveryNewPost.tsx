import { Button, Container, Stack, Typography } from '@mui/material';
import './deliveryPages.scss';
import { useTranslation } from "react-i18next";
import routes from '../../../../common/routes';


const DeliveryNewPost = () => {

  const { t } = useTranslation();
  
  return (
    <Container className="deliveryFontStyle"
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      marginTop: 15
    }}
  >
      <Typography variant="h6" fontSize={32} textAlign={"center"} gutterBottom>
        {t('deliveryNewPost_line0')}
      </Typography>
      <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Button className="fontStyleStack" href={routes.home}>{t('main')}</Button>/
        <Button className="fontStyleStack" href={routes.deliveryMain}>{t('payment_and_delivery')}</Button>/
        <Button className="fontStyleStack" href={routes.deliveryNewPost}>{t('deliveryNewPost_line0')}</Button>
      </Stack><br /> <br />
      <Typography className="text">
          {t("deliveryNewPost_line1")}
          <span className='bold'>
          {' ' + t("delivery.theMinimum")}
          </span>
        </Typography><br />
        <Typography className="text">
          {t("deliveryNewPost_line2")}
        </Typography><br />
        <Typography className="text" gutterBottom>
          {t("deliveryNewPost_line3")}
        </Typography> <br /> <br /> <br />
        <Typography className="text" fontWeight={"bold"} gutterBottom>
          {t("deliveryNewPost_line4")}
        </Typography> <br/> <br /> <br />
        <Typography className="text">
          {t("deliveryNewPost_line5")}
        </Typography> <br />
        <Typography className="text">
          {t("deliveryNewPost_line6")}
        </Typography> <br />
        <Typography className="text">
          <span className='bold'>
            {t("delivery.payAttention")}
          </span>
          {t("deliveryNewPost_line7")}
        </Typography> <br />
        <Typography className="text" fontWeight={"bold"}>
          {t("deliveryNewPost_line8")}
        </Typography> <br /> <br /> <br />
        <Typography className="text" fontWeight={"bold"} gutterBottom>
          {t("deliveryNewPost_line9")}
        </Typography> <br /> <br /> <br />
        <Typography className="text">
          <span className='bold'>
            {t("delivery.payAttention")}
          </span>
          {t("deliveryNewPost_line10")}
        </Typography> <br />
        <Typography className="text">
          {t("deliveryNewPost_line11")}
        </Typography> <br /><br />
        <br /><br /><br /><br /><br />
  </Container>
  );
}

export default DeliveryNewPost;