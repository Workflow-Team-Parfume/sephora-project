import './deliveryPages.scss';
import { useTranslation } from "react-i18next";
import { Button, Container, Stack, Typography } from "@mui/material";

const DeliveryByCourierInUkraine = () => {

  const { t } = useTranslation();
  
  return (
    <Container className="fontStyle"
      sx={{
        width: "100%",
        maxWidth: 1480,
        minWidth: 1480,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        marginLeft: 30,
        marginRight: 35,
        marginTop: 15
      }}
    >
        <Typography variant="h6" fontSize={32} textAlign={"center"} gutterBottom>
          {t('deliveryByCourierInUkraine_line0')}
        </Typography>
        <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Button className="fontStyleStack">{t('main')}</Button>/
          <Button className="fontStyleStack">{t('payment_and_delivery')}</Button>/
          <Button className="fontStyleStack">{t('deliveryByCourierInUkraine_line0')}</Button>
        </Stack><br /> <br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryByCourierInUkraine_line1")}
        </Typography><br />
        <Typography variant="body2" fontWeight={"bold"} fontSize={24}gutterBottom>
          {t("deliveryByCourierInUkraine_line2")}
        </Typography><br /> <br /> <br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryByCourierInUkraine_line3")}
        </Typography><br /><br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryByCourierInUkraine_line4")}
        </Typography> <br />
        <br /><br /><br /><br /><br />
    </Container>
  );
}

export default DeliveryByCourierInUkraine;