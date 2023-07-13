import FindInPageIcon from "@mui/icons-material/FindInPage";
import { motion } from "framer-motion";
import ErrorIcon from "@mui/icons-material/Error";
import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import HomeStyled from "./HomeStyled";
import { useState } from "react";
import Search from "../../components/Search/Search";
import MobilesList from "../../components/MobilesList/MobilesList";
import SkeletonList from "../../components/SkeletonList/SkeletonList";
import { downVariants } from "../../styles/framerMotionVariants";

const Home = () => {
  const { data, isLoading, isError } = useGetMobiles();

  const [searchValue, setSearchValue] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  const onChangeInputHandler = ({ target: { value } }) => {
    setSearchValue(value);

    const filteredMobiles = [];

    data.forEach((mobile) => {
      const mobileModelAndBrand = `${mobile.brand} ${mobile.model}`;

      if (mobileModelAndBrand.toLowerCase().includes(value.toLowerCase())) {
        filteredMobiles.push(mobile);
      }

      setFilteredMobiles(filteredMobiles);
    });
  };

  if (isError) {
    return (
      <HomeStyled
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={downVariants}
      >
        <div className="top">
          <h1 className="top__slogan">
            Welcome to your one-stop shop for brand new phones!
          </h1>
          <Search
            onChangeHandler={onChangeInputHandler}
            searchValue={searchValue}
            className="top__search"
            disabled={isError}
          />
        </div>
        <div className="not-found">
          <ErrorIcon sx={{ fontSize: "100px", color: "red" }} />
          <span>There was an error loading the page. Please try again!</span>
        </div>
      </HomeStyled>
    );
  }

  if (isLoading) {
    return (
      <HomeStyled
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={downVariants}
      >
        <div className="top">
          <h1 className="top__slogan">
            Welcome to your one-stop shop for brand new phones!
          </h1>
          <Search
            onChangeHandler={onChangeInputHandler}
            searchValue={searchValue}
            className="top__search"
            disabled={isLoading}
          />
        </div>
        <SkeletonList />
      </HomeStyled>
    );
  }

  return (
    <HomeStyled
      component={motion.div}
      initial="initial"
      animate="animate"
      variants={downVariants}
    >
      <div className="top">
        <h1 className="top__slogan">
          Welcome to your one-stop shop for brand new phones!
        </h1>
        <Search
          onChangeHandler={onChangeInputHandler}
          searchValue={searchValue}
          className="top__search"
          disabled={isLoading}
        />
      </div>
      {filteredMobiles.length > 0 || searchValue ? (
        <MobilesList mobiles={filteredMobiles} />
      ) : (
        <MobilesList mobiles={data} />
      )}
      {filteredMobiles.length === 0 && searchValue && (
        <div className="not-found">
          <FindInPageIcon sx={{ fontSize: "100px" }} />
          <span>No mobiles found with your search criteria</span>
        </div>
      )}
    </HomeStyled>
  );
};

export default Home;
