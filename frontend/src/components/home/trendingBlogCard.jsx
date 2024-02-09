import React from "react";

const TrendingBlogCard = () => {
  return (
    <div className="flex py-5 gap-2 w-full ">
      <div className="text-gray-200 font-bold text-6xl">01</div>
      <div className="max-h-fit w-full">
        <div className="flex items-center gap-2 pb-3">
          <img
            src="./blog.png"
            alt=""
            className="w-5 h-5 aspect-square rounded-full bg-black object-cover"
          />
          {/* <div className="w-4 h-4 aspect-square rounded-full bg-black"></div> */}
          <div className="text-sm text-gray-600">Kunaal @ 29 Sep</div>
        </div>
        <h2 className="text-xl font-semibold capitalize line-clamp-2 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
      </div>
    </div>
  );
};

export default TrendingBlogCard;
