import HttpsService from "./httpsService";

export const getProductsService = (page, countOnPage, searchChar) => {
  return HttpsService(`/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};
export const deleteProductsService = (Productid) => {
  return HttpsService(`/admin/products/${Productid}`, "delete");
};
export const createNewProductService = (data)=>{
  return HttpsService('/admin/products', 'post',  data)
}
export const editProductService = (productId, data)=>{
  return HttpsService(`/admin/products/${productId}`, 'put', data)
}
export const getFewerProductsService = ()=>{
  return HttpsService(`/admin/products/fewer_products`, 'get')
}
export const toggleNotificationService = (productId)=>{
  return HttpsService(`/admin/products/toggle_notification/${productId}`, 'get')
}
export const addProductAttrService = (productId, data)=>{
  return HttpsService(`/admin/products/${productId}/add_attr`, 'post', data)
}