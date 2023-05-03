import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const OtherLogins = () => {

    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignin = () => {
        signInWithGithub()
            .then(() => {
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="relative my-10">
                <hr className="border-b border-red-300" />
                <span className="bg-white px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Or</span>
            </div>

            <button onClick={handleGoogleSignin} className="w-full shadow shadow-gray-200 border bg-gray-100 font-semibold p-2 rounded-md flex justify-center gap-2 items-center">
                Continue With <FcGoogle className="text-xl" />
            </button>

            <button onClick={handleGithubSignin} className="w-full mt-3 shadow shadow-gray-200 border bg-gray-100 font-semibold p-2 rounded-md flex justify-center gap-2 items-center">
                Continue With <BsGithub className="text-xl" />
            </button>
        </>
    );
};

export default OtherLogins;