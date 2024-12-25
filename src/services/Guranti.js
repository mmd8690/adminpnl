import HttpsService from "./httpsService";

export const getGuaranteesService = () => {
  return HttpsService("/admin/guarantees", "get");
};
export const addGuaranteesService = (data) => {
  return HttpsService("/admin/guarantees", "post", data);
};
export const editGuaranteeService = (guaranteeId, data) => {
  return HttpsService(`/admin/guarantees/${guaranteeId}`, "put", data);
};
export const deleteGurantiService=(guaranteeId)=>{
  return HttpsService(`/admin/guarantees/${guaranteeId}`, "delete", )
}