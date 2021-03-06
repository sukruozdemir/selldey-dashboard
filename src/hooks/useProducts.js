import useSWR from "swr";
import { objectToQueryString } from "../utilities";

function useProducts(axios, queryParameters) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const url = queryParameters
    ? `/products${objectToQueryString(queryParameters)}`
    : "/products";

  return useSWR(url, fetcher);
}

export default useProducts;
