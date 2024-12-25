import React, { useEffect, useState } from "react";
import ModalsContiner from "../../componenet/ModalsContiner";
import { Formik, Form } from "formik";
import FormikControl from "../../componenet/form/FormikControle";
import SubmitButton from "../../componenet/form/SumitButton";
import { initialValues, onSubmit, validationSchema } from "./Core";
import { addGuaranteesService } from "../../services/Guranti";
import { loadPersian_dari } from "moment-jalaali";
const AddGuranti = ({editGuranti , setData , seteditGuranti}) => {
  const [reInitialValuse, setreInitialValuse] = useState(null);
  useEffect(() => {
    if (editGuranti)
      setreInitialValuse({
        title: editGuranti.title,
        descriptions: editGuranti.descriptions || "",
        length: editGuranti.length || "",
        length_unit: editGuranti.length_unit || "",
      });
    else setreInitialValuse(null);
  }, [editGuranti]);
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_guarantee_modal"
        onClick={()=>seteditGuranti(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContiner
        id="add_guarantee_modal"
        title={editGuranti ? "ویرایش گارانتی" : "افزودن گارانتی"}
        fullScreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitialValuse|| initialValues}
              onSubmit={(values, actions ) =>
                onSubmit(values, actions, setData,editGuranti ,)
              }
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  placeholder="فقط حروف و اعداد"
                />
                <FormikControl
                  control="textarea"
                  type="text"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="فقط حروف و اعداد"
                />
                <FormikControl
                  control="input"
                  type="number"
                  name="length"
                  label="مدت گارانتی"
                  placeholder="فقط اعداد"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="length_unit"
                  label="واحد"
                  placeholder="فقط حروف "
                />
                <div className="btn_box text-center col-12">
                  <SubmitButton />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalsContiner>
    </>
  );
};

export default AddGuranti;
