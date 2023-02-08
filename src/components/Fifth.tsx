import React from "react";

const Fifth = () => {
  return (
    <div className="h-[374px] bg-[url(/public/Group_36.png)] bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-white">
      <div className="w-[980px] h-[214px]">
        <div className=" text-center">
          <p className="text-4xl">Subscribe to get the Latest News</p>
          <p className="text-lg">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </div>
        <div className="flex items-center justify-center mt-14">
          <label
            htmlFor="UserEmail"
            className="absolute w-[642px] h-[66px] block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 items-center justify-center bg-white"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm button"
            />
            <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Enter your mail
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
