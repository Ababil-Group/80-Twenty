import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
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
import { useEffect, useState } from "react";
import logo from "../src/assets/80-twenty.png";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import AboutDetails from "./pages/about/AboutDetalis";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;

    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    };

    const handleComplete = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300); // Small delay for smooth transition
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [location]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#289fd7"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#fbb92e"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 283 }}
              animate={{
                strokeDashoffset: 283 - (283 * progress) / 100,
              }}
              transition={{ duration: 0.3 }}
              strokeDasharray="283"
              transform="rotate(-90 50 50)"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={logo}
              alt="Loading"
              width={130}
              height={60}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.1,
              }}
            />
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-900 font-medium">{progress}%</span>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/candidates" element={<Candidate />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/career-advice" element={<Carrer />} />
          <Route path="/career-advice/:cId" element={<CarrierDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/:cId" element={<AboutDetails />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 left-2 before:shadow-2xl shadow-2xl hover:shadow-gray-400 cursor-pointer hover:bg-redest-dark p-3 rounded-full transition-colors duration-300 z-50"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="w-5 h-5 text-blue-dark hover:text-blue animate-bounce" />
        </motion.button>
      )}
    </>
  );
}

export default App;
