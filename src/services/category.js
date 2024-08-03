import HttpsService from "./httpsService";

export const getCategoryService = (id)=>{
  return HttpsService(`/admin/categories${id ? `?parent=${id}` : ""}`, 'get');
};

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
