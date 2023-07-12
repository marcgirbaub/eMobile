import Skeleton from "@mui/material/Skeleton";
import SkeletonListStyled from "./SkeletonListStyled";

const SkeletonList = () => {
  const renderSkeletonCards = (numberOfSkeletons) => {
    const skeletonCards = [];
    for (let i = 0; i < numberOfSkeletons; i++) {
      skeletonCards.push(
        <div className="skeleton" key={i}>
          <Skeleton variant="rectangular" height={266} width={"100%"} />
          <Skeleton width={"50%"} height={30} />
          <Skeleton width={"20%"} height={20} sx={{ marginBottom: 2 }} />
        </div>,
      );
    }

    return skeletonCards;
  };

  return <SkeletonListStyled>{renderSkeletonCards(12)}</SkeletonListStyled>;
};

export default SkeletonList;
