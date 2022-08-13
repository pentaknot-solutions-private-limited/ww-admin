import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { APIURL } from "../../utils/constant";
import { xAccessToken } from "../../utils/jwt";

export class AdminService {
  // Get Admin Data
  getAdminData() {
    return axios.get(`${APIURL}/contactDetail/623202048d85ac348ad4704c`);
  }

  // Update Admin Data
  updateAdminData(payload: any) {
    return axios.put(
      `${APIURL}/contactDetail/623202048d85ac348ad4704c`,
      payload
    );
  }

  // Get Admin Social Link
  getSocialLink() {
    return axiosInstance.get(`/socialMedia`);
  }

  // Update Facebook Link
  updateFacebookLink(payload: any) {
    return axiosInstance.put(`/socialMedia/61f03b1260bd87265cfa1f67`, payload);
  }
  // Update Instagram Link
  updateInstagramLink(payload: any) {
    return axiosInstance.put(`/socialMedia/61f03bd960bd87265cfa1f6f`, payload);
  }
  // Update Youtube Link
  updateYoutubeLink(payload: any) {
    return axiosInstance.put(`/socialMedia/61f03c2360bd87265cfa1f73`, payload);
  }

  // Get All user list

  getAllUserList(){
    return axiosInstance.get('admin/getAll/User');
  }
}
