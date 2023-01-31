import { useQuery, UseQueryOptions } from "react-query";
import { useMutation, UseMutationOptions } from "react-query";
import { AxiosResponse } from "axios";
import axios from "services/client/client";
import { TApiRequestMetod } from "hooks/useRequest/useRequest.types";
const useApi = <Data = any, Error = any>(
     url: string,
     params: object = {},
     options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
     // @ts-ignore
     useQuery([url, params], async () => axios.get<Data>(url, { params }), {
          ...options,
     });

const useApiMutation = <Variables = any, Response = any, Error = any>(
     url: string,
     method: TApiRequestMetod,
     // @ts-ignore
     options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
     useMutation<AxiosResponse<Response>, Error, Variables>(
          (data) => {
               const response = axios({ url, method, data });
               return response;
          },
          // @ts-ignore
          { ...options }
     );

const useApiMutationWithId = <Variables = any, Response = any, Error = any>(
     url: string,
     method: TApiRequestMetod,
     // @ts-ignore
     options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
     useMutation<AxiosResponse<Response>, Error, Variables>(
          ({ id, data }: any) => {
               url = id ? url + "?id=" + id : url;
               const response = axios({ url, method, data });
               return response;
          },
          // @ts-ignore
          { ...options }
     );

export { useApi, useApiMutation, useApiMutationWithId };
