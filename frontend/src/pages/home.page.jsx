import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import { useHomeDataFetch } from "../common/hooks/useHomeDataFetch";

const Home = () => {
  const { latestBlogs, trendingBlogs, fetchLatestBlogs, fetchTrendingBlogs } =
    useHomeDataFetch();

  // const [latestBlogs, setLatestBlogs] = useState(null);
  // const [trendingBlogs, setTrendingBlogs] = useState(null);

  useEffect(() => {
    // const latestBlogs = fetchLatestBlogs();
    fetchLatestBlogs();
    fetchTrendingBlogs();
    console.log(latestBlogs);
    console.log(trendingBlogs);
  }, []);

  return (
    <div>
      <Navbar />
      {latestBlogs && "Latest Blogs"}
      {trendingBlogs && "Trending Blogs"}
    </div>
  );
};

export default Home;
