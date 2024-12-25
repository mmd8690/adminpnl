import HttpsService from "./httpsService";

export const getProductsService = (page, countOnPage, searchChar) => {
  return HttpsService(`/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};
export const deleteProductsService = (Productid) => {
  return HttpsService(`/admin/products/${Productid}`, "delete");
};
export const addProduct = (data) => {
  return HttpsService("/admin/products", data, "post");
};
