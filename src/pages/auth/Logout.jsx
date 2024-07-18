import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../assets/utils/alert";

const Logout = () => {
  const [login, setloading] = useState(true);
  useEffect(()=>{
    const logintoken=JSON.parse(localStorage.getItem("loginToken"))
    axios.get("https://ecomadminapi.azhadev.ir/api/auth/logout",{
      headers:{
        Authorization: `Bearer ${logintoken.token}`
      }
    }) .then((res) => {
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
      } else {
          Alert("متاسفم...!", res.data.message, "error");
      }
      setloading(false);
    }).catch(error=>{
      setloading(false);
      Alert("error","متاسفانه مشکلی از سمت سرور رخ داده","متاسفم...!" );
  });
}, []);
  return (
    <>
      {login ? (
        <h1 className="text-center waiting-center"> لطفا صبر کنید... </h1>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </>
  );
};

export default Logout;
