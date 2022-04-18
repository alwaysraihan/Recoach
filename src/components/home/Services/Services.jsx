import { useNavigate } from "react-router-dom";
import useServicesData from "../../../hooks/useServices";
const Services = () => {
  const navigrate = useNavigate();

  const [services] = useServicesData();

  return (
    <>
      <div>
        <div className="my-16">
          <h1 className="text-center my-10 font-semibold text-4xl">
            My Services
          </h1>
          <div className="px-5 md:px-[4%] lg:px-[10%] grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {services.map(({ id, name, img, description, price }) => (
              <div key={id} className="bg-[rgb(242,242,242)] ">
                <div>
                  <div>
                    <img
                      src={img}
                      className="h-[250px] w-full"
                      alt="running women"
                    />
                  </div>
                  <div className="flex text-center justify-center items-center p-5">
                    <div>
                      <h1 className="text-2xl text-blue-500 font-bold">
                        {name}
                      </h1>
                      <p className="mt-5 mb-2">
                        {description.slice(0, 280) + "... "}
                        <span
                          className="font-semibold text-gray-600"
                          onClick={() => navigrate("/checkout")}
                        >
                          Read More
                        </span>
                      </p>
                      <h2 className="mb-10 text-xl font-semibold ">
                        Price:$ {price}
                      </h2>
                      <div
                        className="mt-3 mb-5"
                        onClick={() => navigrate(`/checkout/${id}`)}
                      >
                        <span className="bg-blue-500 text-white cursor-pointer text-center p-4 rounded">
                          Checkout Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
