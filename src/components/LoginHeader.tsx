import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri";
import useLoginStore from "../store/loginStore";
import { useEffect, useState } from "react";

import { ResUser } from "../types/user";
import { customGet } from "../api/config";

const LoginHeader = () => {
  const { logoutAction, isLogin } = useLoginStore();
  const [user, setUser] = useState<ResUser>({
    user: {
      bio: "",
      username: "",
      image: "",
    },
  } as ResUser);

  useEffect(() => {
    (async () => {
      try {
        const data = await customGet<ResUser>("/api/user");
        setUser(data);
      } catch (error) {
        logoutAction();
        console.log(error);
      }
    })();
  }, [isLogin]);

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
        {user && (
          <NavLink
            to={`/profile/${user.user.username}`}
            className={({ isActive }) => {
              return `hover:text-hoverLink py-2 ml-4 ${
                isActive ? "text-active" : "text-unActive"
              }`;
            }}
          >
            <img
              src={user.user.image}
              alt=""
              className="rounded-full w-[26px] h-[26px] inline-block mr-1"
            />
            <span>{user.user.username}</span>
          </NavLink>
        )}
      </li>
    </ul>
  );
};
export default LoginHeader;
