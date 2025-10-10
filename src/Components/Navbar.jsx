import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import github from "../assets/github.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white shadow-sm  p-4 md:px-42">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="nav-link font-semibold text-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className="nav-link font-semibold text-lg">
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className="nav-link  font-semibold text-lg"
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <div className="flex items-center gap-1">
              <img className="h-8 w-8" src={logo} alt="" />
              <p className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                AppVerse
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="nav-link font-semibold text-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="nav-link font-semibold text-lg">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className="nav-link  font-semibold text-lg"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/hafijurrahmanMILON"
            target="_blank"
            rel=""
            className="rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 btn flex items-center gap-1 bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]"
          >
            <img src={github} alt="GitHub" />
            <span className="text-white font-semibold text-lg">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <a
  href="https://github.com/hafijurrahmanMILON"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]"
>
  <img src={github} alt="GitHub" />
  <span className="text-white font-semibold text-lg">Contribute</span>
</a> */
}
