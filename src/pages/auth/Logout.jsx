import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../assets/utils/alert";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const handelLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
      } else {
        Alert("error", res.data.message, "متاسفم...!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert("error", "متاسفانه مشکلی از سمت سرور رخ داده", "متاسفم...!");
    }
  };
  useEffect(() => {handelLogout()}, []);
  return (
    <>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};
export default Logout;
