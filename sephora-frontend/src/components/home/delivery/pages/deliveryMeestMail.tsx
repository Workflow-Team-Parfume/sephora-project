import { Button, Container, Stack, Typography } from '@mui/material';
import './deliveryPages.scss';
import { useTranslation } from "react-i18next";

const DeliveryMeestMail = () => {

  const { t } = useTranslation();

  return (
    <Container className="fontStyle"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        marginTop: 15
      }}
    >
        <Typography variant="h6" fontSize={32} textAlign={"center"} gutterBottom>
          {t('deliveryMeestMail_line0')}
        </Typography>
        <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Button className="fontStyleStack">{t('main')}</Button>/
          <Button className="fontStyleStack">{t('payment_and_delivery')}</Button>/
          <Button className="fontStyleStack">{t('deliveryMeestMail_line0')}</Button>
        </Stack><br /> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryMeestMail_line1")}
        </Typography>
        <Typography variant="body2" fontWeight={"bold"} fontSize={24} gutterBottom>
          {t("deliveryMeestMail_line2")}
        </Typography><br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryMeestMail_line3")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryMeestMail_line4")}
        </Typography> <br/> <br /> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryMeestMail_line5")}
        </Typography> <br /> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryMeestMail_line6")}
        </Typography> <br /><br />
        <Typography variant="body2" fontSize={24} fontWeight={"bold"}>
          {t("deliveryMeestMail_line7")}
        </Typography> <br /> <br />
        <br /><br /><br /><br /><br />
    </Container>
  );
}

export default DeliveryMeestMail;