import React from "react";
import AdminLayout from "./layouts/admin/Index";
import Authkayouts from "./layouts/auth/AuthLayouts";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname.includes("/auth") ? (
      <Authkayouts />
      ) :(
      <AdminLayout />
      )
      }
    </div>
  );
}

export default App;
