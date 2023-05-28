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
import { useRouter } from "next/router";
import { OverviewService } from "../../src/service/overview-service";
import LoadingContext from "../../src/context/loading";

export default function InspectionDetail() {
  // States
  const [commentDrawer, setCommentDrawer] = React.useState(false);
  const [addCommentDrawer, setaddCommentDrawer] = React.useState(false);
  const [queryData, setQueryData] = useState<any>();

  // Variables
  const router = useRouter();
  const { id } = router.query;
  const overviewService = new OverviewService();

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

  const _getQueryById = async (payload: any) => {
    setLoading(true);
    try {
      const queryByIdApiCall = await overviewService.getQueryById(payload);

      if (!queryByIdApiCall.data.error) {
        setQueryData(queryByIdApiCall.data.data);
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
      _getQueryById(id);
    }
  }, [id]);

  return (
    <section className="inspection-detail">
      <Container maxWidth="lg">
        <h3 className="page-subtitle">Dashboard</h3>
        {queryData && (
          <div className="site-card">
            <h5>Customer</h5>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="First Name"
                  defaultValue={queryData?.firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {queryData?.lastName && (
                  <StyledTextField
                    label="Last Name"
                    defaultValue={queryData?.lastName}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StyledTextField
                  label="Email"
                  defaultValue={queryData?.emailId}
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
                  defaultValue={queryData?.phoneNumber}
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
                  defaultValue={queryData?.cityName}
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
                  label="Message"
                  defaultValue={queryData?.query}
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
