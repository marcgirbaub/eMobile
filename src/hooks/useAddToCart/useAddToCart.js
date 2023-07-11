import { useQuery } from "react-query";
import { addToCartQuery } from "../../utils/queryKeys";
import addMobileToCart from "../../api/addMobileToCart/addMobileToCart";

const useAddToCart = (id, colorCode, storageCode) =>
  useQuery(
    [addToCartQuery, id, colorCode, storageCode],
    () => {
      const response = addMobileToCart(id, colorCode, storageCode);

      return response;
    },
    { enabled: false },
  );

export default useAddToCart;
