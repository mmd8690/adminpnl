import React from "react";
import BrandTabele from "./BrandTabele";
import AddBrand from "./AddBrand";

const Brand = () => {
  return <div
  id="manage_brand_section"
  className="manage_brand_section main_section"
>
  <h4 className="text-center my-3">مدیریت برند ها</h4>
  < BrandTabele/>
</div>
};

export default Brand;
