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

export default function ContentPhoneComponent() {
  // States
  const [PhoneUpdateSuccess, setPhoneUpdateSuccess] = useState<boolean>(false);
  const [adminData, setAdminData] = useState<any>();
  const [formLoading, setFormLoading] = useState<any>();

  // Variables
  const initialValues = {
    phone: adminData?.contactNo,
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validataion = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const adminService = new AdminService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const HandleSubmit = async (values: any) => {
    setLoading(true);
    setFormLoading(true);
    const payload = {
      contactNo: values.phone,
    };
    try {
      const updateAdminDataApiCall = await adminService.updateAdminData(
        payload
      );
      if (!updateAdminDataApiCall.data.error) {
        setFormLoading(false);
        setPhoneUpdateSuccess(true);
      } else {
        console.log(updateAdminDataApiCall.data.error);
        setFormLoading(false);
      }
    } catch (error: any) {
      setFormLoading(false);
      console.log(error.request);
    }
    refreshApi();
    setTimeout(() => {
      setPhoneUpdateSuccess(false);
    }, 2000);
  };

  //   Refresh Api
  const refreshApi = () => {
    getAdminData();
  };

  //   Get Admin Data Api
  const getAdminData = async () => {
    setLoading(true);
    try {
      const adminDataApiCall = await adminService.getAdminData();
      if (!adminDataApiCall.data.error) {
        setAdminData(adminDataApiCall.data.data);
        // initialValues.email = adminDataApiCall.data.data.emailId;
        setLoading(false);
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
      {PhoneUpdateSuccess && (
        <Alert className="successToasty" variant="outlined" severity="success">
          Phone Number Updated Successfully
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
                      name="phone"
                      label="Phone Number"
                      value={props.values.phone}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">{props.errors.phone}</span>
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
