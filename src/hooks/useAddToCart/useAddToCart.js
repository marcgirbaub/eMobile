import { useQuery } from "react-query";
import { addToCartQuery } from "../../utils/queryKeys";
import addMobileToCart from "../../api/addMobileToCart/addMobileToCart";

const useAddToCart = (id, colorCode, storageCode) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    addToCartQuery,
    () => addMobileToCart(id, colorCode, storageCode),
  );

  return { data, isLoading, isError, error, isFetching };
};

export default useAddToCart;
