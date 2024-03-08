import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
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

      const result = await http_common.post("Account/login", values);
      const { data } = result;

      const token = data.token;
      localStorage.token = token;
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
    } catch (error) {
      console.error("Error during login:", error);
      // Add code to show an error message to the user.
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

  return (
    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={loginSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
           <Form onSubmit={handleSubmit}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Button
                  id="buttonGoogleFacebook"
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => loginWithGoogle()}
                >
                  Google
                </Button>
                <Button
                  id="buttonGoogleFacebook"
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                >
                  Facebook
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 7,
                  mt: 5,
                }}
              >
                <hr />
                <Typography component="h1" variant="h5">
                  {t("or")}
                </Typography>
                <hr />
              </Box>
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                  <FormControl
                    sx={{ m: 1, width: "670px", height: "50px", mb: 5 }}
                    variant="outlined"
                  >
                    <Field
                      as={TextField}
                      margin="normal"
                      fullWidth
                      id="email"
                      label={t("loginEmail")}
                      name="email"
                      autoComplete="email"
                      autoFocus
                      error={touched.email && !!errors.email}
                      helperText={<ErrorMessage name="email" />}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ m: 1, width: "670px", height: "50px" }}
                    variant="outlined"
                  >
                    <Field
                      as={TextField}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      error={touched.password && !!errors.password}
                      helperText={<ErrorMessage name="password" />}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      label="Password"
                      variant="outlined"
                      fullWidth
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
              </Box>
              <Button
                id="registationButton"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  setIsSubmit(true);
                }}
              >
                {t("signIn")}
              </Button>
              <Grid item xs>
                {PasswordRecovery()}
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
