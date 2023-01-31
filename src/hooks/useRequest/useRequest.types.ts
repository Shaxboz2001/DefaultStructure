export interface DataType {
     code: number;
     message: string;
     data: any;
}

export type TApiRequestMetod = "get" | "post" | "put" | "delete" | "patch";

export interface IResponseData<I> {
     code: number;
     message: string;
     data?: I;
}

export interface IResponseTableData<I> {
     code: number;
     message: string;
     data?: {
          data: I;
          total: number;
     };
}

export type TApiRequestStatus = "INITIAL" | "LOADING" | "SUCCESS" | "FAILED";
