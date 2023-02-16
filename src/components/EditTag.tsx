import { MdOutlineClose } from "react-icons/md";

interface EditTagProps {
  tagList: string[];
  removeTag: (tag: string) => void;
}

const EditTag = ({ tagList, removeTag }: EditTagProps) => {
  return (
    <>
      {tagList.map((t) => (
        <div className="tag-default text-white bg-[#818a91]" key={t}>
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
