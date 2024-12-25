import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/Index";
import AdminContextContiner, {
  AdminContext,
} from "../../assets/context/adminLayoutContext";

import Content from "../../pages/Content";
import { Navigate } from "react-router-dom";
import { UseIsLogin } from "../../hook/authhook";
import Navbar from "./navbar/Index";
const Index=()=>{
  const [isLogin , loading] = UseIsLogin()
  return (
    <AdminContextContiner>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : isLogin ? (
        <div>
          <Content />
          <Navbar/>
          <Sidebar />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContiner>
  );
};

export default Index;