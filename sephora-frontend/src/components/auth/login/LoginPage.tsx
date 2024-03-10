import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AuthUserActionType, IUser, ILogin } from "../types";
import http_common from "../../../http_common";
import { jwtDecode } from "jwt-decode";
import "./LoginPage.scss";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { PasswordRecovery } from "../../common/password_recovery/PasswordRecovery";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import textFieldStyle from '../../../common/textFieldStyle';
import routes from "../../../common/routes";
import icon1 from "../../../assets/images/icon1.svg";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  height: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .test(
        "checkEmail",
        "Email does not exist or is not registered yet",
        async (value) => {
          if (isSubmit) {
            setIsSubmit(false);
            try {
              const result = await http_common.get(
                `Account/checkEmailExists/${value}`
              );
              const { data } = result;
              return data;
            } catch (error) {
              console.error("Error during email validation:", error);
              return false;
            }
          } else return true;
        }
      ),
    password: Yup.string().required("Password is required"),
  });

  const onHandleSubmit = async (values: ILogin) => {
    try {
      await loginSchema.validate(values);
      console.log(values);
      const result = await http_common.post("Account/login", values);
      const { data } = result;
  
      const token = data.token;
      localStorage.setItem('token', token); 
      const user = jwtDecode(token) as IUser;
  
      dispatch({
        type: AuthUserActionType.LOGIN_USER,
        payload: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          profilePicture: user.profilePicture,
          registrationDate: user.registrationDate,
          phoneNumber: user.phoneNumber,
          roles: user.roles,
        },
      });
      navigate("/");
    } catch (error: any) { // Updated to any to check for response status
      console.error("Error during login:", error);
      if (error.response && error.response.status === 409) {
        alert("A conflict occurred. Please try again."); // Customized message based on status code
        // Ideally, use more user-friendly feedback mechanism here
      } else {
        // Handle other errors or show a generic error message
        alert("An error occurred. Please try again later.");
      }
    }
  };
  

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.access_token = codeResponse.access_token;
          if (res.data) {
            dispatch({
              type: AuthUserActionType.LOGIN_GOOGLE_USER,
              payload: {
                id: res.data.id,
                userName: res.data.name,
                email: res.data.email,
                profilePicture: res.data.picture,
                registrationDate: "",
                phoneNumber: "",
                roles: ["user"],
              },
            });
          }
          navigate(-1);
        })
        .catch((err) => {
          console.error("Google login error:", err);
          // Add code to show an error message to the user.
        });
    },
    onError: (error) => {
      console.log("Login Failed:", error);
      // Add code to show an error message to the user.
    },
  });


  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { values, handleChange, handleSubmit, touched, errors } = formik;

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {PasswordRecovery(true)};
  // const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button onClick={handleOpen}><img src={icon1} alt=""/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} className="login" justifyContent='center' alignItems='center'>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Button id="buttonGoogleFacebook" variant="outlined" startIcon={<GoogleIcon sx={{width: '36px', height: '36px'}}/>}>
              Google
            </Button>
            <Button id="buttonGoogleFacebook" variant="outlined" startIcon={<FacebookIcon  sx={{width: '36px', height: '36px'}}/>}>
              Facebook
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              mt: 5
            }}
          >
            <hr color="#514C4C"/>
            <Typography className="or">
              {t('or')}
            </Typography>
            <hr color="#514C4C"/>
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2} sx={{justifyContent:'center'}}>
              <FormControl
                sx={{ ...textFieldStyle, width: "670px", mb: 2.5 }}
                variant="outlined"
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label={t('email/login')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </FormControl>
              <FormControl
                sx={{ ...textFieldStyle, width: "670px" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  {t('password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onChange={handleChange}
                        onMouseDown={handleMouseDownPassword}
                        value={values.password}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Box>
          <Button
            className="registationButton"
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('signIn')}
          </Button>
          <Box>
            {PasswordRecovery()}
            <Typography className="regBut">
              {t('dontHaveAnAccount')} 
              <Button disableTouchRipple href={routes.register} className="regBut" sx={{borderBottom: '1px solid black'}}> {t('registration')}</Button>
            </Typography>
          </Box>
        </Stack>
      </Modal>
    </div>
  );
};

export default LoginPage;
