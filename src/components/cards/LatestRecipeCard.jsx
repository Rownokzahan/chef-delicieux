import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { BsFillShareFill, BsHeart } from "react-icons/bs";

const LatestRecipeCard = ({ recipe }) => {

    const { image, recipe_name, rating } = recipe

    return (
        <Link className='relative group border'>
            <img className="h-full w-fit" src={image} alt="" />
            <div className='absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-70 opacity-0 duration-300 group-hover:opacity-100 transition-opacity'>
                <div>
                    <h3 className="text-2xl font-semibold">{recipe_name}</h3>
                    <div className="flex items-center gap-1 mt-2">Ratings : <Rating style={{ maxWidth: 70 }} value={rating} readOnly /></div>                    
                </div>

                <div className="absolute text-xl p-2 top-0 bottom-0 right-0 flex flex-col justify-between">
                    <BsHeart />
                    <BsFillShareFill/>
                </div>
            </div>
        </Link>
    );
};

export default LatestRecipeCard;