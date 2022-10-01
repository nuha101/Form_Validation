import React from "react";
import "./Register.css";
import { Formik, Form } from "formik";
import { Fields } from "./Fields";
import * as Yup from "yup";

export const Register = () => {
  const validation = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invaild email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <div className="main-register">
      <div className="row">
        <div className="register-container col-md-5">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {(formik) => (
              <div>
                <h1>Sign Up</h1>

                <Form>
                  <Fields label="First Name" name="firstName" type="text" />
                  <Fields label="Last Name" name="lastName" type="text" />
                  <Fields label="Email" name="email" type="email" />
                  <Fields label="Password" name="password" type="password" />
                  <Fields
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <button className="btn btn-dark mt-3" type="submit">
                    Register
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
