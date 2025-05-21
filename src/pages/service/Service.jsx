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
import s1 from "../../assets/img/Service/s1.jpg";
import s2 from "../../assets/img/Service/s2.jpg";
import s3 from "../../assets/img/Service/s3.jpg";
import s4 from "../../assets/img/Service/s4.jpg";
import s5 from "../../assets/img/Service/s5.jpg";
import s6 from "../../assets/img/Service/s6.jpeg";
import s7 from "../../assets/img/Service/s7.jpg";
import s8 from "../../assets/img/Service/s8.jpg";
import s9 from "../../assets/img/Service/s9.jpg";
import { Link } from "react-router-dom";
import { ImMail } from "react-icons/im";
import { motion, useScroll } from "framer-motion";

const Service = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
      img: s9,
      link: t("services.link9"),
      cardh1: t("services.cardh9"),
      chardp1: t("services.cardp9"),
      btn: t("services.cardbtn"),
    },
  ];

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
              Comprehensive Recruitment Services
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              We deliver tailored workforce solutions to meet your business
              needs across all industries.
            </motion.p>
            <motion.button
              className="bg-white text-[#0C4591] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#services">Explore Our Services</a>
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </motion.section>

      <motion.section
        id="services"
        className="max-w-screen-xl mx-auto py-6 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={container}
      >
        <div className="flex flex-col custom:flex-row gap-8">
          <div className="flex-1 space-y-3 text-gray-800">
            {serverdata.map((service, ind) => (
              <motion.div
                key={ind}
                className="grid grid-cols-1 custom:grid-cols-2 gap-6 mt-16"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={service.img}
                  alt={service.chardp1}
                  className="bg-gray-300 border border-gray-200 rounded-sm object-cover h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col items-start space-y-6">
                  <Link
                    to={`/services/${encodeURIComponent(
                      service.link.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                    className="text-2xl text-secondary border-b-4 pb-1 border-amber-500 font-bold tracking-wide hover:text-amber-600 transition-colors"
                  >
                    {service.cardh1}
                  </Link>
                  <p className="text-gray-800">{service.chardp1}</p>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Link
                      to={`/services/${encodeURIComponent(
                        service.link.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="px-4 py-2 border border-gray-300 hover:bg-amber-500 font-quicksand uppercase hover:text-gray-900 text-lg font-bold flex items-center gap-x-3"
                    >
                      {service.btn}... <MdArrowForwardIos />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="hidden custom:block w-64 flex-shrink-0 relative"
          >
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("services.service")}
              </h3>
              <ul className="space-y-3">
                {serverdata.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={`/services/${encodeURIComponent(
                        link?.link?.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      className="flex items-center gap-x-2 text-gray-900 font-quicksand hover:text-secondary transition-colors p-2 hover:bg-gray-100 rounded"
                    >
                      <MdArrowForwardIos className="text-xs" />
                      {link.cardh1}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Service;
