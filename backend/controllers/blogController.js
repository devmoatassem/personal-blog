import { nanoid } from "nanoid";
import Blog from "../schema/dbSchema/Blog.js";
import User from "../schema/dbSchema/User.js";

const saveBlogtoDB = async (req, res) => {
  const { title, banner, content, tags, description, draft } = req.body;

  //   Check if data is received
  if (
    !title ||
    !banner ||
    !content.blocks.length ||
    !tags ||
    !description ||
    tags.length > 10 ||
    description.length > 200
  ) {
    return res.status(400).json({
      message: "Data Missing",
    });
  }

  //   converting all tags to lowercase
  const tagsLower = tags.map((tag) => tag.toLowerCase());
  //   generating blog id
  const blogId =
    title
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9]/g, "-")
      .trim()
      .toLowerCase() +
    "-" +
    nanoid(5);

  // Save the blog to database
  const blog = new Blog({
    blog_id: blogId,
    title,
    banner,
    des: description,
    content,
    tags: tagsLower,
    author: req.user,
    draft: Boolean(draft),
  });

  blog
    .save()
    .then((blog) => {
      // Decide if the blog is draft or not and update the users blog count accordingly
      const increment = draft ? 0 : 1;
      //   A.findOneAndUpdate(conditions, update, options)  // returns Query
      //   A.findOneAndUpdate(conditions, update); // returns Query
      //   A.findOneAndUpdate();
      //   So here condition is to find a use based on id and update the total_posts and blogs array
      // blogs array is used to store the ids of all the blogs of a user

      User.findOneAndUpdate(
        { _id: req.user },
        {
          $inc: { "account_info.total_posts": increment },
          $push: { blogs: blog._id },
        }
      )
        .then((user) => {
          res.status(201).json({
            message: "Blog Saved",
            id: blog.blog_id,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error in updating user",
            error: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in saving blog",
      });
    });
};

export { saveBlogtoDB };
