import React from "react";

const Sixth = () => {
  return (
    <div className="h-[542px] relative text-black flex items-start justify-center bg-white">
      <div className="text-center">
        <p className="text-4xl">Enjoy a new blend of coffee style</p>
        <p className="mt-5">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="max-w-[280px]  bg-amber-100 rounded-lg text-center border border-amber-200">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/public/Rectangle_7.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                  Cappuccino
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Coffee 50% | Milk 50%
              </p>
              <p className="mb-3 font-bold text-amber-800">$8.50</p>
              <a
                className="rounded-full bg-button-brown px-5 py-2.5 text-sm font-medium text-dark-word"
                href="/"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="max-w-[280px] bg-amber-100 rounded-lg text-center border border-amber-200">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/public/Rectangle_9.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                  Chai Latte
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Coffee 50% | Milk 50%
              </p>
              <p className="mb-3 font-bold text-amber-800">$8.50</p>
              <a
                className="rounded-full bg-button-brown px-5 py-2.5 text-sm font-medium text-dark-word"
                href="/"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="max-w-[280px] bg-amber-100 rounded-lg text-center border border-amber-200">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/public/Rectangle_11.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                  Macchiato
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Coffee 50% | Milk 50%
              </p>
              <p className="mb-3 font-bold text-amber-800">$8.50</p>
              <a
                className="rounded-full bg-button-brown px-5 py-2.5 text-sm font-medium text-dark-word"
                href="/"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="max-w-[280px] bg-amber-100 rounded-lg text-center border border-amber-200">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/public/Rectangle_13.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-800">
                  Expresso
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Coffee 50% | Milk 50%
              </p>
              <p className="mb-3 font-bold text-amber-800">$8.50</p>
              <a
                className="rounded-full bg-button-brown px-5 py-2.5 text-sm font-medium text-dark-word"
                href="/"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
