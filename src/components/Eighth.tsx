import React from "react";

const Eighth = () => {
  return (
    <div className="h-[747px] relative text-black flex items-start justify-center bg-white mt-14">
      <div>
        <p className="text-4xl text-amber-800 text-center">
          Our coffee perfection feedback
        </p>
        <p className="text-center mt-5">Our customers has amazing things to say about us</p>

        <div className="w-[980px] h-[524px]border border-amber-200 bg-amber-100 mt-5">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <p className="leading-relaxed text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset.....
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
                <h2 className="text-amber-900 font-medium title-font tracking-wider text-4xl">
                  Jonny Thomas
                </h2>
                <p className="text-gray-500 mt-5 text-lg">Project Manager</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Eighth;
