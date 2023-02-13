import { Link, NavLink } from "react-router-dom";
import LoginHeader from "../LoginHeader";
import useUser from "./../../hooks/useUser";
import LogoutHeader from "./../LogoutHeader";
import { useEffect } from "react";

const Header = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="screen-width">
      <div className="flex items-center justify-between px-4 py-2 mx-auto">
        <Link to="/" className="text-green font-logo text-[1.5rem] pb-1">
          conduit
        </Link>
        {user ? <LoginHeader /> : <LogoutHeader />}
      </div>
    </nav>
  );
};
export default Header;
