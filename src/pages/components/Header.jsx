import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaTwitter,
  FaPhone,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/services" },
    { title: t("menu.candidates"), path: "/candidates" },
    { title: t("menu.clients"), path: "/clients" },
    { title: t("menu.career"), path: "/career-advice" },
    { title: t("menu.about"), path: "/about-us" },
    { title: t("menu.faq"), path: "/faqs" },
    { title: t("menu.contact"), path: "/contact" },
  ];

  return (
    <nav
      className={`bg-white transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Top Contact/Language Bar */}
      <div className="hidden max-w-screen-xl mx-auto md:flex items-center justify-between px-4 lg:px-8 xl:px-0 py-2">
        {/* Social/Contact Links */}
        <div className="flex items-center text-gray-800 border-l border-r border-gray-200">
          {[
            { icon: <FaFacebookF /> },
            { icon: <FaLinkedinIn /> },
            { icon: <FaGooglePlusG /> },
            { icon: <FaTwitter /> },
            {
              icon: (
                <>
                  <FaPhone className="mr-2" />
                  +385 1 4668 604
                </>
              ),
            },
          ].map((item, index) => (
            <Link
              key={index}
              to="#"
              className={`flex items-center px-3 py-1 hover:translate-y-1 transition-transform duration-500 ${
                index !== 0 ? "border-l border-gray-200" : ""
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Login & Language Switcher */}
        <div className="flex items-center">
          <a
            href="#login"
            className="flex items-center px-3 py-1 border-l border-r border-gray-200"
          >
            <FaArrowRightToBracket className="mr-2" />
            <span className="font-medium">Login</span>
          </a>
          {["HR", "EN"].map((lang) => (
            <button
              key={lang}
              className={`px-3 py-1 hover:text-red-600 ${
                lang === "EN" ? "border-l border-r border-gray-200" : ""
              } ${
                i18n.language === lang.toLowerCase()
                  ? "text-red-600 font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage(lang.toLowerCase())}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      {/* Main Navigation */}
      <div className="relative px-4 lg:px-8 xl:px-0 max-w-screen-xl mx-auto flex items-center justify-between py-3 md:py-5 bg-white/70">
        <Link to="/">
          <img src={logo} height={60} alt="Company Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`font-semibold text-[16px] transition-colors ${
                    location.pathname === item.path
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-gray-800 hover:text-red-600"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="flex">
            <button
              className={`px-2 hover:text-red-600 ${
                i18n.language === "hr"
                  ? "text-red-600 font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage("hr")}
            >
              HR
            </button>
            <button
              className={`px-2 hover:text-red-600 border-l border-gray-200 ${
                i18n.language === "en"
                  ? "text-red-600 font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
          <button
            className="text-gray-800 hover:text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-red-500 text-white p-1 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-gray-900 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-5/5 max-w-full bg-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <img src={logo} height={50} alt="Company Logo" />
                  <button
                    className="text-gray-800 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2 divide-y divide-gray-300">
                    {navigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    <li className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-200 rounded-lg transition-colors">
                      <a href="https://www.concessum.com/blog/" target="_blank"  onClick={() => setIsMenuOpen(false)}>Blog</a>
                    </li>
                  </ul>
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t border-gray-200">
                  <a
                    href="#login"
                    className="flex items-center justify-center w-full px-4 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaArrowRightToBracket className="mr-2" />
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
