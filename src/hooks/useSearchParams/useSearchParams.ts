import { useSearchParams } from "react-router-dom";

function searchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAllParams = Object.fromEntries(searchParams.entries());

  return [searchParams, setSearchParams, getAllParams];
}

export default { useSearchParams: searchParams };
