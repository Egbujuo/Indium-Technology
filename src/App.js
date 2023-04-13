import "./App.css";
// import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import CareerPage from "./Pages/CareerPage";
import CareerProPaage from "./Pages/CareerProPaage";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/careerPro" element={<CareerProPaage />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
