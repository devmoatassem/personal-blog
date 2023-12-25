import { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './authContextProvider';

const EditorContext = createContext();

const EditorContextProvier = ({ children }) => {
    const [blog, setBlog] = useState({});
    const [ editorState , setEditorState ] = useState("editor");
    const [ textEditor, setTextEditor ] = useState({ isReady: false});

    const { authUser:{ acessToken } } = useContext(AuthContext);
    
    return (
        <EditorContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </EditorContext.Provider>
    )
}

export { EditorContextProvier, EditorContext };