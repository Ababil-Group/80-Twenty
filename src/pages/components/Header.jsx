import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaTwitter,
  FaPhone,
} from "react-icons/fa6";
import { FaInstagramSquare, FaTimes } from "react-icons/fa";

import logo from "../../assets/80-twenty.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to convert text to URL-friendly format
  const convertToSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

  const navigation = [
    { title: t("menu.home"), path: "/" },
    {
      title: t("menu.services"),
      path: "/services",
      subNav: [
        {
          title: t("services.link1"),
          path: convertToSlug(t("services.link1")),
        },
        {
          title: t("services.link2"),
          path: convertToSlug(t("services.link2")),
        },
        {
          title: t("services.link3"),
          path: convertToSlug(t("services.link3")),
        },
        {
          title: t("services.link4"),
          path: convertToSlug(t("services.link4")),
        },
        {
          title: t("services.link5"),
          path: convertToSlug(t("services.link5")),
        },
        {
          title: t("services.link6"),
          path: convertToSlug(t("services.link6")),
        },
        {
          title: t("services.link7"),
          path: convertToSlug(t("services.link7")),
        },
        {
          title: t("services.link8"),
          path: convertToSlug(t("services.link8")),
        },
        {
          title: t("services.link9"),
          path: convertToSlug(t("services.link9")),
        },
      ],
    },
    { title: t("menu.candidates"), path: "/candidates" },
    { title: t("menu.clients"), path: "/clients" },
    { title: t("menu.career"), path: "/career-advice" },
    { title: t("menu.about"), path: "/about-us" },
    { title: t("menu.faq"), path: "/faqs" },
    { title: t("menu.contact"), path: "/contact" },
  ];

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const linkIcon = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/80twenty80" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/80-twenty",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/80t.wenty/",
    },
    { icon: <FaTwitter />, link: "https://x.com/80_twenty20" },
  ];

  return (
    <nav
      className={`bg-white transition-shadow ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="hidden max-w-screen-xl mx-auto md:flex items-center justify-between px-4 lg:px-8 xl:px-0 py-2">
        <div className="flex items-center text-gray-800 border-l border-r border-gray-200">
          {linkIcon.map((item, index) => (
            <Link
              key={index}
              to={item.link}
               target="_blank"
              className={`flex items-center px-3 py-1 hover:translate-y-1 transition-transform duration-500 text-blue ${
                index !== 0 ? "border-l border-gray-200" : ""
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          {["HR", "EN"].map((lang) => (
            <button
              key={lang}
              className={`px-3 py-1 hover:text-secondary ${
                lang === "EN" ? "border-l border-r border-gray-200" : ""
              } ${
                i18n.language === lang.toLowerCase()
                  ? "text-secondary font-bold"
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

      <div className="relative px-4 lg:px-8 xl:px-0 max-w-screen-xl mx-auto flex items-center justify-between py-3 md:py-5 bg-white/70">
        <Link to="/">
          <img src={logo} width={100} height={30} alt="80-twenty" />
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navigation.map((item, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={item.path}
                  className={`font-semibold text-sm transition-colors uppercase tracking-widest font-quicksand ${
                    location.pathname === item.path
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-gray-900 hover:text-secondary"
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
              className={`px-2 hover:text-secondary font-quicksand ${
                i18n.language === "hr"
                  ? "text-secondary font-bold"
                  : "text-gray-800"
              }`}
              onClick={() => i18n.changeLanguage("hr")}
            >
              HR
            </button>
            <button
              className={`px-2 hover:text-primary border-l font-quicksand border-gray-200 ${
                i18n.language === "en"
                  ? "text-primary font-bold"
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
                className="w-8 h-8 bg-primary text-white p-1 font-bold"
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
              className="absolute inset-0 bg-gray-900/30 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className="absolute right-0 top-0 h-full w-5/5 max-w-full bg-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <img src={logo} width={130} height={60} alt="Company Logo" />
                  <button
                    className="text-gray-800 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {navigation.map((item, idx) => (
                      <li key={idx} className="border-b border-gray-300">
                        {item.subNav ? (
                          <div>
                            <div
                              className="flex justify-between items-center px-4 py-2 text-lg font-inter font-medium text-gray-800 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer"
                              onClick={() => toggleSubMenu(idx)}
                            >
                              <span>{item.title}</span>
                              <svg
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  openSubMenu === idx
                                    ? "transform rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                            {openSubMenu === idx && (
                              <ul className="pl-6 py-2 space-y-2 bg-gray-100 rounded-lg">
                                {item.subNav.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={`${item.path}/${subItem.path}`}
                                      className="block px-4 py-2 text-base font-normal text-gray-700 font-quicksand hover:bg-gray-200 rounded-lg transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-300 font-quicksand rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        )}
                      </li>
                    ))}
                    {/* <li className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-300 rounded-lg transition-colors border-b border-gray-300">
                      <a
                        href="https://www.concessum.com/blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
