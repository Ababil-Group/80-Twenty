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
              {t("contacts.cheroh")}
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              {t("contacts.cherop")}
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
        className="max-w-screen-xl mx-auto py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-gray-800 mb-8 pb-2 inline-block text-4xl max-w-xs font-bold font-quicksand relative"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("contacts.cfindp1")}
          <span className="text-amber-500 font-bold">
            {t("contacts.cfindp2")}
          </span>{" "}
          {t("contacts.cfindp3")}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></span>
        </motion.h3>

        <div className="grid grid-cols-1 gap-8 mt-8">
          <motion.div
            className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -5 }}
          >
            {/* Map with gradient overlay */}
            <div className="relative h-[350px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5363866145653!2d-0.0013758999999999998!3d51.54006269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d619425c5f9%3A0x211fc273a1979577!2sUnex%20Tower%2C%205%20Station%20St%2C%20London%20E15%201LA%2C%20UK!5e0!3m2!1sen!2sbd!4v1748716128963!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Location info with improved design */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaMapLocationDot className="text-amber-400 size-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-quicksand text-white drop-shadow-md">
                      {t("footer.locationname0")}
                    </h4>
                    <p className="text-white/90 font-medium font-quicksand mt-1">
                      {t("footer.location1")}
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Unex+Tower,+5+Station+St,+London+E15+1LA,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-900 font-semibold rounded-md hover:bg-amber-500 transition-colors duration-200"
                    >
                      Get Directions
                      <IoIosArrowRoundForward className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
