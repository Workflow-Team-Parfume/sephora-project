import './deliveryPages.scss';
import { useTranslation } from "react-i18next";
import { Button, Container, Stack, Typography } from "@mui/material";
import routes from '../../../../common/routes';

const DeliveryByCourierInUkraine = () => {

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
          {t('deliveryByCourierInUkraine_line0')}
        </Typography>
        <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Button className="fontStyleStack" href={routes.home}>{t('main')}</Button>/
          <Button className="fontStyleStack" href={routes.deliveryMain}>{t('payment_and_delivery')}</Button>/
          <Button className="fontStyleStack" href={routes.deliveryByCourierInUkraine}>{t('deliveryByCourierInUkraine_line0')}</Button>
        </Stack><br /> <br />
        <Typography className='text'>
          {t("deliveryByCourierInUkraine_line1")}
          <span className='bold'>
            {t('delivery.theMinimum')}
          </span>
        </Typography><br />
        <Typography className='text' fontWeight={"bold"}>
          {t("deliveryByCourierInUkraine_line2")}
        </Typography><br /> <br /> <br />
        <Typography className='text'>
          {t("deliveryByCourierInUkraine_line3")}
        </Typography><br /><br />
        <Typography className='text'>
          {t("deliveryByCourierInUkraine_line4")}
        </Typography> <br />
        <br /><br /><br /><br /><br />
    </Container>
  );
}

export default DeliveryByCourierInUkraine;