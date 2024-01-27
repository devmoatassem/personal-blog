import React from "react";
import EditorJS from "@editorjs/editorjs";
import Banner from "/blog banner.png";
import { uploadImage } from "../common/aws/aws";
import { useRef, useEffect, useContext } from "react";
import { editorJsTools } from "../common/utilities/editorJs/editorTools";
import { EditorContext } from "../common/context/editorContextProvider";

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

  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    if (img) {
      uploadImage(img).then((url) => {
        if (url) {
          blogBannerRef.current.src = url;
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

  return (
    <>
      <section>
        <div className="mx-auto max-w-[1000px]">
          <div className="relative aspect-video hover:opacity-80 border-4">
            <label htmlFor="uploadBanner">
              <img
                ref={blogBannerRef}
                src={Banner}
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
