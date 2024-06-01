import axios from "axios";
import confing from "./confing.json";
const HttpsService = (url, method, data = null) => {
    const tokeninfo=JSON.parse(localStorage.getItem("logintoken"))
  return axios({
    url : confing.onlineApi+url, 
    method,
    data,
    headers:{
        Authorization : tokeninfo ? `Bearer ${tokeninfo}`: null,
        "Content-Type"  : "aplication/json"
    }
  });
};

export default HttpsService;
