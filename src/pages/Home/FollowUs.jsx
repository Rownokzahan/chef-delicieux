import { Link } from "react-router-dom";

const followItems = [
  {
    image:
      "https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370859.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=ais",
    label: "Join FaceBook Group",
  },
  {
    image:
      "https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6411.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=sph",
    label: "Follow On Instaream",
  },
  {
    image:
      "https://img.freepik.com/free-photo/fresh-salad-with-turkey-eggs-vegetables_1220-5193.jpg?size=626&ext=jpg&ga=GA1.1.220986669.1676533650&semt=ais",
    label: "Youtube Channel",
  },
];

const FollowUs = () => {
  return (
    <div className="ui-container">
      <h3 className="text-center text-3xl font-semibold mb-12">Follow Us</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {followItems.map((item, index) => (
          <Link key={index} className="relative">
            <img src={item.image} alt="" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 outline outline-black py-5 px-2">
              <span className="bg-black bg-opacity-90 px-6 py-4 text-white uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
