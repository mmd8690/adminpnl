import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { initialValues, onSubmit, validationSchema } from "./Core";
import ModalsContiner from "../../componenet/ModalsContiner";
import SumitButton from "../../componenet/form/SumitButton";
import FormikControl from "../../componenet/form/FormikControle";
import { editBrandService } from "../../services/Brand";

const AddBrands = ({ setData  , editBrand }) => {
  const [reInitialValuse, setreInitialValuse] = useState(null);

    useEffect(()=>{
    if(editBrand){
      setreInitialValuse({
        original_name: editBrand.original_name,
        persian_name: editBrand.persian_name,
        descriptions: editBrand.descriptions,
      })
    }else setreInitialValuse(null)
  },[editBrand ])
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_brand_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContiner
        id={"add_brand_modal"}
        title={editBrand?"ویرایش برند ": "افزودن برند"}
        fullScreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitialValuse ||initialValues}
              onSubmit={(values, actions) =>
                onSubmit(values, actions, setData, editBrand)
              }
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="original_name"
                  label="عنوان لاتین"
                  placeholder="کیبرد را در حالت لاتین قرار دهید"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="persian_name"
                  label="عنوان فارسی"
                  placeholder="کیبرد را در حالت فارسی قرار دهید"
                />
                <FormikControl
                  control="textarea"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
{/* 
                <FormikControl
                  control="file"
                  name="logo"
                  label="تصویر"
                  placeholder="تصویر"
                /> */}

                <div className="btn_box text-center col-12">
                  <SumitButton />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalsContiner>
    </>
  );
};

export default AddBrands;
