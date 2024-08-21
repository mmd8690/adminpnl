import React, { useContext, useEffect, useState } from "react";
import ModalsContiner from "../../componenet/ModalsContiner";
import { Form, Formik } from "formik";
import FormikControl from "../../componenet/form/FormikControle";
import { getCategoryService, getSingleCategory } from "../../services/category";
import SumitButton from "../../componenet/form/SumitButton";
import { useParams } from "react-router-dom";
import { CategorieContext } from "../../assets/context/CategorieContext";
import { initialValues, onSubmit, validationSchema } from "./Core";
import { Alert } from "../../assets/utils/alert";

const AddCategory = (setforceRender) => {
  const [parents, setParents] = useState([]);
  const [editCategory, seteditCategory] = useState(null);
  const [reInitialValuse, setreInitialValuse] = useState(null);
  const param = useParams();
  const { editId, setEditId } = useContext(CategorieContext);

  const handelgetSingleCtegory = async () => {
    try {
      const res = await getSingleCategory(editId);
      console.log(res);
      if (res.status == 200) {
        const oldCategory = res.data.data;
        seteditCategory(oldCategory);
      }
    } catch (error) {
      Alert("مشکل...!", "متاسفانه دسته مورد نظر دریافت نشد", "warning");
    }
  };
  const handleGetParentsCategories = async () => {
    try {
      const res = await getCategoryService();
      if (res.status == 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (editId) handelgetSingleCtegory();
    else seteditCategory(null);
  }, [editId]);
  useEffect(() => {
    handleGetParentsCategories();
  }, []);
  useEffect(() => {
    if (editCategory) {
      setreInitialValuse({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title,
        description: editCategory.description,
        image: null,
        is_active: editCategory.is_active ? true : false,
        showc_in_menu: editCategory.showc_in_menu ? true : false,
      });
      console.log(editCategory.title);
    } else if (param.categoryId) {
      setreInitialValuse({
        ...initialValues,
        parent_id: param.categoryId,
      });
    } else {
      setreInitialValuse(null);
    }
  }, [param.categoryId, editCategory]);
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={() => setEditId(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContiner
        fullScreen={true}
        id={"add_product_category_modal"}
        title={editId ? "ویرایش محصول" : "افزودن دسته محصول"}
      >
        <Formik
          initialValues={reInitialValuse || initialValues}
          onSubmit={(value, actions) =>
            onSubmit(value, actions, setforceRender)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                    
                  />
                ) : null}
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                {/* <FormikControl
                  className="col-md-6 col-lg-8"
                  control="file"
                  name="image"
                  label="تصویر"
                  placeholder="تصویر"
                /> */}
                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SumitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalsContiner>
    </>
  );
};

export default AddCategory;
