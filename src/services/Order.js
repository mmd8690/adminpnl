import HttpsService from "./httpsService";
export const getOrdersStatisticsService = () => {
    return HttpsService(`/admin/orders/orders_statistics`, "get");
  };
export const getThisYearOrdersService = () => {
    return HttpsService(`/admin/orders/this_year_orders`, "get");
  };