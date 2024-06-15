import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import PropTypes from "prop-types";

const Privaterawout = ({ children }) => {
  // console.log(children);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  // if (loding) {
  //   return (
  //     <>
  //       <div className="w-96 h-16 border-4 border-dashed rounded-full animate-spin border-my_color-400 "></div>
  //     </>
  //   );
  // }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

export default Privaterawout;

Privaterawout.propTypes = {
  children: PropTypes.node,
};
