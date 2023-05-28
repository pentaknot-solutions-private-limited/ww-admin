import type { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import StatusCard from "../src/components/cards/statsCard";
import InspectionLogo from "../public/inspectionLogo.svg";
import BookingLogo from "../public/bookingLogo.svg";
import QueryLogo from "../public/queryLogo.svg";
import { Container, Grid, Tab, Tabs } from "@mui/material";
import { TabPanel } from "../src/components/Tabs";
import UserDetailTabel from "../src/components/Tables";
import {
  Inspection,
  Bookings,
  Query,
} from "../src/components/Tables/dummyData";
import { OverviewService } from "../src/service/overview-service";
import { userJwtData } from "../src/utils/jwt";
import LoadingContext from "../src/context/loading";
import { ExcelService } from "../src/utils/ExcelService";
import moment from "moment";

const InspectionheadCells = [
  { id: "createdAt", name: "Date" },
  { id: "userName", name: "Name" },
  { id: "userContactNo", name: "Contact No" },
  { id: "userEmail", name: "Email" },
  { id: "cityName", name: "City" },
  { id: "brand", name: "Brand" },
];

const BookingheadCells = [
  { id: "createdAt", name: "Date" },
  { id: "carName", name: "Car" },
  { id: "userName", name: "Name" },
  {
    id: "bookOnDateTime",
    name: "Booking Time",
    format: "MMM Do YYYY, h:mm a",
  },
  { id: "requestPrice", name: "Offer Price" },
  { id: "status", name: "Status" },
];
const QueryheadCells = [
  { id: "createdAt", name: "Date" },
  { id: "userName", name: "Name" },
  { id: "emailId", name: "Email" },
  { id: "phoneNumber", name: "Contact No." },
  { id: "query", name: "Message" },
  { id: "cityName", name: "City" },
];
const ContactUsLeadsHeadCells = [
  { id: "createdAt", name: "Date" },
  { id: "name", name: "Name" },
  { id: "phoneNumber", name: "Contact No." },
];

const Home: NextPage = () => {
  // States
  const [value, setValue] = React.useState(0);
  const [dataCount, setDataCount] = useState<any>();
  const [allQuerys, setAllQueries] = useState<any[]>([]);
  const [allInspection, setAllInspection] = useState<any[]>([]);
  const [allBookings, setAllBookings] = useState<any[]>([]);
  const [allContactLeads, setAllContactLeads] = useState<any[]>([]);

  // Variables
  const overviewService = new OverviewService();
  const userData: any = userJwtData();
  const emptyData: any[] = [];

  // Context
  const { loading, setLoading } = useContext(LoadingContext);

  // Functions
  const downloadFlat = () => {
    let flatRecords: any[] = [];
    flatRecords = allContactLeads?.map((item) => ({
      name: item?.name,
      contactNo: item?.phoneNumber,
      registerData: moment(item?.createdAt).format("MM/DD/YYYY, h:mm:ss a"),
    }));

    let excelHeader = ["Name", "Contact No.", "Register Date"];
    let excelAoA = [];
    excelAoA.push(excelHeader);
    flatRecords.forEach((row) => {
      excelAoA.push([row["name"], row["contactNo"], row["registerData"]]);
    });
    ExcelService.exportAOAExcelFile(
      excelAoA,
      `Contact_Us_Leads_${new Date().getMilliseconds()}`,
      "data"
    );
  };
  const onGridHeaderBtnClicked = (type: any) => {
    switch (type) {
      case "export-excel":
        downloadFlat();
        break;

      default:
        break;
    }
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const _getDataCount = async () => {
    setLoading(true);
    try {
      const DataCountApiCall = await overviewService.getDataCount();
      if (!DataCountApiCall.data.error) {
        setDataCount(DataCountApiCall.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const _getAllBookings = async () => {
    setLoading(true);
    try {
      const bookingDataApiCall = await overviewService.getBookings();
      if (!bookingDataApiCall.data.error) {
        let data = bookingDataApiCall?.data?.data?.map((item: any) => ({
          ...item,
          carName: item?.Car_Detail?.name,
          userName: `${item?.User?.firstName} ${item?.User?.lastName}`,
          userContactNo: item?.User?.phoneNumber,
          userEmail: item?.User?.emailId,
          brand: item?.Brand?.name,
        }));
        setAllBookings(data);
        setLoading(false);
      } else {
        console.log(bookingDataApiCall.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const _getAllInspections = async () => {
    setLoading(true);
    try {
      const getAllInspections = await overviewService.getInspections();

      if (!getAllInspections.data.error) {
        let data = getAllInspections?.data?.data?.map((item: any) => ({
          ...item,
          userName: `${item?.User?.firstName} ${item?.User?.lastName}`,
          userContactNo: item?.User?.phoneNumber,
          userEmail: item?.User?.emailId,
          brand: item?.Brand?.name,
        }));
        setAllInspection(data);
        setLoading(false);
      } else {
        console.log(getAllInspections.data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const _getAllQuerys = async () => {
    setLoading(true);

    try {
      const queryDataApiCall = await overviewService.getQuerys();
      if (!queryDataApiCall.data.error) {
        let data = queryDataApiCall?.data?.data?.map((item: any) => ({
          ...item,
          userName: item?.name
            ? item?.name
            : `${item?.firstName} ${item?.lastName}`,
        }));
        setAllQueries(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const _getAllContactUsLeads = async () => {
    setLoading(true);

    try {
      const contactUsLeadsDataApiCall =
        await overviewService.getContactUsLeads();
      if (!contactUsLeadsDataApiCall.data.error) {
        setAllContactLeads(contactUsLeadsDataApiCall?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Effects

  useEffect(() => {
    _getDataCount();
    _getAllBookings();
    _getAllQuerys();
    _getAllInspections();
    _getAllContactUsLeads();
  }, []);

  return (
    <Container maxWidth="lg">
      <section className="section-status">
        <div className="flex-container">
          <h3 className="page-subtitle">Overview</h3>
          <h5 className="admin-name">{userData && userData?.firstName}</h5>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <StatusCard
              color="#d95f18"
              backgroundColor="rgba(217, 95, 24, 0.2)"
              imgSrc={InspectionLogo}
              number={(allInspection && allInspection.length) || "-"}
              name="Active Inspections"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <StatusCard
              color="#AD2D1E"
              backgroundColor="rgba(173, 45, 30, 0.2)"
              imgSrc={BookingLogo}
              number={(allBookings && allBookings.length) || "-"}
              name="Active Bookings"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <StatusCard
              color="#344ED1"
              backgroundColor="rgba(52, 78, 209, 0.2)"
              imgSrc={QueryLogo}
              number={(allQuerys && allQuerys?.length) || "-"}
              name="Active Query"
            />
          </Grid>
        </Grid>
      </section>
      {allInspection && allQuerys && allBookings && (
        <section className="section-data">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="dashboard tabs"
          >
            <Tab label="Inspection" />
            <Tab label="Bookings" />
            <Tab label="Query" />
            <Tab label="Contact Us Leads" />
          </Tabs>
          <div className="site-tabel">
            <TabPanel value={value} index={0}>
              {allInspection.length > 0 ? (
                <UserDetailTabel
                  parentPage="inspection"
                  // userDatas={Inspection}
                  userDatas={allInspection && allInspection}
                  headCells={InspectionheadCells}
                />
              ) : (
                <div className="no-data-available">
                  <span>No Data Available</span>
                </div>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {allBookings.length > 0 ? (
                <UserDetailTabel
                  parentPage="booking"
                  // userDatas={Bookings}
                  userDatas={allBookings && allBookings}
                  headCells={BookingheadCells}
                />
              ) : (
                <div className="no-data-available">
                  <span>No Data Available</span>
                </div>
              )}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {allQuerys.length > 0 ? (
                <UserDetailTabel
                  parentPage="query"
                  userDatas={allQuerys && allQuerys}
                  headCells={QueryheadCells}
                />
              ) : (
                <div className="no-data-available">
                  <span>No Data Available</span>
                </div>
              )}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {allQuerys.length > 0 ? (
                <UserDetailTabel
                  gridOptions={[
                    {
                      type: "button",
                      label: "Export Leads",
                      operation: "export-excel",
                    },
                  ]}
                  disableclickable={true}
                  onGridHeaderBtnClicked={onGridHeaderBtnClicked}
                  userDatas={allContactLeads && allContactLeads}
                  headCells={ContactUsLeadsHeadCells}
                />
              ) : (
                <div className="no-data-available">
                  <span>No Data Available</span>
                </div>
              )}
            </TabPanel>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Home;
