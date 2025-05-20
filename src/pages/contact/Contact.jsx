import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import titleimge from "../../assets/home/title_bg.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import contact from "../../assets/contact.jpg";
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
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const position = [45.815, 15.9819];
  return (
    <div className="bg-white/90">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xl md:text-2xl gap-x-3 text-white/90">
              <MdArrowForwardIos />
              <h2 className="text-white/80 font-bold text-xl md:text-2xl font-quicksand uppercase">
                {t("contacts.cpage")}
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
                <div className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2 duration-500">
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
        {/* from */}
        <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-12 items-center justify-center gap-4 px-2 md:px-0">
          {/* image */}
          <div className="h-[650px] col-span-7">
            <img src={contact} className="w-full h-full" alt="contact" />
          </div>
          <form className="col-span-5 space-y-5 flex flex-col ">
            <p className="font-bold text-gray-800 text-4xl font-quicksand">
              {t("contacts.form")}
            </p>
            <div className="flex flex-col font-quicksand">
              <input
                required
                type="text"
                placeholder={t("contacts.uname")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400"
              />
            </div>
            <div className="custom:flex block custom:space-x-2 custom:space-y-0 space-y-2 ">
              <div className="flex flex-col w-full">
                <input
                  type="number"
                  required
                  placeholder={t("contacts.phone")}
                  className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400"
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  required
                  placeholder={t("contacts.email")}
                  className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <textarea
                type="text"
                required
                placeholder={t("contacts.message")}
                className="h-20 p-2 rounded-sm border border-gray-400 w-full bg-white text-gray-800 outline-none focus:ring-0 ring-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-600">
                {t("contacts.ordinary")}:
              </label>
              <input
                type="text"
                required
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="" id="" className="w-6 h-6" />
                <p className="flex gap-x-1">
                  {t("footer.condition")}
                  <a href="" className="text-blue-400 hover:underline">
                    {t("footer.conditiontram")}{" "}
                    <span className="text-red-500">*</span>
                  </a>
                </p>
              </div>
              <div>
                <button className="bg-amber-400 px-5 h-10 text-gray-950 flex items-center gap-x-6 font-semibold rounded-sm text-xl  hover:bg-amber-500 cursor-pointer border hover:scale-95 transition-transform duration-300">
                  {t("footer.sendBtn")}{" "}
                  <span>
                    <IoIosArrowForward className="text-sm" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Login /> */}
      <div className="max-w-screen-lg mx-auto mb-10 p-2">
        <h3 className="text-gray-800 mb-4 pb-2 inline-block text-4xl max-w-xs font-bold font-quicksand border-b-4 border-amber-500">
          Look For The{" "}
          <span className="text-amber-500 font-bold">Office Near</span> You
        </h3>

        {/* exta */}

        {/* map */}
        <div className="grid grid-cols-1 custom:grid-cols-2 gap-5 mt-8">
          <div className=" rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2824.04242856414!2d26.08265577609651!3d44.942805418076055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMunicipiul%20Ploie%C5%9Fti%2C%20Strada%20MIHAI%20BRAVU%2C%20Nr.%20239%2C%20Bloc%20C4%2C%20Ap.%2071%2C%20Judet%20Prahova!5e0!3m2!1sen!2sbd!4v1747715320463!5m2!1sen!2sbd"
                style={{
                  border: "5px solid #a9aaac",
                  borderRadius: "6px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className=" text-start py-2 space-y-3">
                <p className="text-xl font-bold text-amber-500 font-quicksand">
                  {t("footer.locationname0")}
                </p>
                <span className="flex gap-2">
                  <FaLocationDot className="text-gray-500 size-5" />
                  <p className="text-lg font-quicksand tracking-wider text-gray-500">
                    {t("footer.location1")}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.844826053323!2d174.80450477623276!3d-41.225151936599566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38adc84ed527ed%3A0xe75c513a82f3c33a!2sLevel%201%2F3%20Johnsonville%20Road%2C%20Johnsonville%2C%20Wellington%206037%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1747718210944!5m2!1sen!2sbd"
                style={{
                  border: "5px solid #a9aaac",
                  borderRadius: "6px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className=" text-start py-2 space-y-3">
                <p className="text-xl font-bold text-amber-500 font-quicksand">
                  {t("footer.locationname1")}
                </p>
                <span className="flex gap-2">
                  <FaLocationDot className="text-gray-500 size-5" />
                  <p className="text-lg font-quicksand tracking-wider text-gray-500">
                    {t("footer.location2")}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2416664982293!2d115.85465307578193!3d-31.954339922463557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5de6852c1%3A0x2b092f23904c0a!2s100%20St%20Georges%20Terrace%2C%2025%2F108%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1747718286995!5m2!1sen!2sbd"
                style={{
                  border: "5px solid #a9aaac",
                  borderRadius: "6px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className=" text-start py-2 space-y-3">
                <p className="text-xl font-bold text-amber-500 font-quicksand">
                  {t("footer.locationname2")}
                </p>
                <span className="flex gap-2">
                  <FaLocationDot className="text-gray-500 size-5" />
                  <p className="text-lg font-quicksand tracking-wider text-gray-500">
                    {t("footer.location3")}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
