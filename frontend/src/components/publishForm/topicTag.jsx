import React, { useContext } from "react";
import { EditorContext } from "../../common/context/editorContextProvider";

const TopicTag = ({ text, index }) => {
  const { blog, setBlog } = useContext(EditorContext);
  const { tags } = blog;

  const deleteTag = (e) => {
    let newTags = [...tags];
    newTags.splice(index, 1);
    setBlog({ ...blog, tags: newTags });
  };

  return (
    <div className="bg-white px-3 w-fit inline-flex items-center gap-1 py-1 text-gray-500 m-2 rounded-full">
      <div>{text}</div>
      <i
        onClick={deleteTag}
        class="fi fi-rr-circle-xmark mt-1 cursor-pointer"
      ></i>
    </div>
  );
};

export default TopicTag;
