import { BsFillHeartFill, } from "react-icons/bs";
import { TbSoup } from "react-icons/tb";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {

    const { id, name, likes, recipes, years_experience, images } = chef;

    return (
        <div className="shadow-md rounded-lg ">

            <div className="h-[200px]">
                <LazyLoad height={200}>
                    <img className="w-full h-full rounded-t-lg object-cover" src={images.large} alt="" />
                </LazyLoad>
            </div>

            <div className="text-gray-500 p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                    <p className="flex gap-1 text-[18px]">
                        <BsFillHeartFill className="mt-[5px] text-xl text-red-200" />
                        <span>{likes}</span>
                    </p>
                </div>
                <p className="mt-3 italic">{years_experience} Years of Cooking Experience</p>

                <div className="flex justify-between mt-4 mb-2">
                    <p className="flex gap-2 items-center">
                        <TbSoup className="mb-[2px] text-xl" />
                        {recipes} Recipes
                    </p>
                    <Link to={`/chef/${id}`} className="shadow-md hover:bg-ui-red hover:text-white text-ui-red border border-ui-red transform duration-500 text-center whitespace-nowrap px-2 py-1 rounded-3xl font-semibold">View Recipes</Link>
                </div>
            </div>


        </div>
    );
};

export default ChefCard;