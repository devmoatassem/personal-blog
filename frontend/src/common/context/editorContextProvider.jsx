import { createContext, useState } from 'react';


const EditorContext = createContext();

const EditorContextProvier = ({ children }) => {
    const [blog, setBlog] = useState({});
    const [editorState, setEditorState] = useState("editor");
    const [textEditor, setTextEditor] = useState({ isReady: false });

  

    return (
        <EditorContext.Provider value={{ blog, setBlog, editorState, setEditorState, textEditor, setTextEditor }}>
            {children}
        </EditorContext.Provider>
    )
}

export { EditorContextProvier, EditorContext }; 