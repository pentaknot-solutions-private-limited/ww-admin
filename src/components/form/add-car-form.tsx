/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Alert,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";

import Image from "next/image";
import DeleteIcon from "../../public/deleteIcon.svg";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import UploadIcon from "../../public/upload-icon.svg";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StyledTextField } from "../GlobalElement";
import LoadingContext from "../../context/loading";
import { CarService } from "../../service/cars";

export default function CarForm({ formik, data, setData }: any) {
  // States
  const [additionalFeatureValidation, setAdditionalFeatureValidation] =
    useState<boolean>(true);
  const [imageUploadValidation, setImageUploadValidation] =
    useState<boolean>(true);
  const [brandList, setBrandList] = useState<any>();
  const [carBodyList, setCarBodyList] = useState<any>();
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [siteError, setSiteError] = useState<any>("");

  // ck eidtor configration
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  //   Variable
  const { loading, setLoading } = useContext(LoadingContext);
  const carService = new CarService();

  //   Functions
  const getAllBrands = async () => {
    setLoading(true);
    try {
      const getBrandData = await carService.allBrands();
      if (!getBrandData.data.error) {
        setBrandList(getBrandData.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {}
  };

  const getAllCarBody = async () => {
    setLoading(true);
    try {
      const getCarBodyData = await carService.getAllCarBody();
      if (!getCarBodyData.data.errro) {
        setCarBodyList(getCarBodyData.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {}
  };

  // Effects

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    getAllBrands();
    getAllCarBody();
    setEditorLoaded(true);
  }, []);

  return (
    <Container maxWidth="lg">
      <div className="flex-container">
        <h5>Car</h5>
      </div>
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <StyledTextField
            name="carName"
            label="Car Name"
            value={formik.values.carName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
          />
          <span className="error">
            {formik.touched.carName && formik.errors.carName}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <StyledTextField
            name="color"
            label="Color"
            value={formik.values.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
          />
          <span className="error">
            {formik.touched.color && formik.errors.color}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <FormControl fullWidth>
            <InputLabel id="fueltype-lable">FuelType</InputLabel>
            <Select
              labelId="fueltype-lable"
              id="fueltype-select"
              error={formik.touched.fuelType && formik.errors.fuelType}
              required
              label="fueltype"
              name="fuelType"
              value={formik.values.fuelType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="petrol">Petrol </MenuItem>
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
            </Select>
          </FormControl>
          <span className="error">
            {formik.touched.fuelType && formik.errors.fuelType}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <StyledTextField
            name="kmDriven"
            label="Km Driven"
            type="number"
            value={formik.values.kmDriven}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
          />
          <span className="error">
            {formik.touched.kmDriven && formik.errors.kmDriven}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <StyledTextField
            name="maxPrice"
            label="Ask Price"
            type="number"
            value={formik.values.maxPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
          />
          <span className="error">
            {formik.touched.maxPrice && formik.errors.maxPrice}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <FormControl fullWidth>
            <InputLabel id="ownership-lable">OwnerShip</InputLabel>
            <Select
              labelId="ownership-lable"
              error={formik.touched.ownerShip && formik.errors.ownerShip}
              required
              id="ownership-select"
              label="ownership"
              name="ownerShip"
              value={formik.values.ownerShip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="1st">1st</MenuItem>
              <MenuItem value="2nd">2nd</MenuItem>
              <MenuItem value="3rd">3rd</MenuItem>
            </Select>
          </FormControl>
          <span className="error">
            {formik.touched.ownerShip && formik.errors.ownerShip}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["year"]}
              label="Manufacture Year"
              value={formik.values.manufactureYear}
              maxDate={new Date()}
              onChange={(value: any) =>
                formik.setFieldValue("manufactureYear", value)
              }
              renderInput={(params: any) => (
                <TextField
                  name="year"
                  {...params}
                  helperText={null}
                  fullWidth
                />
              )}
            />
          </LocalizationProvider>

          <span className="error">
            {formik.touched.manufactureYear && formik.errors.manufactureYear}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <FormControl fullWidth>
            <InputLabel id="brand-lable">Brand</InputLabel>
            <Select
              labelId="brand-lable"
              id="brand-select"
              label="brand"
              name="carBrand"
              required
              value={formik.values.carBrand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {brandList &&
                brandList.map((item: any, index: number) => (
                  <MenuItem key={`brand-item-${index}`} value={item?.id}>
                    {item?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <span className="error">
            {formik.touched.carBrand && formik.errors.carBrand}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <StyledTextField
            name="model"
            label="Model"
            value={formik.values.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
          />
          <span className="error">
            {formik.touched.model && formik.errors.model}
          </span>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="site-form-field">
          <FormControl fullWidth>
            <InputLabel id="carBody-lable">Car Body</InputLabel>
            <Select
              labelId="carBody-lable"
              id="carBody-select"
              label="Car Body"
              name="carBodyId"
              required
              value={formik.values.carBodyId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {carBodyList &&
                carBodyList.map((item: any, index: number) => (
                  <MenuItem key={`carbody-item-${index}`} value={item?.id}>
                    {item?.bodyType}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <span className="error">
            {formik.touched.carBodyId && formik.errors.carBodyId}
          </span>
        </Grid>
      </Grid>
      <h5>Additional Feature</h5>
      <div className="ck-editor">
        {editorLoaded ? (
          <CKEditor
            editor={ClassicEditor}
            data={data}
            id="inputText"
            onChange={(event: any, editor: any) => {
              event.preventDefault();
              event.stopPropagation();
              if (editor.getData().length > 0) {
                setAdditionalFeatureValidation(false);
                setData(editor.getData());
              } else {
                setAdditionalFeatureValidation(true);
              }
            }}
          />
        ) : null}
      </div>
    </Container>
  );
}
