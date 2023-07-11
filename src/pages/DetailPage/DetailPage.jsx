import { useParams } from "react-router-dom";
import useGetMobile from "../../hooks/useGetMobile/useGetMobile";
import DetailPageStyled from "./DetailPageStyled";
import Actions from "../../components/Actions/Actions";
import Description from "../../components/Description/Description";

const DetailPage = () => {
  const { id } = useParams();
  const { data: mobile, isLoading } = useGetMobile(id);

  if (isLoading) {
    return <></>;
  }

  return (
    <DetailPageStyled className="detail">
      <img
        src={mobile.imgUrl}
        alt={`The ${mobile.model} from ${mobile.brand}`}
        width={340}
        height={440}
        className="detail__image"
      />
      <div className="detail__info">
        <Description mobile={mobile} />
        <div className="horizontal-separator"></div>
        <Actions options={mobile.options} />
        <div className="horizontal-separator"></div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
