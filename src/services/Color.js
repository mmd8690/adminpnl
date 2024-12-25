import HttpsService from "./httpsService"

export const getColorService=()=>{
    return HttpsService("/admin/colors", "get")
}
export const addNewColorService = (data) => {
    return HttpsService("/admin/colors", "post", data);
  };
  
  export const editColorService = (colorId, data)=>{
    return HttpsService(`/admin/colors/${colorId}`, "put", data);
  }
  
  export const deleteColorService = (colorId)=>{
    return HttpsService(`/admin/colors/${colorId}`, "delete");
  }