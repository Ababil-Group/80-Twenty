import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import titleimge from "../../assets/home/title_bg.jpg";

import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);

  const aboutData = [
    {
      link: t("abouts.link1"),
      cardh1: t("abouts.about-us"),
    },
    {
      link: t("abouts.link2"),
      cardh1: t("abouts.alink1"),
    },
    {
      link: t("abouts.link3"),
      cardh1: t("abouts.alink2"),
    },
  ];

  return (
    <div className="bg-white/90">
      {/* Header Section */}
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
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="text-blue-700 text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitterSquare className="text-blue-500 text-2xl" />
                  </a>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    <FaGooglePlus className="text-amber-800 text-2xl" />
                  </a>
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImMail className="text-amber-950 text-2xl" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <div className="flex flex-col custom:flex-row gap-8">
          {/* Sidebar Links (right side) */}
          <div className="flex-1 space-y-3 text-gray-800">
            <h2 className="text-gray-700 font-bold text-2xl font-quicksand">
              {t("abouts.misstion")}
            </h2>
            <p className="text-lg text-gray-700 font-quicksand">
              {t("abouts.mtext")}
            </p>
            <h2 className="text-gray-700 font-bold text-2xl font-quicksand">
              {t("abouts.visstion")}
            </h2>
            <p className="text-lg text-gray-700 font-quicksand">
              {t("abouts.vtext")}
            </p>
          </div>
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 font-quicksand border-b pb-2">
                {t("abouts.about-us")}
              </h3>
              <ul className="space-y-3">
                {aboutData.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`/about-us/${encodeURIComponent(
                        link.link.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="flex items-center gap-x-2 font-quicksand text-gray-800 hover:text-red-500 transition-colors p-2 hover:bg-gray-100 rounded"
                    >
                      <MdArrowForwardIos className="text-xs" />
                      {link.cardh1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
