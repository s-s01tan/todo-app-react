import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Fragment } from "react";
import * as yup from "yup";
import "./Form.css";

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(1, "Title should contain at least 1 character")
    .required("Title is required"),
  description: yup
    .string()
    .trim()
    .min(1, "Description should contain at least 1 character")
    .required("Description is required"),
});

const initialValues = {
  title: "",
  description: "",
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values: any) => {};

  return (
    <Fragment>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            className="form-input"
            variant="filled"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            className="form-input"
            variant="filled"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            className="submit-btn"
          >
            Add
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
