/* eslint-disable @next/next/no-img-element */
import {
  Alert,
  Button,
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
import Slider from "react-slick";
import CarImage from "../../public/carImage.png";
import DeleteIcon from "../../public/deleteIcon.svg";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { InventoryService } from "../../src/service/inventory-service";
import { useRouter } from "next/router";
import UploadIcon from "../../public/upload-icon.svg";
import LoadingContext from "../../src/context/loading";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CarService } from "../../src/service/cars";
import moment from "moment";
import { userJwtData } from "../../src/utils/jwt";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

export default function InspectionDetail() {
  // States
  const [edit, setEdit] = useState(true);
  const [inventoryData, setInventoryData] = useState<any>();
  const [additionalFeatureValidation, setAdditionalFeatureValidation] =
    useState<boolean>(true);
  const [imageUploadValidation, setImageUploadValidation] =
    useState<boolean>(true);
  const [brandList, setBrandList] = useState<any>();
  const [carBodyList, setCarBodyList] = useState<any>();
  const [siteError, setSiteError] = useState<any>("");

  // Ck Editor
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [data, setData] = useState<any>("");

  // image states
  const [carImage, setCarImages] = useState<any[]>();

  // Variables
  const router = useRouter();
  const { id } = router.query;
  const inventoryService = new InventoryService();
  const carService = new CarService();

  // Ref
  const imageUploader = useRef<any>();

  // Initial Values of the form
  const initialValues = {
    carName: inventoryData && inventoryData[0]?.Car_Detail.name,
    carNumber: inventoryData && inventoryData[0]?.Car_Detail.carNumber,
    color: inventoryData && inventoryData[0]?.Car_Detail.color,
    fuelType: inventoryData && inventoryData[0]?.Car_Detail.fuelType,
    kmDriven: inventoryData && inventoryData[0]?.Car_Detail.kmDriven,
    minPrice: inventoryData && inventoryData[0]?.Car_Detail.minPrice,
    maxPrice: inventoryData && inventoryData[0]?.Car_Detail.maxPrice,
    milege: inventoryData && inventoryData[0]?.Car_Detail.milege,
    model: inventoryData && inventoryData[0]?.Car_Detail.modelName,
    carStatus: inventoryData && inventoryData[0]?.Car_Detail.carStatus,
    ownerShip: inventoryData && inventoryData[0]?.Car_Detail.ownerShip,
    manufactureYear: inventoryData && inventoryData[0]?.Car_Detail.year,
    carBrand: inventoryData && inventoryData[0]?.Car_Make._id,
    carBodyId: inventoryData && inventoryData[0]?.Car_Body._id,
  };

  const user: any = userJwtData();

  // Validation schema of the form

  const validationSchema = Yup.object({
    carName: Yup.string().required("This field can't be blank"),
    carNumber: Yup.string(),
    color: Yup.string().required("This field can't be blank"),
    fuelType: Yup.string().required("This field can't be blank"),
    kmDriven: Yup.string().required("This field can't be blank"),
    minPrice: Yup.string().required("This field can't be blank"),
    maxPrice: Yup.string().required("This field can't be blank"),
    milege: Yup.string().required("This field can't be blank"),
    ownerShip: Yup.string().required("This field can't be blank"),
    manufactureYear: Yup.string().required("This field can't be blank"),
    carBrand: Yup.string().required("This field can't be blank"),
    carBodyId: Yup.string().required("This field can't be blank"),
  });

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const ToggelEdit = () => {
    setEdit(!edit);
  };

  // Form handle Submit
  const handleSubmit = (values: any) => {
    if (edit) {
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
          carStatus: values?.carStatus,
          userId: user?.id,
          roleId: "617adebb2c17ccbd23fe474f",
        };
      }
      carEquipmentsUpdate(
        inventoryData && inventoryData[0]?.Car_Equipments[0]._id,
        data
      );
      updateCarById(inventoryData && inventoryData[0]?.Car_Detail._id, payload);
      carImage?.map((item: any) => {
        updateImageOrder(item?._id, item?.imageOrder);
      });

      // carImage?.map((imageItem:any)=>(
      //   imageItem.
      // ))
    }
  };

  // Get Car detail by Id
  const getInventoryById = async (payload: any) => {
    setLoading(true);
    try {
      const inventoryByIdApiCall = await inventoryService.getInventoryById(
        payload
      );

      if (!inventoryByIdApiCall.data.error) {
        setInventoryData(inventoryByIdApiCall.data.data);
        setCarImages(inventoryByIdApiCall.data.data[0].Car_Images);
        // setData(
        //   inventoryByIdApiCall.data.data[0].Car_Equipments[0].equipmentName
        // );

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // Update the car by Id
  const updateCarById = async (carId: any, payload: any) => {
    setSiteError("");
    setLoading(true);
    try {
      const updateCar = await carService.updateCarInventory(carId, payload);
      if (!updateCar.data.error) {
        setLoading(false);
        refreshApi();
        setSiteError("");
      } else {
        setLoading(false);
        setSiteError(updateCar.data.error);
      }
    } catch (error: any) {
      setLoading(false);
      let errorResponse = JSON.parse(error?.request?.response);
      setSiteError(errorResponse?.message);
    }
  };

  // File Input handle function
  const handleFileInput = (e: any) => {
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
    const formData: any = new FormData();
    if (id) {
      formData.append(`carId`, id);
      for (let i = 0; i < targetFilesObject.length; i++) {
        formData.append(`image`, targetFilesObject[i]);
      }
      updateCarImageById(formData);
    }
  };

  // Get All brand list
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

  // Get All CarBody Type
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

  // Update the carImage by Id
  const updateCarImageById = async (payload: any) => {
    setLoading(true);
    try {
      const updateImage = await carService.updateCarImageById(payload);
      if (!updateImage.data.error) {
        setLoading(false);
        refreshApi();
      }
    } catch (error) {
      setLoading(false);
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
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const carEquipmentsUpdate = async (id: any, payload: any) => {
    setLoading(true);
    try {
      const payloadData = {
        equipmentName: payload,
      };
      const equipmentUpdate = await carService.updateCarEquiment(
        id,
        payloadData
      );
    } catch (error) {}
  };
  // RefreshApi
  const refreshApi = () => {
    if (id) {
      getInventoryById(id);
    }
  };

  const handleDragEnd = (event: any) => {
    if (!event.destination) return;
    let item: any = Array?.from(carImage || "");
    const [recordedItem] = item.splice(event.source.index, 1);
    item.splice(event.destination.index, 0, recordedItem);
    item = item.map((imageItem: any, index: number) => {
      imageItem.imageOrder = index;
      return imageItem;
    });
    setCarImages(item);
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
      } else {
        console.log(updateOrder?.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Effects
  useEffect(() => {
    if (id) {
      getInventoryById(id);
    }
  }, [id]);

  useEffect(() => {
    if (inventoryData) {
      setData(inventoryData[0].Car_Equipments[0].equipmentName);
    }
  }, [inventoryData]);

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
        {/* {JSON.stringify(data)} */}
        <div className="site-card">
          {inventoryData && (
            <Formik
              enableReinitialize
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
                      onClick={ToggelEdit}
                    >
                      {edit ? "Edit" : "Save"}
                    </SecondaryButton>
                  </div>
                  <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="carName"
                        label="Car Name"
                        value={props.values.carName}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="color"
                        label="Color"
                        value={props.values.color}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="fueltype-lable">FuelType</InputLabel>
                        <Select
                          labelId="fueltype-lable"
                          id="fueltype-select"
                          error={
                            props.touched.fuelType && props.errors.fuelType
                          }
                          required
                          label="fueltype"
                          name="fuelType"
                          value={props.values.fuelType}
                          onChange={props.handleChange}
                          inputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
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
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="kmDriven"
                        label="Km Driven"
                        type="number"
                        value={props.values.kmDriven}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="minPrice"
                        label="Min Price"
                        type="number"
                        value={props.values.minPrice}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="maxPrice"
                        label="Ask Price"
                        type="number"
                        value={props.values.maxPrice}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="milege"
                        type="number"
                        label="Milege"
                        value={props.values.milege}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid> */}

                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
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
                          inputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
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
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          views={["year"]}
                          label="Manufacture Year"
                          value={props.values.manufactureYear}
                          InputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
                          maxDate={new Date()}
                          onChange={(value: any) =>
                            props.setFieldValue("manufactureYear", value)
                          }
                          renderInput={(params: any) => (
                            <TextField
                              name="manufactureYear"
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
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="brand-lable">Brand</InputLabel>
                        <Select
                          labelId="brand-lable"
                          id="brand-select"
                          label="brand"
                          name="carBrand"
                          required
                          value={props.values.carBrand}
                          inputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
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
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="model"
                        label="Model"
                        value={props.values.model}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="carBody-lable">Car Body</InputLabel>
                        <Select
                          labelId="carBody-lable"
                          id="carBody-select"
                          label="Car Body"
                          name="carBodyId"
                          required
                          value={props.values.carBodyId}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          inputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
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
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      className="site-form-field"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="carStatus-lable">Car Status</InputLabel>
                        <Select
                          labelId="carStatus-lable"
                          id="carStatus-select"
                          label="Car Status"
                          name="carStatus"
                          required
                          value={props.values.carStatus}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          inputProps={{
                            readOnly: edit,
                          }}
                          disabled={edit}
                        >
                          <MenuItem value={"SOLD"}>SOLD</MenuItem>
                          <MenuItem value={"AVAILABLE"}>AVAILABLE</MenuItem>
                        </Select>
                      </FormControl>
                      <span className="error">
                        {props.touched.carBodyId && props.errors.carBodyId}
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField
                        name="carNumber"
                        label="Car Number"
                        value={props.values.carNumber}
                        onChange={props.handleChange}
                        InputProps={{
                          readOnly: edit,
                        }}
                        disabled={edit}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <h5>Additional Feature</h5>
                  <div className="ck-editor">
                    {inventoryData ? (
                      <CKEditor
                        editor={ClassicEditor}
                        data={inventoryData[0].Car_Equipments[0].equipmentName}
                        // data={data}
                        id="inputText"
                        disabled={edit}
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
                      droppableId="updateCarImage"
                      isDropDisabled={edit}
                      direction="horizontal"
                    >
                      {(providedItem: any) => (
                        <div
                          className="inventory-img-container"
                          {...providedItem.droppableProps}
                          ref={providedItem.innerRef}
                        >
                          {!edit && (
                            <div className="img-card-wrapper">
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
                            </div>
                          )}

                          {carImage &&
                            carImage
                              .sort(function (a: any, b: any) {
                                return a.imageOrder - b.imageOrder;
                              })
                              .map((item: any, index: number, array: any) => (
                                <Draggable
                                  key={`priview-car-${index}`}
                                  draggableId={`update-car-image-${index}`}
                                  isDragDisabled={edit}
                                  index={index}
                                >
                                  {(providedItem: any) => (
                                    <div
                                      {...providedItem.draggableProps}
                                      {...providedItem.dragHandleProps}
                                      ref={providedItem.innerRef}
                                      className="img-card-wrapper"
                                    >
                                      {!edit && (
                                        <IconButton
                                          onClick={() => {
                                            deleteImageById(item._id);
                                          }}
                                        >
                                          <Image
                                            src={DeleteIcon}
                                            alt="delete"
                                          />
                                        </IconButton>
                                      )}

                                      <img
                                        src={item.imageLink}
                                        height={150}
                                        width={250}
                                        alt={item.title}
                                      />
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </Container>
    </section>
  );
}
