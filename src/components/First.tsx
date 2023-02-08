import React from "react";

const First = () => {
  return (
    <section className="h-[768px] overflow-hidden bg-[url(/public/coffee.jpg)] bg-cover bg-center bg-no-repeat text-white">
      <div className="">
        <div className="absolute w-1/3 h-2/5 ml-24 mt-48">
          <p>We’ve got your morning covered with</p>
          <p className="text-9xl">Coffee</p>
          <p className="mt-5">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <div className="mt-5">
            <a
              className="rounded-full bg-button-brown px-5 py-2.5 justify-center it text-sm font-medium text-dark-word"
              href="/"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
