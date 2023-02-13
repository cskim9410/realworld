import { NavLink } from "react-router-dom";
const LoginHeader = () => {
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
          to="/editor"
          className={({ isActive }) => {
            return `hover:text-hoverLink py-2 ml-4 ${
              isActive ? "text-active" : "text-unActive"
            }`;
          }}
        >
          New Article
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) => {
            return `hover:text-hoverLink py-2 ml-4 ${
              isActive ? "text-active" : "text-unActive"
            }`;
          }}
        >
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/@"
          className={({ isActive }) => {
            return `hover:text-hoverLink py-2 ml-4 ${
              isActive ? "text-active" : "text-unActive"
            }`;
          }}
        >
          <img src="" alt="" />
          username
        </NavLink>
      </li>
    </ul>
  );
};
export default LoginHeader;
