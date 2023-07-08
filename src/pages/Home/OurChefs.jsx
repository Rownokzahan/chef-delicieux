import { useEffect, useState } from "react";
import ChefCard from "../../components/cards/ChefCard";
import Spinner from "../../components/Spinner";

const OurChefs = () => {
  const [chefs, setChefs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs`)
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const hasChefs = chefs && Array.isArray(chefs) && chefs?.length > 0;

  return (
    <div className="ui-container">
      <h3 className="text-center text-3xl font-semibold mb-12">Our Chefs</h3>
      {isLoading ? (
        <Spinner fullscreen={false} />
      ) : hasChefs ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      ) : (
        "No chef found"
      )}
    </div>
  );
};

export default OurChefs;
