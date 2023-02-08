import React from "react";

export const Navbar = () => {
  return (
    <header className="overflow-hidden bg-[url(/public/coffee.jpg)] bg-cover bg-center bg-no-repeat text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block " href="/">
              Bean Scene
            </a>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className=" transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:text-gray-500/75"
                    href="/"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:text-gray-500/75"
                    href="/"
                  >
                    Abot Us
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:text-gray-500/75"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="px-5 py-2.5 text-sm font-medium "
                href="/"
              >
                Sign In
              </a>
              <div className="hidden sm:flex">
                <a
                  className="rounded-full bg-button-brown px-5 py-2.5 text-sm font-medium text-dark-word"
                  href="/"
                >
                  Sign Up
                </a>
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
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
    </header>
  );
};
