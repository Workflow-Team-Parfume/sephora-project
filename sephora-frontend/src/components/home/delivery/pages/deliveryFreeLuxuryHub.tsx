import Typography from "@mui/material/Typography";
import "./deliveryPages.scss";
import { useTranslation } from "react-i18next";
import { Button, Container, Stack } from "@mui/material";

const DeliveryFreeLuxuryHub = () => {
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
          {t('deliveryFreeLuxuryHub_line0')}
        </Typography>
        <Stack className="fontStyleStack" direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <Button className="fontStyleStack">{t('main')}</Button>/
          <Button className="fontStyleStack">{t('payment_and_delivery')}</Button>/
          <Button className="fontStyleStack">{t('deliveryFreeLuxuryHub_line0')}</Button>
        </Stack><br /> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line1")}
        </Typography><br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line2")}
        </Typography><br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryFreeLuxuryHub_line3")}
        </Typography><br /><br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line4")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line5")}
        </Typography> <br/>
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line6")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line7")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryFreeLuxuryHub_line8")}
        </Typography> <br /> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line9")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line10")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line11")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24}>
          {t("deliveryFreeLuxuryHub_line12")}
        </Typography> <br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryFreeLuxuryHub_line13")}
        </Typography> <br /><br />
        <Typography variant="body2" fontSize={24} gutterBottom>
          {t("deliveryFreeLuxuryHub_line14")}
        </Typography>
        <br /><br /><br /><br /><br />
    </Container>
  );
};

export default DeliveryFreeLuxuryHub;
