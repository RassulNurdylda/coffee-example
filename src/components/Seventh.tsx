import React from "react";

const Seventh = () => {
  return (
    <div className="h-[612px] relative text-black flex items-start justify-center bg-white">
      <div className="text-center">
        <p className="text-4xl">Why are we different?e</p>
        <p className="mt-5">
          We don’t just make your coffee, we make your day!
        </p>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="max-w-[280px] max-h-[284px] bg-amber-100 rounded-lg text-center flex flex-col items-center justify-center border border-amber-200">
            <img
              className="rounded-t-lg "
              src="/public/coffee-beans_1.png"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                Supreme Beans
              </h5>

              <p className="mb-3 font-normal text-gray-700 ">
                Beans that provides great taste
              </p>
            </div>
          </div>
          <div className="max-w-[280px] max-h-[284px] bg-amber-100 rounded-lg text-center flex flex-col items-center justify-center border border-amber-200">
            <img className="rounded-t-lg" src="/public/badge_1.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                High Quality
              </h5>

              <p className="mb-3 font-normal text-gray-700 ">
                We provide the highest quality
              </p>
            </div>
          </div>
          <div className="max-w-[280px] max-h-[284px] bg-amber-100 rounded-lg text-center flex flex-col items-center justify-center border border-amber-200">
            <img
              className="rounded-t-lg"
              src="/public/coffee-cup_1.png"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                Extraordinary
              </h5>

              <p className="mb-3 font-normal text-gray-700 ">
                Coffee like you have never tasted
              </p>
            </div>
          </div>
          <div className="max-w-[280px] max-h-[284px] bg-amber-100 rounded-lg text-center flex flex-col items-center justify-center border border-amber-200">
            <img
              className="rounded-t-lg mt-5"
              src="/public/best-price _1.png"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                Affordable Price
              </h5>

              <p className="mb-3 font-normal text-gray-700 ">
                Our Coffee prices are easy to afford
              </p>
            </div>
          </div>
        </div>
        <p className="mt-5">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <p className="text-4xl mt-5">Get started today.</p>
        <div className="mt-5 ">
          <a
            className="rounded-full bg-button-brown px-5 py-2.5 justify-center it text-sm font-medium text-dark-word"
            href="/"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
