import React, { useEffect } from "react";
import { deleteCategoryService } from "../../../services/CategoryAttr";
import { Alert } from "../../../assets/utils/alert";

const AttrAction = ({
  rowData,
  atteEdite,
  setattrEdite,
  handelDeleteCategory,
}) => {
  useEffect(() => {
  }, []);
  return (
    <div
      className={`text-center ${atteEdite ? "alert-danger danger_Shadow" : ""}`}
    >
      <i
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش ویژگی"
        data-bs-placement="top"
        onClick={() => {
          setattrEdite(rowData);
        }}
      ></i>
      <i
        className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
        title="حذف ویژگی"
        onClick={()=> handelDeleteCategory(rowData)}
      ></i>
    </div>
  );
};

export default AttrAction;
