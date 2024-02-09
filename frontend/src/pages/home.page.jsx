import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import { useHomeDataFetch } from "../common/hooks/useHomeDataFetch";
import LatestBlogsList from "../components/home/latestBlogsList";
import TrendingBlogsList from "../components/home/trendingBlogsList";

const Home = () => {

  const filters = ["afshjshjsgh f", "nhsghfahf", "rafhafhdfnhagahythty", "gfhajhjafghhj"];

  const { latestBlogs, trendingBlogs, fetchLatestBlogs, fetchTrendingBlogs } =
    useHomeDataFetch();

  const [currentPage, setCurrentPage] = useState("latest");
  // const [latestBlogs, setLatestBlogs] = useState(null);
  // const [trendingBlogs, setTrendingBlogs] = useState(null);

  useEffect(() => {
    // const latestBlogs = fetchLatestBlogs();
    fetchLatestBlogs();
    fetchTrendingBlogs();
  }, []);
  console.log(latestBlogs?.blogs);
  console.log(trendingBlogs?.blogs);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1300px] px-[5vw] mx-auto">
        <div className="w-full grid grid-cols-12 gap-5 py-3">
          <div className="col-span-12 md:col-span-8">
            <div className="flex border-b">
              <button
                className={
                  "p-3 " +
                  (currentPage === "latest"
                    ? "border-b border-black  font-semibold"
                    : "")
                }
                onClick={() => setCurrentPage("latest")}
              >
                Home
              </button>
              <button
                className={
                  "p-3 md:hidden " +
                  (currentPage === "trending"
                    ? "border-b border-black  font-semibold"
                    : "")
                }
                onClick={() => setCurrentPage("trending")}
              >
                Trending
              </button>
            </div>
            {currentPage === "latest" ? (
              <LatestBlogsList latestBlogs={latestBlogs} />
            ) : currentPage === "trending" ? (
              <TrendingBlogsList trendingBlogs={trendingBlogs} />
            ) : null}
          </div>
          <div className="hidden md:block col-span-4 border-l pl-5">
            <div>
              <h2 className="font-semibold py-5">Stories from all intrests</h2>
              <div className="flex flex-wrap gap-3 ">
                {filters.map((filter, index)=>{
                  return <div className="px-3 py-1 bg-gray-200 rounded-3xl">
                    {filter}
                  </div>
                })}
              </div>
            </div>
            <div className="py-5">
              <h2 className="font-semibold ">
                Trending <i className="fi fi-rr-arrow-trend-up"></i>
              </h2>
              <TrendingBlogsList trendingBlogs={trendingBlogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
