import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const { register, setUserInfo } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const repeat_password = form.repeat_password.value;

        // console.log(`Name: ${name}, Photo: ${photo_url}, Email: ${email}, Password: ${password}, Repeat Password: ${repeat_password}`);

        if (!name) {
            setErrorMessage("Invalid name")
            return;
        }

        if (!photo_url) {
            setErrorMessage("Invalid photo url")
            return;
        }


        if (password !== repeat_password) {
            setErrorMessage('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password can not be less than 6 characters');
            return;
        }

        register(email, password)
            .then(result => {
                setUserInfo(name, photo_url)
                    .then(() => {
                        form.reset();
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })               
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="flex w-[16rem] md:w-[30rem] flex-col mx-auto my-10">
            <div className="text-center text-3xl font-medium">Register</div>

            <p className='text-ui-red text-center mt-2 font-semibold'>{errorMessage}</p>
            
            <form onSubmit={handleRegister}>
                <div className="relative mt-10">
                    <input type="text" name="name" id="name" placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Name</label>
                </div>

                <div className="relative mt-10">
                    <input type="text" name="photo_url" id="photo_url" placeholder="Photo Url" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="photo_url" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Photo Url</label>
                </div>

                <div className="relative mt-10">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>

                <div className="relative mt-10">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>

                <div className="relative mt-10">
                    <input type="password" name="repeat_password" id="repeat_password" placeholder="Confirm password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required/>
                    <label htmlFor="repeat_password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirm password</label>
                </div>

                <div className="mt-10">
                    <button type="submit" className="btn-red w-full">Register</button>
                </div>
                <p className="text-center mt-6">
                    Already have an account?
                    <Link to="/login" className="ml-1 font-medium text-ui-red underline-offset-4 hover:underline" >Log in</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;