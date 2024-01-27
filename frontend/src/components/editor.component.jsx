import React from "react";
import EditorJS from "@editorjs/editorjs";
import { uploadImage } from "../common/aws/aws";
import { useRef, useEffect, useContext } from "react";
import { editorJsTools } from "../common/utilities/editorJs/editorTools";
import { EditorContext } from "../common/context/editorContextProvider";
import Navbar from "./navbar.component";
import ActionButton from "./common/actionbutton.component";
import { Toaster, toast } from "react-hot-toast";

const EditorComponent = () => {
  const blogBannerRef = useRef();

  const {
    blog,
    setBlog,
    editorState,
    setEditorState,
    textEditor,
    setTextEditor,
  } = useContext(EditorContext);

  const { title, banner, content } = blog;

  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    if (img) {
      uploadImage(img).then((url) => {
        if (url) {
          // blogBannerRef.current.src = url;
          setBlog({ ...blog, banner: url });
        }
      });
    }
  };

  const handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleHeight = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    setBlog({ ...blog, title: element.value });
  };

  // There's an issue here, whenever rerenders happens a new instance of blog editor is rendered, but for every render all others components are usually re-rendered instead of new instance.
  useEffect(() => {
    setTextEditor(
      new EditorJS({
        holder: "editorJsConnect",
        data: {},
        placeholder: "Let`s write an awesome story!",
        tools: editorJsTools,
      })
    );
  }, []);

  const handlePublishEvent = () => {
    if (!banner.length || banner === "./blog banner.png") {
      return toast.error("Upload a Banner");
    } else if (!title.length) {
      return toast.error("Add a blog Title");
    } else if (textEditor.isReady) {
      textEditor
        .save()
        .then((data) => {
          // data is an array so i can compare the size of array to restrict user to add a specific amount of content at least abd vice-versa

          if (data.blocks.length) {
            setBlog({ ...blog, content: data });
            setEditorState("publish");
          } else {
            return toast.error("Add some content to Blog");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Navbar>
        <ActionButton
          text={"Publish"}
          handleClick={handlePublishEvent}
          customClass={"bg-black text-white"}
        />
        <ActionButton
          text={"Save Draft"}
          handleClick={() => navigate("/register")}
          customClass={"bg-gray-200 text-black hidden md:block"}
        />
      </Navbar>
      <section>
        <Toaster />
        <div className="mx-auto max-w-[1000px]">
          <div className="relative aspect-video hover:opacity-80 border-4">
            <label htmlFor="uploadBanner">
              <img
                src={banner}
                alt="Upload Banner"
                className="z-20 object-cover w-full h-full"
              />
              <input
                type="file"
                id="uploadBanner"
                accept=".png, .jpg, .jpeg"
                hidden
                onChange={handleBannerUpload}
              />
            </label>
          </div>
          <textarea
            placeholder="Blog Title"
            className="text-4xl font-bold w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
            onKeyDown={handleEnterKey}
            onChange={handleHeight}
          ></textarea>

          <hr className="w-full my-5  " />

          <div id="editorJsConnect"></div>
        </div>
      </section>
    </>
  );
};

export default EditorComponent;
