import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import http_common from "../../../http_common";
import { AuthUserActionType, IRegister, IUser } from "../types";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import "./RegisterPage.scss";
import { useTranslation } from "react-i18next";
import textFieldStyle from "../../../common/textFieldStyle";
import PhoneMask from "../../../common/phoneMask";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialValues: IRegister = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    dateOfBirth: new Date(),
  };

  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(16, "Name must be at most 16 characters")
      .test("checkUsername", "Name already exists", async (value) => {
        if (isSubmit) {
          setIsSubmit(false);
          try {
            const result = await http_common.get(
              `Account/checkUsernameExists/${value}`
            );
            const { data } = result;
            return !data;
          } catch (error) {
            console.error("Error during userName validation:", error);
            return false;
          }
        } else return true;
      }),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .test("checkEmail", "Email already registered", async (value) => {
        if (isSubmit) {
          setIsSubmit(false);
          try {
            const result = await http_common.get(
              `Account/checkEmailExists/${value}`
            );
            const { data } = result;
            return !data;
          } catch (error) {
            console.error("Error during email validation:", error);
            return false;
          }
        } else return true;
      }),
    phoneNumber: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .matches(/[0-9]/, "Password must contain at least 1 number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least 1 special character"
      ),
    passwordConfirmation: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const onHandleSubmit = async (values: IRegister) => {
    try {
      await registerSchema.validate(values);
      await http_common.post("api/Users/register", values).then(async () => {
        const result = await http_common.post("api/Users/login", {
          email: values.email,
          password: values.password,
        });

        const { data } = result;
        const token = data.token;
        localStorage.token = token;
        const user: IUser = jwtDecode(token);
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
        navigate(-1);
      });
    } catch (error) {
      console.error("Error during register: ", error);
    }
  };

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [showPassword2, setShowPassword2] = React.useState<boolean>(false);
  const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onHandleSubmit}
      validationSchema={registerSchema}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        // handleBlur,
        handleSubmit,
      }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h3">
              {t("registration")}
            </Typography>
            <Form onSubmit={handleSubmit}>
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label={t("name")}
                      name="username"
                      onChange={handleChange}
                      value={values.firstName}
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <TextField
                      required
                      fullWidth
                      id="surname"
                      label={t("surname")}
                      name="surname"
                      onChange={handleChange}
                      value={values.lastName}
                      autoComplete="surname"
                    />
                  </FormControl>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <TextField
                      required
                      fullWidth
                      id="phoneNumber"
                      label={t("phone")}
                      name="phoneNumber"
                      onChange={handleChange}
                      value={values.phoneNumber}
                      autoComplete="tel"
                      InputProps={{
                        inputComponent: PhoneMask as any,
                      }}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <TextField
                      required
                      fullWidth
                      name="date"
                      label=""
                      type="date" // Changed from "data" to "date"
                      id="date"
                      onChange={handleChange}
                      value={values.dateOfBirth}
                      autoComplete="date" // Changed from "data" to "date"
                    />
                  </FormControl>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="E-mail"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      {t("password")}*
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
                  <FormControl
                    sx={{ ...textFieldStyle, m: 1, width: "670px" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      {t("registerPassConfirm")}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword2 ? "text" : "password"}
                      // value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onChange={handleChange}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label={t("registerPassConfirm")}
                    />
                  </FormControl>
                  <Button
                    id="registationButton"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 5,
                      mb: 5,
                      textTransform: "none",
                    }}
                  >
                    {t("registerBtn")}
                  </Button>
                </Grid>
              </Box>
            </Form>
          </Box>
        </Container>
      )}
    </Formik>
  );
};
export default RegisterPage;
