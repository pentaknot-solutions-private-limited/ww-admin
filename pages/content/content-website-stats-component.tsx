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

export default function ContentWebsiteStatsComponent() {
  // States
  const [customersServedUpdateSuccess, setCustomersServedUpdateSuccess] =
    useState<boolean>(false);
  const [adminData, setAdminData] = useState<any>();
  const [formLoading, setFormLoading] = useState<any>();

  // Variables
  const initialValues = {
    customersServed: adminData?.customersServed,
  };

  const validation = Yup.object().shape({
    customersServed: Yup.string().required("This field can't be blank"),
  });

  const adminService = new AdminService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const HandleSubmit = async (values: any) => {
    setLoading(true);
    setFormLoading(true);
    console.log(values);
    const payload = {
      customersServed: values.customersServed,
    };
    try {
      const updateAdminDataApiCall = await adminService.updateAdminData(
        payload
      );
      if (!updateAdminDataApiCall.data.error) {
        console.log(updateAdminDataApiCall.data.data);
        setFormLoading(false);
        setCustomersServedUpdateSuccess(true);
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
      setCustomersServedUpdateSuccess(false);
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
      {customersServedUpdateSuccess && (
        <Alert className="successToasty" variant="outlined" severity="success">
          Customers Served Updated Successfully
        </Alert>
      )}
      <div className="content-page-section">
        {adminData && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={HandleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="customersServed"
                      label="Customers Served"
                      value={props.values.customersServed}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.errors.customersServed}
                    </span>
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
