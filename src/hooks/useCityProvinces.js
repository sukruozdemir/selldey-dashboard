import useSWR from "swr";
import { objectToQueryString } from "../utilities";

function useCityProvinces(axios, cityId, queryParameters) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  return useSWR(
    cityId
      ? `/cities/${cityId}/provinces/${objectToQueryString(queryParameters)}`
      : null,
    fetcher,
  );
}

export default useCityProvinces;
