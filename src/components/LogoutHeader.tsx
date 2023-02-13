import { NavLink } from "react-router-dom";
const LogoutHeader = () => {
  return (
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
  );
};
export default LogoutHeader;
