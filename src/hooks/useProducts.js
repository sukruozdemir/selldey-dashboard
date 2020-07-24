import useSWR from "swr";

function useProducts(axios) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  return useSWR("/products", fetcher);
}

export default useProducts;
