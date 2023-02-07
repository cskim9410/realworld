import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between px-4 py-2 mx-auto">
        <Link to="/#/" className="text-green font-logo text-[1.5rem] pb-1">
          conduit
        </Link>
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `hover:text-hoverLink py-2 ${
                  isActive ? "text-active" : "text-unActive"
                }`;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return `hover:text-hoverLink py-2 ml-4 ${
                  isActive ? "text-active" : "text-unActive"
                }`;
              }}
            >
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => {
                return `hover:text-hoverLink py-2 ml-4 ${
                  isActive ? "text-active" : "text-unActive"
                }`;
              }}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
