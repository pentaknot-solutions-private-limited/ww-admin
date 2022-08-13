import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { APIURL } from "../../utils/constant";

export class LoginService {
  sendOtp(payload: any) {
    return axios.post(`${APIURL}/otp/sendOtpAdmin`, payload);
  }

  verifyOtp(payload: any) {
    return axios.post(`${APIURL}/otp/verifyOtpAdmin`, payload);
  }
}
