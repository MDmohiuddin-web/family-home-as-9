import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-down" className="capitalize w-[90%] m-auto font-ROboto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Bounce}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
