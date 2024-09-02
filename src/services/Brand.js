import HttpsService from "./httpsService"

export const getBrandService=()=>{
    return HttpsService("/admin/brands", "get")
}
export const addNewBrandService = (data) => {
    if (data.logo) {
      let formdata = new FormData();
      formdata.append("original_name", data.original_name);
      formdata.append("persian_name", data.persian_name);
      formdata.append("descriptions", data.descriptions);
      // formdata.append("logo", data.logo);
      data = formdata;
    }
    return HttpsService("/admin/brands", "post", data);
  };
  export const editBrandService=(brandid , data)=>{
    return HttpsService(`/admin/brands/${brandid}`, "post" , data)
  }
  export const deleteBrandService=(brandid)=>{
    return HttpsService(`/admin/brands/${brandid}` , "delete")
  }