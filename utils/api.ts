import axios from "@/utils/axios";

export const generateImage = (payload: { prompt: string, samples: string }) => axios.post("/api/image/generate", payload)
export const toggleCollection = (payload: { img_url: string, prompt: string, id: string }) => axios.post("/api/image/collection", payload);
export const getCollection = () => axios.get("/api/image/collection");
export const getUserDetails = () => axios.get("/api/user");
export const deleteImage = (imageId: number) => axios.delete(`/api/image/delete/${imageId}`);
export const createOrder = (order_price: number, product_id: string) => axios.post("/api/paypal/subscription/create", { order_price, product_id});
export const captureOrder = (order_id: string) => axios.post("/api/paypal/captureorder", { order_id });
export const getOrders = () => axios.get("/api/account/orders");
export const updatePassword = (payload: any) => axios.post("/api/account/password_update", payload);
export const deleteAccount = (payload: any) => axios.post("/api/account/account_delete", payload);
export const getCurrentSubscriptionDetails = () => axios.get("/api/account/subscription_details");
export const getImageDetailsById = (params: any) => axios.get("/api/image/details", { params });
export const verifyForgotPasswordToken = (token: string) => axios.get(`/api/account/forgot_password/verify/${token}`);
export const updateForgotPassword = (payload: any) => axios.post("/api/account/forgot_password/new", payload);
export const sendForgotPasswordLink = (payload: any) => axios.post("/api/account/forgot_password/", payload);
export const validateUser = () => axios.get('/api/user/validate');
export const userSignIn = (payload: any) => axios.post("/api/user/signin", payload);
export const userRegister = (payload: any) => axios.post("/api/user/register", payload);
export const userGoogleSignIn = (payload: { token: string }) => axios.post("/api/user/signin/google", payload);
export const userGoogleRegister = (payload: { token: string }) => axios.post("/api/user/register/google", payload);