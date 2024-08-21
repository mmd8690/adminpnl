import *as Yup from"yup"
import { Alert } from "../../assets/utils/alert";
import { createNewCategoryService } from "../../services/category";
export const initialValues = {
    parent_id: "",
    title: "",
    description: "",
    // image: null,
    is_active: true,
    showc_in_menu: true,
  };
  export const onSubmit = async (value, actions, setforceRender) => {
    try {
      value = {
        ...value,
        is_active: value.is_active ? 1 : 0,
        show_in_menu: value.show_in_menu ? 1 : 0,
      };
      const res = await createNewCategoryService(value);
      if (res.status == 201) {
        Alert("success", "عملیات با موفقیت انجام شد ", "ثبت رکورد");
        setforceRender((last) => last + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  export const validationSchema = Yup.object({
    parent_id: Yup.number(),
    title: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    description: Yup.string().matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
    // image: Yup.mixed()
    // .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
    //   !value ? true : value.size <= 500 * 1024
    // )
    // .test("format", "فرمت فایل باید jpg باشد", (value) =>
    //   !value ? true : value.type === "image/jpeg"
    // ),
    is_active: Yup.boolean(),
    show_in_menu: Yup.boolean(),
    show_in_menu: Yup.boolean(),
  });