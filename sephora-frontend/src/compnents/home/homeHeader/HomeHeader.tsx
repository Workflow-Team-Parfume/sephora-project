import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import "./homeHeader.scss";
import { Button, Input, Link } from "@mui/material";
import logo from '../../../assets/images/Group.svg';
import input_main_icon from '../../../assets/images/input_main_icon.svg';
import icon1 from '../../../assets/images/icon1.svg';
import icon2 from '../../../assets/images/icon2.svg';

const HomeHeader = () => {

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
          className="div1"
          id="outlined-adornment-password"
          type={"text"}
          endAdornment={
            <IconButton size="small" aria-label="toggle password visibility">
              <img src={input_main_icon} alt="" />
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
 
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />

        </Box>

        </Box>
      </Box>
      </Box>
      <div className="div2">
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
