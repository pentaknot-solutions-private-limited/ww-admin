import { Button, Container, Grid, IconButton, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
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
import { OverviewService } from "../../src/service/overview-service";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import LoadingContext from "../../src/context/loading";

export default function InspectionDetail() {
  // States
  const [commentDrawer, setCommentDrawer] = React.useState(false);
  const [addCommentDrawer, setaddCommentDrawer] = React.useState(false);
  const [inspectionData, setInspectionData] = useState<any>();

  // Variables
  const router = useRouter();
  const { id } = router.query;
  const overViewService = new OverviewService();

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

  const _getInspectionById = async (payload: any) => {
    setLoading(true);
    try {
      const getInspectionByIdApiCall = await overViewService.getInspectionsById(
        payload
      );
      if (!getInspectionByIdApiCall.data.error) {
        setInspectionData(getInspectionByIdApiCall.data.data);
        setLoading(false);
      } else {
        console.log(getInspectionByIdApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    if (id) {
      _getInspectionById(id);
    }
  }, [id]);

  return (
    <section className="inspection-detail">
      <Container maxWidth="lg">
        <h3 className="page-subtitle">Dashboard</h3>
        <div className="flex-container">
          {/* <h4>#InspectionID</h4> */}
          {/* <SecondaryButton
                        variant="contained"
                        color="secondary"
                        onClick={toggleOpen(true)}
                    >
                        Comments
                    </SecondaryButton> */}
        </div>
        {/* <div className="status-wrapper">
                    <Button variant="outlined" sx={{ color: "#2E5AAC", borderColor: "#2E5AAC" }}>Avaiable</Button>
                </div> */}
        {inspectionData && (
          <div className="site-card">
            <h5>Customer</h5>
            {/* {JSON.stringify(inspectionData[0]?.User?.firstName)} */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  variant="outlined"
                  label="First Name"
                  defaultValue={inspectionData[0]?.User?.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                />
              </Grid>
              {inspectionData && inspectionData[0]?.User?.lastName && (
                <Grid item xs={12} sm={6} md={3}>
                  <StyledTextField
                    variant="outlined"
                    label="Last Name"
                    defaultValue={inspectionData[0]?.User?.lastName}
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
                  defaultValue={inspectionData[0]?.User?.emailId}
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
                  defaultValue={inspectionData[0]?.User?.phoneNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="City"
                  defaultValue={inspectionData[0]?.cityName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Pincode"
                  defaultValue={inspectionData[0]?.pincode}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        )}
        {inspectionData && (
          <div className="site-card">
            <div className="flex-container">
              <h5>Car</h5>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Brand"
                  defaultValue={
                    inspectionData[0]?.Brand?._id == "626e38f26e4527d955eabe65"
                      ? inspectionData[0]?.otherName
                      : inspectionData[0]?.Brand.name
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Registration State"
                  defaultValue={inspectionData[0]?.Registered_State[0]?.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Manufacture Year"
                  defaultValue={inspectionData[0]?.year}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Model"
                  defaultValue={inspectionData[0]?.modelId}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Ownership"
                  defaultValue={inspectionData[0]?.ownerShip}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Km Travelled"
                  defaultValue={inspectionData[0]?.kmDriven}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Fuel Type"
                  defaultValue={inspectionData[0]?.fuelType}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Mileage"
                  defaultValue={inspectionData[0]?.milege}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        )}

        {/* <StyledDrawer
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
          <CommentTabel />
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
            <StyledTextField
              placeholder="Status"
              variant="outlined"
              fullWidth
            />
            <StyledTextField
              placeholder="Remakes"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0 auto", display: "table" }}
            >
              Save Changes
            </Button>
          </div>
        </StyledDrawer> */}
      </Container>
    </section>
  );
}
