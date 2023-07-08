import image from "../../assets/images/learn-with-us.avif";

const LearnWithUs = () => {
  return (
    <div className="ui-container">
      <div
        className="h-[50vh] rounded-xl md:text-right flex items-center px-8 md:px-16 bg-cover bg-zinc-800 md:bg-black bg-blend-overlay md:bg-blend-difference"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white ml-auto md:w-2/3 xl:w-1/2">
            Learn how to prepare your food with us
          </h2>
          <button className="bg-red-800 text-white text-center px-4 py-2 lg:px-6 lg:py-3 rounded font-semibold mt-4 lg:mt-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnWithUs;
