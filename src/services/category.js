import HttpsService from "./httpsService";

export const getCategoryService = (id=null)=>{
  return HttpsService(`/admin/categories${id ? `?parent=${id}` : ""}`, 'get');
};
export const getSingleCategory =(id)=>{
  return HttpsService(`/admin/categories/${id}`)
}
export const deleteCategoryService = (id)=>{
  return HttpsService(`/admin/categories/${id}`, 'delete');
}
export const createNewCategoryService = (data) => {
  if (data.image) {
      let formdata = new FormData();
      formdata.append('parent_id', data.parent_id)
      formdata.append('title', data.title)
      formdata.append('description', data.description)
      // formdata.append('image', data.image)
      formdata.append('is_active', data.is_active)
      formdata.append('showc_in_menu', data.showc_in_menu)
      data = formdata
  }
  return HttpsService('/admin/categories', 'post', data);
}
