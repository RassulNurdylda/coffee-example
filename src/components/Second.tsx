const Second = () => {
  return (
    <div className="h-[484px] relative text-black flex items-center justify-between ">
      <div className="">
        <img
          src="/public/stylized-cup.png"
          className="absolute right-0 bottom-0 mr-24"
        />
        <div className="w-[585px] h-[348px] justify-center items-center  ml-24">
          <p className="text-6xl ">Discover the best coffee</p>
          <p className="mt-5 text-2xl">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <div className="mt-5 ">
            <a
              className="rounded-full bg-button-brown px-5 py-2.5 justify-center it text-sm font-medium text-dark-word"
              href="/"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
