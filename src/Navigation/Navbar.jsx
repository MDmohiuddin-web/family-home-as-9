import { NavLink, Link } from "react-router-dom";
import UseAuth from "../HOOK/UseAuth";


const Navbar = () => {
  const { user, logout } = UseAuth();
  const links = (
    <>
      <li className="hover:text-my_color-400">
        <NavLink to="/">Home </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/login">Log in</NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/signup">sign up</NavLink>
      </li>
      {/* <li className="hover:text-my_color-400">
        <NavLink to="/Profile">Profile</NavLink>
      </li> */}

      {user && (
        <>
          <li className="hover:text-my_color-400">
            <NavLink to="/Profile">Profile</NavLink>
          </li>
          {/* <li className="hover:text-my_color-400">
            <NavLink to="/info">details</NavLink>
          </li> */}
        </>
      )}
    </>
  );

  const handellogout = () => {
    logout();
  };
  return (
    <>
      <div className=" my-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl md:text-4xl hover:text-my_color-400">
            Family <span className="text-my_color-400"> Home</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className={`navbar-end `}>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={user?.displayName}
                      src={user?.photoURL || 'https://source.unsplash.com/150x150/?portrait?3'}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/Profile" className="btn btn-sm  btn-ghost">
                      {user?.displayName || "user name not found"}
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handellogout}
                      className="btn btn-sm  btn-ghost"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
