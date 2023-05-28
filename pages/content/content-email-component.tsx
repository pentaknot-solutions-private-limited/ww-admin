import { Alert } from "@mui/material";
import { Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import {
  StyledTextField,
  SecondaryButton,
} from "../../src/components/GlobalElement";
import LoadingContext from "../../src/context/loading";
import { AdminService } from "../../src/service/admin";

export default function ContentEmailComponent() {
  // States
  const [emailUpdateSuccess, setEmailUpdateSuccess] = useState<boolean>(false);
  const [adminData, setAdminData] = useState<any>();
  const [formLoading, setFormLoading] = useState<any>();

  // Variables
  const initialValues = {
    email: adminData?.emailId,
  };

  const validataion = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("This field can't be blank"),
  });

  const adminService = new AdminService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const HandleSubmit = async (values: any) => {
    setLoading(true);
    setFormLoading(true);
    const payload = {
      emailId: values.email,
    };
    try {
      const updateAdminDataApiCall = await adminService.updateAdminData(
        payload
      );
      if (!updateAdminDataApiCall.data.error) {
        setFormLoading(false);
        setEmailUpdateSuccess(true);
        setLoading(false);
      } else {
        console.log(updateAdminDataApiCall.data.error);
        setFormLoading(false);
        setLoading(false);
      }
    } catch (error: any) {
      setFormLoading(false);
      console.log(error.request);
      setLoading(false);
    }
    refreshApi();
    setTimeout(() => {
      setEmailUpdateSuccess(false);
    }, 2000);
  };

  //   Refresh Api
  const refreshApi = () => {
    setLoading(true);
    getAdminData();
    setLoading(false);
  };

  //   Get Admin Data Api
  const getAdminData = async () => {
    setLoading(true);
    try {
      const adminDataApiCall = await adminService.getAdminData();
      if (!adminDataApiCall.data.error) {
        setAdminData(adminDataApiCall.data.data);
        setLoading(false);
        // initialValues.email = adminDataApiCall.data.data.emailId;
      } else {
        console.log(adminDataApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    getAdminData();
  }, []);

  return (
    <>
      {emailUpdateSuccess && (
        <Alert className="successToasty" variant="outlined" severity="success">
          Email Updated Successfully
        </Alert>
      )}
      <div className="content-page-section">
        {adminData && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validataion}
            onSubmit={HandleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="email"
                      label="Email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">{props.errors.email}</span>
                  </div>
                  <SecondaryButton
                    variant="contained"
                    className="secondaryButton"
                    color="secondary"
                    type="submit"
                    disabled={!(props.isValid && props.dirty) || formLoading}
                  >
                    {formLoading ? "Updating.." : "Update"}
                  </SecondaryButton>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  );
}
