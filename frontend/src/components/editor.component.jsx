import React from "react";
import EditorJS from "@editorjs/editorjs";
import { uploadImage } from "../common/aws/aws";
import { useEffect, useContext } from "react";
import { editorJsTools } from "../common/utilities/editorJs/editorTools";
import { EditorContext } from "../common/context/editorContextProvider";
import Navbar from "./navbar.component";
import ActionButton from "./common/actionbutton.component";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../common/context/authContextProvider";

const EditorComponent = () => {
  const navigate = useNavigate();

  const {
    blog,
    setBlog,
    editorState,
    setEditorState,
    textEditor,
    setTextEditor,
  } = useContext(EditorContext);

  const { title, banner, content } = blog;

  const { authUser } = useContext(AuthContext);
  const { acessToken } = authUser;
  // Upload banner image to AWS S3 and get the url in return
  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    // console.log("Calling Image Upload");

    if (img) {
      // console.log("Calling Image Upload-2");
      uploadImage(img, acessToken)
        .then((url) => {
          // console.log("Calling Image Upload-3");
          // console.log(url);
          if (url) {
            // console.log("Calling Image Upload-4");
            // blogBannerRef.current.src = url;
            setBlog({ ...blog, banner: url });
          }
        })
        .catch((err) => {
          // console.log("Calling Image Upload-4");
          console.log(err);
        });
    }
  };
  // Do not allow user to use Enter key to next line in title textarea
  const handleEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };
  // handle the height of Blog Title Text Area height : it allows the text area to change it's height according to amount of text added
  const handleHeight = (e) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    setBlog({ ...blog, title: element.value });
  };

  // There's an issue here, whenever rerenders happens a new instance of blog editor is rendered, but for every render all others components are usually re-rendered instead of new instance.
  useEffect(() => {
    if (!textEditor.isReady) {
      setTextEditor(
        new EditorJS({
          holder: "editorJsConnect",
          data: content,
          placeholder: "Let`s write an awesome story!",
          tools: editorJsTools,
        })
      );
    }
  }, []);

  // Function to verify data of blog if use has typed something or not
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
          // console.log(data);
          if (data.blocks.length) {
            // console.log(data);

            setBlog({ ...blog, content: data });

            setEditorState("publish");

            navigate("/publish");
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
          text={"Next"}
          handleClick={handlePublishEvent}
          customClass={"bg-black text-white "}
        />
        <ActionButton
          text={"Save Draft"}
          handleClick={() => navigate("/publish")}
          customClass={"bg-gray-200 text-black hidden md:block"}
        />
      </Navbar>
      <section>
        <Toaster />
        <div className="mx-auto max-w-[1000px] ">
          <div className="relative aspect-video hover:opacity-80 border-4 ">
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
            defaultValue={title}
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
