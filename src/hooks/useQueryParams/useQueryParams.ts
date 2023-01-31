import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useQueryParams() {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => new URLSearchParams(search), [search]);

  const getParam = (name: string) => {
    const value = params.get(name);
    if (value) return JSON.parse(value);
  };

  const setParam = (name: string, value: any, noQuotes?: boolean) => {
    const stringified = JSON.stringify(value);
    value !== undefined ? params.set(name, stringified) : params.delete(name);
    let newParams = params.toString();
    navigate(`${pathname}?${newParams}`);
  };

  const getAllParams = () => {
    const res: any = {};
    params.forEach((value, name) => {
      res[name] = JSON.parse(value);
    });
    return res;
  };

  return {
    getParam,
    setParam,
    getAllParams,
  };
}