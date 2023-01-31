import { ReactNode } from "react";

export type IErrors =
  | {
      [key: string]: IFieldError;
    }
  | {};

export interface IFieldError {
  type: TFieldErrorType;
  message: string;
  ref: any;
}

export type TFieldErrorType = "required" | "pattern" | "min" | "max";

export interface IFormNames {
  [key: string]: string;
}

export interface ICustomProviderProps {
  children: ReactNode;
}
