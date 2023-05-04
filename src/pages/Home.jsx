import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import banner from '../assets/images/banner1.avif'
import ChefCard from '../components/cards/ChefCard';
import Spinner from '../components/Spinner';
import LatestRecipeCard from '../components/cards/LatestRecipeCard';

const Home = () => {

    const navigation = useNavigation();
    const { chefs, latestRecipes } = useLoaderData();

    if (navigation.state === 'loading') {
        return <Spinner />
    }

    return (
        <>
            <div className="h-[89vh] bg-no-repeat bg-cover flex items-center bg-gray-500 bg-blend-multiply" style={{ backgroundImage: `url(${banner})` }}>
                <div className='text-white px-2 md:px-10 lg:px-20 align-middle md:w-1/2'>
                    <h1 className='text-6xl  mb-4'>𝑪𝒉𝒆𝒇&lsquo;𝒔 𝑫é𝒍𝒊𝒄𝒊𝒆𝒖𝒙</h1>
                    <p className='text-xl mb-6'>Explore the authentic French cuisine with our curated collection of recipes from the top French chefs.</p>
                    <button className="bg-red-800 text-white text-center px-6 py-3 rounded font-semibold">Discover Chefs</button>
                </div>
            </div>

            <div className='ui-container'>

                <h3 className='text-center text-3xl font-semibold mb-12'>Our Chefs</h3>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {chefs.map(chef => <ChefCard key={chef.id} chef={chef} />)}
                </div>
            </div>

            <div className='ui-container bg-black mt-24 pb-24'>
                <h3 className='text-center text-3xl font-semibold mb-12 text-gray-100'>Latest Recipes</h3>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {latestRecipes.map(recipe => <LatestRecipeCard key={recipe.recipe_id} recipe={recipe} />)}
                </div>
            </div>


            <div className='ui-container'>
                <h3 className='text-center text-3xl font-semibold mb-12'>Follow Us</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Link className='relative'>
                        <img src="https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370859.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=ais" alt="" />
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 outline outline-black py-5 px-2'>
                            <span className='bg-black bg-opacity-90 px-6 py-4 text-white uppercase whitespace-nowrap'>Join FaceBook Group</span>
                        </div>
                    </Link>
                    <Link className='relative'>
                        <img src="https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6411.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=sph" alt="" />
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 outline outline-black py-5 px-2'>
                            <span className='bg-black bg-opacity-90 px-6 py-4 text-white uppercase whitespace-nowrap'>Follow On Instaream</span>
                        </div>
                    </Link>
                    <Link className='relative'>
                        <img src="https://img.freepik.com/free-photo/fresh-salad-with-turkey-eggs-vegetables_1220-5193.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=ais" alt="" />
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 outline outline-black py-5 px-2'>
                            <span className='bg-black bg-opacity-90 px-6 py-4 text-white uppercase whitespace-nowrap'>Youtube Channel</span>
                        </div>
                    </Link>

                </div>
            </div>

        </>
    );
};

export default Home;