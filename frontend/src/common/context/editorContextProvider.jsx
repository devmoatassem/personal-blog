import { createContext, useState } from "react";

const EditorContext = createContext();

const EditorContextProvier = ({ children }) => {
  const blogStructure = {
    title: "",
    banner: "./blog banner.png",
    content: [],
    tags: [],
    description: "Please Add Some Description",
    author: { personal_info: {} },
  };
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });

  return (
    <EditorContext.Provider
      value={{
        blog,
        setBlog,
        editorState,
        setEditorState,
        textEditor,
        setTextEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContextProvier, EditorContext };
