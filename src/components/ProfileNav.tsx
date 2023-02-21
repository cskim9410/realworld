import type { Dispatch, SetStateAction } from "react";

interface ProfileNavProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const ProfileNav = ({ active, setActive }: ProfileNavProps) => {
  return (
    <ul className="flex text-[#aaa]">
      <li className="flex ">
        <button
          onClick={() => setActive(0)}
          className={`py-2 px-4 ${active === 0 ? "feed-nav-active" : ""}`}
        >
          My Articles
        </button>
      </li>

      <li className="flex">
        <button
          onClick={() => setActive(1)}
          className={`py-2 px-4 ${active === 1 ? "feed-nav-active" : ""}`}
        >
          Favorited Articles
        </button>
      </li>
    </ul>
  );
};

export default ProfileNav;
