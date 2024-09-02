import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrevpageButton from "../../../componenet/PrevpageButton";
import PaginatedTable from "../../../componenet/paginatedTable";
import Showinfilter from "./Showinfilter";
import AttrAction from "./AttrAction";
import {
  addCategoryAttrService,
  deleteCategoryService,
  editCategiryAttrservice,
  getCategoryAttrsService,
} from "../../../services/CategoryAttr";
import { Alert, Confirm } from "../../../assets/utils/alert";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../componenet/form/FormikControle";
import SumitButton from "../../../componenet/form/SumitButton";
import { initialValues, onSubmit, validationSchema } from "./Core";

const Attributes = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [atteEdite, setattrEdite] = useState(null);
  const [reInitialValuse, setreInitialValuse] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "والد" },
  ];
  const additionField = [
    {
      title: "نمایش در فیلتر",
      element: (rowData) => <Showinfilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      element: (rowData) => (
        <AttrAction
          rowData={rowData}
          atteEdite={atteEdite}
          setattrEdite={setattrEdite}
          handelDeleteCategory={handelDeleteCategory}
        />
      ),
    },
  ];
  const Searchparams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را مشخص کنید ",
    searchFields: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(
        location.state.categorieData.id
      );
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handelDeleteCategory = async (rowData) => {
    if (
      await Confirm(
        "حذف دسته بندی",
        `آیا از حذف ${rowData.title} اطمینان دارید؟`
      )
    ) {
      try {
        const res = await deleteCategoryService(rowData.id);
        if (res.status == 200) {
          setData((lastdata) =>
            [...lastdata].filter((d) => d.id != rowData.id)
          );
          Alert("success", res.data.message, "انجام شد");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);
  useEffect(() => {
    if (atteEdite)
      setreInitialValuse({
        title: atteEdite.title,
        unit: atteEdite.unit,
        in_filter: atteEdite.in_filter ? true : false,
      });
    else setreInitialValuse(null);
  }, [atteEdite]);
  return (
    <>
      <h4 className="text-center my-3">مدیریت ویژگی های دسته بندی</h4>
      <h6 className="text-center my-3">
        ویژگی های :
        <span className="text-primary">
          {location.state.categorieData.title}
        </span>
      </h6>
      <div className="container">
        <div className="row justify-content-center">
          <Formik
            initialValues={reInitialValuse || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(
                values,
                actions,
                location.state.categorieData.id,
                setData,
                atteEdite,
                setattrEdite
              )
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            <Form>
              <div
                className={`row my-3 ${
                  atteEdite ? "alert-danger danger_Shadow" : ""
                } justify-content-center align-items-center is_inline`}
              >
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  className="col-md-6 col-lg-4 my-1"
                  placeholder="عنوان ویژگی جدید"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="unit"
                  label="واحد"
                  className="col-md-6 col-lg-4 my-1"
                  placeholder="واحد ویژگی جدید"
                />
                <div className="col-8 col-lg-2 my-1">
                  <FormikControl
                    control="switch"
                    name="in_filter"
                    label="نمایش در فیلتر"
                  />
                </div>
                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
                  <SumitButton />
                  {atteEdite ? (
                    <button
                      className="byn btn-sm btn-secondary me-2"
                      onClick={() => setattrEdite(null)}
                    >
                      انصراف
                    </button>
                  ) : null}
                </div>
              </div>
            </Form>
          </Formik>

          <hr />

          <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            additionField={additionField}
            numOfPAge={5}
            Searchparams={Searchparams}
            loading={loading}
          >
            <PrevpageButton />
          </PaginatedTable>
        </div>
      </div>
    </>
  );
};

export default Attributes;
