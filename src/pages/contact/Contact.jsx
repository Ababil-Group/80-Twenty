import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import contactImage from "../../assets/contact.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/90">
      <motion.section
        className="relative bg-gradient-to-r from-[#2B99D3] to-[#0C4591] text-white py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("contacts.cpage")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              Get in touch with 80 Twenty. We're always here to serve your
              future.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.div
        className="max-w-screen-xl mx-auto py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-12 items-center justify-center gap-4 px-2 md:px-0">
          <motion.div
            className="h-[650px] col-span-7 overflow-hidden rounded-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={contactImage}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="contact"
            />
          </motion.div>

          <motion.form
            className="col-span-5 space-y-5 flex flex-col"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-gray-800 text-4xl font-quicksand">
              {t("contacts.form")}
            </p>

            <motion.div
              className="flex flex-col font-quicksand"
              variants={fadeIn}
            >
              <input
                required
                type="text"
                placeholder={t("contacts.uname")}
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400 transition-all"
              />
            </motion.div>

            <motion.div
              className="custom:flex block custom:space-x-2 custom:space-y-0 space-y-2"
              variants={fadeIn}
            >
              <div className="flex flex-col w-full">
                <input
                  type="number"
                  required
                  placeholder={t("contacts.phone")}
                  className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400 transition-all"
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  required
                  placeholder={t("contacts.email")}
                  className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-400 transition-all"
                />
              </div>
            </motion.div>

            <motion.div className="flex flex-col" variants={fadeIn}>
              <textarea
                type="text"
                required
                placeholder={t("contacts.message")}
                className="h-20 p-2 rounded-sm border border-gray-400 w-full bg-white text-gray-800 outline-none focus:ring-0 ring-gray-400 transition-all"
              />
            </motion.div>

            <motion.div className="flex flex-col" variants={fadeIn}>
              <label htmlFor="" className="text-gray-600">
                {t("contacts.ordinary")}:
              </label>
              <input
                type="text"
                required
                className="h-10 px-2 rounded-sm border w-full bg-white text-gray-800 outline-none focus:ring-1 ring-gray-800 transition-all"
              />
            </motion.div>

            <motion.div className="flex flex-col space-y-3" variants={fadeIn}>
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
                <motion.button
                  className="bg-amber-400 px-5 h-10 text-gray-950 flex items-center gap-x-6 font-semibold rounded-sm text-xl hover:bg-amber-500 cursor-pointer border"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("footer.sendBtn")}
                  <IoIosArrowRoundForward className="text-sm" />
                </motion.button>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>

      <motion.div
        className="max-w-screen-lg mx-auto mb-10 p-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-gray-800 mb-4 pb-2 inline-block text-4xl max-w-xs font-bold font-quicksand border-b-4 border-amber-500"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Look For The{" "}
          <span className="text-amber-500 font-bold">Office Near</span> You
        </motion.h3>

        <div className="grid grid-cols-1 custom:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="rounded-lg overflow-hidden border border-gray-300 hover:shadow-md shadow-gray-300 cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, translateY: -5 }}
          >
            <div className="h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2824.04242856414!2d26.08265577609651!3d44.942805418076055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMunicipiul%20Ploie%C5%9Fti%2C%20Strada%20MIHAI%20BRAVU%2C%20Nr.%20239%2C%20Bloc%20C4%2C%20Ap.%2071%2C%20Judet%20Prahova!5e0!3m2!1sen!2sbd!4v1747715320463!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className="text-start py-2 space-y-3">
                <span className="flex items-center gap-4">
                  <FaMapLocationDot className="text-[#5478c4] size-5" />
                  <p className="text-xl sm:text-2xl text-[#26587D] font-bold font-quicksand py-2">
                    {t("footer.locationname0")}
                  </p>
                </span>
                <p className="text-base sm:text-lg text-gray-700 font-medium font-quicksand">
                  {t("footer.location1")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden border border-gray-300 hover:shadow-md shadow-gray-300 cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, translateY: -5 }}
          >
            <div className="h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.844826053323!2d174.80450477623276!3d-41.225151936599566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38adc84ed527ed%3A0xe75c513a82f3c33a!2sLevel%201%2F3%20Johnsonville%20Road%2C%20Johnsonville%2C%20Wellington%206037%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1747718210944!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className="text-start py-2 space-y-3">
                <span className="flex items-center gap-4">
                  <FaMapLocationDot className="text-[#5478c4] size-5" />
                  <p className="text-xl sm:text-2xl text-[#26587D] font-bold font-quicksand py-2">
                    {t("footer.locationname1")}
                  </p>
                </span>
                <p className="text-base sm:text-lg text-gray-700 font-medium font-quicksand">
                  {t("footer.location2")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg border border-gray-300 hover:shadow-md shadow-gray-300 cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, translateY: -5 }}
          >
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2416664982293!2d115.85465307578193!3d-31.954339922463557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5de6852c1%3A0x2b092f23904c0a!2s100%20St%20Georges%20Terrace%2C%2025%2F108%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1747718286995!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <div className="text-start py-2 space-y-3">
                <span className="flex items-center gap-4">
                  <FaMapLocationDot className="text-[#5478c4] size-5" />
                  <p className="text-xl sm:text-2xl text-[#26587D] font-bold font-quicksand py-2">
                    {t("footer.locationname2")}
                  </p>
                </span>
                <p className="text-base sm:text-lg text-gray-700 font-medium font-quicksand">
                  {t("footer.location3")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
