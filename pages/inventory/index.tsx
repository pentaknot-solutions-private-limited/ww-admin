import { Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { SecondaryButton } from "../../src/components/GlobalElement";
import UserDetailTabel from "../../src/components/Tables";
import LoadingContext from "../../src/context/loading";
import RefreshAPiContext from "../../src/context/refreshApi";
import { CarService } from "../../src/service/cars";
// import { InventoryData } from "../../src/components/Tables/dummyData";
import { InventoryService } from "../../src/service/inventory-service";

const InventoryHeadCell = [
  {
    id: "createdAt",
    name: "Date",
    disabledSorting: "true",
  },
  { id: "carImage", name: "Image", disabledSorting: "true" },
  { id: "carName", name: "Title", disabledSorting: "true" },
  // { id: "carNumber", name: "Car No." },
  // { id: "milege", name: "Milege", disabledSorting: "true" },
  { id: "ownerShip", name: "Owner Ship", disabledSorting: "true" },
  { id: "kmDriven", name: "KM Driven", disabledSorting: "true" },
  { id: "year", name: "Year", disabledSorting: "true" },
  {
    id: "delete",
    name: "Delete",
    disabledSorting: "true",
    action: "deleteInventoryCar",
  },
  // { id: "address", name: "Address", disabledSorting: 'true' },
  // { id: "status", name: "Status", disabledSorting: "true" },
];

export default function Inventory() {
  // States
  const [inventoryData, setInventoryData] = useState<any>();
  const [imageReorder, setImageReorder] = useState<any>();

  // Variables
  const inventoryService = new InventoryService();
  const carService = new CarService();
  const router = useRouter();

  // Context
  const { loading, setLoading } = useContext(LoadingContext);
  const { refreshData, setRefreshData } = useContext(RefreshAPiContext);

  // Functions
  const getAllInventory = async () => {
    setLoading(true);
    try {
      const inventoryApiCall = await inventoryService.getAllInventory();
      setInventoryData(inventoryApiCall.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const refreshApi = async () => {
    getAllInventory();
  };

  const updateCarOrderById = async (id: any, carOrder: any) => {
    setLoading(true);
    let payload = {
      carOrder: carOrder,
    };
    try {
      const updateCarOrder = await carService.updateCarInventory(id, payload);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    getAllInventory();
  }, []);

  useEffect(() => {
    if (refreshData) {
      refreshApi();
      console.log("This is refresh api of the inventory data");
    }
  }, [refreshData]);

  useEffect(() => {
    if (imageReorder) {
      // updateCarOrderById();
      imageReorder.map((item: any, index: number) => {
        updateCarOrderById(item.Car_Detail._id, index);
      });
      refreshApi();
    }
  }, [imageReorder]);

  return (
    <section className="section-inventory">
      <Container maxWidth="lg">
        <div className="flex-container">
          <h3>Inventory</h3>
          <SecondaryButton
            variant="contained"
            color="secondary"
            onClick={() => {
              router.push("/inventory/add-inventory");
            }}
          >
            ADD Inventory
          </SecondaryButton>
        </div>
        {inventoryData && inventoryData.length > 0 ? (
          <UserDetailTabel
            parentPage="inventory"
            // userDatas={InventoryData}
            inventoryOrdering={true}
            userDatas={inventoryData}
            setImageReorder={setImageReorder}
            setUserData={setInventoryData}
            headCells={InventoryHeadCell}
          />
        ) : (
          <div className="no-data-available">
            <span>No Data Available</span>
          </div>
        )}
      </Container>
    </section>
  );
}
