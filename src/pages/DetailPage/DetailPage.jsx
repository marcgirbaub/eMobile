import { useParams } from "react-router-dom";
import useGetMobile from "../../hooks/useGetMobile/useGetMobile";

const DetailPage = () => {
  const { id } = useParams();

  const { isLoading } = useGetMobile(id);

  if (isLoading) {
    return <></>;
  }

  return <></>;
};

export default DetailPage;
