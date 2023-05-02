import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbSoup } from "react-icons/tb";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {

    const { id, name, likes, recipes, years_experience, images } = chef;

    console.log(chef);

    return (
        <div className="shadow-md p-4 rounded-lg ">

            <div className="text-center">
                <img className="w-24 rounded-full mx-auto border-2 border-white outline outline-gray-300" src={images.small} alt="" />

                <div>
                    <h3 className="text-xl font-bold mt-4 mb-1 text-gray-800">{name}</h3>
                    <p className="text-gray-400 font-semibold italic">{years_experience} Years of Experience</p>

                    <div className="flex justify-between my-4 text-gray-400">
                        <p className="flex gap-2 items-center">
                            <TbSoup className="mb-[2px] text-xl" />
                            {recipes}
                        </p>
                        <p className="flex gap-2 items-center">
                            <BsFillSuitHeartFill className="mt-[2px] text-xl" />
                            {likes}
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Link to={`/chef/${id}`} className="shadow-md hover:bg-ui-red hover:text-white text-ui-red border border-ui-red transform duration-500 text-center px-6 py-2 rounded-3xl font-semibold">View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefCard;