import React from "react";
import {  Form, Formik } from "formik";
import * as Yup from "yup";
import AuthFormikControl from "../../componenet/authForm/AuthFormikControl";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../assets/utils/alert";
import { loginService } from "../../services/auth";

const initialValues = {
  phone: "",
  password: "",
  remember: false
};
const onSubmit = async (values, SubmitMethodes, navigate) => {
  try {
    const res = await loginService(values);
    if (res.status == 200) {
      localStorage.setItem("loginToken", JSON.stringify(res.data));
      navigate("/");
    } else {
      Alert("error", res.data.message, "متاسفم");
    }
    SubmitMethodes.setSubmitting(false);
  } catch (error) {
    SubmitMethodes.setSubmitting(false);
    Alert("error", "متاسفانه مشکلی از سمت سرور رخ داده", "متاسفم...!");
  }
};
const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, SubmitMethodes) =>
        onSubmit(values, SubmitMethodes, navigate)
      }
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div className="wrap-login100">
            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
              <span className="login100-form-title">ورود اعضا</span>

              <AuthFormikControl
                formik={formik}
                control="input"
                type="text"
                name="phone"
                icon="fa fa-mobile"
                label="شماره موبایل"
              />

              <AuthFormikControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />

              <AuthFormikControl
                control="switch"
                name="remember"
                label="مرا بخاطر بسپارید"
              />

              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "لطفا صبر کنید" : " ورود"}
                </button>
              </div>
            </Form>
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/auth/images/img-01.png" alt="IMG" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
