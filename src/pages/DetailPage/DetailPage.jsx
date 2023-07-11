import { useParams, Link } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useGetMobile from "../../hooks/useGetMobile/useGetMobile";
import DetailPageStyled from "./DetailPageStyled";
import Actions from "../../components/Actions/Actions";
import Description from "../../components/Description/Description";

const DetailPage = () => {
  const { id } = useParams();
  const { data: mobile, isLoading, isError } = useGetMobile(id);

  if (isError) {
    return (
      <DetailPageStyled>
        <Link to={".."} className="back-button">
          <ArrowBackIcon />
        </Link>
        <div className="error-feedback">
          <ErrorIcon sx={{ fontSize: "100px", color: "red" }} />
          <span>There was an error loading the page. Please try again!</span>
        </div>
      </DetailPageStyled>
    );
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <DetailPageStyled className="detail">
      <Link to={".."} className="back-button">
        <ArrowBackIcon />
      </Link>
      <div className="main-container">
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
          <Actions options={mobile.options} mobileId={id} />
          <div className="horizontal-separator"></div>
        </div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
