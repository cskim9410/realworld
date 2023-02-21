import useLoginStore from "./../store/loginStore";
import type { Dispatch, SetStateAction } from "react";

interface FeedNavProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  tag: string;
}

const FeedNav = ({ active, setActive, tag }: FeedNavProps) => {
  const { isLogin } = useLoginStore();

  return (
    <ul className="flex text-[#aaa]">
      {isLogin && (
        <li className="flex ">
          <button
            onClick={() => setActive(0)}
            className={`py-2 px-4 ${active === 0 ? "feed-nav-active" : ""}`}
          >
            Your Feed
          </button>
        </li>
      )}
      <li className="flex">
        <button
          onClick={() => setActive(1)}
          className={`py-2 px-4 ${active === 1 ? "feed-nav-active" : ""}`}
        >
          Global Feed
        </button>
      </li>
      {active === 2 && (
        <li className="flex">
          <button
            onClick={() => setActive(2)}
            className={`py-2 px-4 ${active === 2 ? "feed-nav-active" : ""}`}
          >
            #{tag}
          </button>
        </li>
      )}
    </ul>
  );
};
export default FeedNav;
