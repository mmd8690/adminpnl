import HttpsService from "./httpsService"



export const getCategoryAttrsService = (categoryId)=>{
    return HttpsService(`/admin/categories/${categoryId}/attributes`, 'get')
}

export const addCategoryAttrService = (categoryId, data)=>{
    return HttpsService(`/admin/categories/${categoryId}/attributes`, 'post', data)
}