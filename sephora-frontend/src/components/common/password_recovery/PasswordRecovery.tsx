import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Link, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./PasswordRecovery.scss";
import textFieldStyle from '../../../common/textFieldStyle';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function PasswordRecovery() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <div>
      <Link
        id="forgotPassword"
        component="button"
        variant="body2"
        onClick={handleOpen}
        marginBottom={10}
      >
        {t("forgotPassword")}
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" textAlign={"center"}>
            {t("password")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4, mb: 2, fontSize: 15 }}>
            {t("passwordRecoveryText")}
          </Typography>
          <FormControl
            sx={{ ...textFieldStyle, m: 0, width: "400px", height: "50px", mb: 5 }}
            variant="outlined"
          >
            <TextField
              margin="normal"
              // required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleChange}
              // value={values.email}
              // error={touched.email && !!errors.email}
              // helperText={touched.email && errors.email}
            />
          </FormControl>
          <Link
            id="send"
            component="button"
            variant="body2"
            onClick={handleOpen}
            marginBottom={10}
          >
            {t("send")}
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
