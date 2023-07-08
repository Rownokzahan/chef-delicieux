import { useEffect, useState } from "react";
import LatestRecipeCard from "../../components/cards/LatestRecipeCard";
import Spinner from "../../components/Spinner";

const LatestRecipes = () => {
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/recipes/latest`)
      .then((res) => res.json())
      .then((data) => {
        setLatestRecipes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const hasLatestRecipes =
    latestRecipes && Array.isArray(latestRecipes) && latestRecipes?.length > 0;

  return (
    <div className="ui-container bg-black mt-24 pb-24">
      <h3 className="text-center text-3xl font-semibold mb-12 text-gray-100">
        Latest Recipes
      </h3>

      {isLoading ? (
        <Spinner fullscreen={false} />
      ) : hasLatestRecipes ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {latestRecipes.map((recipe) => (
            <LatestRecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))}
        </div>
      ) : (
        "No recipes found"
      )}
    </div>
  );
};

export default LatestRecipes;
