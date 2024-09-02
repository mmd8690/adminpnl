import { Alert} from "../../../assets/utils/alert";

import * as Yup from "yup";
import { addCategoryAttrService, editCategiryAttrservice } from "../../../services/CategoryAttr";

export const initialValues = {
  title: "",
  unit: "",
  in_filter: true,
};

export const onSubmit = async (
  values,
  actions,
  catId,
  setData,
  atteEdite,
  setattrEdite
) => {
  try {
    values = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };
    if (atteEdite) {
      const res = await editCategiryAttrservice(atteEdite.id, values);
      if (res.status === 200) {
        Alert("success", res.data.message, "انجام شد");
        setData((oldData) => {
            const newData = [...oldData];
            const index = newData.findIndex((d) => d.id === atteEdite.id);
            newData[index] = res.data.data;
            return newData;
        });
        setattrEdite(null);
      }
    }
    const res = await addCategoryAttrService(catId, values);
    if (res.status === 201) {
      Alert("success", res.data.message, "انجام شد");
      setData((oldData) => [...oldData, res.data.data]);
      actions.resetForm();
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const validationSchema = Yup.object({
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
