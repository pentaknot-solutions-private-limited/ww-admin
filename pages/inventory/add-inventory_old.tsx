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
import {
  SecondaryButton,
  StyledTextField,
} from "../../src/components/GlobalElement";
import Image from "next/image";
import DeleteIcon from "../../public/deleteIcon.svg";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InventoryService } from "../../src/service/inventory-service";
import { useRouter } from "next/router";
import UploadIcon from "../../public/upload-icon.svg";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CarService } from "../../src/service/cars";
import LoadingContext from "../../src/context/loading";
import moment from "moment";
import { userJwtData } from "../../src/utils/jwt";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function InspectionDetail() {
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
  const [data, setData] = useState<any>();

  // image states
  const [images, setImages] = useState<any[]>([]);

  // Variables
  const router = useRouter();
  const { id } = router.query;
  const inventoryService = new InventoryService();
  const carService = new CarService();
  const imageUploader = useRef<any>();
  const user: any = userJwtData();

  // Form Initial values
  const initialValues = {
    carName: "",
    carNumber: "",
    color: "",
    fuelType: "",
    kmDriven: "",
    minPrice: "",
    maxPrice: "",
    milege: "",
    model: "",
    ownerShip: "",
    manufactureYear: new Date(),
    carBrand: "",
    carBodyId: "",
  };

  // Yup validation

  // const validationSchema = Yup.object({
  //   carName: Yup.string().required("This field can't be blank"),
  //   carNumber: Yup.string().required("This field can't be blank"),
  //   color: Yup.string().required("This field can't be blank"),
  //   fuelType: Yup.string().required("This field can't be blank"),
  //   kmDriven: Yup.string().required("This field can't be blank"),
  //   minPrice: Yup.string().required("This field can't be blank"),
  //   maxPrice: Yup.string().required("This field can't be blank"),
  //   milege: Yup.string().required("This field can't be blank"),
  //   ownerShip: Yup.string().required("This field can't be blank"),
  //   manufactureYear: Yup.string().required("This field can't be blank"),
  //   carBrand: Yup.string().required("This field can't be blank"),
  //   carBodyId: Yup.string().required("This field can't be blank"),
  // });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
  };

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const handleSubmit = async (values: any, { resetForm }: any) => {
    setFormLoading(true);
    setLoading(true);
    let payload;
    if (user) {
      payload = {
        name: values?.carName,
        modelName: values?.model,
        year: moment(values?.manufactureYear).format("YYYY"),
        color: values?.color,
        kmDriven: values?.kmDriven,
        carNumber: values?.carNumber,
        ownerShip: values?.ownerShip,
        fuelType: values?.fuelType,
        minPrice: values?.minPrice,
        maxPrice: values?.maxPrice,
        milege: values?.milege,
        carMakeId: values?.carBrand,
        carBodyId: values?.carBodyId,
        equipmentName: data,
        userId: user?.id,
        roleId: "617adebb2c17ccbd23fe474f",
      };
    }

    try {
      const addCarData = await carService.addCarInventory(payload);
      setSiteError("");
      if (!addCarData.data.error) {
        const formData = new FormData();
        formData.append(`carId`, addCarData.data.data);
        for (let i = 0; i < images.length; i++) {
          formData.append(`image`, images[i]);
        }
        uploadCarImage(formData);
      } else {
        setFormLoading(false);
        setSiteError(addCarData.data.error);
      }
    } catch (error: any) {
      setFormLoading(false);
      let errorResponse = JSON.parse(error?.request?.response);
      setSiteError(errorResponse?.message);
    }
    resetForm();
    setData("");
    setImages([]);
  };

  // image upload fileinput function
  const handleFileInput = (e: any) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setImageUploadValidation(false);
    } else {
      setImageUploadValidation(true);
    }
    const selectedFiles: React.SetStateAction<any[]> = [];
    const targetFiles = e.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file: any) => {
      return selectedFiles.push(file);
    });
    setImages(selectedFiles);
    console.log(selectedFiles);
  };

  const uploadCarImage = async (payload: any) => {
    try {
      const apiCall = await inventoryService.uploadCarImage(payload);
      if (!apiCall.data.error) {
        console.log(apiCall.data.data);
        setFormLoading(false);
        setLoading(false);
      } else {
        console.log(apiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // remove Image
  const DeleteImage = (array: any, index: any) => {
    let data = array.filter((item: any, key: any) => {
      return key != index;
    });
    // console.log(imageUploader.current.value);
    // imageUploader.current.value = "";
    console.log(array.length);
    if (array.length <= 1) {
      // console.log("It is less then 1");
      imageUploader.current.value = "";
    }
    setImages(data);
    console.log(array);
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

  const handleDragEnd = (event: any) => {
    // console.log(event);

    if (!event.destination) return;
    const item = Array.from(images);
    const [recordedItem] = item.splice(event.source.index, 1);
    item.splice(event.destination.index, 0, recordedItem);
    setImages(item);
    console.log(event);
    console.log(item);
  };
  // Effects

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
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props: any) => (
              <Form>
                <div className="flex-container">
                  <h5>Car</h5>
                  <SecondaryButton
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={
                      !(props.isValid && props.dirty) ||
                      additionalFeatureValidation ||
                      imageUploadValidation ||
                      formLoading
                    }
                  >
                    {formLoading ? "Adding..." : "Add"}
                  </SecondaryButton>
                </div>
                <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="carName"
                      label="Car Name"
                      value={props.values.carName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.carName && props.errors.carName}
                    </span>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="carNumber"
                      label="Car Number"
                      value={props.values.carNumber}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.carNumber && props.errors.carNumber}
                    </span>
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="color"
                      label="Color"
                      value={props.values.color}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.color && props.errors.color}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <FormControl fullWidth>
                      <InputLabel id="fueltype-lable">FuelType</InputLabel>
                      <Select
                        labelId="fueltype-lable"
                        id="fueltype-select"
                        error={props.touched.fuelType && props.errors.fuelType}
                        required
                        label="fueltype"
                        name="fuelType"
                        value={props.values.fuelType}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
                        <MenuItem value="petrol">Petrol </MenuItem>
                        <MenuItem value="diesel">Diesel</MenuItem>
                        <MenuItem value="electric">Electric</MenuItem>
                      </Select>
                    </FormControl>
                    <span className="error">
                      {props.touched.fuelType && props.errors.fuelType}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="kmDriven"
                      label="Km Driven"
                      type="number"
                      value={props.values.kmDriven}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.kmDriven && props.errors.kmDriven}
                    </span>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="minPrice"
                      label="Min Price"
                      type="number"
                      value={props.values.minPrice}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.minPrice && props.errors.minPrice}
                    </span>
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="maxPrice"
                      label="Ask Price"
                      type="number"
                      value={props.values.maxPrice}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.maxPrice && props.errors.maxPrice}
                    </span>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="milege"
                      type="number"
                      label="Mileage"
                      value={props.values.milege}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.milege && props.errors.milege}
                    </span>
                  </Grid> */}

                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <FormControl fullWidth>
                      <InputLabel id="ownership-lable">OwnerShip</InputLabel>
                      <Select
                        labelId="ownership-lable"
                        error={
                          props.touched.ownerShip && props.errors.ownerShip
                        }
                        required
                        id="ownership-select"
                        label="ownership"
                        name="ownerShip"
                        value={props.values.ownerShip}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
                        <MenuItem value="1st">1st</MenuItem>
                        <MenuItem value="2nd">2nd</MenuItem>
                        <MenuItem value="3rd">3rd</MenuItem>
                      </Select>
                    </FormControl>
                    <span className="error">
                      {props.touched.ownerShip && props.errors.ownerShip}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        views={["year"]}
                        label="Manufacture Year"
                        value={props.values.manufactureYear}
                        maxDate={new Date()}
                        onChange={(value: any) =>
                          props.setFieldValue("manufactureYear", value)
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
                      {props.touched.manufactureYear &&
                        props.errors.manufactureYear}
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
                        // error={props.touched.carBrand && props.errors.carBrand}
                        required
                        value={props.values.carBrand}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
                        {brandList &&
                          brandList.map((item: any, index: number) => (
                            <MenuItem
                              key={`brand-item-${index}`}
                              value={item?.id}
                            >
                              {item?.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <span className="error">
                      {props.touched.carBrand && props.errors.carBrand}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} className="site-form-field">
                    <StyledTextField
                      name="model"
                      label="Model"
                      value={props.values.model}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                      fullWidth
                    />
                    <span className="error">
                      {props.touched.model && props.errors.model}
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
                        // error={props.touched.carBrand && props.errors.carBrand}
                        required
                        value={props.values.carBodyId}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
                        {carBodyList &&
                          carBodyList.map((item: any, index: number) => (
                            <MenuItem
                              key={`carbody-item-${index}`}
                              value={item?.id}
                            >
                              {item?.bodyType}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <span className="error">
                      {props.touched.carBodyId && props.errors.carBodyId}
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
                <h5>Images</h5>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable
                    droppableId="addImageDragNDrop"
                    direction="horizontal"
                  >
                    {(provided: any) => (
                      <div
                        className="inventory-img-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <div className="upload-file-container">
                          <input
                            className="uploadfile"
                            accept="image/*"
                            type="file"
                            ref={imageUploader}
                            onChange={handleFileInput}
                            multiple
                          />
                          <div className="upload-file-logo">
                            <Image
                              src={UploadIcon}
                              alt="Upload"
                              height={30}
                              width={30}
                            />
                            <p>Browse to upload</p>
                          </div>
                          <div className="select-file">
                            <span>Select a file</span> or drag in form
                          </div>
                        </div>
                        {images &&
                          images.map((url: any, index: number, array: any) => (
                            <Draggable
                              key={`priview-${index}`}
                              draggableId={`draggable-img-${index}`}
                              index={index}
                            >
                              {(provided: any) => (
                                <div
                                  className="img-card-wrapper"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <IconButton
                                    onClick={() => {
                                      DeleteImage(array, index);
                                    }}
                                  >
                                    <Image src={DeleteIcon} alt="Add comment" />
                                  </IconButton>

                                  <Image
                                    src={URL.createObjectURL(url)}
                                    height={150}
                                    width={250}
                                    alt="carImages"
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </section>
  );
}
