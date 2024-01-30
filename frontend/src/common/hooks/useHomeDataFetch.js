import axios from "axios";
import { useEffect, useState } from "react";

export const useHomeDataFetch = () => {
  const [latestBlogs, setLatestBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const fetchLatestBlogs = () => {
    // let data = null;
    axios
      .get(import.meta.env.VITE_SERVER + "/blog/latest")
      .then((res) => {
        // console.log(res.data);
        // console.log("hello");
        // data = res.data;
        setLatestBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
        // return null;
      });

    // return data;
  };
  const fetchTrendingBlogs = () => {
    axios
      .get(import.meta.env.VITE_SERVER + "/blog/trending")
      .then((res) => {
        // console.log(res.data);
        setTrendingBlogs(res.data);
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   useEffect(() => {
//     fetchLatestBlogs();
//     fetchTrendingBlogs();
//   }, [1]);
//   console.log(latestBlogs);
//   console.log(trendingBlogs);

  return { latestBlogs, trendingBlogs, fetchLatestBlogs, fetchTrendingBlogs };
};
