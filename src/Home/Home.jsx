import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Carusol from "../Home/Carusol";
import Cards from "./Cards";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const carde = useLoaderData();
  // console.log(carde)

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="zoom-in" className="m-auto ">
      <Helmet>
        <title> Family Home || Home</title>
      </Helmet>
      <Carusol></Carusol>

      <div data-aos="zoom-in" className="w-4/5 mx-auto my-5 text-center">
        <h2 className="md:text-4xl ">our services</h2>
        <p>Would you be interested in purchasing nad rent any property</p>
      </div>

      <div className="flex flex-wrap gap-5 ">
        {carde.map((carde) => (
          <Cards carde={carde} key={carde.id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
