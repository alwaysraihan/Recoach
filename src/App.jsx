import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="mt-auto" id="services">
        <Footer />
      </div>
    </>
  );
}

export default App;
