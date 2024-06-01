import React from "react";
import CategoryTabele from "./CategoryTabele";
import AddAttributes from "./AddAtribute";

const Category = () => {
  return (
    <div
      id="manage_product_category"
      className="manage_product_category main_section "
    >
      <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
      <CategoryTabele />
      <AddAttributes/>
    </div>
  );
};

export default Category;
