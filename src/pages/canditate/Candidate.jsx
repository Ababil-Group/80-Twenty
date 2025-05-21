import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaFileUpload,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
  FaSearch,
  FaUserTie,
  FaGlobe,
  FaLanguage,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

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

const Candidate = () => {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const services = [
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: "Free CV Review",
      description:
        "Get expert feedback to optimize your resume for better visibility",
    },
    {
      icon: <FaUserTie className="text-3xl text-blue-600" />,
      title: "Interview Preparation",
      description: "Practice sessions and documentation guidance for success",
    },
    {
      icon: <FaGlobe className="text-3xl text-blue-600" />,
      title: "Relocation Support",
      description: "Assistance with international job placements",
    },
    {
      icon: <FaLanguage className="text-3xl text-blue-600" />,
      title: "Language Testing",
      description: "Proficiency evaluation for multilingual roles",
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: "Document Services",
      description: "Translation, certification and professional editing",
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Candidate Database",
      description: "We'll match you with opportunities as they arise",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
    
      <motion.section
        className="relative bg-gradient-to-r from-[#2B99D3] to-[#0C4591] text-white py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Career Success Starts Here
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              At 80 Twenty, we provide personalized support at every stage of
              your job search
            </motion.p>
            <motion.button
              className="bg-white text-[#0C4591] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#register">Register Now</a>
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </motion.section>

     
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Candidate Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your job search journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Optional Premium Services
              </h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Visa and work permit assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax refund support services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Professional document translation and certification
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Premium CV writing and editing
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How It Works
              </h3>
              <p className="text-gray-600 mb-6">
                We welcome proactive applications for advertised roles. If no
                current openings match your profile, we'll add you to our
                candidate database at no cost and reach out when suitable
                opportunities arise.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-blue-800 font-medium">
                  Our pre-interview screening ensures you only meet with
                  employers when there's strong mutual interest.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      <section id="register" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-6"
              variants={fadeIn}
            >
              {t("candidate.from")}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: t("candidate.inputname"), type: "text" },
                { label: t("candidate.username"), type: "text" },
                { label: t("candidate.inputeamil"), type: "email" },
                { label: t("candidate.password"), type: "password" },
                { label: t("candidate.inputphone"), type: "tel" },
                { label: t("candidate.birth"), type: "date" },
                { label: t("candidate.profession"), type: "text" },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  variants={fadeIn}
                >
                  <label className="text-gray-600 mb-2 font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.label}
                    className="h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </motion.div>
              ))}
            </motion.div>

         
            <motion.div className="mb-6" variants={fadeIn}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    required
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                  <motion.label
                    htmlFor="file"
                    className="flex items-center gap-2 justify-center h-12 px-6 rounded-lg bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("candidate.cv")}
                    <FaFileUpload className="text-white" />
                  </motion.label>
                </div>

                {fileName && (
                  <motion.div
                    className="text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="font-medium">Selected: </span>
                    <span className="truncate max-w-xs inline-block">
                      {fileName}
                    </span>
                  </motion.div>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {t("candidate.size")}
              </p>
            </motion.div>

           
            <motion.div className="mb-8" variants={fadeIn}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                />
                <label htmlFor="consent" className="text-gray-700">
                  <p className="font-medium mb-1">Consent Checkbox:</p>
                  <p>{t("candidate.condition")}</p>
                </label>
              </div>
            </motion.div>

           
            <motion.button
              className="w-full md:w-auto h-12 px-8 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold uppercase flex items-center justify-center gap-2 shadow-lg transition-colors"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("candidate.register")}
              <BsArrowRight className="text-lg" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Candidate;
