import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserDetailTabel from "../src/components/Tables";
import { AdminService } from "../src/service/admin";
import { userJwtData } from "../src/utils/jwt";

export default function Users() {
  // States
  const [userList, setUserList] = useState<any>();
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

  const getAllUserList = async () => {
    try {
      const getUserListApi = await adminService.getAllUserList();
      if (!getUserListApi.data.error) {
        setUserList(getUserListApi.data.data);
        console.log(getUserListApi.data.data);
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
          <h3 className="page-subtitle">Users</h3>
          <h5 className="admin-name">{userData && userData?.firstName}</h5>
        </div>
        {userList && userList.length > 0 ? (
          <UserDetailTabel
            // userDatas={InventoryData}
            disableclickable={true}
            userDatas={userList}
            headCells={InventoryHeadCell}
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
