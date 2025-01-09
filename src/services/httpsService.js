import axios from "axios";
import confing from "./confing.json";
import { Alert } from "../assets/utils/alert";
export const apiPah=confing.onlinePath
axios.interceptors.response.use((res)=>{
  if (res.status != 200 && res.status != 201) {
    if (typeof(res.data) == 'object') {
        let message = ""
        for (const key in res.data) {
            message = message + `${res.data[key]}`
        }
        res.data.message = message
    }
    Alert("warning", res.data.message,"مشکل...!" );
}
return res
},(error)=>{
  Alert("error", error.response.status,"مشکلی رخ داده است" );
  return Promise.reject(error)
})
const HttpsService = (url, method, data=null)=>{
  const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
  return axios({
      url: apiPah+"/api"+url,
      method,
      data,
      headers:{
          Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
          "Content-Type" : "application/json"
      }
  })
}
export default HttpsService