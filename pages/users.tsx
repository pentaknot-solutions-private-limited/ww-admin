import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserDetailTabel from "../src/components/Tables";
import { AdminService } from "../src/service/admin";
import { userJwtData } from "../src/utils/jwt";
import { ExcelService } from "../src/utils/ExcelService";
import moment from "moment";

export default function Users() {
  // States
  const [userList, setUserList] = useState<any[]>([]);
  // variables
  const userData: any = userJwtData();
  const adminService = new AdminService();

  const InventoryHeadCell = [
    { id: "firstName", name: "Name", disabledSorting: "false" },
    { id: "phoneNumber", name: "Contact No", disabledSorting: "true" },
    { id: "emailId", name: "Email", disabledSorting: "true" },
    { id: "createdAt", name: "Register Date", disabledSorting: "true" },
  ];
  // Functions
  const downloadFlat = () => {
    let flatRecords: any[] = [];
    flatRecords = userList?.map((item) => ({
      name: `${item?.firstName} ${item?.lastName}`,
      contactNo: item?.phoneNumber,
      email: item?.emailId,
      registerData: moment(item?.createdAt).format("MM/DD/YYYY, h:mm:ss a"),
    }));

    let excelHeader = ["Name", "Contact No.", "Email", "Register Date"];
    let excelAoA = [];
    excelAoA.push(excelHeader);
    flatRecords.forEach((row) => {
      excelAoA.push([
        row["name"],
        row["contactNo"],
        row["email"],
        row["registerData"],
      ]);
    });
    ExcelService.exportAOAExcelFile(
      excelAoA,
      `User_${new Date().getMilliseconds()}`,
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
  const getAllUserList = async () => {
    try {
      const getUserListApi = await adminService.getAllUserList();
      if (!getUserListApi.data.error) {
        setUserList(getUserListApi.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllUserList();
  }, []);

  return (
    <Container maxWidth="lg">
      <section className="section-status">
        <div className="flex-container">
          <h3 className="page-subtitle">Users({userList?.length})</h3>
          <h5 className="admin-name">{userData && userData?.firstName}</h5>
        </div>
        {userList && userList.length > 0 ? (
          <UserDetailTabel
            // userDatas={InventoryData}
            disableclickable={true}
            userDatas={userList}
            headCells={InventoryHeadCell}
            isPagination
            gridOptions={[
              {
                type: "button",
                label: "Export Users",
                operation: "export-excel",
              },
            ]}
            onGridHeaderBtnClicked={onGridHeaderBtnClicked}
          />
        ) : (
          <div className="no-data-available">
            <span>No Data Available</span>
          </div>
        )}
        {/* <UserDetailTabel
            parentPage="inventory"
            // userDatas={InventoryData}
            userDatas={}
            headCells={InventoryHeadCell}
          /> */}
      </section>
    </Container>
  );
}
