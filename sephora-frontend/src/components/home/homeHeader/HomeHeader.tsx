import IconButton from "@mui/material/IconButton";
import "./homeHeader.scss";
import { Box, Button, OutlinedInput, Stack } from "@mui/material";
import logo from "../../../assets/images/Group.svg";
import input_main_icon from "../../../assets/images/input_main_icon.svg";
import icon1 from "../../../assets/images/icon1.svg";
import { useTranslation } from "react-i18next";
import { Basket } from "../basket/Basket";

const HomeHeader = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const boxStyleHeader = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "center" },
  };
  return (
    <div className="header">
      <Stack
      spacing={19}
      direction='row'
        sx={{
          justifyContent: { xs: "center" },
          marginBottom: 6,
        }}
      >
          <Button disableTouchRipple
            sx={{
              ...boxStyleHeader,
              gap: 2,
              '&:hover':{
                  background: "none"
              }
            }}
            href="/"
          >
            <img src={logo} alt="" />
          </Button>

          <OutlinedInput
            className="main_input"
            id="outlined-adornment-password"
            type={"text"}
            sx={{
              ":before": { borderBottomColor: "white" },
              ":after": { borderBottomColor: "white" },
              ":active": { borderBottomColor: "white" },
            }}
            endAdornment={
              <IconButton size="small" aria-label="toggle password visibility">
                <img src={input_main_icon} alt="" />
              </IconButton>
            }
          />

          <Box
            sx={{
              ...boxStyleHeader,
              gap: 4,
            }}
          >
            <Box
              sx={{
                ...boxStyleHeader,
              }}
            >
              <Button 
                disableTouchRipple
                className="lang_link"
                sx={{color:i18n.language=='en' ? '#000' : '#808080'}}
                onClick={() => changeLanguage("en")}
              >
                ENG
              </Button>
              <Button
                disableTouchRipple
                className="lang_link"
                sx={{color:i18n.language=='uk' ? '#000' : '#808080'}}
                onClick={() => changeLanguage("uk")}
              >
                УКР
              </Button>
            </Box>
            <Box
              sx={{
                ...boxStyleHeader,
                gap: 2,
              }}
            >
              <img src={icon1} alt="" />
              {Basket()}
                
            </Box>
          </Box>
        </Stack>
      <div className="mainNav">
        <Box
          sx={{
            flexGrow: 1,
            ...boxStyleHeader,
            justifyContent: { xs: "center" },
            gap: '6.5%',
            marginX: '5%',
          }}
        >
          <Button disableTouchRipple>{t("header.fullSizePerfume")}</Button>
          <Button disableTouchRipple>{t("header.bottlingPerfumes")}</Button>
          <Button disableTouchRipple>{t("header.care")}</Button>
          <Button disableTouchRipple>{t("header.new")}</Button>
          <Button disableTouchRipple>{t("header.catalogue")}</Button>
          <Button disableTouchRipple>{t("header.aboutUs")}</Button>
          <Button disableTouchRipple>{t("header.paymentAndDelivery")}</Button>
        </Box>
      </div>
    </div>
  );
};

export default HomeHeader;
