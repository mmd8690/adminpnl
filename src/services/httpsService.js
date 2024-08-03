import axios from "axios";
import confing from "./confing.json";
import { Alert } from "../assets/utils/alert";

axios.interceptors.response.use((res)=>{
  if (res.status != 200 && res.status != 201) {
    Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");  }
  return res
},(error)=>{
  Alert(error.response.status, "مشکلی رخ داده است", "error");
  return Promise.reject(error)
})
const HttpsService = (url, method, data=null)=>{
  const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
  return axios({
      url: confing.onlineApi+url,
      method,
      data,
      headers:{
          Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
          "Content-Type" : "application/json"
      }
  })
}
export default HttpsService