import React from "react";

const AboutNew = () => {
  return (
    <>
      <div id="about" className="containerr p-2 my-10">
        <h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          About
        </h1>
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col lg:w-3/5 lg:m-0 justify-around">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-col my-2">
                <h4 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
                  A{" "}
                  <i className="underline decoration-yellow decoration-2 underline-offset-4">
                    quackathon{" "}
                  </i>
                  is coming to Oakland!
                </h4>
                <p className="2xl:text-lg mt-2">
                  We're back at OU with a Quackathon GrizzHacks is a 24 hour
                  engineering marathon, welcome to anyone. Whether you're a
                  seasoned developer building a new idea, a beginner looking to
                  sharpen your skills, or a unrelated major just interested in
                  learning more, we have something for you!
                </p>
              </div>
              <div className="flex flex-col my-2">
                <p className="2xl:text-lg">
                  Over the course of 24 hours, each team will build a project
                  from the ground up and then present their work to a panel of
                  judges to compete for prizes! You're allowed to create
                  anything you can think up but if you need some inspiration,
                  check out our{" "}
                  <a
                    href="#tracks"
                    className="text-primary underline underline-offset-2 decoration-yellow hover:underline-offset-4 transition-all z-50"
                  >
                    tracks
                  </a>{" "}
                  this year.
                </p>
              </div>
            </div>
            <p className="2xl:text-lg">
              Still have questions? Check out our{" "}
              <a
                href="/#faq"
                className="text-primary underline underline-offset-2 decoration-yellow hover:underline-offset-4 transition-all"
              >
                FAQ
              </a>
              .
            </p>
          </div>
          <div className="w-full lg:w-1/3 relative flex items-center justify-center">
            <img
              src="/images/IMG_7684-S.webp"
              className="rounded-xl w-[75%] h-auto object-cover z-10"
              alt="Top down view of GrizzHacks"
            />
            <div className="inset-0 absolute rounded-lg">
              <img
                src="/yellowblob.svg"
                className="absolute z-0 scale-150 w-auto h-auto top-1/2 left-1/2 -translate-x-[53%] -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 mt-10">
          <div>
            <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Last Year We Had...
            </h2>
          </div>
          <div className="flex flex-row gap-10 text-white">
            <div className="flex flex-col gap-4 px-4 bg-blackColor lg:p-5 p-3 rounded-lg items-center justify-center">
              <h1 className="font-bold text-6xl">130+</h1>
              <p className="text-2xl">Hackers</p>
            </div>
            <div className="flex flex-col gap-4 px-4 bg-blackColor lg:p-5 p-3 rounded-lg items-center justify-center">
              <h1 className="font-bold text-6xl">15+</h1>
              <p className="text-2xl">Universities</p>
            </div>
            <div className="flex flex-col gap-4 px-4 bg-blackColor lg:p-5 p-3 rounded-lg items-center justify-center">
              <h1 className="font-bold text-6xl">35+</h1>
              <p className="text-2xl">Projects</p>
            </div>
            <div className="flex flex-col gap-4 px-4 bg-blackColor lg:p-5 p-3 rounded-lg items-center justify-center">
              <h1 className="font-bold text-6xl">$7k+</h1>
              <p className="text-2xl">Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNew;
