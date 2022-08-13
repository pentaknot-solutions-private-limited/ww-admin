import React, { useState } from "react";
import { InventoryService } from "../src/service/inventory-service";

export default function Test() {
  // States
  const [files, setFiles] = useState<any>("");

  //   Variables
  const inventoryService = new InventoryService();

  // Functions
  const handleChange = (e: any) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  };

  const fileSubmitHandler = async (event: any) => {
    const formData = new FormData();
    formData.append(`carId`, "617d8ca5405bb01b931ce015");
    // for (let i = 0; i < files.length; i++) {
    //   formData.append(`files`, files[i]);
    // }
    formData.append(`image`, files[0]);

    try {
      const apiCall = await inventoryService.uploadCarImage(formData);
      if (!apiCall.data.error) {
        console.log(apiCall.data.data);
      } else {
        console.log(apiCall.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input accept="image/*" type="file" onChange={handleChange} multiple />
      <button onClick={fileSubmitHandler}>Upload</button>
    </div>
  );
}
