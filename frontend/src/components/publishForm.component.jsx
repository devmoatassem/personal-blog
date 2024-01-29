import React, { useContext, useEffect } from "react";
import Navbar from "./navbar.component";
import ActionButton from "./common/actionbutton.component";
import LabelText from "./publishForm/labelText";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../common/context/editorContextProvider";
import { AuthContext } from "../common/context/authContextProvider";
import { Navigate } from "react-router-dom";
import TopicTag from "./publishForm/topicTag";
import { useBlogFeatures } from "../common/utilities/blogPublish/blogPublish";
const PublishForm = () => {
  const {
    blog,
    setBlog,
    editorState,
    setEditorState,
    textEditor,
    setTextEditor,
  } = useContext(EditorContext);

  useEffect(() => {
    console.log(blog);
    console.log(editorState);
    console.log("Hello");
  }, []);

  const { title, banner, content, tags, description } = blog;

  const handleTitleEdit = (e) => {
    if (e.target.value.length > 0) {
      setBlog({ ...blog, title: e.target.value });
    } else {
      setBlog({ ...blog, title: "Please Add Some Title" });
    }
  };

  const descriptionCharacters = 200;
  const handleDescriptionEdit = (e) => {
    if (e.target.value.length > 0) {
      setBlog({ ...blog, description: e.target.value });
    } else {
      setBlog({ ...blog, description: "Please Add Some Description" });
    }
  };

  const addNewTag = (e) => {
    console.log(e.key);
    if (e.key === "Enter" && e.target.value.length > 0) {
      if (tags.length < 10) {
        let newTags = [...tags];
        newTags.push(e.target.value);
        setBlog({ ...blog, tags: newTags });
        e.target.value = "";
      } else {
        return toast("You can only add 10 tags", {
          icon: "⚠️",
        });
      }
    }
  };

  const { publishBlog, saveDraftBlog } = useBlogFeatures(
    EditorContext,
    AuthContext
  );
  return editorState !== "publish" ? (
    <Navigate to="/editor" />
  ) : (
    <>
      <Navbar>
        <ActionButton
          text={"Publish"}
          handleClick={publishBlog}
          customClass={"bg-black text-white"}
        />
        <ActionButton
          text={"Save Draft"}
          handleClick={saveDraftBlog}
          customClass={"bg-gray-200 text-black hidden md:block"}
        />
      </Navbar>
      <Toaster />
      <section className="py-20 px-[5vw]">
        <div className="grid grid-cols-2 gap-5">
          <div className="px-5 py-10 mx-auto">
            <LabelText text={"Preview"} />
            <div className="relative aspect-video border-4">
              <img
                src={banner}
                alt="Banner Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-4xl font-bold w-full py-2 capitalize leading-tight">
              {title}
            </div>
            <div className="text-base leading-tight text-gray-500 w-full h-fit">
              {description}
            </div>
          </div>
          <div className="px-10 py-10 mx-auto flex flex-col gap-5 w-full">
            <div>
              <LabelText text={"Tags"} />
              <input
                type="text"
                placeholder="Edit Title"
                defaultValue={title}
                className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none"
                onChange={handleTitleEdit}
              />
            </div>
            <div>
              <LabelText text={"Tags"} />
              <textarea
                maxLength={descriptionCharacters}
                type="text"
                placeholder="Edit Title"
                defaultValue={description}
                className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none min-h-[150px] h-fit"
                onChange={handleDescriptionEdit}
              />
              <div className="text-right text-xs text-gray-400 ">
                {descriptionCharacters - description.length} Characters Left
              </div>
            </div>
            <div>
              <LabelText text={"Tags"} />
              <div className="bg-gray-300 p-1 rounded-md">
                <input
                  type="text"
                  placeholder="Add tags for better SEO"
                  className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none"
                  onKeyDown={addNewTag}
                />
                <>
                  {tags.map((tag, i) => (
                    <TopicTag text={tag} key={i} index={i} />
                  ))}
                </>
              </div>
              <div className="text-right text-xs text-gray-400 mt-1">
                {10 - tags.length} Tags Left
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishForm;
