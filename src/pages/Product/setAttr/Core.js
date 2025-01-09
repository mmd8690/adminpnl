import { Alert } from "../../../assets/utils/alert";
import { addProductAttrService } from "../../../services/Product";

export const onSubmit= async (values , actions , productId)=>{
    let data = {}
    for (const key in values) {
        if (values[key]) data = {...data, [key]:{value: values[key]}}
    }
    console.log(data);
    const res = await addProductAttrService(productId, data)
    if (res.status === 200) {
        Alert("success", res.data.message, "انجام شد");
    }
}