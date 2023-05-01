import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-[84vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;