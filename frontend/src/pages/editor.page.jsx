import React from "react";
import EditorComponent from "../components/editor.component";
import { EditorContextProvier } from "../common/context/editorContextProvider";
import PublishForm from "../components/publishForm.component";

const Editor = () => {
  return (
    <>
      <EditorContextProvier>
        <EditorComponent />
        <PublishForm />
      </EditorContextProvier>
    </>
  );
};

export default Editor;
