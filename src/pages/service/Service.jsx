import React, { useState } from "react";
import titleimge from "../../assets/home/title_bg.jpg";
import { useTranslation } from "react-i18next";
import { MdArrowForwardIos } from "react-icons/md";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import s1 from "../../assets/sevices/s1.jpg";
import s2 from "../../assets/sevices/s2.jpg";
import s3 from "../../assets/sevices/s3.jpg";
import s4 from "../../assets/sevices/s4.jpg";
import s5 from "../../assets/sevices/s5.jpg";
import s6 from "../../assets/sevices/s6.jpg";
import s7 from "../../assets/sevices/s7.jpg";
import s8 from "../../assets/sevices/s8.jpg";
import { Link } from "react-router-dom";
import { ImMail } from "react-icons/im";
const Service = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);

  const serverdata = [
    {
      id: 0,
      img: s1,
      link: t("services.link1"),
      cardh1: t("services.cardh1"),
      chardp1: t("services.cardp1"),
      btn: t("services.cardbtn"),
    },
    {
      id: 1,
      img: s2,
      link: t("services.link2"),
      cardh1: t("services.cardh2"),
      chardp1: t("services.cardp2"),
      btn: t("services.cardbtn"),
    },
    {
      id: 2,
      img: s3,
      link: t("services.link3"),
      cardh1: t("services.cardh3"),
      chardp1: t("services.cardp3"),
      btn: t("services.cardbtn"),
    },
    {
      id: 3,
      img: s4,
      link: t("services.link4"),
      cardh1: t("services.cardh4"),
      chardp1: t("services.cardp1"),
      btn: t("services.cardbtn"),
    },
    {
      id: 4,
      img: s5,
      link: t("services.link5"),
      cardh1: t("services.cardh5"),
      chardp1: t("services.cardp5"),
      btn: t("services.cardbtn"),
    },
    {
      id: 5,
      img: s6,
      link: t("services.link6"),
      cardh1: t("services.cardh6"),
      chardp1: t("services.cardp6"),
      btn: t("services.cardbtn"),
    },
    {
      id: 6,
      img: s7,
      link: t("services.link7"),
      cardh1: t("services.cardh7"),
      chardp1: t("services.cardp7"),
      btn: t("services.cardbtn"),
    },
    {
      id: 7,
      img: s8,
      link: t("services.link8"),
      cardh1: t("services.cardh8"),
      chardp1: t("services.cardp8"),
      btn: t("services.cardbtn"),
    },
    {
      id: 8,
      img: "",
      link: t("services.link9"),
      cardh1: t("services.cardh9"),
      chardp1: t("services.cardp9"),
      btn: t("services.cardbtn"),
    },
  ];


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
                {t("services.service")}
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
            <p>{t("services.sp1")}</p>
            <p>{t("services.sp2")}</p>
            <p>{t("services.sp3")}</p>
            <p>{t("services.sp4")}</p>
            {/* In your Service.js component */}
            {serverdata.map((service, ind) => (
              <div
                key={ind}
                className="grid grid-cols-1 custom:grid-cols-2 gap-6 mt-16"
              >
                <img
                  src={service.img}
                  alt={service.chardp1}
                  className="bg-gray-300 border border-gray-200 rounded-sm object-cover h-full"
                />
                <div className="flex flex-col items-start space-y-6">
                  <Link
                    to={`/services/${encodeURIComponent(
                      service.link.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                    className="text-2xl text-red-500 font-bold tracking-wide"
                  >
                    {service.cardh1}
                  </Link>
                  <p className="text-gray-800">{service.chardp1}</p>
                  <Link
                    to={`/services/${encodeURIComponent(
                      service.link.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                    className="px-4 py-2 border border-gray-300 hover:bg-red-500 uppercase hover:text-white text-lg font-semibold flex items-center gap-x-3"
                  >
                    {service.btn} <MdArrowForwardIos />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Links (right side) */}
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("services.service")}
              </h3>
              <ul className="space-y-3">
                {serverdata.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`/services/${encodeURIComponent(
                        link?.link?.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="flex items-center gap-x-2 text-gray-700 hover:text-red-500 transition-colors p-2 hover:bg-gray-100 rounded"
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

export default Service;
