import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ChangeEvent } from "react";
import defaultImage from "../../../../assets/default.jpg";
import http_common from "../../../../http_common";
import onChangeFileHandler from "../fileHnd.ts";

interface ICategoryCreate {
  name: string;
  image: File | null;
  description: string;
}

const CategoryCreatePage = () => {
  const navigate = useNavigate();

  const init: ICategoryCreate = {
    name: "",
    image: null,
    description: "",
  };

  const onFormikSubmit = async (values: ICategoryCreate) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.image) {
        formData.append("image", values.image);
      }
      formData.append("description", values.description);

      await http_common.post("api/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("..");
    } catch {
      console.log("Server error");
    }
  };

  const formik = useFormik({
    initialValues: init,
    onSubmit: onFormikSubmit,
  });
  const { values, handleChange, handleSubmit, setFieldValue } = formik;
  const fileHnd = (e: ChangeEvent<HTMLInputElement>) => onChangeFileHandler(e, setFieldValue);

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Додати категорію
      </Typography>
      <div className="container">
        <form className="col-md-8 offset-md-2" onSubmit={handleSubmit}>
          <TextField
            label="Назва"
            fullWidth
            value={values.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            variant="outlined"
          />

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              <img
                src={values.image === null ? defaultImage : URL.createObjectURL(values.image)}
                alt="фото"
                width={200}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              className="form-control d-none"
              id="image"
              onChange={fileHnd}
              name="image"
            />
          </div>

          <TextField
            label="Опис"
            fullWidth
            value={values.description}
            onChange={handleChange}
            name="description"
            margin="normal"
            variant="outlined"
          />

          <Button type="submit" variant="contained" color="primary">
            Додати
          </Button>
        </form>
      </div>
    </>
  );
};

export default CategoryCreatePage;