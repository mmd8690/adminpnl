import * as Yup from "yup";
import {
  addGuaranteesService,
  editGuaranteeService,
} from "../../services/Guranti";
import { Alert } from "../../assets/utils/alert";
export const initialValues = {
  title: "",
  descriptions: "",
  length: "",
  length_unit: "",
};
export const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف لاتین استفاده شود"
    ),
  length: Yup.number(),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف استفاده شود"
  ),
  length_unit: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف لاتین استفاده شود"
  ),
});
export const onSubmit = async (values, actions, setData, guaranteeToEdit) => {
    if (guaranteeToEdit) {
      const res = await editGuaranteeService(guaranteeToEdit.id, values);
      if (res.status === 200) {
        Alert("success", res.data.message, "انجام شد");
        setData((lastData) => {
          let newData = [...lastData];
          let index = newData.findIndex((d) => d.id == guaranteeToEdit.id);
          newData[index] = res.data.data;
          return newData;
        });
      }
    } else {
      const res = await addGuaranteesService(values);
      if (res.status === 201) {
        Alert("success", res.data.message, "انجام شد");
        setData((lastData) => [...lastData, res.data.data]);
        actions.resetForm();

      }
    }
  };
