import React, { useEffect, useState } from "react";
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
import { MdArrowForwardIos } from "react-icons/md";
const Clients = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);

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
                {t("clients.client")}
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
      <div className="max-w-screen-xl mx-auto py-6">
        <div className="max-w-screen-custom space-y-3 px-2 md:px-0">
          <p className="text-gray-700">{t("clients.cp1")}</p>
        </div>
        {/* from */}
        <form className="max-w-screen-custom space-y-3 px-2 md:px-0 my-5">
          <h2 className="text-2xl font-bold text-gray-600">
            {t("candidate.from")}
          </h2>
          <div className="border-b border-gray-200"></div>
          <div className="grid grid-cols-1 custom:grid-cols-2 gap-2 py-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.uname")}:
              </label>
              <input
                required
                type="text"
                placeholder={t("clients.uname")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.email")}:
              </label>
              <input
                type="email"
                required
                placeholder={t("clients.email")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.password")}:
              </label>
              <input
                type="password"
                required
                placeholder={t("clients.password")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.phone")}:
              </label>
              <input
                type="number"
                required
                placeholder={t("clients.phone")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.city")}:
              </label>
              <input
                type="text"
                required
                placeholder={t("clients.city")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.country")}:
              </label>
              <input
                type="text"
                required
                placeholder={t("clients.country")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.address")}:
              </label>
              <input
                type="text"
                required
                placeholder={t("clients.address")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.contactperson")}:
              </label>
              <input
                type="text"
                required
                placeholder={t("clients.contactperson")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("clients.website")}:
              </label>
              <input
                type="text"
                required
                placeholder={t("clients.website")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-gray-600">
              {t("clients.message")}:
            </label>
            <textarea
              type="text"
              required
              placeholder={t("clients.message")} 
              className="h-30 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
            />
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="py-4">
            <div className="flex gap-x-2">
              <input type="checkbox" className="w-7 h-7" required />
              <p>{t("candidate.condition")}</p>
            </div>
          </div>
          <button className="text-lg tracking-wider cursor-pointer hover:bg-red-800 bg-red-700/80 rounded-md px-4 py-2 text-white flex items-center justify-center gap-x-2 uppercase">
            {t("candidate.register")} <BsArrowRight />
          </button>
        </form>
      </div>
      <Login />
    </div>
  );
};

export default Clients;
