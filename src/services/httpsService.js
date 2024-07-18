import axios from "axios";
import confing from "./confing.json";


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