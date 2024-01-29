import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

export const useBlogFeatures = (EditorContext, AuthContext) => {
  const navigate = useNavigate();

  const {
    blog,
    setBlog,
    editorState,
    setEditorState,
    textEditor,
    setTextEditor,
  } = useContext(EditorContext);

  const { authUser } = useContext(AuthContext);
  const { acessToken } = authUser;

  const { title, banner, content, tags, description } = blog;


  // Function to publish the blog
  const publishBlog = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("disabled")) return;

    if (
      !title ||
      !title.length ||
      !banner ||
      !banner.length ||
      !content.blocks.length ||
      !tags ||
      !description ||
      tags.length > 10 ||
      !description ||
      !description.length ||
      description.length > 200
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const loadingToast = toast.loading("Publishing your blog...");

    e.target.classList.add("disabled", "pointer-events-none", "opacity-50");

    const config = {
      headers: {
        Authorization: `Bearer ${acessToken}`,
      },
    };
    const data = {
      title,
      banner,
      content,
      tags,
      description,
      draft: false,
    };
    axios
      .post(import.meta.env.VITE_SERVER + "/publishBlog", data, config)
      .then((res) => {
        toast.dismiss(loadingToast);
        toast.success("Blog published successfully");
        setBlog({
          title: "",
          banner: "./blog banner.png",
          content: [],
          tags: [],
          description: "Please Add Some Description",
          author: { personal_info: {} },
        });
        setEditorState("editor");
        setTextEditor({ isReady: false });
        e.target.classList.remove(
          "disabled",
          "pointer-events-none",
          "opacity-50"
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Something went wrong");
        e.target.classList.remove(
          "disabled",
          "pointer-events-none",
          "opacity-50"
        );
      });
  };

  return { publishBlog };
};
