import { Grid, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StyledTextField } from "../src/components/GlobalElement";
import { useRouter } from "next/router";
import OtpForm from "../src/components/form/otpForm";
import { LoginService } from "../src/service/login";
import { useLocalStorage } from "../src/hooks/useLocalStorage";
import JwtContext from "../src/context/authContext";

export default function Login() {
  // States
  const [signInError, setSignInError] = useState<any>(true);
  const [otpModel, setOtpModel] = useState<any>(false);
  const [loginData, setLoginData] = useState<any>();
  const [authenticationError, setAuthenticationError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [otpData, setOtpData] = useState<any>();
  const [jwt, setJwt] = useLocalStorage("jwt", null);
  const [authenticationState, setAuthenticationState] = useState<any>();

  // Variables
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const initialValues = {
    adminData: "",
  };
  const validationSchema1 = Yup.object().shape({
    adminData: Yup.string().required("phone number or Email  is required"),
  });

  const otpInitialValues = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };
  const validationSchema2 = Yup.object().shape({
    otp1: Yup.number().required(),
    otp2: Yup.number().required(),
    otp3: Yup.number().required(),
    otp4: Yup.number().required(),
    otp5: Yup.number().required(),
    otp6: Yup.number().required(),
  });

  const router = useRouter();

  const loginService = new LoginService();

  // Context
  const { authenticated, setAuthenticated } = useContext(JwtContext);

  // Functions
  const handleSubmit = async (values: any, { resetForm }: any) => {
    setLoginData(values);
    setOtpModel(false);
    setAuthenticationError(null);
    setLoading(true);
    try {
      const sendOtpApiCall = await loginService.sendOtp(values);
      if (!sendOtpApiCall.data.error) {
        // console.log(sendOtpApiCall.data.data);
        resetForm();
        setLoading(false);
        setOtpModel(true);
      } else {
        setAuthenticationError(sendOtpApiCall.data.error);
        setLoading(false);
        resetForm();
      }
    } catch (error: any) {
      // console.log(error.request);
      let errorResponse = JSON.parse(error?.request?.response);
      // console.log(errorResponse?.message);
      setAuthenticationError(errorResponse?.message);
      resetForm();
      setLoading(false);
      setOtpModel(false);
    }
  };

  const otpHandelSubmit = async (values: any, { resetForm }: any) => {
    const otp = `
            ${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}
            `;
    const payloadData = {
      adminData: loginData?.adminData,
      otp: otp.toString().replaceAll(/\s/g, ""),
    };
    setAuthenticationError(null);
    setLoading(true);
    try {
      const verifyOtpApiCall = await loginService.verifyOtp(payloadData);
      if (!verifyOtpApiCall.data.error) {
        // console.log(verifyOtpApiCall.data);
        // setAuthenticated(true);
        setJwt(verifyOtpApiCall.data.data);
        setAuthenticationState(verifyOtpApiCall.data);
        setLoading(false);
        resetForm(otpInitialValues);
      } else {
        setAuthenticationError(verifyOtpApiCall.data.error);
        setLoading(false);
        resetForm(otpInitialValues);
      }
    } catch (error: any) {
      let errorResponse = JSON.parse(error?.request?.response);
      // console.log(errorResponse?.message);
      setAuthenticationError(errorResponse?.message);
      setLoading(false);
      resetForm(otpInitialValues);
    }
  };

  // Effects
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      if (router.pathname == "/login") {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      if (router.pathname == "/login") {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  }, [authenticationState]);

  return (
    <div>
      <section className="section-login">
        <div className="wish-wheel-banner order-md-2 "></div>
        <div className="login-form-container order-md-1">
          <div className="content">
            <h2>Welcome Back !</h2>
            <div className="login-form-card">
              {otpModel && otpModel ? (
                <div className="otp-card">
                  <h4>Enter OTP received on your mobile and email</h4>
                  <Formik
                    initialValues={otpInitialValues}
                    validationSchema={validationSchema2}
                    onSubmit={otpHandelSubmit}
                  >
                    {(props: any) => (
                      <Form>
                        <OtpForm formik={props} />
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth
                          type="submit"
                          disabled={loading || !(props.isValid && props.dirty)}
                        >
                          {loading ? "Verifying...." : "Verify"}
                        </Button>
                        <div className="error">{authenticationError}</div>
                      </Form>
                    )}
                  </Formik>
                </div>
              ) : (
                <div>
                  <h4>Login</h4>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema1}
                    onSubmit={handleSubmit}
                  >
                    {(props: any) => (
                      <Form id="login-form">
                        <StyledTextField
                          required
                          autoComplete={"" + Math.random()}
                          name="adminData"
                          value={props.values.adminData}
                          onChange={(event: any) => {
                            props.handleChange(event);
                            // console.log(event.target.value);
                            if (
                              event.target.value > 3 &&
                              /\d/.test(event.target.value)
                            ) {
                              if (phoneRegExp.test(event.target.value)) {
                                setSignInError(false);
                              } else {
                                setSignInError(true);
                              }
                              // phoneRegExp.test(event.target.value)
                            } else {
                              if (emailRegExp.test(event.target.value)) {
                                setSignInError(false);
                              } else {
                                setSignInError(true);
                              }
                            }
                          }}
                          onBlur={props.handleBlur}
                          variant="filled"
                          label="Phone number or Email"
                          fullWidth
                        />
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth
                          type="submit"
                          disabled={
                            signInError ||
                            loading ||
                            !(props.isValid && props.dirty)
                          }
                        >
                          {loading ? "Sending Otp..." : "Authenticate me"}
                        </Button>
                        <div className="error">{authenticationError}</div>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
