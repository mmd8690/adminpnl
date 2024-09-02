import HttpsService from "./httpsService";

export const getCategoryAttrsService = (categoryId) => {
  return HttpsService(`/admin/categories/${categoryId}/attributes`, "get");
};

export const addCategoryAttrService = (categoryId, data) => {
  return HttpsService(
    `/admin/categories/${categoryId}/attributes`,
    "post",
    data
  );
};
export const editCategiryAttrservice = (categoryId, data) => {
  return HttpsService(
    `/admin/categories/attributes/${categoryId}`,
    "put",
    data
  );
};

export const deleteCategoryService = (attrId) => {
  return HttpsService(`/admin/categories/attributes/${attrId}`, "delete");
};
