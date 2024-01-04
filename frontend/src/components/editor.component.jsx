import React from "react";
import Navbar from "./navbar.component";
import Banner from "/blog banner.png";
import { uploadImage } from "../common/aws/aws";
import { useRef } from "react";

const EditorComponent = () => {
  const blogBannerRef = useRef();

  const handleBannerUpload = (e) => {
    const img = e.target.files[0];
    // console.log(img);
    if (img) {
      uploadImage(img).then((url) => {
        if (url) {
          blogBannerRef.current.src = url;
          console.log(url);
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
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex items-center h-[50px] gap-4 border">
        <button className="bg-gray-400">Publish</button>
        <button className="bg-gray-400">Save Draft</button>
      </div>
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
        </div>
      </section>
    </>
  );
};

export default EditorComponent;
