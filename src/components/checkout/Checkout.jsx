import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import orderImg from "../../assets/images/weetlose.jpg";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { displayName } = user;

  return (
    <>
      <div>
        <div className="container mx-auto py-10 px-1  md:py-10 md:px-5 max-w-screen-lg">
          <div className="bg-white rounded shadow py-2 px-2 md:px-8 md:py-8">
            <div className="w-full bg-orange-200 text-yellow-900 px-4 py-2 flex items-center">
              <img
                src="https://svgsilh.com/svg/151889.svg"
                className="w-10 block pr-2"
                alt="shopping-bag"
              />
              <div className="text-sm">
                Congrats you're eligible for a <b>Coupon Code</b> in this order{" "}
              </div>
            </div>
            <div>
              <h3 className="text-xl mt-4 font-bold">Order Summary</h3>
              <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                <img src={orderImg} className="w-24" alt="women running" />
                <div className="w-2/3">
                  <h3 className="text-lg font-medium">Health Coach Admision</h3>
                  <p className="text-gray-600 text-xs">
                    Ordered by <b>{displayName ? displayName : "user"}</b>
                  </p>
                  <h4 className="text-red-700 text-xs font-bold mt-1">
                    Only 24 days left for this coatch
                  </h4>
                </div>
                <div>
                  <h4 className="text-3xl font-medium">
                    <sup className="text-lg text-purple-800">$</sup> 2500
                  </h4>
                  <h5 className="text-sm font-bold text-purple-800">60% OFF</h5>
                </div>
                <div className="w-full flex justify-between mt-4">
                  <button className="text-red-700 hover:bg-red-100 px-2">
                    DELETE
                  </button>
                  <label
                    className="block uppercase tracking-wide text-gray-700"
                    htmlFor="grid-first-name"
                  >
                    month
                    <select
                      className="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight"
                      id="grid-state"
                    >
                      <option>6 month</option>
                      <option>12 month</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                toast("Your Registration Payment Successfully Placed");
              }}
              className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
