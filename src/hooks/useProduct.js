import useSWR from "swr";

function useProducts(axios, productId) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  return useSWR(`/products/${productId}`, fetcher);
}

export default useProducts;
