import { Dispatch, SetStateAction } from "react";
import PopularTagItem from "./PopularTagItem";

interface PopularTagsProps {
  setTag: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<number>>;
}

const PopularTags = ({ setTag, setActive }: PopularTagsProps) => {
  const clickBtn = (tag: string) => {
    setActive(2);
    setTag(tag);
  };

  return (
    <div className="px-3 flex-[0_0_25%]">
      <div className="px-2 py-2 rounded bg-[#f3f3f3]">
        <p className="mb-1">Popular Tags</p>
        <PopularTagItem clickBtn={clickBtn} />
      </div>
    </div>
  );
};

export default PopularTags;
