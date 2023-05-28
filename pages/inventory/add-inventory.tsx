import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Alert from "@mui/lab/Alert";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Form, Formik } from "formik";
import moment from "moment";
import image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import CarForm from "../../src/components/form/add-car-form";
import {
  SecondaryButton,
  StyledTextField,
} from "../../src/components/GlobalElement";
import ImageUploader from "../../src/components/imageUploader";
import LoadingContext from "../../src/context/loading";
import { CarService } from "../../src/service/cars";
import { InventoryService } from "../../src/service/inventory-service";
import { userJwtData } from "../../src/utils/jwt";

const steps = ["Add Car Details", "Add Car Images"];

export default function AddInventory() {
  // States
  const [siteError, setSiteError] = useState<any>("");
  const [activeStep, setActiveStep] = useState<any>(0);
  const [data, setData] = useState<any>();
  const [images, setImages] = useState<any[]>([]);
  const [carId, setCarId] = useState<any>();
  const imageUploader = useRef<any>();
  const [additionalFeatureValidation, setAdditionalFeatureValidation] =
    useState<boolean>(true);
  const [imageUploadValidation, setImageUploadValidation] =
    useState<boolean>(true);
  const [brandList, setBrandList] = useState<any>();
  const [carBodyList, setCarBodyList] = useState<any>();
  const [formLoading, setFormLoading] = useState<boolean>(false);

  // ck eidtor configration
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  // Variables
  const user: any = userJwtData();
  const initialValues = {
    carName: "",
    color: "",
    fuelType: "",
    kmDriven: "",
    maxPrice: "",
    model: "",
    ownerShip: "",
    manufactureYear: new Date(),
    carBrand: "",
    carBodyId: "",
  };
  const carService = new CarService();
  const inventoryService = new InventoryService();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const handleSubmit = async (values: any, { resetForm }: any) => {
    setSiteError("");
    let payload;
    if (user) {
      payload = {
        name: values?.carName,
        modelName: values?.model,
        year: moment(values?.manufactureYear).format("YYYY"),
        color: values?.color,
        kmDriven: values?.kmDriven,
        ownerShip: values?.ownerShip,
        fuelType: values?.fuelType,
        maxPrice: values?.maxPrice,
        carMakeId: values?.carBrand,
        carBodyId: values?.carBodyId,
        equipmentName: data,
        userId: user?.id,
        roleId: "617adebb2c17ccbd23fe474f",
      };
    }
    if (activeStep == 0) {
      setLoading(true);
      try {
        const addCarData = await carService.addCarInventory(payload);
        if (!addCarData.data.error) {
          setCarId(addCarData.data.data);
          setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
          resetForm();
          setData("");
          setLoading(false);
        } else {
          setSiteError(addCarData.data.error);
        }
      } catch (error: any) {
        setLoading(false);
        let errorResponse = JSON.parse(error?.request?.response);
        setSiteError(errorResponse?.message);
      }
    } else if (activeStep == steps.length - 1) {
      images?.map((item: any) => {
        updateImageOrder(item?._id, item?.imageOrder);
      });
      handleReset();
      setImages([]);
    }
  };

  // const handleNext = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //   }, 2000);
  //   setLoading(false);
  // };

  const handleDragEnd = (event: any) => {
    if (!event.destination) return;
    let item: any = Array?.from(images || "");
    const [recordedItem] = item.splice(event.source.index, 1);
    item.splice(event.destination.index, 0, recordedItem);
    item = item.map((imageItem: any, index: number) => {
      imageItem.imageOrder = index;
      return imageItem;
    });
    setImages(item);
  };

  const updateCarImageById = async (payload: any) => {
    setLoading(true);
    try {
      const updateImage = await carService.updateCarImageById(payload);
      if (!updateImage.data.error) {
        setLoading(false);
        refreshApi();
      } else {
        setSiteError(updateImage.data.error);
      }
    } catch (error: any) {
      setLoading(false);
      let errorResponse = JSON.parse(error?.request?.response);
      setSiteError(errorResponse?.message);
    }
  };

  const handleFileInput = (e: any) => {
    if (images) {
      setImageUploadValidation(false);
    } else {
      setImageUploadValidation(true);
    }
    if (e.target.files.length > 0) {
      const selectedFiles: React.SetStateAction<any[]> = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles];
      targetFilesObject.map((file: any) => {
        return selectedFiles.push(file);
      });
      const formData: any = new FormData();
      if (carId) {
        formData.append(`carId`, carId);
        for (let i = 0; i < targetFilesObject.length; i++) {
          formData.append(`image`, targetFilesObject[i]);
        }
        updateCarImageById(formData);
      }
    }
  };
  // Delete carImage by Id
  const deleteImageById = async (imageid: any, index?: any) => {
    setLoading(true);
    try {
      const deleteImage = await carService.deleteCarImageById(imageid);
      if (!deleteImage.data.error) {
        setLoading(false);
        refreshApi();
      } else {
        setSiteError(deleteImage.data.error);
      }
    } catch (error: any) {
      setLoading(false);
      let errorResponse = JSON.parse(error?.request?.response);
      setSiteError(errorResponse?.message);
    }
  };

  const getInventoryById = async (payload: any) => {
    setLoading(true);
    try {
      const inventoryByIdApiCall = await inventoryService.getInventoryById(
        payload
      );

      if (!inventoryByIdApiCall.data.error) {
        setImages(inventoryByIdApiCall.data.data[0].Car_Images);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const updateImageOrder = async (carId: any, payload: any) => {
    const payloadData = {
      imageOrder: payload,
    };
    setLoading(true);
    try {
      const updateOrder = await inventoryService.updateCarImageOrder(
        carId,
        payloadData
      );
      if (!updateOrder?.data.error) {
        setLoading(false);
        // setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
      } else {
        setLoading(false);
        setSiteError(updateOrder?.data.error);
      }
    } catch (error: any) {
      let errorResponse = JSON.parse(error?.request?.response);
      setSiteError(errorResponse?.message);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
  const handelDisable = (props: any) => {
    if (activeStep == 0) {
      return !(props.isValid && props.dirty) || additionalFeatureValidation;
    } else {
      return imageUploadValidation;
    }
  };

  // RefreshApi
  const refreshApi = () => {
    if (carId) {
      getInventoryById(carId);
    }
  };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
  // };

  // Use Effect
  useEffect(() => {
    if (carId) {
      getInventoryById(carId);
    }
  }, [carId]);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
    getAllBrands();
    getAllCarBody();
  }, []);
  return (
    <>
      <section className="inspection-detail">
        {siteError && (
          <div className="site-alert">
            <Alert severity="error">{siteError}</Alert>
          </div>
        )}
        <Container maxWidth="lg">
          <h3 className="page-subtitle">
            Dashboard <span>/</span> Inventory
          </h3>
          <div className="site-card">
            <React.Fragment>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(formik: any) => (
                  <Form>
                    <Container maxWidth="lg">
                      <>
                        {activeStep == 0 ? (
                          // <CarForm formik={props} data={data} setData={setData} />
                          <>
                            <div className="flex-container">
                              <h5>Car</h5>
                            </div>
                            <Grid
                              container
                              spacing={2}
                              sx={{ marginBottom: "20px" }}
                            >
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
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
                                  {formik.touched.carName &&
                                    formik.errors.carName}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
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
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="fueltype-lable">
                                    FuelType
                                  </InputLabel>
                                  <Select
                                    labelId="fueltype-lable"
                                    id="fueltype-select"
                                    error={
                                      formik.touched.fuelType &&
                                      formik.errors.fuelType
                                    }
                                    required
                                    label="fueltype"
                                    name="fuelType"
                                    value={formik.values.fuelType}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  >
                                    <MenuItem value="petrol">Petrol </MenuItem>
                                    <MenuItem value="diesel">Diesel</MenuItem>
                                    <MenuItem value="electric">
                                      Electric
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                                <span className="error">
                                  {formik.touched.fuelType &&
                                    formik.errors.fuelType}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
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
                                  {formik.touched.kmDriven &&
                                    formik.errors.kmDriven}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
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
                                  {formik.touched.maxPrice &&
                                    formik.errors.maxPrice}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="ownership-lable">
                                    OwnerShip
                                  </InputLabel>
                                  <Select
                                    labelId="ownership-lable"
                                    error={
                                      formik.touched.ownerShip &&
                                      formik.errors.ownerShip
                                    }
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
                                  {formik.touched.ownerShip &&
                                    formik.errors.ownerShip}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
                                  <DatePicker
                                    views={["year"]}
                                    label="Manufacture Year"
                                    value={formik.values.manufactureYear}
                                    maxDate={new Date()}
                                    onChange={(value: any) =>
                                      formik.setFieldValue(
                                        "manufactureYear",
                                        value
                                      )
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
                                  {formik.touched.manufactureYear &&
                                    formik.errors.manufactureYear}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="brand-lable">
                                    Brand
                                  </InputLabel>
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
                                      brandList.map(
                                        (item: any, index: number) => (
                                          <MenuItem
                                            key={`brand-item-${index}`}
                                            value={item?.id}
                                          >
                                            {item?.name}
                                          </MenuItem>
                                        )
                                      )}
                                  </Select>
                                </FormControl>
                                <span className="error">
                                  {formik.touched.carBrand &&
                                    formik.errors.carBrand}
                                </span>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
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
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="site-form-field"
                              >
                                <FormControl fullWidth>
                                  <InputLabel id="carBody-lable">
                                    Car Body
                                  </InputLabel>
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
                                      carBodyList.map(
                                        (item: any, index: number) => (
                                          <MenuItem
                                            key={`carbody-item-${index}`}
                                            value={item?.id}
                                          >
                                            {item?.bodyType}
                                          </MenuItem>
                                        )
                                      )}
                                  </Select>
                                </FormControl>
                                <span className="error">
                                  {formik.touched.carBodyId &&
                                    formik.errors.carBodyId}
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
                          </>
                        ) : (
                          <ImageUploader
                            images={images}
                            setImages={setImages}
                            handleDragEnd={handleDragEnd}
                            imageUploader={imageUploader}
                            handleFileInput={handleFileInput}
                            DeleteImage={deleteImageById}
                            carId={carId}
                          />
                        )}
                      </>
                      <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <SecondaryButton
                          variant="contained"
                          color="secondary"
                          type="submit"
                          disabled={handelDisable(formik)}
                        >
                          {activeStep != 0 ? "Save" : "Next"}
                        </SecondaryButton>
                      </Box>
                    </Container>
                  </Form>
                )}
              </Formik>
            </React.Fragment>
          </div>
        </Container>
      </section>
    </>
  );
}
function resetForm() {
  throw new Error("Function not implemented.");
}
