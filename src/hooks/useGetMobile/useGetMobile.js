import { useQuery } from "react-query";
import { getMobileQuery } from "../../utils/queryKeys";
import getMobile from "../../api/getMobile/getMobile";

const useGetMobile = (id) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    getMobileQuery,
    () => getMobile(id),
  );

  return { data, isLoading, isError, error, isFetching };
};

export default useGetMobile;
