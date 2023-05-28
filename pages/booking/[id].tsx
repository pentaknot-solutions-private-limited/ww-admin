import {
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
import React, { useState, useEffect, useContext } from "react";
import {
  CommentDrawerHeader,
  SecondaryButton,
  StyledDrawer,
  StyledTextField,
} from "../../src/components/GlobalElement";
import PlusIcon from "../../public/plusIcon.svg";
import Image from "next/image";
import CommentTabel from "../../src/components/Tables/commentTabel";
import BackArrow from "../../public/backArrow.svg";
import { useRouter } from "next/router";
import { OverviewService } from "../../src/service/overview-service";
import moment from "moment";
import Slider from "react-slick";
import LoadingContext from "../../src/context/loading";
import { CarService } from "../../src/service/cars";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { currencyFormatter } from "../../src/utils/currecyFormatter";

export default function InspectionDetail() {
  // States
  const [commentDrawer, setCommentDrawer] = React.useState(false);
  const [addCommentDrawer, setaddCommentDrawer] = React.useState(false);
  const [bookingData, setBookingData] = useState<any>();
  const [commentList, setCommentList] = useState<any>();
  const [commentError, setCommentError] = useState<any>("");
  const [formLoading, setFormLoading] = useState<any>(false);
  const [allCity, setAllCity] = useState<any>();

  // Variables
  const router = useRouter();
  const { id } = router.query;
  const overviewService = new OverviewService();
  const carService = new CarService();

  const initialValues = {
    status: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    status: Yup.string().required("This field can't be blank"),
    comment: Yup.string().required("This field can't be blank"),
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const toggleOpen = (value: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCommentDrawer(value);
  };
  const toggleAddComment = (value: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setaddCommentDrawer(value);
  };

  // Get Booking data by Id
  const getBookingById = async (payload: any) => {
    setLoading(true);
    try {
      const bookingApiData = await overviewService?.getBookingById(payload);
      if (!bookingApiData.data.error) {
        setBookingData(bookingApiData.data.data);
        setLoading(false);
      } else {
        console.log(bookingApiData.data.error);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  // Get All  Comment
  const getAllComment = async (bookingId: any) => {
    setLoading(true);
    try {
      const allComment = await carService.getAllCommentById(bookingId);
      if (!allComment.data.error) {
        setCommentList(allComment.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const addNewComment = async (values: any, { resetForm }: any) => {
    setFormLoading(true);
    setCommentError("");
    const payload = {
      bookTrialId: id,
      comment: values.comment,
      status: values.status,
    };
    try {
      const addCommentData = await carService.addComment(payload);
      if (!addCommentData.data.error) {
        resetForm();
        refreshApi();
        setFormLoading(false);
      } else {
        setCommentError(addCommentData.data.error);
        setFormLoading(false);
      }
    } catch (error: any) {
      let errorResponse = JSON.parse(error?.request?.response);
      setCommentError(errorResponse?.message);
      setFormLoading(false);
    }
  };

  const getCityList = async () => {
    setLoading(true);
    try {
      const cityListApiCall = await carService.getCityList();
      if (!cityListApiCall.data.error) {
        setAllCity(cityListApiCall.data.data);
        setLoading(false);
      } else {
        console.log(cityListApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const refreshApi = () => {
    if (id) {
      setaddCommentDrawer(false);
      getBookingById(id);
      getAllComment(id);
    }
  };
  // Effects
  useEffect(() => {
    if (id) {
      getBookingById(id);
      getAllComment(id);
    }
  }, [id]);

  useEffect(() => {
    getCityList();
  }, []);

  return (
    <section className="inspection-detail ">
      <Container maxWidth="lg">
        <h3 className="page-subtitle">Dashboard</h3>
        <div className="status-wrapper">
          <div className="flex-container">
            {/* <Button
              variant="outlined"
              sx={{ color: "#2E5AAC", borderColor: "#2E5AAC" }}
            >
              Avaiable
            </Button> */}
            {bookingData && (
              <Button
                variant="outlined"
                className={
                  bookingData[0]?.status == "Available"
                    ? "available"
                    : bookingData[0]?.status == "Sold"
                    ? "sold"
                    : bookingData[0]?.status == "Negotiation"
                    ? "negotiation"
                    : bookingData[0]?.status == "Evaluating"
                    ? "evaluating"
                    : "rejected"
                }
              >
                {bookingData[0]?.status}
              </Button>
            )}

            <SecondaryButton
              variant="contained"
              color="secondary"
              onClick={toggleOpen(true)}
            >
              Comments
            </SecondaryButton>
          </div>
        </div>

        {bookingData && (
          <div className="site-card">
            <h5>Booking</h5>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={3}>
                <div className="custom-readonly">
                  <div className="custom-readonly-header">Offer Price</div>
                  <div className="custom-readonly-content secondary-color-theme">
                    {currencyFormatter(bookingData[0]?.requestPrice)}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className="custom-readonly">
                  <div className="custom-readonly-header">Trial Date</div>
                  <div className="custom-readonly-content">
                    {moment(bookingData[0]?.bookOnDateTime).format(
                      "MMMM Do YYYY"
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
        {bookingData && (
          <div className="site-card">
            <h5>Customer</h5>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="First Name"
                  defaultValue={bookingData[0]?.User_Detail?.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {bookingData && bookingData[0]?.User_Detail?.lastName && (
                <Grid item xs={12} sm={6} md={3}>
                  <StyledTextField
                    variant="outlined"
                    label="Last Name"
                    defaultValue={bookingData[0]?.User_Detail?.lastName}
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Email"
                  defaultValue={bookingData[0]?.User_Detail?.emailId}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Mobile"
                  defaultValue={bookingData[0]?.User_Detail?.phoneNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <StyledTextField
                  multiline
                  label="Address"
                  defaultValue={bookingData[0]?.Address1}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} className="site-form-field">
                {/* <FormControl fullWidth>
                  <InputLabel id="city-lable">City</InputLabel>
                  <Select
                    labelId="city-lable"
                    required
                    id="city-select"
                    label="city"
                    value={bookingData[0]?.City._id}
                    name="city"
                    inputProps={{
                      readOnly: true,
                    }}
                  >
                    {allCity &&
                      allCity.map((item: any, index: number) => (
                        <MenuItem key={`city-name-${index}`} value={item.id}>
                          {item?.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl> */}
                <StyledTextField
                  multiline
                  label="city"
                  defaultValue={bookingData[0]?.cityId}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Pincode"
                  defaultValue={bookingData[0]?.pincode}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        )}
        {bookingData && (
          <div className="site-card position-relative">
            <div className="flex-container">
              <h5>Car</h5>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Car"
                  defaultValue={bookingData[0]?.Car_Detail?.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Car Number"
                  defaultValue={bookingData[0]?.Car_Detail?.carNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Brand"
                  defaultValue={bookingData[0]?.Car_Make?.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Model"
                  defaultValue={bookingData[0]?.Car_Detail?.modelName}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Car Color"
                  defaultValue={bookingData[0]?.Car_Detail?.color}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="FuelType"
                  defaultValue={bookingData[0]?.Car_Detail?.fuelType}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="KM Driven"
                  defaultValue={bookingData[0]?.Car_Detail?.kmDriven}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Minimum Value"
                  defaultValue={bookingData[0]?.Car_Detail?.minPrice}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label=""
                  defaultValue={bookingData[0]?.Car_Detail?.maxPrice}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Mileage"
                  defaultValue={bookingData[0]?.Car_Detail?.milege}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Ownership"
                  defaultValue={bookingData[0]?.Car_Detail?.ownerShip}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Manufacture Year"
                  defaultValue={bookingData[0]?.Car_Detail?.year}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Booked Time"
                  defaultValue={moment(bookingData[0]?.bookOnDateTime).format(
                    "MMMM Do YYYY, h:00 a"
                  )}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="Offer Price"
                  defaultValue={bookingData[0]?.requestPrice}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid> */}
            </Grid>
            {bookingData[0].Car_Images && (
              <>
                <h5>Images</h5>
                <div className="inventory-img-container">
                  {bookingData[0].Car_Images &&
                    bookingData[0].Car_Images.map(
                      (item: any, index: number, array: any) => (
                        <div
                          key={`priview-car-${index}`}
                          className="img-card-wrapper"
                        >
                          <img
                            src={item.imageLink}
                            height={150}
                            width={250}
                            alt={item.title}
                          />
                        </div>
                      )
                    )}
                  {/* {images &&
                      images.map((url: any, index: number, array: any) => (
                        <div
                          key={`priview-${index}`}
                          className="img-card-wrapper"
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
                      ))} */}
                </div>
              </>
            )}
          </div>
        )}

        <StyledDrawer
          anchor="right"
          open={commentDrawer}
          onClose={toggleOpen(false)}
        >
          <CommentDrawerHeader>
            <div className="drawer-header-with-icon">
              <IconButton onClick={toggleOpen(false)}>
                <Image src={BackArrow} alt="Add comment" />
              </IconButton>
              <h5>Comments</h5>
            </div>
            <IconButton onClick={toggleAddComment(true)}>
              <Image src={PlusIcon} alt="Add comment" />
            </IconButton>
          </CommentDrawerHeader>
          {commentList && commentList?.length > 0 ? (
            <CommentTabel data={commentList} />
          ) : (
            <p className="no-comment">No Comment Available</p>
          )}
        </StyledDrawer>
        <StyledDrawer anchor="right" open={addCommentDrawer}>
          <CommentDrawerHeader>
            <div className="drawer-header-with-icon">
              <IconButton onClick={toggleAddComment(false)}>
                <Image src={BackArrow} alt="Add comment" />
              </IconButton>
              <h5>New Comment</h5>
            </div>
          </CommentDrawerHeader>
          <div className="add-comment">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              onSubmit={addNewComment}
              validationSchema={validationSchema}
            >
              {(props: any) => (
                <Form>
                  <div
                    className="site-form-field"
                    style={{ marginBottom: "15px" }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="status-lable">Status</InputLabel>
                      <Select
                        labelId="status-lable"
                        id="status-select"
                        error={props.touched.fuelType && props.errors.fuelType}
                        required
                        label="status"
                        name="status"
                        value={props.values.status}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      >
                        <MenuItem value="Sold">Sold </MenuItem>
                        <MenuItem value="Negotiation">Negotiation</MenuItem>
                        <MenuItem value="Evaluating">Evaluating</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                        <MenuItem value="Available">Available</MenuItem>
                      </Select>
                    </FormControl>
                    <span className="error">
                      {props.touched.status && props.errors.status}
                    </span>
                  </div>
                  <StyledTextField
                    name="comment"
                    label="Remark"
                    value={props.values.comment}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    fullWidth
                  />
                  <span className="error">
                    {props.touched.comment && props.errors.comment}
                  </span>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!(props.isValid && props.dirty) || formLoading}
                    sx={{ margin: "0 auto", display: "table" }}
                  >
                    {formLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </Form>
              )}
            </Formik>

            {commentError && <div className="error">{commentError}</div>}
          </div>
        </StyledDrawer>
      </Container>
    </section>
  );
}
