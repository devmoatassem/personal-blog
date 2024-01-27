import React from "react";
import EditorComponent from "../components/editor.component";
import {
  EditorContextProvier,
  EditorContext,
} from "../common/context/editorContextProvider";
import PublishForm from "../components/publishForm.component";
import Navbar from "../components/navbar.component";
import ActionButton from "../components/common/actionbutton.component";

const Editor = () => {
  return (
    <div>
      <EditorContextProvier>
        <Navbar>
          <ActionButton
            text={"Publish"}
            handleClick={() => navigate("/login")}
            customClass={"bg-black text-white"}
          />
          <ActionButton
            text={"Save Draft"}
            handleClick={() => navigate("/register")}
            customClass={"bg-gray-200 text-black hidden md:block"}
          />
        </Navbar>
        <EditorComponent />
        <PublishForm />
      </EditorContextProvier>
    </div>
  );
};

export default Editor;
