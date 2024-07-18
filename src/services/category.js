import HttpsService from "./httpsService";

export const getCategoryService = (id)=>{
  return HttpsService(`/admin/categories${id ? `?parent=${id}` : ""}`, 'get');
};
