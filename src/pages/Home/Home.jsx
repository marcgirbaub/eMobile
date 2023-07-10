import FindInPageIcon from "@mui/icons-material/FindInPage";
import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import HomeStyled from "./HomeStyled";
import { useState } from "react";
import Search from "../../components/Search/Search";
import MobilesList from "../../components/MobilesList/MobilesList";

const Home = () => {
  const { data, isLoading } = useGetMobiles();

  const [searchValue, setSearchValue] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  const onChangeInputHandler = ({ target: { value } }) => {
    setSearchValue(value);

    const filteredMobiles = [];

    data.forEach((mobile) => {
      if (
        mobile.brand.toLowerCase().includes(value.toLowerCase()) ||
        mobile.model.toLowerCase().includes(value.toLowerCase())
      ) {
        filteredMobiles.push(mobile);
      }

      setFilteredMobiles(filteredMobiles);
    });
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <HomeStyled>
      <div className="top">
        <h1 className="top__slogan">
          Welcome to your one-stop shop for brand new phones!
        </h1>
        <Search
          onChangeHandler={onChangeInputHandler}
          searchValue={searchValue}
          className="top__search"
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
