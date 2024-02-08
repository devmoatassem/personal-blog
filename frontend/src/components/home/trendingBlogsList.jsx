import React from "react";
import TrendingBlogCard from "./trendingBlogCard";
const TrendingBlogsList = ({ trendingBlogs }) => {
  return (
    <div>
      {trendingBlogs?.blogs.map((blog, index) => {
        return <TrendingBlogCard blog={blog} key={index} />;
      })}
    </div>
  );
};

export default TrendingBlogsList;
