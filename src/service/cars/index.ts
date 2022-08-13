import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { APIURL } from "../../utils/constant";
import { xAccessToken } from "../../utils/jwt";

export class CarService {
  /* Brands API Start */

  // Get all Brands list
  allBrands() {
    return axiosInstance.get(`/carMake`);
  }

  // Delete Brand by Id
  deleteBrands(payload: any) {
    return axiosInstance.post(`/carMake/delete/${payload}`);
  }

  // Add Brand
  addBrand(payload: any) {
    return axiosInstance.post(`/carMake`, payload);
  }
  /* Brands API End */

  /* City API Start */

  // Get city list where service is provided
  getCityList() {
    return axiosInstance.get(`/city`);
  }

  // Delete city by id
  deleteCityById(payload: any) {
    return axiosInstance.post(`/city/delete/${payload}`);
  }

  // Add City

  addCity(payload: any) {
    return axiosInstance.post(`/city`, payload);
  }
  /* City API End */

  /* Add Car Inventory */
  addCarInventory(payload: any) {
    return axiosInstance.post("/carDetail", payload);
  }

  updateCarInventory(id: any, payload: any) {
    return axiosInstance.put(`/carDetail/${id}`, payload);
  }

  updateCarEquiment(id: any, payload: any) {
    return axiosInstance.put(`/carequipment/${id}`, payload);
  }

  /* Car Body  */
  getAllCarBody() {
    return axiosInstance.get("/carBody");
  }
  /* Car Body  */

  /* Image api */
  deleteCarImageById(payload: any) {
    return axiosInstance.post(`/carImage/delete/${payload}`);
  }

  updateCarImageById(payload: any) {
    return axiosInstance.post(`/carImage`, payload);
  }
  /* Image api */

  /* Comment Api */
  getAllCommentById(payload: any) {
    return axiosInstance.get(`/comment?id=${payload}`);
  }

  addComment(payload: any) {
    return axiosInstance.post("/comment", payload);
  }
  /* Comment Api */
}
