import React from "react";
import CategoryTabele from "./CategoryTabele";
import CategorieContextContiner from "../../assets/context/CategorieContext";

const Category = () => {
  return (
    <CategorieContextContiner>
      <div
        id="manage_product_category"
        className="manage_product_category main_section "
      >
        <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
        <CategoryTabele />
      </div>
    </CategorieContextContiner>
  );
};

export default Category;
