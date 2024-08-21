// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import PrevpageButton from "../../../componenet/PrevpageButton";
// import PaginatedTable from "../../../componenet/paginatedTable";
// import Showinfilter from "./Showinfilter";
// import AttrAction from "./AttrAction";
// import { addCategoryAttr, addCategoryAttrService, getCategoryAttr } from "../../../services/CategoryAttr";
// import { Alert } from "../../../assets/utils/alert";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";
// import FormikControl from "../../../componenet/form/FormikControle";
// import SumitButton from "../../../componenet/form/SumitButton";
// const initialValues = {
//   title: "",
//   unit: "",
//   in_filter: true,
// };
// const onSubmit = async (values, actions , categoryId , setData) => {
//   try {
//    values={
//     ...values ,
//     in_filter: values.in_filter? 1 :0
//    }
//     const res = await addCategoryAttrService(categoryId , values)
//     if( res.status == 201 ){
//       Alert( "success" , res.data.message  , "انجام شد")
//       console.log(res);
//       setData(oldData=> [...oldData, res.data.data])
//       console.log(res);
//     }else{
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const validationSchema = Yup.object({
//   title: Yup.string()
//     .required("لطفا این قسمت را پر کنید")
//     .matches(
//       "فقط از حروف و اعداد استفاده شود"
//     ),
//   unit: Yup.string()
//     .required("لطفا این قسمت را پر کنید")
//     .matches(
//       /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
//       "فقط از حروف و اعداد استفاده شود"
//     ),
//   in_filter: Yup.boolean(),
// });
// const AddAttributes = () => {
//   const [data, setData] = useState([]);
//   const [loading, setloading] = useState(false);
//   const location = useLocation();
//   useEffect(() => {
//     handelGetCtegoryAttr();
//   }, []);
//   const dataInfo = [
//     { field: "id", title: "#" },
//     { field: "title", title: "عنوان محصول" },
//     { field: "unit", title: "  واحد " },
//   ];
//   const additionField = [
//     {
//       title: " نمایش در فیلتر ",
//       element: (rowData) => <Showinfilter rowData={rowData} />,
//     },
//     {
//       title: "عملیات",
//       element: (rowData) => <AttrAction rowData={rowData} />,
//     },
//   ];
//   const Searchparams = {
//     title: "جستجو",
//     placeholder: "قسمتی از عنوان را مشخص کنید ",
//     searchFields: "title",
//   };
//   const handelGetCtegoryAttr = async () => {
//     setloading(true);
//     try {
//       const res = await getCategoryAttr(location.state.categorieData.id , );
//       if (res.status == 200) {
//         setData(res.data.data);
//       }
//     } catch (error) {
//       Alert("error", " مشکلی از سمت سرور رخ داده ", " مشکل ");
//     } finally {
//       setloading(false);
//     }
//   };

//   return (
//     <>
//       <h4 className="text-center my-3">مدیریت ویژگی های دسته بندی</h4>
//       <h6 className="text-center my-3">
//         ویژگی های :
//         <span className="text-primary">
//           {location.state.categorieData.title}
//         </span>
//       </h6>
//       <div className="container">
//         <div className="row justify-content-center">
//           <Formik
//             initialValues={initialValues}
//             onSubmit={(values, actions) => onSubmit(values, actions, location.state.categorieData.id, setData)}

//             validationSchema={validationSchema}
//           >
//             <Form>
//               <div className="row my-3">
//                 <FormikControl
//                   className="col-md-6 col-lg-4 my-1"
//                   control="input"
//                   type="text"
//                   name="title"
//                   label="عنوان "
//                   placeholder="عنوان ویژگی جدید"
//                 />
//                 <FormikControl
//                   className="col-md-6 col-lg-4 my-1"
//                   control="input"
//                   type="text"
//                   name="unit"
//                   label="واحد "
//                   placeholder="واحد ویژگی جدید"
//                 />
//                 <div className="col-8 col-lg-2 my-1">
//                   <FormikControl
//                     control="switch"
//                     name="in_filter"
//                     lable="نمایش در فیلتر"
//                   />
//                 </div>
//                 <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
//                   <SumitButton />
//                 </div>
//               </div>
//             </Form>
//           </Formik>

//           <hr />

//           <PaginatedTable
//             data={data}
//             dataInfo={dataInfo}
//             additionField={additionField}
//             numOfPAge={5}
//             Searchparams={Searchparams}
//             loading={loading}
//           >
//             <PrevpageButton />
//           </PaginatedTable>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddAttributes;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrevpageButton from "../../../componenet/PrevpageButton";
import PaginatedTable from "../../../componenet/paginatedTable";
import Showinfilter from "./Showinfilter";
import AttrAction from "./AttrAction";
import {  addCategoryAttrService, getCategoryAttrsService } from "../../../services/CategoryAttr";
import { Alert } from "../../../assets/utils/alert";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../componenet/form/FormikControle";
import SumitButton from "../../../componenet/form/SumitButton";

const initialValues = {
  title: "",
  unit: "",
  in_filter: true,
};

const onSubmit = async (values, actions, catId, setData) => {
  try {
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0
    }
    const res = await addCategoryAttrService(catId, values);
    if (res.status === 201) {
      Alert('انجام شد', res.data.message, 'success');
      setData(oldData=>[...oldData, res.data.data])
    }
  } catch (error) {
    console.log(error.message);
  }
};

const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  unit: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  in_filter: Yup.boolean(),
});

const AddAttributes = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      element: (rowData) => <AttrAction rowData={rowData} />,
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
      const res = await getCategoryAttrsService(location.state.categorieData.id);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(Searchparams);
    handleGetCategoryAttrs();
  }, []);

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
            initialValues={initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions, location.state.categorieData.id, setData)}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="row my-3">
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
                  <SumitButton/>
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

export default AddAttributes;