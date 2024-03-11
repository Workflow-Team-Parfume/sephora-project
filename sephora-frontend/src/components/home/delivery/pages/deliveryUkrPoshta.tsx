import { Button, Container, Stack, Typography } from '@mui/material';
import './deliveryPages.scss';
import { useTranslation } from "react-i18next";
import routes from '../../../../common/routes';


const DeliveryUkrPoshta = () => {

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
        {t('deliveryUkrPoshta_line0')}
      </Typography>
      <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Button className="fontStyleStack" href={routes.home}>{t('main')}</Button>/
        <Button className="fontStyleStack" href={routes.deliveryMain}>{t('payment_and_delivery')}</Button>/
        <Button className="fontStyleStack" href={routes.deliveryUkrPoshta}>{t('deliveryUkrPoshta_line0')}</Button>
      </Stack><br /> <br />
      <Typography className="text">
        <span className='bold'>
          {t("deliveryUkrPoshta_line1")}
        </span>
        {t("deliveryUkrPoshta_line2")}
        <span className='bold'>
          {t('delivery.theMinimum')}
        </span>
      </Typography><br />
      <Typography className="text">
          {t("deliveryUkrPoshta_line3")}
      </Typography> <br />
      <Typography className="text bold">
        {t("deliveryUkrPoshta_line4")}
      </Typography><br /><br /> <br />
      <Typography className="text">
        <span className='bold'>
          {t('delivery.payAttention')}
        </span>
        {t("deliveryUkrPoshta_line5")}
      </Typography> <br />
      <Typography className="text">
        {t("deliveryUkrPoshta_line6")}
      </Typography> <br />
      <Typography className="text">
        {t("deliveryUkrPoshta_line7")}
      </Typography>
      <br /><br /><br /><br /><br />
  </Container>
  );
}

export default DeliveryUkrPoshta;