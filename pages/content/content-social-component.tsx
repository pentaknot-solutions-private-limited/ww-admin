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

export default function ContentSocialLinkComponent() {
  // States
  const [socialLinkUpdate, setSocialLinkUpdate] = useState<boolean>(false);
  const [socialData, setSocialData] = useState<any>();
  const [formLoading, setFormLoading] = useState<any>();

  // Variables
  const initialValues = {
    facebook: socialData && socialData[0].link,
    instagram: socialData && socialData[1].link,
    youtube: socialData && socialData[2].link,
  };
  const validataion = Yup.object().shape({
    facebook: Yup.string().required("This feild can't be blank"),
    instagram: Yup.string().required("This feild can't be blank"),
    youtube: Yup.string().required("This feild can't be blank"),
  });

  const adminService = new AdminService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  // Facebook Link Update
  const facebookHandleSubmit = async (values: any) => {
    setFormLoading(true);
    const facebookPayload = {
      link: values.facebook,
    };
    try {
      const faceBookUpdateApiCall = await adminService.updateFacebookLink(
        facebookPayload
      );
      if (!faceBookUpdateApiCall.data.error) {
        setFormLoading(false);
        setSocialLinkUpdate(true);
      } else {
        console.log(faceBookUpdateApiCall.data.error);
        setFormLoading(false);
      }
    } catch (error: any) {
      setFormLoading(false);
      console.log(error.request);
    }
    refreshApi();
    setTimeout(() => {
      setSocialLinkUpdate(false);
    }, 2000);
  };

  // instagram Link Update
  const instagramHandleSubmit = async (values: any) => {
    setFormLoading(true);
    const instagramPayload = {
      link: values.instagram,
    };
    try {
      const instagramUpdateApiCall = await adminService.updateInstagramLink(
        instagramPayload
      );
      if (!instagramUpdateApiCall.data.error) {
        setFormLoading(false);
        setSocialLinkUpdate(true);
      } else {
        console.log(instagramUpdateApiCall.data.error);
        setFormLoading(false);
      }
    } catch (error: any) {
      setFormLoading(false);
      console.log(error.request);
    }
    refreshApi();
    setTimeout(() => {
      setSocialLinkUpdate(false);
    }, 2000);
  };

  // youtube Link Update
  const youtubeHandleSubmit = async (values: any) => {
    setFormLoading(true);
    const youtubePayload = {
      link: values.youtube,
    };
    try {
      const youtubeUpdateApiCall = await adminService.updateYoutubeLink(
        youtubePayload
      );
      if (!youtubeUpdateApiCall.data.error) {
        setFormLoading(false);
        setSocialLinkUpdate(true);
      } else {
        console.log(youtubeUpdateApiCall.data.error);
        setFormLoading(false);
      }
    } catch (error: any) {
      setFormLoading(false);
      console.log(error.request);
    }
    refreshApi();
    setTimeout(() => {
      setSocialLinkUpdate(false);
    }, 2000);
  };

  //   Refresh Api
  const refreshApi = () => {
    getSocialData();
  };

  // //   Get social Data Api
  const getSocialData = async () => {
    setLoading(true);
    try {
      const socialDataApiCall = await adminService.getSocialLink();
      if (!socialDataApiCall.data.error) {
        setSocialData(socialDataApiCall.data.data);
        setLoading(false);
      } else {
        console.log(socialDataApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    getSocialData();
  }, []);

  return (
    <>
      {socialLinkUpdate && (
        <Alert className="successToasty" variant="outlined" severity="success">
          Social Link Updated Successfully
        </Alert>
      )}

      <div className="content-page-section">
        {socialData && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validataion}
            onSubmit={facebookHandleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="facebook"
                      label="Facebook"
                      value={props.values.facebook}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">{props.errors.facebook}</span>
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
      <div className="content-page-section">
        {socialData && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validataion}
            onSubmit={instagramHandleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="instagram"
                      label="Instagram"
                      value={props.values.instagram}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">{props.errors.instagram}</span>
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
      <div className="content-page-section">
        {socialData && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validataion}
            onSubmit={youtubeHandleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="youtube"
                      label="Youtube"
                      value={props.values.youtube}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">{props.errors.youtube}</span>
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
