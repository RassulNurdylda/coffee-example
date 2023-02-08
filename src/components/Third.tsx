import React from "react";

const Third = () => {
  return (
    <div className="h-[570px] bg-[url(/public/Group_36.png)] bg-cover bg-center bg-no-repeat relative text-white flex items-center justify-between">
      <img
        src="/public/coffee_bean.png"
        className="absolute right-0 bottom-0"
      />

      <div className=" w-1/3 h-2/5 ml-24 mt-48">
        <p className="text-4xl">Get a chance to have an</p>
        <p className="text-4xl">Amazing morning</p>
        <p className="mt-5">
          We are giving you are one time opportunity to experience a better life
          with coffee.
        </p>
        <div className="mt-5">
          <a
            className="rounded-full bg-button-brown px-5 py-2.5 justify-center text-sm font-medium text-dark-word"
            href="/"
          >
            Order Now
          </a>
        </div>
      </div>
      <img src="/public/cup.png" className=" z-10 mr-12" />
    </div>
  );
};

export default Third;
