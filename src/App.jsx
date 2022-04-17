import { Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Home from "./components/home/Home";
import Services from "./components/home/Services/Services";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Services />} />

          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Services />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
      <div className="mt-auto" id="services">
        <Footer />
      </div>
    </>
  );
}

export default App;
