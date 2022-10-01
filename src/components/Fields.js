import React from "react";
import "./Register.css";
import { ErrorMessage, useField } from "formik";

export const Fields = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div className="fields">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
