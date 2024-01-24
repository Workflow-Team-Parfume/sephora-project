import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserActionType, IAuthUser } from "../../auth/types";
import "./homeHeader.scss";
import { Button, Input, Toolbar, Typography } from "@mui/material";
import logo from '../../../assets/images/Group.svg';

// interface State {
//   amount: string;
//   password: string;
//   weight: string;
//   weightRange: string;
//   showPassword: boolean;
// }

// const pages = [
//   { title: "Парфуми", route: "/productlist" },
//   { title: "Розлив", route: "/about" },
//   { title: "Догляд", route: "/about" },
// ];

// const settings = ["Profile", "Account", "Dashboard"];
const HomeHeader = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { /*user,*/ isAuth } = useSelector(
  //   (store: any) => store.auth as IAuthUser
  // );
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElLogin, setAnchorElLogin] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const [values, setValues] = React.useState<State>({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });

  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center"},
        justifyContent: {xs: "center"},
        marginBottom: 6
      }}
      >
      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center"},
        gap: 10,
      }}
      >
        <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center"},
        gap: 2,
      }}
      >
       <img src={logo} alt="" />
      </Box>

        <Input
          className="div2"
          id="outlined-adornment-password"
          type={"text"}
          endAdornment={
            <IconButton size="small" aria-label="toggle password visibility">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M26.25 26.25L20.8213 20.8212M20.8213 20.8212C21.7499 19.8926 22.4865 18.7902 22.989 17.5769C23.4916 16.3636 23.7503 15.0633 23.7503 13.75C23.7503 12.4367 23.4916 11.1364 22.989 9.92307C22.4865 8.70978 21.7499 7.60736 20.8213 6.67875C19.8927 5.75014 18.7902 5.01352 17.5769 4.51096C16.3637 4.0084 15.0633 3.74974 13.75 3.74974C12.4368 3.74974 11.1364 4.0084 9.92308 4.51096C8.70979 5.01352 7.60737 5.75014 6.67876 6.67875C4.80335 8.55416 3.74976 11.0978 3.74976 13.75C3.74976 16.4022 4.80335 18.9458 6.67876 20.8212C8.55418 22.6967 11.0978 23.7503 13.75 23.7503C16.4022 23.7503 18.9459 22.6967 20.8213 20.8212Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
          }
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center"},
            gap: 4,
          }}>
 
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center"},
            gap: 1,
          }}>
 
          <Link className="link1"
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            ENG
          </Link>
          <Link className="link2"
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            УКР
          </Link>

        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center"},
            gap: 2,
          }}>
 
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

        </Box>

        </Box>
      </Box>
      </Box>
      <div className="div3">
      <Box
        sx={{ 
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center"},
          justifyContent: {xs: "center"},
          gap: 10,
          
        }}>
            <Button color="inherit">Повнорозмірні флакони</Button>
            <Button color="inherit">Розпив парфумерії</Button>
            <Button color="inherit">Догляд</Button>
            <Button color="inherit">NEW</Button>
            <Button color="inherit">Каталог</Button>
            <Button color="inherit">Про нас</Button>
            <Button color="inherit">Оплата і доставка</Button>
            <Button color="inherit">Контакти</Button>
      </Box>
      </div>
    </>
  );
};

export default HomeHeader;
