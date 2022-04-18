import React from "react";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <div className="mt-5 mb-10 md:mb-16">
        <Contact />
      </div>
    </>
  );
};

export default Home;
