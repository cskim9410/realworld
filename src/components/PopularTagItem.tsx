import useTags from "../hooks/useTags";
import Loading from "./Loading";

interface PopularTagItemProps {
  clickBtn: (tag: string) => void;
}

const PopularTagItem = ({ clickBtn }: PopularTagItemProps) => {
  const { tags, isLoading } = useTags();

  if (isLoading) {
    return <Loading minH={"10"} size="24" />;
  }

  return (
    <>
      {tags?.tags.map((tag) => (
        <button
          key={tag}
          onClick={() => clickBtn(tag)}
          className="tag-default bg-[#818a91] hover:bg-[#6d767c] text-white"
        >
          {tag}
        </button>
      ))}
    </>
  );
};

export default PopularTagItem;
