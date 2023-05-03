import { useLoaderData, useNavigation } from "react-router-dom";
import banner from '../assets/images/banner2.avif'
import RecipeCard from "../components/cards/RecipeCard";
import Spinner from "../components/Spinner";

const Chef = () => {
    
    const { chef, recipes } = useLoaderData()
    const { name, bio, likes, recipes: total_recipes, years_experience, images } = chef
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Spinner />
    }

    return (
        <>
            <div className="px-2 py-20 md:px-10 lg:px-20 bg-no-repeat bg-gray-500 bg-cover bg-blend-overlay bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-black bg-opacity-90 rounded-lg">
                    <img src={images?.large} className="w-full rounded-lg xl:rounded-r-none" alt="" />
                    <div className="text-white p-5">
                        <h1 className="text-5xl mb-6 text-white">{name}</h1>
                        <p className="mb-6 text-lg">{bio}</p>

                        <div className="text-lg space-y-4">
                            <p>Years Of Experience : {years_experience} Years</p>
                            <p>Total Likes : {likes}</p>
                            <p>Total Recipes : {total_recipes}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ui-container grid gap-8">
                {recipes.map(recipe => <RecipeCard key={recipe.recipe_id} recipe={recipe} />)}
            </div>

        </>
    );
};

export default Chef;