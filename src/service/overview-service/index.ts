import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { APIURL } from "../../utils/constant";
import { xAccessToken } from "../../utils/jwt";

export class OverviewService {
  // Get the counts of the Inspection, Booking And Query
  getDataCount() {
    return axiosInstance.get(`/adminDashboard`);
  }

  /* Bookings */
  // Get All Bookings
  getBookings() {
    return axiosInstance.get(`/trial`);
  }

  // Get Booking By Id
  getBookingById(payload: any) {
    return axiosInstance.get(`/trial/${payload}`);
  }

  /* Inspections */
  // Get All Inspections
  getInspections() {
    return axiosInstance.get(`/sellCar`);
  }

  // Get  Inspections by Id
  getInspectionsById(payload: any) {
    return axiosInstance.get(`/sellCar/${payload}`);
  }

  /* Querys */
  // Get All Querys
  getQuerys() {
    return axiosInstance.get(`/contact`);
  }
  getContactUsLeads() {
    return axiosInstance.get(`/contact-leads`);
  }

  // Get Query by Id
  getQueryById(payload: any) {
    return axiosInstance.get(`/contact/${payload}`);
  }
}
