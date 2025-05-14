import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import titleimge from "../../assets/home/title_bg.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import Login from "../components/Login";
import { FaFacebook, FaGooglePlus, FaShareAlt, FaTwitterSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
const Faqs = () => {
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
              <h2 className="text-white/80 font-bold uppercase">{t("faqs.faq")}</h2>
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
            <h2 className="text-md font-bold">{t("faqs.fh1")}</h2>
            <p>{t("faqs.fp1")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh2")}</h2>
            <p>{t("faqs.fp2")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh3")}</h2>
            <p>{t("faqs.fp3")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh4")}</h2>
            <p>{t("faqs.fp4")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh5")}</h2>
            <p>{t("faqs.fp5")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh6")}</h2>
            <p>{t("faqs.fp6")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh7")}</h2>
            <p>{t("faqs.fp7")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh8")}</h2>
            <p>{t("faqs.fp8")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh9")}</h2>
            <p>{t("faqs.fp9")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh10")}</h2>
            <p>{t("faqs.fp10")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh11")}</h2>
            <p>{t("faqs.fp11")}</p>
            <h2 className="text-md font-bold">{t("faqs.fh12")}</h2>
            <p>{t("faqs.fp12")}</p>

            <h2 className="text-lg font-bold text-gray-700">{t("faqs.feedback")}</h2>
          </div>

          {/* Sidebar Links (right side) */}
          <div className="hidden custom:block w-64 flex-shrink-0"></div>
        </div>
      </section>
      <Login />
    </div>
  );
};

export default Faqs;
