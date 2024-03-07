import * as React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Input,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import input_main_icon from "../../../../assets/images/input_main_icon.svg";
import deliveryImage1 from "../../../../assets/images/deliveryImage1.svg";
import deliveryImage2 from "../../../../assets/images/deliveryImage2.svg";
import deliveryImage3 from "../../../../assets/images/deliveryImage3.svg";
import deliveryImage4 from "../../../../assets/images/deliveryImage4.svg";
import deliveryImage5 from "../../../../assets/images/deliveryImage5.svg";
import deliveryImage6 from "../../../../assets/images/deliveryImage6.svg";
import './deliveryMain.scss';
// import { useTranslation } from "react-i18next";

// const { t } = useTranslation();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DeliveryMain() {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            height={400}
            width={400}            
            my={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            gap={4}
            p={2}
            sx={{ background: "grey" }}
          >
            <Typography variant="h5" component="h2">
              h1. Heading
            </Typography>
            <Typography variant="body2" gutterBottom>
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Input
              className="main_input"
              id="outlined-adornment-password"
              type={"text"}
              endAdornment={
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                >
                  <img src={input_main_icon} alt="" />
                </IconButton>
              }
            />
          </Box>

          <Box
            sx={{
              marginTop: 5,
              marginBottom: 5,
              display: "grid",
              justifyItems: "center",
              alignItems: "center", 
              gridTemplateColumns: "repeat(3, 490px)",
              rowGap: 1
            }}
          >
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img1" src={deliveryImage1} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img2" src={deliveryImage2} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img3"  src={deliveryImage3} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img4" src={deliveryImage4} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img5" src={deliveryImage5} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 481,
                height: 392
              }}
            >
              <img id="img6" src={deliveryImage6} alt="" />
              <Typography variant="h5" component="h2">
                h1. Heading
              </Typography>
              <Typography variant="body2" gutterBottom>
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Item>
          </Box>
        </Box>
      </Container>
    </>
  );
}
