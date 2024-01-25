import React from 'react'
import EditorComponent from '../components/editor.component';
import { EditorContextProvier, EditorContext } from '../common/context/editorContextProvider';
import PublishForm from '../components/publishForm.component';
import Navbar from '../components/navbar.component';
const Editor = () => {
  return (
    <div>
      <EditorContextProvier>
        <Navbar />
        <EditorComponent />
        <PublishForm />
      </EditorContextProvier>
    </div>
  );
}

export default Editor;