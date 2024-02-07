import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import "./homeHeader.scss";
import { Button, Input, Link } from "@mui/material";
import logo from "../../../assets/images/Group.svg";
import input_main_icon from "../../../assets/images/input_main_icon.svg";
import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import { useTranslation } from "react-i18next";

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
    <>
      <Box
        sx={{
          ...boxStyleHeader,
          justifyContent: { xs: "center" },
          marginBottom: 6,
        }}
      >
        <Box
          sx={{
            ...boxStyleHeader,
            gap: 10,
          }}
        >
          <Box
            sx={{
              ...boxStyleHeader,
              gap: 2,
            }}
          >
            <img src={logo} alt="" />
          </Box>

          <Input
            className="main_input"
            id="outlined-adornment-password"
            type={"text"}
            sx={{
              ":before": { borderBottomColor: "white" },
              ":after": { borderBottomColor: "white" },
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
                gap: 1,
              }}
            >
              <Link
                component="button"
                variant="body2"
                color={"#808080"}
                underline="none"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                onClick={() => changeLanguage("en")}
              >
                ENG
              </Link>
              <Link
                component="button"
                variant="body2"
                color={"#000"}
                underline="none"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                onClick={() => changeLanguage("uk")}
              >
                УКР
              </Link>
            </Box>
            <Box
              sx={{
                ...boxStyleHeader,
                gap: 2,
              }}
            >
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <div className="mainNav">
        <Box
          sx={{
            flexGrow: 1,
            ...boxStyleHeader,
            justifyContent: { xs: "center" },
            gap: 9.5,
          }}
        >
          <Button color="inherit">{t("header.fullSizePerfumes")}</Button>
          <Button color="inherit">{t("header.perfumesOnTap")}</Button>
          <Button color="inherit">{t("header.care")}</Button>
          <Button color="inherit">{t("header.new")}</Button>
          <Button color="inherit">{t("header.catalog")}</Button>
          <Button color="inherit">{t("header.aboutUs")}</Button>
          <Button color="inherit">{t("header.paymentAndDelivery")}</Button>
          <Button color="inherit">{t("header.contact")}</Button>
        </Box>
      </div>
    </>
  );
};

export default HomeHeader;
