import useLoginStore from "./../store/loginStore";
import { NavLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

interface FeedNavProps {
  active: "0" | "1" | "2";
  setActive: Dispatch<SetStateAction<"0" | "1" | "2">>;
  tag: string;
}

const FeedNav = ({ active, setActive, tag }: FeedNavProps) => {
  const { isLogin } = useLoginStore();

  return (
    <ul className="flex text-[#aaa]">
      {isLogin && (
        <li className="flex ">
          <NavLink
            to="/"
            onClick={() => setActive("0")}
            className={`py-2 px-4 ${active === "0" ? "feed-nav-active" : ""}`}
          >
            Your Feed
          </NavLink>
        </li>
      )}
      <li className="flex">
        <NavLink
          to="/"
          onClick={() => setActive("1")}
          className={`py-2 px-4 ${active === "1" ? "feed-nav-active" : ""}`}
        >
          Global Feed
        </NavLink>
      </li>
      {active === "2" && (
        <li className="flex">
          <NavLink
            to="/"
            onClick={() => setActive("2")}
            className={`py-2 px-4 ${active === "2" ? "feed-nav-active" : ""}`}
          >
            #{tag}
          </NavLink>
        </li>
      )}
    </ul>
  );
};
export default FeedNav;
