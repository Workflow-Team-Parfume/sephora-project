// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { AuthUserActionType, IAuthUser } from "../../auth/types";
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
import './homeHeader.scss';

// const pages = [
//   { title: "Парфуми", route: "/productlist" },
//   { title: "Розлив", route: "/about" },
//   { title: "Догляд", route: "/about" },
// ];

// const settings = ["Profile", "Account", "Dashboard"];
const HomeHeader = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { /*user,*/ isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElLogin, setAnchorElLogin] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleOpenLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElLogin(event.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  // const handleCloseLoginMenu = () => {
  //   setAnchorElLogin(null);
  // };
  // const onLogoutHandler = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   //console.log("logout");
  //   localStorage.removeItem("token");
  //   dispatch({ type: AuthUserActionType.LOGOUT_USER });
  //   setAnchorElUser(null);
  //   navigate("/");
  // };

  return (
    <>
      <header className="header">
        <div className='div1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M10.7942 0.5C8.5686 0.836585 8.12348 2.07073 8.12348 3.52927V22.2659H20.253C22.7012 22.2659 23.7027 20.3585 24.1479 18.4512V23.5H0C2.22561 23.1634 2.67073 21.9293 2.67073 20.4707V3.52927C2.67073 2.07073 2.22561 0.836585 0 0.5H10.7942Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
          <path d="M10.7181 0.5C8.49247 0.836585 8.04735 2.07073 8.04735 3.52927V13.2902C8.04735 20.1341 12.7211 21.0317 17.9513 21.1439C18.3964 21.1439 18.9528 21.1439 19.398 21.1439C20.5108 21.1439 21.6236 21.0317 22.7364 21.0317C23.8492 20.9195 24.962 20.5829 25.9635 20.022C27.9666 18.9 29.0794 16.6561 29.0794 12.2805V8.91463C29.0794 7.68049 29.0794 6.22195 29.0794 5.21219V3.52927C28.9681 1.84634 28.4117 0.948781 27.1876 0.5H32.0839C30.8599 0.836585 30.1922 1.84634 30.1922 3.52927V8.80244C30.1922 9.5878 30.1922 10.261 30.1922 10.822C30.0809 13.4024 30.1922 16.8805 29.0794 19.2366C26.6312 23.9488 22.18 23.5 17.1723 23.5C12.1647 23.5 8.15863 23.0512 6.71199 22.378C4.26382 21.2561 2.70589 19.0122 2.70589 14.3V3.52927C2.70589 2.07073 2.26077 0.836585 0.0351562 0.5H10.7181Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
          <path d="M20.2255 22.0415C20.2255 21.7049 20.1143 21.3683 19.8917 21.0317C19.6692 20.6951 19.3353 20.1341 19.0015 19.6854L14.2164 13.0659C14.1051 12.9537 13.9938 12.7293 13.8826 12.6171L7.87342 20.022C7.20573 20.8073 6.87189 21.5927 6.76061 22.1537C6.64933 22.8268 6.87189 23.1634 7.42829 23.3878H0.751465C3.53348 23.0512 5.64781 20.8073 7.53958 18.6756L13.2149 11.6073C11.4344 9.25122 9.65391 6.78293 7.87342 4.42683C6.64933 2.63171 5.53653 1.39756 3.53348 0.5H14.6615C13.9938 0.72439 13.5487 0.948781 13.3262 1.17317C13.1036 1.50976 12.9923 1.73415 12.9923 2.07073C12.9923 2.40732 13.2149 2.7439 13.4374 3.19268C13.66 3.64146 13.9938 3.97805 14.2164 4.42683L17.4435 8.91463L21.4496 3.97805C22.1173 3.19268 22.4512 2.51951 22.5624 1.84634C22.6737 1.17317 22.4512 0.836585 21.8948 0.612195H28.9054C26.1234 0.948781 23.8978 2.96829 22.006 5.21219L18.2225 9.92439C19.4466 11.6073 20.6707 13.178 21.8948 14.861C23.1188 16.5439 24.2317 18.1146 25.4557 19.7976C26.5685 21.4805 27.9039 22.7146 29.6844 23.5H18.5563C19.1127 23.2756 20.2255 22.939 20.2255 22.0415Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
          <path d="M11.035 0.5C8.80937 0.836585 8.36425 2.07073 8.36425 3.52927V13.2902C8.36425 20.1341 13.038 21.0317 18.2682 21.1439C18.7133 21.1439 19.2697 21.1439 19.7149 21.1439C20.8277 21.1439 21.9405 21.0317 23.0533 21.0317C24.1661 20.9195 25.2789 20.5829 26.2804 20.022C28.2835 18.9 29.3963 16.6561 29.3963 12.2805V8.91463C29.3963 7.68049 29.3963 6.22195 29.3963 5.21219V3.52927C29.285 1.84634 28.7286 0.948781 27.5045 0.5H32.4008C31.1767 0.836585 30.5091 1.84634 30.5091 3.52927V8.80244C30.5091 9.5878 30.5091 10.261 30.5091 10.822C30.3978 13.4024 30.5091 16.8805 29.3963 19.2366C26.9481 23.9488 22.4969 23.5 17.4892 23.5C12.4816 23.5 8.47553 23.0512 7.02888 22.378C4.58071 21.2561 3.02278 19.0122 3.02278 14.3V3.52927C3.02278 2.07073 2.57766 0.836585 0.352051 0.5H11.035Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
          <path d="M14.6464 0.5C28.6677 0.612195 29.6693 3.30488 29.6693 6.89512C29.6693 9.92439 26.776 11.4951 23.1037 12.2805L30.1144 21.5927C31.1159 22.8268 32.5626 23.2756 33.6754 23.3878H22.1022C22.7699 23.2756 23.3263 23.0512 23.6601 22.8268C23.994 22.6024 23.8827 22.378 23.8827 22.2659C23.8827 22.0415 23.7714 21.8171 23.6601 21.5927L17.5397 12.9537C16.872 12.9537 16.2043 13.0659 15.5366 13.0659H8.85981V20.4707C8.85981 21.9293 9.30493 23.1634 11.5305 23.5H0.736328C2.96194 23.1634 3.40706 21.9293 3.40706 20.4707V3.52927C3.40706 2.07073 2.96194 0.836585 0.736328 0.5H14.6464ZM8.74853 1.73415V11.8317H15.4254C23.1037 11.8317 24.3278 10.4854 24.3278 6.89512C24.3278 3.30488 22.2135 1.73415 12.7546 1.73415H8.74853Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
          <path d="M13.029 0.499997C11.8049 0.612192 11.8049 1.17317 11.8049 1.50975C11.8049 1.73414 11.9161 2.29512 12.5838 3.08048C12.9177 3.52927 13.2515 3.97805 13.6966 4.31463L20.4848 11.1585L27.4954 3.41707C27.8293 3.08048 28.3857 2.51951 28.7195 1.84634C28.8308 1.50975 28.9421 1.28536 28.9421 1.06097C28.9421 0.948778 29.0534 0.612192 28.2744 0.387802H33.1707C31.3902 0.836583 30.2774 1.95853 28.9421 3.41707L21.2637 11.9439V20.3585C21.2637 21.8171 21.7088 23.0512 23.9345 23.3878H13.1402C15.3658 23.0512 15.811 21.8171 15.811 20.3585V13.0659C12.9177 10.1488 10.0244 7.2317 7.13109 4.31463C4.90548 2.07073 2.90244 0.836583 0.565552 0.387802H13.029V0.499997Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
          <path d="M11.2058 0.5C8.98017 0.836585 8.53504 2.07073 8.53504 3.52927V11.3829H23.8918V3.52927C23.8918 2.07073 23.4466 0.836585 21.221 0.5H32.0152C29.7896 0.836585 29.3445 2.07073 29.3445 3.52927V20.4707C29.3445 21.9293 29.7896 23.1634 32.0152 23.5H21.1097C23.3354 23.1634 23.7805 21.9293 23.7805 20.4707V12.6171H8.42377V20.4707C8.42377 21.9293 8.86889 23.1634 11.0945 23.5H0.300293C2.5259 23.1634 2.97102 21.9293 2.97102 20.4707V3.52927C2.97102 2.07073 2.5259 0.836585 0.300293 0.5H11.2058Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
          <path d="M11.5884 0.5C9.36283 0.836585 8.91771 2.07073 8.91771 3.52927V13.2902C8.91771 20.1341 13.5915 21.0317 18.8217 21.1439C19.2668 21.1439 19.8232 21.1439 20.2683 21.1439C21.3811 21.1439 22.4939 21.0317 23.6067 21.0317C24.7195 20.9195 25.8323 20.5829 26.8339 20.022C28.8369 18.9 29.9497 16.6561 29.9497 12.2805V8.91463C29.9497 7.68049 29.9497 6.22195 29.9497 5.21219V3.52927C29.8384 1.84634 29.1708 0.836585 28.058 0.5H32.9543C31.7302 0.836585 31.0625 1.84634 31.0625 3.52927V8.80244C31.0625 9.5878 31.0625 10.261 31.0625 10.822C30.9512 13.4024 31.0625 16.8805 29.9497 19.2366C27.5015 23.9488 23.0503 23.5 18.0427 23.5C13.0351 23.5 9.02899 23.0512 7.58235 22.378C5.13418 21.2561 3.57624 19.0122 3.57624 14.3V3.52927C3.57624 2.07073 3.13113 0.836585 0.905518 0.5H11.5884Z" fill="black"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
          <path d="M12.7515 0.5C25.4375 0.5 27.5518 2.51951 27.5518 5.77317C27.5518 8.46585 25.2149 9.7 21.9878 10.3732C29.221 11.4951 29.8887 14.5244 29.8887 16.6561C29.8887 22.7146 22.0991 23.3878 15.5335 23.3878H0.844482C3.07009 23.0512 3.51522 21.8171 3.51522 20.3585V4.20244C3.51522 1.95854 3.07009 0.836585 0.844482 0.5H12.7515ZM8.96796 9.92439H12.0838C19.7622 9.92439 22.2103 8.46585 22.2103 5.88537C22.2103 2.51951 17.2027 1.84634 11.1936 1.84634H9.07925V9.92439H8.96796ZM8.96796 11.0463V22.1537H15.6448C23.3231 22.1537 24.5472 20.2463 24.5472 16.5439C24.5472 13.4024 22.4329 10.9341 12.9741 10.9341H8.96796V11.0463Z" fill="black"/>
          </svg>
        </div>
        <div className='div2'>
          <div>
            <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M26.25 26.25L20.8213 20.8212M20.8213 20.8212C21.7499 19.8926 22.4865 18.7902 22.989 17.5769C23.4916 16.3636 23.7503 15.0633 23.7503 13.75C23.7503 12.4367 23.4916 11.1364 22.989 9.92307C22.4865 8.70978 21.7499 7.60736 20.8213 6.67875C19.8927 5.75014 18.7902 5.01352 17.5769 4.51096C16.3637 4.0084 15.0633 3.74974 13.75 3.74974C12.4368 3.74974 11.1364 4.0084 9.92308 4.51096C8.70979 5.01352 7.60737 5.75014 6.67876 6.67875C4.80335 8.55416 3.74976 11.0978 3.74976 13.75C3.74976 16.4022 4.80335 18.9458 6.67876 20.8212C8.55418 22.6967 11.0978 23.7503 13.75 23.7503C16.4022 23.7503 18.9459 22.6967 20.8213 20.8212Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="div3">
          <div>
            <span>ENG</span>
            <span>УКР</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
            <path d="M20.5 4.2C18.3252 4.2 16.2395 5.08499 14.7017 6.6603C13.1639 8.23561 12.3 10.3722 12.3 12.6C12.3 14.8278 13.1639 16.9644 14.7017 18.5397C16.2395 20.115 18.3252 21 20.5 21C22.6748 21 24.7605 20.115 26.2983 18.5397C27.8361 16.9644 28.7 14.8278 28.7 12.6C28.7 10.3722 27.8361 8.23561 26.2983 6.6603C24.7605 5.08499 22.6748 4.2 20.5 4.2ZM14.35 12.6C14.35 10.9291 14.998 9.3267 16.1513 8.14522C17.3047 6.96375 18.8689 6.3 20.5 6.3C22.1311 6.3 23.6954 6.96375 24.8487 8.14522C26.0021 9.3267 26.65 10.9291 26.65 12.6C26.65 14.2709 26.0021 15.8733 24.8487 17.0548C23.6954 18.2362 22.1311 18.9 20.5 18.9C18.8689 18.9 17.3047 18.2362 16.1513 17.0548C14.998 15.8733 14.35 14.2709 14.35 12.6ZM10.2685 23.1C9.72858 23.0978 9.19357 23.2048 8.69412 23.4148C8.19468 23.6249 7.74063 23.9339 7.35801 24.3241C6.97538 24.7143 6.67172 25.178 6.46443 25.6887C6.25713 26.1994 6.15029 26.7469 6.15002 27.3C6.15002 30.8511 7.85767 33.5286 10.5268 35.2737C13.1549 36.9894 16.6973 37.8 20.5 37.8C24.3028 37.8 27.8452 36.9894 30.4733 35.2737C33.1424 33.5307 34.85 30.849 34.85 27.3C34.85 26.1861 34.4181 25.1178 33.6492 24.3301C32.8803 23.5425 31.8374 23.1 30.75 23.1H10.2685ZM8.20002 27.3C8.20002 26.1387 9.11842 25.2 10.2685 25.2H30.75C31.2937 25.2 31.8151 25.4212 32.1996 25.8151C32.584 26.2089 32.8 26.743 32.8 27.3C32.8 30.0489 31.5249 32.0964 29.3704 33.5013C27.1769 34.9356 24.0568 35.7 20.5 35.7C16.9433 35.7 13.8232 34.9356 11.6297 33.5013C9.47717 32.0943 8.20002 30.051 8.20002 27.3Z" fill="black"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M1.29169 1.375H4.53752C5.98752 1.375 6.71252 1.375 7.25835 1.76875C7.80419 2.1625 8.03335 2.85 8.49169 4.225L9.62502 7.625" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M30.4584 28.4583H10.7709C10.4688 28.4583 10.3167 28.4583 10.2001 28.4458C9.91079 28.4136 9.63149 28.321 9.38017 28.1742C9.12886 28.0274 8.91109 27.8296 8.74091 27.5934C8.57074 27.3573 8.45193 27.0881 8.39214 26.8033C8.33236 26.5184 8.33292 26.2242 8.3938 25.9396C8.44189 25.7552 8.4982 25.5731 8.56255 25.3938C8.67088 25.0729 8.72297 24.9125 8.78338 24.7688C9.07995 24.0584 9.56748 23.4441 10.1919 22.994C10.8163 22.5439 11.5532 22.2756 12.3209 22.2188C12.475 22.2083 12.6438 22.2083 12.9813 22.2083H24.2084" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.5396 22.2083H17.2042C14.5375 22.2083 13.2042 22.2083 12.1625 21.5208C11.1188 20.8333 10.5938 19.6083 9.54379 17.1583L9.1917 16.3375C7.5042 12.4 6.66254 10.4354 7.58754 9.02917C8.5167 7.625 10.6584 7.625 14.9375 7.625H25.9375C30.7292 7.625 33.123 7.625 34.0271 9.18125C34.9292 10.7375 33.7417 12.8167 31.3646 16.975L30.775 18.0104C29.6042 20.0583 29.0188 21.0833 28.048 21.6458C27.0792 22.2083 25.898 22.2083 23.5396 22.2083Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <path d="M29.4167 35.75C30.5673 35.75 31.5 34.8173 31.5 33.6667C31.5 32.5161 30.5673 31.5833 29.4167 31.5833C28.2661 31.5833 27.3334 32.5161 27.3334 33.6667C27.3334 34.8173 28.2661 35.75 29.4167 35.75Z" fill="black"/>
  <path d="M12.75 35.75C13.9006 35.75 14.8334 34.8173 14.8334 33.6667C14.8334 32.5161 13.9006 31.5833 12.75 31.5833C11.5994 31.5833 10.6667 32.5161 10.6667 33.6667C10.6667 34.8173 11.5994 35.75 12.75 35.75Z" fill="black"/>
            </svg>
          </div>
        </div>
      </header>
      {/* <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={page.route}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={page.route}
                >
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>
          {isAuth ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem key={"Logout"} onClick={onLogoutHandler}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          ): (      
            <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleOpenLoginMenu}
            >
            <MoreIcon />
          </IconButton>
          <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElLogin}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElLogin)}
              onClose={handleCloseLoginMenu}
            >
              <MenuItem key={"Login"}>
                <Typography textAlign="center" sx={{color: "black", textDecoration: "none"}} component={Link} to="/login">Login</Typography>
              </MenuItem>
              <MenuItem key={"Register"}>
                <Typography textAlign="center" sx={{color: "black", textDecoration: "none"}}  component={Link} to="/register">Register</Typography>
              </MenuItem>
            </Menu>
              </Box>
          )}
        </Toolbar>
      </Container>
      </AppBar> */}
    </>
  );
};

export default HomeHeader;
