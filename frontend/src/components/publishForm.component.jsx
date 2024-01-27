import React, { useContext, useEffect } from "react";
import Navbar from "./navbar.component";
import ActionButton from "./common/actionbutton.component";
import LabelText from "./publishForm/labelText";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EditorContext } from "../common/context/editorContextProvider";
import { Navigate, Outlet } from "react-router-dom";
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

  const { title, banner, content } = blog;
  return editorState !== "publish" ? (
    <Navigate to="/editor" />
  ) : (
    <>
      <Navbar>
        <ActionButton
          text={"Publish"}
          handleClick={"handlePublishEvent"}
          customClass={"bg-black text-white"}
        />
        <ActionButton
          text={"Save Draft"}
          handleClick={() => navigate("/publish")}
          customClass={"bg-gray-200 text-black hidden md:block"}
        />
      </Navbar>
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
              {"title"}
            </div>
            <div className="text-base leading-tight text-gray-500 w-full h-fit">
              {""} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati eos quidem inventore rem ratione incidunt? Magni, sequi
              nemo eligendi repellat odit omnis assumenda nesciunt pariatur,
              doloremque ipsa, voluptas molestias odio.{" "}
            </div>
          </div>
          <div className="px-10 py-10 mx-auto flex flex-col gap-5 w-full">
            <div>
              <LabelText text={"Tags"} />
              <input
                type="text"
                placeholder="Edit Title"
                defaultValue={"title"}
                className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none"
              />
            </div>
            <div>
              <LabelText text={"Tags"} />
              <textarea
                maxLength={200}
                type="text"
                placeholder="Edit Title"
                defaultValue={"Description"}
                className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none min-h-[150px] h-fit"
              />
              <div className="text-right text-xs text-gray-400 ">
                200 Characters Left
              </div>
            </div>
            <div>
              <LabelText text={"Tags"} />
              <div className="bg-gray-300 p-1 rounded-md">
                <input
                  type="text"
                  placeholder="Edit Title"
                  className="w-full px-5 py-3 rounded-md border-2 border-gray-300 outline-none"
                />
              </div>
              <div className="text-right text-xs text-gray-400 mt-1">
                200 Characters Left
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishForm;
