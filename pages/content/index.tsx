import { Tabs, Tab, Chip, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import {
  SecondaryButton,
  StyledTextField,
} from "../../src/components/GlobalElement";
import LoadingContext from "../../src/context/loading";
import { CarService } from "../../src/service/cars";
import ContentAddressComponent from "./content-address-component";
import ContentCityComponent from "./content-city-component";
import ContentEmailComponent from "./content-email-component";
import ContentPhoneComponent from "./content-phone-component";
import ContentSocialLinkComponent from "./content-social-component";
import ContentWebsiteStatsComponent from "./content-website-stats-component";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return <>{value === index && children}</>;
}

export default function Content() {
  // States
  const [tabValue, setTabValue] = React.useState(0);
  const [allBrands, setAllBrands] = useState<any>();
  // const [allCarBody, setAllCarBody] = useState<any>();
  const [formLoading, setFormLoading] = useState<boolean>(false);

  // Variables

  const carService = new CarService();
  const brandsInitialValues = {
    brands: "",
  };

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  /* Brand Api Call Function */
  const brandsHandleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    console.log(values);
    const payload = {
      name: values?.brands,
    };
    try {
      const addBrandApiCall = await carService.addBrand(payload);
      if (!addBrandApiCall.data.error) {
        console.log(addBrandApiCall.data.data);
        resetForm();
        refreshApi();
        setLoading(false);
      } else {
        console.log(addBrandApiCall.data.error);

        resetForm();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      resetForm();
      setLoading(false);
    }
  };

  const getAllBrands = async () => {
    setLoading(true);
    setFormLoading(true);
    try {
      const allBrandsApiCall = await carService.allBrands();
      if (!allBrandsApiCall.data.error) {
        console.log(allBrandsApiCall.data.data);
        setAllBrands(allBrandsApiCall.data.data);
        setFormLoading(false);
        setLoading(false);
      } else {
        console.log(allBrandsApiCall.data.data);
        setFormLoading(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setFormLoading(false);
      setLoading(false);
    }
  };
  //   Brands chips delete functions
  const brandHandleDelete = (chipToDelete: any) => () => {
    console.log(chipToDelete);
    if (confirm("Are you sure you really want to delete!") == true) {
      deleteBrandById(chipToDelete?.id);
    } else {
      setLoading(false);
    }
    refreshApi();
  };

  const deleteBrandById = async (payload: any) => {
    setLoading(true);
    try {
      const deleteBrandApiCall = await carService.deleteBrands(payload);
      if (!deleteBrandApiCall.data.error) {
        console.log(deleteBrandApiCall.data.data);
        setLoading(false);
      } else {
        console.log(deleteBrandApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    refreshApi();
  };

  const refreshApi = () => {
    setLoading(true);
    getAllBrands();
    setLoading(false);
  };

  /* Car Body api Call  */
  // const getAllCarBody = async () => {
  //   setLoading(true);
  //   try {
  //     const carBodyData = await carService.getAllCarBody();
  //     if (!carBodyData.data.error) {
  //       setAllCarBody(carBodyData.data.data);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  // Effects
  useEffect(() => {
    getAllBrands();
    // getAllCarBody();
  }, []);

  return (
    <section className="inspection-detail content-page">
      <Container maxWidth="lg">
        <h3 className="page-subtitle">Dashboard / Content</h3>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Master" />
          <Tab label="Website" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <div className="site-card">
            <h5>Master</h5>
            <div className="content-page-section">
              {allBrands && (
                <Formik
                  initialValues={brandsInitialValues}
                  onSubmit={brandsHandleSubmit}
                >
                  {(props: any) => (
                    <Form>
                      <div className="flex-container">
                        <div className="textfield-wrapper">
                          <StyledTextField
                            name="brands"
                            label="Brands"
                            value={props.values.brands}
                            onChange={props.handleChange}
                            variant="outlined"
                            fullWidth
                          />
                        </div>
                        <SecondaryButton
                          variant="contained"
                          className="secondaryButton"
                          color="secondary"
                          type="submit"
                          disabled={
                            !(props.isValid && props.dirty) || formLoading
                          }
                        >
                          {formLoading ? "Adding.." : "Add"}
                        </SecondaryButton>
                      </div>
                      <Stack
                        className="material-ui-stack"
                        direction="row"
                        spacing={1}
                      >
                        {allBrands.map((item: any, index: number) => (
                          <Chip
                            className="site-chip"
                            key={`deletable-chips-${index}`}
                            label={item?.name}
                            onDelete={brandHandleDelete(item)}
                          />
                        ))}
                      </Stack>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <div className="site-card">
            <h5>Website</h5>
            <ContentCityComponent />
            <ContentWebsiteStatsComponent />
            <ContentEmailComponent />
            <ContentPhoneComponent />
            <ContentAddressComponent />
            <ContentSocialLinkComponent />
          </div>
        </TabPanel>
      </Container>
    </section>
  );
}
