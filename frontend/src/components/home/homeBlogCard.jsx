import React from "react";

const HomeBlogCard = () => {
  return (
    <div className="flex items-center justify-between py-5 border-b">
      <div className="max-h-fit w-full pr-5 md:pr-10 lg:pr-20">
        <div className="flex items-center gap-2 pb-3">
          <img
            src="./blog.png"
            alt=""
            className="w-5 h-5 aspect-square rounded-full bg-black object-cover"
          />
          {/* <div className="w-4 h-4 aspect-square rounded-full bg-black"></div> */}
          <div className="text-sm text-gray-600">Kunaal @ 29 Sep</div>
        </div>
        <h2 className="text-xl font-semibold capitalize line-clamp-2">
          Test blog 1 
        </h2>
        <p className="font-light line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          itaque accusamus dolor corporis pariatur! Molestias aliquid, inventore
          soluta optio, quidem fugit eum saepe ea qui non mollitia esse id quas.
        </p>
        <div className="flex items-center gap-5">
          <div className="bg-gray-100 w-fit px-4 text-sm text-gray-800 py-1 rounded-full">
            Test
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <i className="fi fi-rr-heart text-sm mt-1"></i>
            <div className="text-sm ">0</div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden aspect-square ">
        <img
          src="./blog.png"
          alt=""
          className=" object-cover aspect-square rounded h-24 w-24"
        />
      </div>
    </div>
  );
};

export default HomeBlogCard;
