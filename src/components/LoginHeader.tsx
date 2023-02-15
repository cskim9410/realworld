import { NavLink } from "react-router-dom";
import useUser from "../hooks/useUser";
import { IoIosSettings } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri";
import useLoginStore from "../store/loginStore";

const LoginHeader = () => {
  const { user } = useUser();
  const { logoutAction } = useLoginStore();

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
          <RiEditBoxLine className="inline-block mr-1" />
          <span>New Article</span>
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
          <IoIosSettings className="inline-block mr-1" />
          <span>Settings</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/@${user?.username}`}
          className={({ isActive }) => {
            return `hover:text-hoverLink py-2 ml-4 ${
              isActive ? "text-active" : "text-unActive"
            }`;
          }}
        >
          <img
            src={user?.image}
            alt=""
            className="rounded-full w-[26px] h-[26px] inline-block mr-1"
          />
          <span>{user?.username}</span>
        </NavLink>
        <button
          onClick={() => {
            localStorage.removeItem("jwtToken");
            logoutAction();
          }}
        >
          로그아웃
        </button>
      </li>
    </ul>
  );
};
export default LoginHeader;
