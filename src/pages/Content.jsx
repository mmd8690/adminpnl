import React, { useContext } from "react";
import { AdminContext } from "../assets/context/adminLayoutContext";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Color from "./Colors/Colors";
import Guranti from "./Guranti/Guranti"
import Brand from "./Brand/Brand";
import Discount from "./Discount/Discount";
import Cart from "./SectionCart/SectionCart";
import OrderSection from "./OrderSection/OrderSection";
import Delivery from "./Delivery/Delivery";
import User from "./User/User";
import Role from "./Role/Role";
import Permission from "./Permissions/permission"
import Comment from "./Comment/comment";
import Question from "./Questions/Question";
import Category from "./categoty/Category"
import Product from "./Product/Product"
import Logout from "./auth/Logout";
const Content = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <div>
      <section
        id="content_section"
        className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="/colors" element={<Color />} />
          <Route path="/gurantis" element={<Guranti />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/discounts" element={< Discount/>} />
          <Route path="/carts" element={< Cart/>} />
          <Route path="/order-section" element={< OrderSection/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/users" element={<User/>} />
          <Route path="/roles" element={<Role/>} />
          <Route path="/permissions" element={<Permission/>} />
          <Route path="/comments" element={<Comment/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </section>
    </div>
  );
};

export default Content;
