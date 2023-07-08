const Spinner = ({ fullscreen = true }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullscreen ? "h-screen" : "h-16"
      }`}
    >
      <div className="relative m-auto">
        <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-ui-red border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
