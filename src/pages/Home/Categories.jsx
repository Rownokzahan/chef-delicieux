import appetizers from "../../assets/images/categories/appetizers.jpg";
import beef from "../../assets/images/categories/beef.jpg";
import chicken from "../../assets/images/categories/chicken.jpg";
import vegeterian from "../../assets/images/categories/vegeterian.jpg";
import desserts from "../../assets/images/categories/desserts.jpg";

const categories = [
  {
    image: appetizers,
    label: "Appetizers",
  },
  {
    image: beef,
    label: "Beef",
  },
  {
    image: chicken,
    label: "Chicken",
  },
  {
    image: vegeterian,
    label: "Vegeterian",
  },
  {
    image: desserts,
    label: "Desserts",
  },
];

const Categories = () => {
  return (
    <div className="ui-container">
      <h3 className="text-center text-3xl font-semibold mb-16">
        Recipe Categories
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-16">
        {categories.map((category, index) => (
          <div key={index} className="group relative">
            <img
              src={category.image}
              className="rounded-full group-hover:rotate-3 duration-500"
              alt=""
            />
            <div className="overlay absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <h4 className="text-center font-medium text-lg mt-4">
              {category.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
