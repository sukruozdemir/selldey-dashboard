import useSWR from "swr";

import { fetcher } from "../libs/fetcher";

function useProducts() {
  return useSWR("http://localhost:5001/v1/products", fetcher);
}

export default useProducts;
