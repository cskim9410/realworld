import { MdOutlineClose } from "react-icons/md";

interface EditTagProps {
  tagList: string[];
  removeTag: (tag: string) => void;
}

const EditTag = ({ tagList, removeTag }: EditTagProps) => {
  return (
    <>
      {tagList.map((t) => (
        <div
          className="text-white text-[0.8rem] py-[0.1rem] mr-1 mb-1 bg-[#818a91] rounded-[10rem] px-[0.6rem] inline-block"
          key={t}
        >
          <MdOutlineClose
            className="inline-block mr-1 text-lg cursor-pointer"
            onClick={() => removeTag(t)}
          />
          {` ${t} `}
        </div>
      ))}
    </>
  );
};

export default EditTag;
