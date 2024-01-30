import Blog from "../schema/dbSchema/Blog.js";

const getLatesBlogs = async (req, res) => {
  Blog.find({ draft: false })
    .sort({ publishedAt: -1 })

    .populate(
      "author",
      "personal_info.fullname personal_info.username personal_info.profile_img "
    ) // by adding -_id I can remove the _id from the response
    .select("blog_id title des tags banner activity publishedAt")
    .limit(5)
    .then((blogs) => {
      res.status(200).json({
        blogs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server Error",
      });
    });
};

export { getLatesBlogs };