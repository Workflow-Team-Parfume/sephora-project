import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import "./homeHeader.scss";
import {Button, Input, Link} from "@mui/material";
import logo from "../../../assets/images/Group.svg";
import input_main_icon from "../../../assets/images/input_main_icon.svg";
import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import {useTranslation} from "react-i18next";
import routes from "../../../common/routes.ts";

const HomeHeader = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
            .catch(e => console.error(e));
    };
    const boxStyleHeader = {
        display: "flex",
        flexDirection: {xs: "column", sm: "row"},
        alignItems: {xs: "center"},
    };
    return (
        <div className="header">
            <Box sx={{
                ...boxStyleHeader,
                justifyContent: {xs: "center"},
                marginBottom: 6,
            }}>
                <Box sx={{
                    ...boxStyleHeader,
                    gap: 10,
                }}>
                    <Box sx={{
                        ...boxStyleHeader,
                        gap: 2,
                    }}>
                        <Link href={'/'} underline="none">
                            <img src={logo} alt="Luxuryhub"/>
                        </Link>
                    </Box>

                    <Input className="main_input"
                           id="outlined-adornment-password"
                           type={"text"}
                           sx={{
                               ":before": {borderBottomColor: "white"},
                               ":after": {borderBottomColor: "white"},
                               ":active": {borderBottomColor: "white"},
                           }}
                           endAdornment={
                               <IconButton size="small" aria-label="toggle password visibility">
                                   <img src={input_main_icon} alt=""/>
                               </IconButton>
                           }/>

                    <Box sx={{
                        ...boxStyleHeader,
                        gap: 4,
                    }}>
                        <Box sx={{
                            ...boxStyleHeader,
                            gap: 1,
                        }}>
                            <Link className="lang_link"
                                  color={i18n.language === 'en' ? '#000' : '#808080'}
                                  onClick={() => changeLanguage("en")}>
                                ENG
                            </Link>
                            <Link className="lang_link"
                                  color={i18n.language === 'uk' ? '#000' : '#808080'}
                                  onClick={() => changeLanguage("uk")}>
                                УКР
                            </Link>
                        </Box>
                        <Box sx={{
                            ...boxStyleHeader,
                            gap: 2,
                        }}>
                            <img src={icon1} alt=""/>
                            <Link href={'/basket'} underline="none">
                                <img src={icon2} alt=""/>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div className="mainNav">
                <Box sx={{
                    flexGrow: 1,
                    ...boxStyleHeader,
                    justifyContent: {xs: "center"},
                    gap: 9.5,
                }}>
                    <Button color="inherit" variant="contained">
                        {t("header.fullSizePerfume")}
                    </Button>
                    <Button href={routes.bottled} color="inherit" variant="contained">
                        {t("common.title.bottled")}
                    </Button>
                    <Button href={routes.care} color="inherit" variant="contained">
                        {t("common.title.care")}
                    </Button>
                    <Button href={routes.novelties} color="inherit" variant="contained">
                        {t("common.title.new")}
                    </Button>
                    <Button href={routes.products} color="inherit" variant="contained">
                        {t("common.title.catalogue")}
                    </Button>
                    <Button color="inherit">{t("header.aboutUs")}</Button>
                    <Button>{t("header.paymentAndDelivery")}</Button>
                </Box>
            </div>
        </div>
    );
};

export default HomeHeader;
