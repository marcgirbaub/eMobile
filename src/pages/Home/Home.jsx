import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import Mobile from "../../components/Mobile/Mobile";
import HomeStyled from "./HomeStyled";
import { useState } from "react";
import Search from "../../components/Search/Search";

const Home = () => {
  const { data, isLoading } = useGetMobiles();

  const [searchValue, setSearchValue] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  const onChangeHandler = ({ target: { value } }) => {
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
          onChangeHandler={onChangeHandler}
          searchValue={searchValue}
          className="top__search"
        />
      </div>
      {filteredMobiles.length > 0 || searchValue ? (
        <ul className="mobiles">
          {filteredMobiles.map((mobile) => (
            <li key={mobile.id}>
              <Mobile mobile={mobile} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mobiles">
          {data.map((mobile) => (
            <li key={mobile.id}>
              <Mobile mobile={mobile} />
            </li>
          ))}
        </ul>
      )}
    </HomeStyled>
  );
};

export default Home;
