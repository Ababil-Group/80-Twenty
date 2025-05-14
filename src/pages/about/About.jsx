import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import titleimge from "../../assets/home/title_bg.jpg";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { ImMail } from "react-icons/im";
import { Link } from "react-router-dom";
import Login from "../components/Login";
const About = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const getTranslation = (key, fallback = "") => {
    const translation = t(key);
    return translation === key ? fallback : translation;
  };
  const abloutlinks = [
    t("abouts.about-us"),
    t("abouts.alink1"),
    t("abouts.alink2"),
  ];

  const contentParagraphs = [
    "abouts.ap1",
    "abouts.ap2",
    "abouts.ap3",
    "abouts.ap4",
    "abouts.ap5",
  ]
    .map((key) => getTranslation(key))
    .filter(Boolean);
  return (
    <div className="bg-white/90">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-2xl gap-x-3 text-white/90">
              <MdArrowForwardIos />
              <h2 className="text-white/80 font-bold uppercase">
                {t("abouts.about-us")}
              </h2>
            </div>
            <div className="flex items-end justify-end py-14 relative pr-6 md:pr-0">
              <button
                className="flex items-end justify-end"
                onClick={() => setShowIcons(!showIcons)}
              >
                <FaShareAlt className="text-white text-xl cursor-pointer" />
              </button>
              {showIcons && (
                <div className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2">
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebook className="text-blue-700 text-2xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FaTwitterSquare className="text-blue-500 text-2xl" />
                  </a>
                  <a href="https://google.com" target="_blank">
                    <FaGooglePlus className="text-amber-800 text-2xl" />
                  </a>
                  <a href="https://mail.google.com/" target="_blank">
                    <ImMail className="text-amber-950 text-2xl" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <div className="flex flex-col custom:flex-row gap-8">
          {/* Main Content (left side) */}
          <div className="flex-1 space-y-3 text-gray-800">
            {contentParagraphs.length > 0 ? (
              contentParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <span></span>
            )}

            <h2 className="text-md font-bold">{t("abouts.misstion")}</h2>
            <p>{t("abouts.mtext")}</p>
            <h2 className="text-md font-bold">{t("abouts.visstion")}</h2>
            <p>{t("abouts.vtext")}</p>
          </div>

          {/* Sidebar Links (right side) */}
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <ul className="space-y-3">
                {abloutlinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to="#"
                      className="flex items-center gap-x-2 text-gray-700 hover:text-red-500 transition-colors p-2 hover:bg-gray-100 rounded"
                    >
                      <MdArrowForwardIos className="text-xs" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Login />
    </div>
  );
};

export default About;
