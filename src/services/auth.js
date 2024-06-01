import HttpsService from "./httpsService";
export const loginService = (values) => {
  return HttpsService("/auth/login", "post", {
    ...values,
    remember: values.remember ? 1 : 0,
  });
};

export const logoutService = ()=>{
    return HttpsService("/auth/logout", "get")
}

export const getUserService = ()=>{
    return HttpsService("/auth/user", "get")
}