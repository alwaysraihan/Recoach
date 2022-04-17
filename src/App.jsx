import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
