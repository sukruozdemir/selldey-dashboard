import useSWR from "swr";
import { objectToQueryString } from "../utilities";

function useCities(axios, queryParameters) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const url = queryParameters
    ? `/cities${objectToQueryString(queryParameters)}`
    : "/cities";
  return useSWR(url, fetcher);
}

export default useCities;
