import axios from "axios";
import { APIURL } from "./constant";
import { userJwtData, xAccessToken } from "./jwt";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

let xAccessTokenKey = xAccessToken() && xAccessToken();
let adminData: any = userJwtData() && userJwtData();
const axiosInstance = axios.create({
  baseURL: APIURL,
  headers: {
    "x-access-token": xAccessTokenKey,
  },
});

axiosInstance.interceptors.request.use(async (req: any) => {
  xAccessTokenKey = xAccessToken() && xAccessToken();
  req.headers["x-access-token"] = xAccessTokenKey;

  const user: any = xAccessTokenKey && jwt_decode(xAccessTokenKey);
  const isExpired = user && dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    console.log(adminData.id);

    try {
      const refreshApiData = await axios.get(
        `${APIURL}/admin/refreshToken/${adminData.id}`
      );
      if (!refreshApiData.data.error) {
        if (adminData) {
          adminData["accessToken"] = refreshApiData.data.data;
          localStorage.setItem("jwt", JSON.stringify(adminData));
        }
      }
    } catch (error) {}
  }
  return req;
});

export default axiosInstance;
