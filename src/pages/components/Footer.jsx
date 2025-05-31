import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import footerimage from "../../assets/home/footerimg.png";
import { FaInstagramSquare } from "react-icons/fa";

import { SlSocialPintarest } from "react-icons/sl";
import logo from "../../assets/80-twenty.png";
const Footer = () => {
  const { t } = useTranslation();
  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/services" },
    { title: t("menu.candidates"), path: "/jobs-for-candidates" },
    { title: t("menu.clients"), path: "/hiring-for-employers" },
    { title: t("menu.career"), path: "/career-tips" },
    { title: t("menu.about"), path: "/about-us" },
    { title: t("menu.faq"), path: "/faqs" },
    { title: t("menu.contact"), path: "/contact" },
  ];
  return (
    <div className="bg-black/90 pt-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 custom:grid-cols-12 items-center justify-center py-8 px-2 sm:px-0">
          <div className="hidden custom:block col-span-4">
            <h2 className="text-white/80 font-bold text-2xl mb-2">{t("footer.menu")}</h2>
            <ul className="flex flex-col items-start gap-y-2">
              {navigation.map((item, indx) => (
                <li key={indx} className="flex flex-col ">
                  <div className="flex items-center gap-x-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-white/80"></span>
                    <Link
                      to={item.path}
                      className="text-white/80 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* contacts info*/}
          <div className="col-span-4 space-y-4 divide-y divide-gray-600">
            <h1 className="text-3xl font-bold uppercase tracking-wider text-center py-2 text-white/80">
              {t("footer.heading")}
            </h1>
            <div className=" text-center text-white/80 py-2 space-y-3">
              <span className=" flex items-center justify-center gap-2">
                <FaLocationDot className="text-[#225EC3] size-5" />

                <p className="text-xl font-medium">
                  {t("footer.locationname0")}
                </p>
              </span>
              <p className="text-white/80">{t("footer.location1")}</p>
            </div>
            {/* <div className="text-center text-white/80 py-2 space-y-3">
              <span className=" flex items-center justify-center gap-2">
                <FaLocationDot className="text-[#225EC3] size-5" />

                <p className="text-xl font-medium">
                  {t("footer.locationname1")}
                </p>
              </span>
              <p className="text-white/80">{t("footer.location2")}</p>
            </div>
            <div className="text-center text-white py-2 space-y-3">
              <span className=" flex items-center justify-center gap-2">
                <FaLocationDot className="text-[#225EC3] size-5" />

                <p className="text-xl font-medium">
                  {t("footer.locationname2")}
                </p>
              </span>
              <p className="text-white/80">{t("footer.location3")}</p>
            </div> */}
          </div>

          {/* contact */}
          <div className="hidden custom:block col-span-4 space-y-3">
            <h2 className="text-3xl text-center font-bold text-white/90 tracking-wider">
              {t("footer.contact")}
            </h2>

            <div className="flex flex-col items-center justify-center space-y-2 ">
              <div className="relative">
                <input
                  className="h-10 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
                  type="text"
                  placeholder={t("footer.inputname")}
                  required
                />
                <span className="absolute top-2 right-2 text-red-500">*</span>
              </div>
              <div className="relative">
                <input
                  className="h-10 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
                  type="text"
                  placeholder={t("footer.inputphone")}
                  required
                />
                <span className="absolute top-2 right-2 text-red-500">*</span>
              </div>
              <div className="relative">
                <input
                  className="h-10 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
                  type="text"
                  placeholder={t("footer.inputeamil")}
                  required
                />
                <span className="absolute top-2 right-2 text-red-500">*</span>
              </div>

              <textarea
                className="h-20 px-2 rounded-sm border w-70 bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
                type="text"
                placeholder={t("footer.inputmesage")}
              />
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="checkbox"
                className="w-5 h-5 accent-blue-400 cursor-pointer"
              />
              <p className="text-white/80 font-semibold">
                {t("footer.condition")}
              </p>
              <Link className="text-blue-500 hover:underline">
                {t("footer.conditiontram")}
              </Link>
            </div>
            <div className="flex items-center justify-center pl-38">
              <button className="bg-[#225EC3] px-5 h-10 text-white flex items-center gap-x-6 font-semibold rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer">
                {t("footer.sendBtn")}{" "}
                <span>
                  <IoIosArrowForward className="text-sm" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* icons */}
        <div className="py-4 flex-col flex custom:items-start flex-wrap  space-y-2">
          <div className="flex items-center flex-wrap justify-center gap-4 ">
            <a
              href="https://www.facebook.com/80twenty80"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center justify-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/80-twenty"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center justify-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.tiktok.com/@80twenty?lang=en"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center justify-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://x.com/80_twenty20"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center justify-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/80t.wenty/"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center justify-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://www.pinterest.com/80twenty0323/"
              target="_blank"
              className="bg-[#225EC3] p-1 h-8 w-8 text-white flex items-center font-semibold hover:-translate-y-2 transition-transform duration-500 rounded-sm text-xl hover:bg-white/90 hover:text-[#225EC3] cursor-pointer"
            >
              <SlSocialPintarest />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="py-4 flex items-center justify-center">
        <img src={footerimage} alt="" />
      </div>
      <div className="bg-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-6 grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 items-center justify-center gap-2">
            <div className="flex items-center justify-center custom:justify-normal gap-2 text-white/80">
              <a
                className="hover:text-amber-400 text-sm"
                href="/"
                target="_blank"
              >
                <img src={logo} alt="" width={50}/>
              </a>
            </div>
            <div className="text-white/80 flex items-center justify-center gap-x-3 text-sm">
              <Link>{t("footer.trem")}</Link>
            </div>

            <div className="flex items-center justify-center">
              <p className="text-white/80 text-sm">
                © {new Date().getFullYear()} | {t("footer.copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
