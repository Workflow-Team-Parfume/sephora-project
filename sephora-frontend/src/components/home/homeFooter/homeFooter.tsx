import Box from "@mui/material/Box";
import "./homeFooter.scss";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const HomeFooter = () => {
  const boxStyle = {
            display: "flex",
            alignItems: { xs: "flex-start" },
            flexDirection: { xs: "row", sm: "column" },
  }

  const { t } = useTranslation();

  return (
    <>
      <div className="main_footer">
        <Stack spacing={12.5} style={{padding:'100px 0'}} justifyContent='center' direction='row'>
          <Box
            sx={{
              ...boxStyle,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
             {t('footer.aboutDelivery')}
            </Typography>
            <Button>{t('footer.paymentMethods')}</Button>
            <Button>{t('footer.aboutProducts')}</Button>
          </Box>
          <Box
            sx={{
              ...boxStyle,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
            {t('footer.beautyClub')}
            </Typography>
            <Button>{t('footer.termsOfUse')}</Button>
            <Button>{t('footer.returnsAndExchanges')}</Button>
          </Box>
          <Box
            sx={{
              ...boxStyle,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
            {t('footer.aboutUs')}
            </Typography>
            <Button>{t('footer.addition')}</Button>
            <Button>{t('footer.contacts')}</Button>
            <Button>{t('footer.partnerProgram')}</Button>
          </Box>
          <Box
            sx={{
              ...boxStyle,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
            {t('footer.articles')}
            </Typography>
            <Button>{t('footer.news')}</Button>
          </Box>
          <Box
            sx={{
              ...boxStyle,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
            {t('footer.supportService')}
            </Typography>
            <Button>(068) 753 32 89</Button>
            <Button>(098) 316 67 50</Button>
            <Button style={{textWrap:'wrap', maxWidth:'480px'}}>{t('footer.information')}</Button>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default HomeFooter;