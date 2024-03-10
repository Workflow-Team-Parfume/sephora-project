import { Button, Container, Stack, Typography } from '@mui/material';
import './deliveryPages.scss';
import { useTranslation } from "react-i18next";
import routes from '../../../../common/routes';

const DeliveryPickup = () => {

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
          {t('deliveryPickup_line0')}
        </Typography>
        <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Button className="fontStyleStack" href={routes.home}>{t('main')}</Button>/
          <Button className="fontStyleStack" href={routes.deliveryMain}>{t('payment_and_delivery')}</Button>/
          <Button className="fontStyleStack" href={routes.deliveryPickup}>{t('deliveryPickup_line0')}</Button>
        </Stack><br /> <br />
        <Typography className="text">
          {t("deliveryPickup_line1")}
          <span className='bold'>
           {' ' + t("delivery.theMinimum")}
          </span>
        </Typography><br />
        <Typography className="text" gutterBottom>
          {t("deliveryPickup_line2")}
        </Typography><br /><br /><br />
        <Typography className="text">
          {t("deliveryPickup_line3")}
        </Typography><br />
        <Typography className="text">
          {t("deliveryPickup_line4")}
        </Typography> <br />
        <br /><br /><br /><br /><br />
    </Container>
  );
}

export default DeliveryPickup;