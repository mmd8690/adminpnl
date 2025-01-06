import React from "react";
import * as Yup from "yup";
import AddProduct from "./AddProduct";
import { createNewProductService, editProductService } from "../../services/Product";
import { Alert } from "../../assets/utils/alert";
export const initialValues = {
  category_ids: "",
  title: "",
  price: "",
  weight: "",
  brand_id: "",
  color_ids: "",
  guarantee_ids: "",
  descriptions: "",
  short_descriptions: "",
  cart_descriptions: "",
  image: "",
  alt_image: "",
  keywords: "",
  stock: "",
  discount: "",
};
export const onSubmit = async (value, actions, productToEdit) => {
  if (productToEdit) {
    const res = await editProductService(productToEdit.id, value);
    if (res.status === 200) {
      Alert("success", res.data.message, "انجام شد");
    }
  } else {
    const res = await createNewProductService(value);
    if (res.status == 201) {
      Alert("success", res.data.message, "انجام شد");
      actions.resetForm();
    }
  }
};
// export const onSubmit = async (values, actions, productToEdit) => {
//   console.log(values);
//   if (productToEdit) {
//     const res = await editProductService(productToEdit.id, values);
//     if (res.status === 200) {
//       Alert('انجام شد', res.data.message, 'success')
//     }
//   }else{
//     const res = await createNewProductService(values);
//     if (res.status === 201) {
//       Alert('انجام شد', res.data.message, 'success')
//     }
//   }
// };
export const validationSchema = Yup.object({
  category_ids: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9\s-]+$/, "فقط ازاعداد و خط تیره استفاده شود"),
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  price: Yup.number().required("لطفا این قسمت را پر کنید"),
  weight: Yup.number(),
  brand_id: Yup.number(),
  color_ids: Yup.string().matches(
    /^[0-9\s-]+$/,
    "فقط ازاعداد و خط تیره استفاده شود"
  ),
  guarantee_ids: Yup.string().matches(
    /^[0-9\s-]+$/,
    "فقط ازاعداد و خط تیره استفاده شود"
  ),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-<>/:.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  short_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  cart_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  keywords: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  stock: Yup.number(),
  discount: Yup.number(),
});
