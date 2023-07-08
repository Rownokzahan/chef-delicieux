import Banner from "./Banner";
import OurChefs from "./OurChefs";
import LatestRecipes from "./LatestRecipes";
import FollowUs from "./FollowUs";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <OurChefs />
      <LatestRecipes />
      <FollowUs />
    </>
  );
};

export default Home;
