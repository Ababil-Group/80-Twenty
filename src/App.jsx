import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/components/NotFoundPage";
import Candidate from "./pages/canditate/Candidate";
import Service from "./pages/service/Service";
import Carrer from "./pages/carrer/Carrer";
import About from "./pages/about/About";
import Faqs from "./pages/faqs/Faqs";
import ServiceDetails from "./pages/service/ServiceDetails";
import ScrollToTop from "./pages/components/ScrollToTop";
import Clients from "./pages/client/Clients";
import Contact from "./pages/contact/Contact";
import "./App.css";
import CarrierDetails from "./pages/carrer/CarrierDetails";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/candidates" element={<Candidate />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/career-advice" element={<Carrer />} />
          <Route path="/career-advice/:cId" element={<CarrierDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
