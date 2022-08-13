import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { APIURL } from "../../utils/constant";
import { xAccessToken } from "../../utils/jwt";

export class InventoryService {
  getAllInventory() {
    return axiosInstance.get(`/car/complete/car/detail`);
  }

  getInventoryById(payload: any) {
    return axiosInstance.get(`/car/completeCarDetailById/${payload}`);
  }

  /* Add Image */
  uploadCarImage(payload: any) {
    return axiosInstance.post(`/carImage`, payload);
  }
  /* Add Image */

  // Update the car image order
  updateCarImageOrder(carId: any, payload: any) {
    return axiosInstance.put(`/carImage/${carId}`, payload);
  }

  // Delete Inventory car by id
  deleteCarInventoryById(carId: any) {
    return axiosInstance.post(`/api/car/delete/${carId}`);
  }
}
