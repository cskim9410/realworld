import { NavLink } from "react-router-dom";
import useTags from "../hooks/useTags";
import type { Dispatch, MouseEvent } from "react";

const PopularTags = ({
  setTag,
}: {
  setTag: Dispatch<React.SetStateAction<string>>;
}) => {
  const { tags } = useTags();

  const clickBtn = (tag: string) => {
    setTag(tag);
  };

  return (
    <div className="px-3 flex-[0_0_25%]">
      <div className="px-2 py-2 rounded bg-[#f3f3f3]">
        <p className="mb-1">Popular Tags</p>
        <div>
          {tags &&
            tags.tags.map((tag) => (
              <button
                key={tag}
                onClick={(event) => clickBtn(tag)}
                className="text-white text-xs py-[0.1rem] mr-1 mb-[0.2rem] inline-block bg-[#818a91] rounded-[10rem] px-3 hover:bg-[#6d767c]"
              >
                {tag}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
