// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { getCategoryAttrsService } from "../../../services/CategoryAttr";
// import PrevpageButton from "../../../componenet/PrevpageButton";
// import SubmitButton from "../../../componenet/form/SumitButton";
// import SpinnerLoad from "../../../componenet/SpinnerLoad";
// import * as Yup from "yup";
// import FormikError from "../../../componenet/form/FormikError";
// import { onSubmit } from "./Core";
// const SetAttribute = () => {
//     const location= useLocation()
//     const {selectedProduct} = location.state
//     const [attrs, setAttrs]=useState()
//     const [initialVAlues, setinitialVAlues] = useState(null);
//     const [validationSchema, setvalidationSchema] = useState({});
//     let attrsVar=[]
//     let initials=[]
//     let rules=[]
//     const handleGetAttributes = async ()=>{
//         Promise.all(
//             selectedProduct.categories.map(async (cat)=>{
//                 const res = await getCategoryAttrsService(cat.id)
//                 if (res.status === 200)  {
//                     attrsVar = [...attrsVar, { groupTitle: cat.title, data: res.data.data }]
//                     if (res.data.data.length > 0) {
//                         for (const d of res.data.data) {                        
//                             const value = selectedProduct.attributes.filter(a=>a.id == d.id)[0]?.pivot.value || "" 
//                             initials = {...initials, [d.id]:value}
//                             rules = {...rules, [d.id]:Yup.string().matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود")}
//                         }
//                    }
//                 }
//             })
//         ).then(()=>{
//             setAttrs(attrsVar)
//             setinitialVAlues(initials)
//             setvalidationSchema(Object.keys(rules).length > 0 ? Yup.object(rules) : {})
//         })
//     }
//     useEffect(()=>{
//         handleGetAttributes()
//         console.log(selectedProduct);
//     },[])
//   return (
//       <div className="container">
//             <h4 className="text-center my-3"> افزودن ویژگی محصول: <span className="text-primary">{selectedProduct.title}</span> </h4>
//             <div className="text-left col-md-6 col-lg-8 m-auto my-3">
//                 <PrevpageButton />
//             </div>
//             <div className="row justify-content-center">
            
//              { initialVAlues ?(      
//         <Formik
//         initialValues={initialVAlues} 
//         onSubmit={(value , action) =>onSubmit(value , action , selectedProduct.id)}
//         validationSchema={validationSchema}
//         enableReinitialize
//     >               
//         <Form>
                   
//                 {   attrs.map((attr, index)=>(
//                <div key={"group"+index} className="row justify-content-center">
//                 <h6 className="text-center">گروه : {attr.groupTitle}</h6>
//               {
//               attr.data.length > 0 ? (
//           attr.data.map(attrData=>(
//               <div className="col-12 col-md-6 col-lg-8" key={attrData.id}>  
//                   <div className="input-group my-3 dir_ltr">
//                       <span className="input-group-text w_6rem justify-content-center"> {attrData.unit} </span>
//                       <Field name={attrData.id} type="text" className="form-control" placeholder="" />
//                       <span className="input-group-text w_8rem justify-content-center">{attrData.title}</span>
//                   </div>
//                   <ErrorMessage name={attrData.id} component={FormikError}/>
//               </div>
//           ))
//       ) : (
//                       <small className="text-center text-danger ">هیچ ویژگی برای گروه های این محصول ایجاد نشده است</small>
//                   )
//               }
//           </div>
//                    ))
//                 }

//                 <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4 m-auto">
//                 <SubmitButton/>
//                 <PrevpageButton className="me-2"/>
//                 </div>

//         </Form>
//         </Formik> 
//                   ) :(  
//                    <SpinnerLoad/>     
//                    ) 
//             }
  
//        </div>
//        </div>
//   );
// };

// export default SetAttribute;
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCategoryAttrsService } from "../../../services/CategoryAttr";
import PrevpageButton from "../../../componenet/PrevpageButton";
import SubmitButton from "../../../componenet/form/SumitButton";
import SpinnerLoad from "../../../componenet/SpinnerLoad";
import * as Yup from "yup";
import FormikError from "../../../componenet/form/FormikError";
import { onSubmit } from "./Core";


const SetAttribute = () => {
    const location = useLocation()
    const {selectedProduct} = location.state

    const [attrs, setAttrs]=useState()
    const [initialValues, setInitialValues]=useState(null)
    const [validationSchema, setValidationSchema]=useState({})

    const handleGetAttributes = async ()=>{
        let attrsVar = []
        let initials = {}
        let rules = {}
        Promise.all(
            selectedProduct.categories.map(async (cat)=>{
                const res = await getCategoryAttrsService(cat.id)
                if (res.status === 200) {
                    attrsVar = [...attrsVar, { groupTitle: cat.title, data: res.data.data }]
                    if (res.data.data.length > 0) {
                        for (const d of res.data.data) {                        
                            const value = selectedProduct.attributes.filter(a=>a.id == d.id)[0]?.pivot.value || "" 
                            initials = {...initials, [d.id]:value}
                            rules = {...rules, [d.id]:Yup.string().matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود")}
                        }
                    }
                }
            })
        ).then(()=>{
            setAttrs(attrsVar)
            setInitialValues(initials)
            setValidationSchema(Object.keys(initials).length > 0 ? Yup.object(rules) : {})
        })
    }
    useEffect(()=>{
        handleGetAttributes()
    },[])
  return (
            <div className="container">
            <h4 className="text-center my-3"> افزودن ویژگی محصول: <span className="text-primary">{selectedProduct.title}</span> </h4>
            <div className="text-left col-md-6 col-lg-8 m-auto my-3">
                <PrevpageButton />
            </div>
            <div className="row justify-content-center">
            {initialValues ? (
                    <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions)=>onSubmit(values,actions, selectedProduct.id)}
                    validationSchema={validationSchema}
                    >
                        <Form>
                                {
                                    attrs.map((attr, index)=>(
                                        <div key={"group"+index} className="row justify-content-center">
                                                <h6 className="text-center">گروه : {attr.groupTitle}</h6>
                                                {
                                                    attr.data.length > 0 ? (
                                                        attr.data.map(attrData=>(
                                                            <div className="col-12 col-md-6 col-lg-8" key={attrData.id}>  
                                                                <div className="input-group my-3 dir_ltr">
                                                                    <span className="input-group-text w_6rem justify-content-center"> {attrData.unit} </span>
                                                                    <Field name={attrData.id} type="text" className="form-control" placeholder="" />
                                                                    <span className="input-group-text w_8rem justify-content-center">{attrData.title}</span>
                                                                </div>
                                                                <ErrorMessage name={attrData.id} component={FormikError}/>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <small className="text-center text-danger ">هیچ ویژگی برای گروه های این محصول ایجاد نشده است</small>
                                                    )
                                                }
                                            </div>
                                    ))
                                }

                                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4 m-auto">
                                <SubmitButton/>
                                <PrevpageButton className="me-2"/>
                                </div>

                        </Form>
                    </Formik>
                ) : (
                    <SpinnerLoad/>
                )
            }
            </div>
            </div>
  );
};

export default SetAttribute;