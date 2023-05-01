import { BsTwitter } from "react-icons/bs";
import { TbChefHat } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="px-2 py-8 flex flex-col gap-6 md:items-center justify-between md:flex-row md:px-10 bg-black text-neutral-300">
            <a className='font-bold text-xl flex gap-1 items-center text-white' href='/'>
                <TbChefHat /> Chef&apos;s Délicieux
            </a>
            <p className="font-light text-sm"> © 2023 Chef&apos;s Délicieux, All Rights Reserved</p>
            <div className="flex gap-2 items-center">
                <span className="uppercase mr-2"> Follow us </span>
                <BsTwitter className="hover:text-ui-red" />
                <FaFacebookF className="hover:text-ui-red" />
                <AiFillInstagram className="hover:text-ui-red" />
            </div>
        </footer>
    );
};

export default Footer;