import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategorieContext } from "../../../assets/context/CategorieContext";

const Actions = ({ rowData, handelDeleteCategory }) => {
  const navigate = useNavigate();
  const param = useParams();
  const { editId, setEditId } = useContext(CategorieContext);
  return (
    <div>
      <>
        {!param.categorieId ? (
          <i
            className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
            title="زیرمجموعه"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={() =>
              navigate(`/categories/${rowData.id}`, {
                state: {
                  parentData: rowData,
                },
              })
            }
          ></i>
        ) : null}
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_modal"
          onClick={() => {
            setEditId(rowData.id);
          }}
        ></i>
        {param.categorieId   ? (
            <i
            className="fas fa-receipt text-success mx-1 hoverable_text pointer has_tooltip"
            title="افزودن ویژگی"
            data-bs-placement="top"
            onClick={() =>navigate(`/categories/${rowData.id}/attributes` , {
              state: {
                categorieData: rowData,
              }
            })
             
            }
          ></i>
        ) : null}

        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          onClick={() => handelDeleteCategory(rowData)}
        ></i>
      </>
    </div>
  );
};

export default Actions;
