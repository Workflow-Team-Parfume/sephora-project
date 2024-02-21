import { useState } from "react";
import { useFormik } from "formik";
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
  TextField,
  Typography,
} from "@mui/material";
import { AuthUserActionType, IUser, ILogin } from "../types";
import http_common from "../../../http_common";
import { jwtDecode } from "jwt-decode";
import './LoginPage.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

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
                `api/Users/checkEmailExists/${value}`
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

      const result = await http_common.post("api/Account/login", values);
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

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse: any) => {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${codeResponse.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         localStorage.access_token = codeResponse.access_token;
  //         if (res.data) {
  //           dispatch({
  //             type: AuthUserActionType.LOGIN_GOOGLE_USER,
  //             payload: {
  //               id: res.data.id,
  //               userName: res.data.name,
  //               email: res.data.email,
  //               profilePicture: res.data.picture,
  //               registrationDate: "",
  //               phoneNumber: "",
  //               roles: ["user"],
  //             },
  //           });
  //         }
  //         navigate(-1);
  //       })
  //       .catch((err) => {
  //         console.error("Google login error:", err);
  //         // Add code to show an error message to the user.
  //       });
  //   },
  //   onError: (error) => {
  //     console.log("Login Failed:", error);
  //     // Add code to show an error message to the user.
  //   },
  // });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: onHandleSubmit,
  });

  const { values, handleChange, handleSubmit, touched, errors } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <FormControl
              sx={{ m: 1, width: "670px", height: "50px" }}
              variant="outlined"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Логін/E-mail"
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
              sx={{ m: 1, width: "670px", height: "50px" }}
              variant="outlined"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                autoComplete="current-password"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
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
        >
          Увійти
        </Button>
        <Grid item xs>
          <a id="forgotPassword" href="#">Забули пароль?</a>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
