import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import Mobile from "../../components/Mobile/Mobile";
import HomeStyled from "./HomeStyled";

const Home = () => {
  const { data, isLoading } = useGetMobiles();

  if (isLoading) {
    return <></>;
  }

  return (
    <HomeStyled className="container">
      <ul className="mobiles">
        {data.map((mobile) => (
          <li key={mobile.id}>
            <Mobile mobile={mobile} />
          </li>
        ))}
      </ul>
    </HomeStyled>
  );
};

export default Home;
