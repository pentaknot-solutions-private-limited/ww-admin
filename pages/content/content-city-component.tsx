import { Stack, Chip } from "@mui/material";
import { Formik, Form } from "formik";
import React, { useContext, useEffect, useState } from "react";
import {
  StyledTextField,
  SecondaryButton,
} from "../../src/components/GlobalElement";
import LoadingContext from "../../src/context/loading";
import { CarService } from "../../src/service/cars";

export default function ContentCityComponent() {
  // States
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [allCity, setAllCity] = useState<any>();

  // Variables
  const cityInitialValues = {
    city: "",
  };

  const carService = new CarService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const CityHandleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    setFormLoading(true);
    const payload = {
      name: values.city,
      stateId: "61798f24fc6c04fffc6ba6f3",
    };
    try {
      const addCityApiCall = await carService.addCity(payload);
      if (!addCityApiCall.data.error) {
        setFormLoading(false);
        resetForm();
        setLoading(false);
      } else {
        console.log(addCityApiCall.data.error);
        setFormLoading(false);
        resetForm();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setFormLoading(false);
      resetForm();
      setLoading(false);
    }
    refreshApi();
  };

  const cityHandleDelete = (item: any) => () => {
    console.log(item);
    if (confirm("Are you sure you really want to delete!") == true) {
      deleteCityById(item.id);
    } else {
      setLoading(false);
    }
    refreshApi();
  };

  const refreshApi = () => {
    setLoading(true);
    getCityList();
    setLoading(false);
  };

  // Get all City list api
  const getCityList = async () => {
    setLoading(true);
    try {
      const cityListApiCall = await carService.getCityList();
      if (!cityListApiCall.data.error) {
        setAllCity(cityListApiCall.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Delete city by id api
  const deleteCityById = async (payload: any) => {
    setLoading(true);
    try {
      const deleteCityApiCall = await carService.deleteCityById(payload);
      if (!deleteCityApiCall.data.error) {
        setLoading(false);
      } else {
        console.log(deleteCityApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    refreshApi();
  };
  // Effects
  useEffect(() => {
    getCityList();
  }, []);

  return (
    <>
      <div className="content-page-section">
        {allCity && (
          <Formik initialValues={cityInitialValues} onSubmit={CityHandleSubmit}>
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <div className="textfield-wrapper">
                    <StyledTextField
                      name="city"
                      label="City"
                      value={props.values.city}
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
                    disabled={!(props.isValid && props.dirty) || formLoading}
                  >
                    {formLoading ? "Adding.." : "Add"}
                  </SecondaryButton>
                </div>
                <Stack
                  className="material-ui-stack"
                  direction="row"
                  spacing={1}
                >
                  {allCity.map((item: any, index: number) => (
                    <Chip
                      className="site-chip"
                      key={`deletable-chips-${index}`}
                      label={item?.name}
                      onDelete={cityHandleDelete(item)}
                    />
                  ))}
                </Stack>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  );
}
