import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import Loading from "../shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center flex justify-center items-center h-[70vh]">
        <div>
          <h3 className="text-2xl font-semibold">
            Your Email is not verified!!
          </h3>
          <h5 className="text-2xl mb-5 font-semibold">
            Please Verify your email address
          </h5>
          <span className="text-xl font-semibold text-gray-600">
            Clik here{" "}
            <button
              className="text-blue-500"
              onClick={async () => {
                await sendEmailVerification();
                toast("Sent email");
              }}
            >
              Send a verification email again
            </button>
          </span>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
