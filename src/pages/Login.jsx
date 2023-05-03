import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import OtherLogins from "../components/OtherLogins";

const Login = () => {

    const { login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(`Email: ${email}, Password: ${password}`);

        login(email, password)
            .then(result => {
                form.reset();
                navigate(from);
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="flex w-[16rem] md:w-[30rem] flex-col mx-auto my-10">
            <div className="text-center text-3xl font-medium">Log In</div>

            <p className='text-ui-red mt-2 text-center'>{errorMessage}</p>

            <form onSubmit={handleLogin}>
                <div className="relative mt-10">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-10">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <p className="mt-2 text-right cursor-pointer text-gray-400" >Forgot Password?</p>

                <div className="my-6">
                    <button type="submit" className="btn-red w-full">Log in</button>
                </div>
                <p className="text-center">
                    Don&apos;t have account?
                    <Link to="/register" className="ml-1 font-medium text-ui-red underline-offset-4 hover:underline" >Create One</Link>
                </p>
            </form>

            <OtherLogins/>
        </div>
    );
};

export default Login;