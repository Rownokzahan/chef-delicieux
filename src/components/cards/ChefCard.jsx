import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbSoup } from "react-icons/tb";

const ChefCard = () => {
    return (
        <div className="shadow-md p-4 rounded-lg ">

            <div className="text-center">
                <img className="w-24 rounded-full mx-auto border-2 border-white outline outline-gray-300" src={`https://randomuser.me/api/portraits/men/47.jpg`} alt="" />

                <div>
                    <h3 className="text-xl font-bold mt-4 mb-1 text-gray-800">John Doe</h3>
                    <p className="text-gray-400 font-semibold italic">3 Years of Experience</p>

                    <div className="flex justify-between my-4 text-gray-400">
                        <p className="flex gap-2 items-center">
                            <TbSoup className="mb-[2px] text-xl" />
                            12
                        </p>
                        <p className="flex gap-2 items-center">
                            <BsFillSuitHeartFill className="mt-[2px] text-xl" />
                            12
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="shadow-md hover:bg-ui-red hover:text-white text-ui-red border border-ui-red transform duration-500 text-center px-6 py-2 rounded-3xl font-semibold">View Recipes</button>
            </div>
        </div>
    );
};

export default ChefCard;