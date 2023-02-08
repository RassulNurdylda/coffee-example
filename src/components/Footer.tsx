import React from "react";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className=" bg-yellow-700 text-white  overflow-hidden bg-[url(/public/footer.png)] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="font-bold">Bean Scene</div>
            <p className="max-w-xs mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ul className="flex gap-6 mt-8 text-4xl">
              <li>
                <a href="#!" className="mr-6 hover:text-gray-600">
                  <RiFacebookBoxFill />
                </a>
              </li>
              <li>
                <a href="#!" className="mr-6 hover:text-gray-600">
                  <RiInstagramFill />
                </a>
              </li>
              <li>
                <a href="#!" className="mr-6 hover:text-gray-600">
                  <RiYoutubeFill />
                </a>
              </li>
              <li>
                <a href="#!" className="mr-6 hover:text-gray-600">
                  <RiTwitterFill />
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">About</p>
              <nav aria-label="Footer Navigation - Services" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      News & Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Help & Supports
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium ">Company</p>
              <nav aria-label="Footer Navigation - Company" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      How we work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium ">Contact Us</p>
              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                      Bangalore-560016
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      +1 202-918-2132
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      beanscene@mail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" transition hover:opacity-75"
                    >
                      www.beanscene.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
