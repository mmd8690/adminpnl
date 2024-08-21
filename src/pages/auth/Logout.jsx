import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../assets/utils/alert";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [login, setloading] = useState(true);
  const handleLogout= async()=>{
    try {
      const res = await logoutService()
      if(res.status == 200){
        localStorage.removeItem("loginToken")
      }else{
        Alert("error", res.data.message, " متاسفم...!");
      }
    } catch (error) {
      setloading(false)
    }finally{
      setloading(false)
      Alert("error","متاسفانه مشکلی از سمت سرور رخ داده!", " متاسفم...!");

    }
  }
  useEffect(()=>{
    handleLogout();
  },[])
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
