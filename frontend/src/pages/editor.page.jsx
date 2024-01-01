import React from 'react'
import EditorComponent from '../components/editor.component';
import { EditorContextProvier, EditorContext } from '../common/context/editorContextProvider';
import PublishForm from '../components/publishForm.component';

const Editor = () => {
  return (
    <div>
      <EditorContextProvier>
        <EditorComponent />
        <PublishForm /> 
      </EditorContextProvier>

    </div>
  )
}

export default Editor;