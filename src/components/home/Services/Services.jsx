import React from "react";
import servImg1 from "../../../assets/images/weetlose.jpg";
import servImg2 from "../../../assets/images/mealPlaning.jpg";
import servImg3 from "../../../assets/images/juiceDetox.jpg";
const Services = () => {
  const service1 = {
    id: 1,
    name: "Weight Lose",
    price: "2000",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod, eveniet?",
  };
  const service2 = {
    id: 1,
    name: "Weight Lose",
    price: "3500",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod, eveniet?",
  };
  const service3 = {
    id: 1,
    name: "Weight Lose",
    price: "4800",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod, eveniet?",
  };
  return (
    <>
      <div className="my-10">
        <div className="px-[10%] grid grid-cols-3 gap-5 ">
          {/* service 1   */}
          <div className="bg-[rgb(242,242,242)] ">
            <div>
              <div>
                <img
                  src={servImg1}
                  className="h-[250px] w-full"
                  alt="running women"
                />
              </div>
              <div className="flex text-center justify-center items-center p-5">
                <div>
                  <h1 className="text-2xl text-blue-500 font-bold">
                    {service1.name}
                  </h1>
                  <p className="mt-5 mb-2">{service1.description}</p>
                  <h2 className="mb-10">Price:$ {service1.price}</h2>
                  <span className="bg-blue-500 text-white my-5 cursor-pointer text-center p-4 rounded">
                    Checkout Now
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* service 2   */}
          <div className="bg-[rgb(242,242,242)] ">
            <div>
              <div className="flex text-center justify-center items-center p-5">
                <div>
                  <h1 className="text-2xl text-blue-500 font-bold">
                    {service2.name}
                  </h1>
                  <p className="mt-5 mb-2">{service2.description}</p>
                  <h2 className="mb-10">Price:$ {service2.price}</h2>
                  <span className="bg-blue-500 text-white my-5 cursor-pointer text-center p-4 rounded">
                    Checkout Now
                  </span>
                </div>
              </div>
              <div>
                <img
                  src={servImg2}
                  className="h-[250px] w-full"
                  alt="meal planning women"
                />
              </div>
            </div>
          </div>
          {/* service 3   */}
          <div className="bg-[rgb(242,242,242)] ">
            <div>
              <div>
                <img
                  src={servImg3}
                  className="h-[250px] w-full"
                  alt="juce detox women"
                />
              </div>
              <div className="flex text-center justify-center items-center p-5">
                <div>
                  <h1 className="text-2xl text-blue-500 font-bold">
                    {service3.name}
                  </h1>
                  <p className="mt-5 mb-2">{service3.description}</p>
                  <h2 className="mb-10">Price:$ {service3.price}</h2>
                  <span className="bg-blue-500 text-white my-5 cursor-pointer text-center p-4 rounded">
                    Checkout Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
