import Banner from "./Banner";
import OurChefs from "./OurChefs";
import LatestRecipes from "./LatestRecipes";
import FollowUs from "./FollowUs";
import Categories from "./Categories";
import LearnWithUs from "./LearnWithUs";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <OurChefs />
      <LearnWithUs />
      <LatestRecipes />
      <FollowUs />
    </>
  );
};

export default Home;
