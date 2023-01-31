import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import browserStorage from "../storage/browserStorage";

const config: AxiosRequestConfig = {
     baseURL: process.env.REACT_APP_BASE_URL,
     timeout: 15000,
     headers: {
          Authorization: `Bearer ${browserStorage.get<string | undefined>(
               "token"
          )}`,
     },
};

axios.interceptors.request.use(
     (config: any) => {
          return {
               ...config,
               baseURL: process.env.REACT_APP_BASE_URL,
               timeout: 31000,
               headers: {
                    Authorization: `Bearer ${browserStorage.get<
                         string | undefined
                    >("token")}`,
                    lang: browserStorage.get<string | undefined>("i18nextLng"),
               },
          };
     },
     (error) => {
          return Promise.reject(error);
     }
);

const uploadAxios = axios.create({
     baseURL: "http://5.161.134.59:8071",
     headers: {
          lang: browserStorage.get<string | undefined>("i18nextLng") || "",
     },
});
export const axiosInstance: AxiosInstance = axios.create(config);

export { uploadAxios };
export default axios;
