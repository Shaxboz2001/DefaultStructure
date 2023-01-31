import { TApiRequestStatus } from "hooks/useRequest/useRequest.types";
export const REQUEST_STATUS: { [key: string]: TApiRequestStatus } = {
     initial: "INITIAL",
     success: "SUCCESS",
     failed: "FAILED",
     loading: "LOADING",
};
