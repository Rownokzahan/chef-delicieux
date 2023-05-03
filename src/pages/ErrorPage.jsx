import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../assets/images/error2.png';

const ErrorPage = () => {

    const { error } = useRouteError();
    const errorMessage = error?.message || "Oops! We couldn't find the page you were looking for. Please check the URL and try again.";

    return (
        <div className='flex justify-center items-center h-screen'>
            <img className='h-96' src={"https://img.freepik.com/free-psd/stressed-chef-wearing-uniform_1154-373.jpg?w=740&t=st=1683067482~exp=1683068082~hmac=53ec0771dbfdbc41eeb96d607182347e518240834bd28404888cb4f62f8ce2f3"} alt="" />
            <div className='max-w-lg'>
                <div className='flex text-7xl md:text-9xl font-extrabold gap-1 mb-8 '>
                    4<img src={errorImage} alt="Error" className="w-28 mt-3" />4
                </div>
                <p className="text-2xl text-ui-dark font-bold mb-8">{errorMessage}</p>
                <Link to="/">
                    <button className="btn-red">
                        Go back to homepage
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;

