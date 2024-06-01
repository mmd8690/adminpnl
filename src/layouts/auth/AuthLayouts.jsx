import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { UseIsLogin } from "../../hook/authhook";

const Authkayouts = () => {
  const [isLogin , loading] = UseIsLogin()

  return (
    <div className="limiter">
    {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : !isLogin ? (
        <div>
          <Routes>
            <Route path="/auth/login" element={<Login/>}/>
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default Authkayouts;
