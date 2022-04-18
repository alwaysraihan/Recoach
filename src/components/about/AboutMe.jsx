import React from "react";
import profile from "../../assets/images/raihan.png";
const AboutMe = () => {
  return (
    <>
      <div className="min-h-[70vh] px-5 md:px[5%] lg:px-[10%] xl:px-[20%] mt-10 md:mt-0 md:flex justify-center items-center ">
        <div className="md:grid justify-between  grid-cols-3 items-center bg-[rgb(242,242,242)] rounded-md shadow-lg shadow-gray-200">
          <div className="p-10 bg-teal-600 flex justify-center items-center">
            <div>
              <img
                className="rounded-full w-52 h-52 md:w-40 md:h-40 lg:w-52 lg:h-52 border border-gray-100"
                src={profile}
                alt="man photos"
              />
              <h1 className="mt-5 text-2xl font-semibold text-center">
                Nurul Islam
              </h1>
            </div>
          </div>
          <div className=" p-10 col-span-2">
            <div>
              <h1 className="text-2xl font-semibold">
                My Goal and how will I achive my Goal-
              </h1>
              <p className="text-xl mt-2">
                My goal now is to be a full stack web developer and Android app
                developer. I am now working hard and practicing more and more to
                achieve my goals. And in the future I will work hard. I am
                practicing with different projects to gain better skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
