import React, { useEffect, useState } from "react";
import ModalsContiner from "../../componenet/ModalsContiner";
import SubmitButton from "../../componenet/form/SumitButton";
import { FastField, Form, Formik } from "formik";
import FormikControl from "../../componenet/form/FormikControle";
import { initialValues, onSubmit, validationSchema } from "./Core";

const AddColor = ({editcolor , setData , seteditcolor}) => {
  const [reInitValues, setReInitValues] = useState(null);
  const [colorPickerValue, setColorPickerValue] = useState("#000")

  useEffect(() => {
    if (editcolor){
        setColorPickerValue(editcolor.code)
        setReInitValues({
            title: editcolor.title,
            code: editcolor.code,
        });
    }      
    else {
        setColorPickerValue("#000")
        setReInitValues(null)
    };
  }, [editcolor]);

  const handleChangeColorCodeField = (e, form)=>{
    setColorPickerValue(e.target.value)
    form.setFieldValue("code", e.target.value)
  }
  return (
    <>
    <button
      className="btn btn-success d-flex justify-content-center align-items-center"
      data-bs-toggle="modal"
      data-bs-target="#add_color_modal"
      onClick={() => seteditcolor(null)}

    >
      <i className="fas fa-plus text-light"></i>
    </button>
    <ModalsContiner
      fullScreen={false}
      id={"add_color_modal"}
      title={editcolor ? "ویرایش رنگ" : "افزودن رنگ جدید"}
    >
      <div className="container">
        <div className="row justify-content-center">
          <Formik
            initialValues={reInitValues || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setData, editcolor)
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
              <FastField>
                {({form}) => {
                  return (
                    <div className="col-12 d-flex align-items-center justify-content-start">
                      <label
                        htmlFor="exampleColorInput"
                        className="form-label m-0"
                      >
                        انتخاب رنگ
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color mx-3"
                        id="code"
                        name="code"
                        title="انتخاب رنگ"
                        value={colorPickerValue}
                        onChange={(e)=>handleChangeColorCodeField(e, form)}
                      />
                    </div>
                  );
                }}
              </FastField>
              <div className="btn_box text-center col-12 mt-4">
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

export default AddColor;
