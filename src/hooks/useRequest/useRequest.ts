import axios, { uploadAxios } from "../../services/client/client";
import { useState } from "react";
// import toast from "react-hot-toast";

import { REQUEST_STATUS } from "./useRequest.constants";
import { TApiRequestMetod } from "./useRequest.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import browserStorage from "./../../services/storage/browserStorage";

export const useRequest = (uploadUrl: boolean = false) => {
     const navigate = useNavigate();
     const [data, setData] = useState<any | undefined>();
     const [status, setStatus] = useState<string>(REQUEST_STATUS.initial);
     const [error, setError] = useState<any>();

     const get = async (url: string) => await sendRequest("get", url);

     const post = async (url: string, data: any) =>
          await sendRequest("post", url, data);

     const put = async (url: string, data: any) =>
          await sendRequest("put", url, data);

     const deleteRequest = async (url: string, data: any) =>
          await sendRequest("delete", url, { data });

     const sendRequest = async (
          method: TApiRequestMetod,
          url: string,
          data?: any
     ) => {
          setStatus(REQUEST_STATUS.loading);
          try {
               console.log(
                    `"request method: ", ${method} + ";\t url: ${url};\t body: ", ${data}, `
               );
               const res = await axios[method](url, data);
               if (res.status === 401) {
                    navigate("/login");
               }
               setData(res.data);
               setStatus(REQUEST_STATUS.success);
          } catch (err: any) {
               if (err?.response?.status === 401) {
                    navigate("/login");
               }
               setError(err);
               setStatus(REQUEST_STATUS.failed);
               
               toast.error(err?.response?.data?.message);
          }
     };

     return [
          {
               get,
               post,
               put,
               deleteRequest,
          },
          data,
          status,
          error,
     ];
};
