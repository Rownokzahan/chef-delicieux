import { BsTwitter } from "react-icons/bs";
import { TbChefHat } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-black px-2 mt-24 md:px-10 lg:px-20">
            <div className="py-12 text-center">
                <a href="/" className="flex justify-center items-center text-3xl md:text-4xl font-semibold mb-3 text-gray-200">
                    <TbChefHat /> Chef&apos;s Délicieux
                </a>
                <div className="mx-2 md:mx-16 lg:mx-32 text-gray-500">
                    <p className="mb-2">
                        <span className="text-xl">❝</span>
                        Discover the Magic of French Cuisine with Expertly Curated Recipes
                        <span className="text-xl">❞</span>
                    </p>
                    <p>
                        Indulge in the flavors of France with our expertly curated selection of French recipes. Our site is dedicated to bringing you the best of French cuisine, with a focus on showcasing the skills of talented French chefs.
                    </p>
                </div>
            </div>
            <hr className="border-b border-gray-900" />
            <div className=" py-8 flex flex-col gap-6 md:items-center justify-between md:flex-row bg-black text-neutral-300">
                <p className="font-light text-sm">Privacy Policy | Terms & Conditions</p>
                <p className="font-light text-sm"> © 2023 Chef&apos;s Délicieux, All Rights Reserved</p>
                <div className="flex gap-2 items-center">
                    <span className="uppercase mr-2"> Follow us </span>
                    <BsTwitter className="hover:text-ui-red" />
                    <FaFacebookF className="hover:text-ui-red" />
                    <AiFillInstagram className="hover:text-ui-red" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;