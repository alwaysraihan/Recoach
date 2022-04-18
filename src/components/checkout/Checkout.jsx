import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  console.log(id);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const service = services.find((serviceData) => serviceData.id === id);

  return (
    <>
      <div>
        <div class="container mx-auto p-10 max-w-screen-lg">
          <div class="bg-white rounded shadow p-8">
            <div class="w-full bg-orange-200 text-yellow-900 px-4 py-2 flex items-center">
              <img
                src="https://svgsilh.com/svg/151889.svg"
                class="w-10 block pr-2"
                alt="/"
              />
              <div class="text-sm">
                Congrats you're eligible for a <b>Coupon Code</b> in this order{" "}
              </div>
            </div>
            <div>
              <h3 class="text-xl mt-4 font-bold">Order Summary</h3>
              <div class="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41KufN65f8L.jpg"
                  class="w-12"
                  alt="/"
                />
                <div class="w-2/3">
                  <h3 class="text-lg font-medium">Black Jacket XL</h3>
                  <p class="text-gray-600 text-xs">
                    Sold by <b>Aashir Khan</b>
                  </p>
                  <h4 class="text-red-700 text-xs font-bold mt-1">
                    Only 2 left in stock
                  </h4>
                </div>
                <div>
                  <h4 class="text-3xl font-medium">
                    <sup class="text-lg text-purple-800">$</sup> 89
                  </h4>
                  <h5 class="text-sm font-bold text-purple-800">60% OFF</h5>
                </div>
                <div class="w-full flex justify-between mt-4">
                  <button class="text-red-700 hover:bg-red-100 px-2">
                    DELETE
                  </button>
                  <label
                    class="block uppercase tracking-wide text-gray-700"
                    for="grid-first-name"
                  >
                    month
                    <select
                      class="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight"
                      id="grid-state"
                    >
                      <option>6 month</option>
                      <option>12 month</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <button class="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">
              PROCEED TO CHECKOUT SCREEN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
