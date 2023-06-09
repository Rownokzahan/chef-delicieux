import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {

    const { recipe_name, image, ingredients, cooking_method, rating } = recipe
    const [favourite, setFavourite] = useState(false)

    const handleAddToFavourite = () => {
        setFavourite(true)
        toast("❤️‍🔥 Added To Favourites !");
    }

    return (
        <div className="rounded-lg lg:grid grid-cols-4 bg-black shadow shadow-gray-100 relative">
            <img className="w-full lg:rounded-r-none rounded-lg mx-auto" src={image} alt="" />

            <div className="col-span-3 space-y-2 text-gray-400 text-justify p-6">
                <h3 className="text-2xl font-medium text-white">{recipe_name}</h3>
                <p>
                    <span className="font-semibold">Ingredients : </span>
                    {ingredients.join(", ")}
                </p>
                <p>
                    <span className="font-semibold">Instractions : </span>
                    {cooking_method.slice(0, 200)}
                    ... <span className="text-gray-500">See more</span>
                </p>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Ratings : </span>
                    <Rating style={{ maxWidth: 70 }} value={rating} readOnly/>
                </div>
            </div>

            <button
                onClick={handleAddToFavourite}
                className="absolute top-0 right-0 text-ui-red p-1"
                data-tooltip-id="my-tooltip"
                data-tooltip-content= "Add Favourite"
                data-tooltip-place="bottom"
                disabled={favourite}
            >
                {favourite ? <AiFillHeart className="text-3xl" /> : <AiOutlineHeart className="text-3xl" />}
                <Tooltip className="text-sm rounded" id="my-tooltip" />
            </button>
        </div>
    );
};

export default RecipeCard;