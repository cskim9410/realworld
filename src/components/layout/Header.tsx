import { Link } from "react-router-dom";
import LoginHeader from "../LoginHeader";
import LogoutHeader from "./../LogoutHeader";
import useLoginStore from "../../store/loginStore";
import { useEffect } from "react";

const Header = () => {
  const { isLogin, loginAction } = useLoginStore();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) loginAction();
  }, []);

  return (
    <nav className="screen-width">
      <div className="flex items-center justify-between px-4 py-2 mx-auto">
        <Link to="/" className="text-green font-logo text-[1.5rem] pb-1">
          conduit
        </Link>
        {isLogin ? <LoginHeader /> : <LogoutHeader />}
      </div>
    </nav>
  );
};
export default Header;
