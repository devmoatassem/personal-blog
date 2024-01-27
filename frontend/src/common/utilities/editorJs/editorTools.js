import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Quote from "@editorjs/quote";
import RawTool from "@editorjs/raw";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import SimpleImage from "@editorjs/simple-image";
import Header from "@editorjs/header";
import { uploadImage } from "../../aws/aws";

// I haven't included some of Tools coming from EditorJs because list of tools for editorJs is too long
// You can find all tools here: https://github.com/editor-js/awesome-editorjs

const uploadImageByUrl = (e) => {
  const link = new Promise((resolve, reject) => {
    try {
      console.log("E");
      resolve(e);
    } catch (err) {
      console.log("F");
      reject(err);
    }
  });

  return link.then((url) => {
    return {
      success: 1,
      file: {
        url,
      },
    };
  });
};

const uploadImageByFile = (e) => {
  return uploadImage(e).then((url) => {
    if (url) {
      return {
        success: 1,
        file: {
          url,
        },
      };
    }
  });
};





export const editorJsTools = {
  embed: Embed,
  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4],
      defaultLevel: 3,
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  raw: RawTool,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: uploadImageByFile, // Your backend file uploader endpoint
        uploadByUrl: uploadImageByUrl, // Your endpoint that provides uploading by Url
      },
    },
  },
};
