import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import titleimge from "../../assets/home/title_bg.jpg";
import {
  FaFacebook,
  FaFileUpload,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImMail } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import Login from "../components/Login";
const Candidate = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="bg-white/90">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="max-w-screen-xl mx-auto">
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
      <div className="max-w-screen-xl mx-auto py-6">
        <div className="max-w-screen-custom space-y-3 px-2 md:px-0">
          <p className="text-gray-700">{t("candidate.p1")}</p>
          <p className="text-gray-700">{t("candidate.p2")}</p>
          <p className="text-gray-700">{t("candidate.p3")}</p>
        </div>
        {/* from */}
        <div className="max-w-screen-custom space-y-3 px-2 md:px-0 my-5">
          <h2 className="text-2xl font-bold text-gray-600">
            {t("candidate.from")}
          </h2>
          <div className="border-b border-gray-200"></div>
          <div className="grid grid-cols-1 custom:grid-cols-2 gap-2 py-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.inputname")}
              </label>
              <input
                required
                type="text"
                placeholder={t("candidate.inputname")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.username")}
              </label>
              <input
                type="text"
                required
                placeholder={t("candidate.username")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.inputeamil")}
              </label>
              <input
                type="text"
                required
                placeholder={t("candidate.inputeamil")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.password")}
              </label>
              <input
                type="text"
                required
                placeholder={t("candidate.password")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.inputphone")}
              </label>
              <input
                type="text"
                required
                placeholder={t("candidate.inputphone")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.birth")}
              </label>
              <input
                type="date"
                required
                placeholder={t("candidate.birth")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("candidate.profession")}
              </label>
              <input
                type="text"
                required
                placeholder={t("candidate.profession")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="py-4">
            <div className="xs:flex items-center  gap-x-1.5">
              <div className="relative w-42">
                <input type="file" id="file" className="hidden" required />
                <label
                  htmlFor="file"
                  className="flex items-center gap-2 justify-center h-10 px-3 rounded-md border border-gray-300 bg-[#1046a3] text-gray-800 cursor-pointer hover:bg-[#225EC3]/90 shadow-md"
                >
                  <span className="text-xl font-semibold text-white uppercase">
                    {t("candidate.cv")}
                  </span>
                  <FaFileUpload className="text-white text-xl" />
                </label>
              </div>
              <p className="text-gray-600">{t("candidate.size")}</p>
            </div>
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="py-4">
            <div className="flex gap-x-2">
              <input type="checkbox" className="w-7 h-7" />
              <p>{t("candidate.condition")}</p>
            </div>
          </div>
          <button className="text-lg tracking-wider cursor-pointer hover:bg-red-800 bg-red-700/80 rounded-md px-4 py-2 text-white flex items-center justify-center gap-x-2 uppercase">
            {t("candidate.register")} <BsArrowRight />
          </button>
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Candidate;
