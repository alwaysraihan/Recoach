import { Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import Services from "./components/home/Services/Services";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/home/Contact/Contact";
function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutMe />} />

          <Route
            path="/checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="mt-auto" id="services">
        <Footer />
      </div>
    </>
  );
}

export default App;
