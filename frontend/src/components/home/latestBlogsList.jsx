import React from "react";
import HomeBlogCard from "./homeBlogCard";
const LatestBlogsList = ({ latestBlogs }) => {
  return (
    <div>
      {latestBlogs?.blogs.map((blog, index) => {
        return <HomeBlogCard blog={blog} key={index} />;
      })}
    </div>
  );
};

export default LatestBlogsList;
