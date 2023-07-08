import { useQuery } from "react-query";
import { getMobilesQuery } from "../../utils/queryKeys";
import getMobiles from "../../api/getMobiles/getMobiles";

const useGetMobiles = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    getMobilesQuery,
    getMobiles,
  );

  return { data, isLoading, isError, error, isFetching };
};

export default useGetMobiles;
