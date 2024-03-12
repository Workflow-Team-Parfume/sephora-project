import IconButton from "@mui/material/IconButton";
import "./homeHeader.scss";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../../assets/images/Group.svg";
import input_main_icon from "../../../assets/images/input_main_icon.svg";
// import icon1 from "../../../assets/images/icon1.svg";
import { useTranslation } from "react-i18next";
import { Basket } from "../basket/Basket";
import { AuthUserActionType, IAuthUser } from "../../auth/types";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import routes from "../../../common/routes.ts";
import LoginPage from "../../auth/login/LoginPage.tsx";

const HomeHeader = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
            .catch(e => console.error(e));
        localStorage.setItem('selectedLanguage', language);
    };

  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    dispatch({ type: AuthUserActionType.LOGOUT_USER });
    setAnchorElUser(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).catch((e) => console.error(e));
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
        direction="row"
        sx={{
          justifyContent: { xs: "center" },
          marginBottom: 6,
        }}
      >
        <Button
          disableTouchRipple
          sx={{
            ...boxStyleHeader,
            gap: 2,
            "&:hover": {
              background: "none",
            },
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
              sx={{ color: i18n.language == "en" ? "#000" : "#808080" }}
              onClick={() => changeLanguage("en")}
            >
              ENG
            </Button>
            <Button
              disableTouchRipple
              className="lang_link"
              sx={{ color: i18n.language == "uk" ? "#000" : "#808080" }}
              onClick={() => changeLanguage("uk")}
            >
              УКР
            </Button>
          </Box>
          {isAuth ? (
            <Box
            sx={{
              ...boxStyleHeader,
              gap: 2,
            }}
          >
            {LoginPage()}
            {/* <Button disableTouchRipple href="/profile">
                            <img src={icon1} alt=""/>
                        </Button> */}
            {Basket()}
          </Box>
          ) : (
            <Box
            sx={{
              ...boxStyleHeader,
              gap: 2,
            }}
          >
            {LoginPage()}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key={"Profile"}
                  href="/profile"
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{"Profile"}</Typography>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={onLogoutHandler}>
                  <Typography textAlign="center">{"Logout"}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Stack>
      <div className="mainNav">
        <Box
          sx={{
            flexGrow: 1,
            ...boxStyleHeader,
            justifyContent: { xs: "center" },
            gap: "6.5%",
            marginX: "5%",
          }}
        >
          <Button href={routes.full_sized} disableTouchRipple>
            {t("header.fullSizePerfume")}
          </Button>
          <Button href={routes.bottled} disableTouchRipple>
            {t("header.bottled")}
          </Button>
          <Button href={routes.care} disableTouchRipple>
            {t("header.care")}
          </Button>
          <Button href={routes.novelties} disableTouchRipple>
            {t("header.new")}
          </Button>
          <Button href={routes.products} disableTouchRipple>
            {t("header.catalogue")}
          </Button>
          <Button href={routes.aboutUs} disableTouchRipple>{t("header.aboutUs")}</Button>
          <Button href={routes.deliveryMain} disableTouchRipple>
            {t("header.paymentAndDelivery")}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default HomeHeader;
