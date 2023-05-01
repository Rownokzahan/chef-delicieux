import banner from '../assets/images/banner1.avif'
import ChefCard from '../components/cards/ChefCard';

const Home = () => {
    return (
        <>
            <div className="h-[89vh] bg-no-repeat bg-cover flex items-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className='text-white px-2 md:px-10 lg:px-20 align-middle md:w-1/2'>
                    <h1 className='text-6xl  mb-4'>𝑪𝒉𝒆𝒇&lsquo;𝒔 𝑫é𝒍𝒊𝒄𝒊𝒆𝒖𝒙</h1>
                    <p className='text-xl mb-6'>Explore the authentic French cuisine with our curated collection of recipes from the top French chefs.</p>
                    <button className="bg-red-800 text-white text-center px-6 py-3 rounded font-semibold">Discover Chefs</button>
                </div>
            </div>           

            <div className='ui-container'>

                <h3 className='text-center text-3xl font-semibold uppercase mb-1'>Our Chefs</h3>
                <div className='border-b-2 border-ui-red w-20 mx-auto mb-16'></div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                    <ChefCard />
                </div>
            </div>

        </>
    );
};

export default Home;