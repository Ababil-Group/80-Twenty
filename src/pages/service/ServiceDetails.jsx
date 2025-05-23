import React, { useState } from "react";
import { motion } from "framer-motion";
import titleimge from "../../assets/home/title_bg.jpg";
import { useTranslation } from "react-i18next";
import { MdArrowForwardIos } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import s1 from "../../assets/img/Service/s1.jpg";
import sa1 from "../../assets/sevices/sa1.jpg";
import s2 from "../../assets/img/Service/s2.jpg";
import sa2 from "../../assets/sevices/sa2.jpg";
import s3 from "../../assets/img/Service/s3.jpg";
import sa3 from "../../assets/sevices/sa3.jpg";
import s4 from "../../assets/img/Service/s4.jpg";
import sa4 from "../../assets/sevices/sa4.jpg";
import s5 from "../../assets/img/Service/s5.jpg";
import sa5 from "../../assets/sevices/sa5.jpg";
import s6 from "../../assets/img/Service/s6.jpeg";
import sa6 from "../../assets/sevices/sa6.jpg";
import s7 from "../../assets/img/Service/s7.jpg";
import sa7 from "../../assets/sevices/sa7.jpg";
import s8 from "../../assets/img/Service/s8.jpg";
import sa8 from "../../assets/sevices/sa8.jpg";
import s9 from "../../assets/img/Service/s9.jpg";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { ImMail } from "react-icons/im";
import Carousel from "../components/Carousel";
import NotFoundPage from "../components/NotFoundPage";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const ServiceDetails = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const { serviceId } = useParams();
  const serverdata = [
    {
      id: 0,
      images: [s1, sa1],
      link: t("services.link1"),
      cardTitle: t("services.cardh1"),
      section1: {
        heading: t("serviceDetailes.sdha1"),
        paragraphs: [
          { p: t("serviceDetailes.sdpa1") },
          { p: t("serviceDetailes.sdpa2") },
        ],
        list: [
          { li: t("serviceDetailes.sdal1") },
          { li: t("serviceDetailes.sdal2") },
          { li: t("serviceDetailes.sdal3") },
          { li: t("serviceDetailes.sdal4") },
          { li: t("serviceDetailes.sdal5") },
          { li: t("serviceDetailes.sdal6") },
        ],
      },
      section2: {
        heading: t("serviceDetailes.sdha2"),
        paragraphs: [{ p: t("serviceDetailes.sdpa3") }],
        list: [
          { li: t("serviceDetailes.sdal7") },
          { li: t("serviceDetailes.sdal8") },
          { li: t("serviceDetailes.sdal9") },
          { li: t("serviceDetailes.sdal10") },
          { li: t("serviceDetailes.sdal11") },
          { li: t("serviceDetailes.sdal12") },
          { li: t("serviceDetailes.sdal13") },
          { li: t("serviceDetailes.sdal14") },
        ],
      },
    },
    {
      id: 1,
      images: [s2, sa2],
      link: t("services.link2"),
      cardTitle: t("services.cardh2"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpb1") },
          { p: t("serviceDetailes.sdpb2") },
          // { p: t("serviceDetailes.sdpb3") },
        ],
        listTile: t("serviceDetailes.sdlhb1"),
        list: [
          { li: t("serviceDetailes.sdbl1") },
          { li: t("serviceDetailes.sdbl2") },
          { li: t("serviceDetailes.sdbl3") },
          { li: t("serviceDetailes.sdbl4") },
          { li: t("serviceDetailes.sdbl5") },
          { li: t("serviceDetailes.sdbl6") },
          { li: t("serviceDetailes.sdbl7") },
          { li: t("serviceDetailes.sdbl8") },
          { li: t("serviceDetailes.sdbl9") },
        ],
      },
    },

    {
      id: 2,
      images: [s3, sa3],
      link: t("services.link3"),
      cardTitle: t("services.cardh3"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpc1") },
          { p: t("serviceDetailes.sdpc2") },
          { p: t("serviceDetailes.sdpc3") },
          { p: t("serviceDetailes.sdpc4") },
        ],
        listTile: t("serviceDetailes.sdlhc1"),
        list: [
          { li: t("serviceDetailes.sdcl1") },
          { li: t("serviceDetailes.sdcl2") },
          { li: t("serviceDetailes.sdcl3") },
          { li: t("serviceDetailes.sdcl4") },
          { li: t("serviceDetailes.sdcl5") },
          { li: t("serviceDetailes.sdcl6") },
          { li: t("serviceDetailes.sdcl7") },
          { li: t("serviceDetailes.sdcl8") },
        ],
      },
    },
    {
      id: 3,
      images: [s4, sa4],
      link: t("services.link4"),
      cardTitle: t("services.cardh4"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpd1") },
          { p: t("serviceDetailes.sdpd2") },
          { p: t("serviceDetailes.sdpd3") },
          { p: t("serviceDetailes.sdpd4") },
        ],
      },
    },
    {
      id: 4,
      images: [s5, sa5],
      link: t("services.link5"),
      cardTitle: t("services.cardh5"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpe1") },
          { p: t("serviceDetailes.sdpe2") },
        ],
        listTile: t("serviceDetailes.sdlhe1"),
        list: [
          { li: t("serviceDetailes.sdel1") },
          { li: t("serviceDetailes.sdel2") },
          { li: t("serviceDetailes.sdel3") },
          { li: t("serviceDetailes.sdel4") },
        ],
      },
    },
    // {
    //   id: 5,
    //   images: [s6, sa6],
    //   link: t("services.link6"),
    //   cardTitle: t("services.cardh6"),
    //   section1: {
    //     paragraphs: [
    //       { p: t("serviceDetailes.sdpf1") },
    //       { p: t("serviceDetailes.sdpf2") },
    //     ],
    //     headTile1: t("serviceDetailes.sdhf1"),
    //     headTile2: t("serviceDetailes.sdhf2"),
    //     headTile3: t("serviceDetailes.sdhf3"),
    //     para1: t("serviceDetailes.sdhpf1"),
    //     para2: t("serviceDetailes.sdhpf2"),
    //     para3: t("serviceDetailes.sdhpf3"),
    //   },
    // },
    {
      id: 6,
      images: [s7, sa7],
      link: t("services.link7"),
      cardTitle: t("services.cardh7"),
      section1: {
        paragraphs: [{ p: t("serviceDetailes.sdpg1") }],
        listTile: t("serviceDetailes.sdlhg1"),
        list: [
          { li: t("serviceDetailes.sdlg1") },
          { li: t("serviceDetailes.sdlg2") },
          { li: t("serviceDetailes.sdlg3") },
          { li: t("serviceDetailes.sdlg4") },
          { li: t("serviceDetailes.sdlg5") },
          { li: t("serviceDetailes.sdlg6") },
        ],
      },
      section2: {
        heading: t("serviceDetailes.sdlhg2"),
        paragraphs: [
          { p: t("serviceDetailes.sdpg2") },
          { p: t("serviceDetailes.sdpg3") },
        ],
        list: [
          { li: t("serviceDetailes.sdlga1") },
          { li: t("serviceDetailes.sdlga2") },
          { li: t("serviceDetailes.sdlga3") },
          { li: t("serviceDetailes.sdlga4") },
        ],
      },
    },
    {
      id: 7,
      images: [s8, sa8],
      link: t("services.link8"),
      cardTitle: t("services.cardh8"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdphp1") },
          { p: t("serviceDetailes.sdphp2") },
        ],
        listTile: t("serviceDetailes.sdphlp3"),
        list: [
          { li: t("serviceDetailes.sdphl1") },
          { li: t("serviceDetailes.sdphl2") },
          { li: t("serviceDetailes.sdphl3") },
          { li: t("serviceDetailes.sdphl4") },
          { li: t("serviceDetailes.sdphl5") },
          { li: t("serviceDetailes.sdphl6") },
          { li: t("serviceDetailes.sdphl7") },
          { li: t("serviceDetailes.sdphl8") },
        ],
      },
    },
  ];

  const service = serverdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === serviceId
  );
  console.log("services", serviceId);
  if (!service) {
    return <NotFoundPage />;
  }
  return (
    <motion.div
      className="bg-white/90"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
        variants={fadeIn}
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="flex items-center justify-between"
            variants={itemVariants}
          >
            <div className="flex items-center text-xl md:text-2xl font-quicksand gap-x-3 text-white/90">
              <MdArrowForwardIos />
              <h2 className="text-white/80 text-lg md:text-2xl font-bold uppercase">
                {t("services.service")}
              </h2>
              <MdArrowForwardIos />
              <h1 className="text-white/80 text-lg md:text-2xl font-quicksand font-bold uppercase">
                {service.cardTitle}
              </h1>
            </div>
            <div className="flex items-end justify-end py-14 relative pr-6 md:pr-0">
              <button
                className="flex items-end justify-end"
                onClick={() => setShowIcons(!showIcons)}
              >
                <FaShareAlt className="text-white text-xl cursor-pointer" />
              </button>
              {showIcons && (
                <motion.div
                  className="bg-white/80 flex absolute top-20 mr-5 custom:mr-0 right-0 z-10 shadow-2xl rounded-md p-2 gap-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebook className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FaTwitterSquare className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://google.com" target="_blank">
                    <FaGooglePlus className="text-amber-800 text-2xl hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://mail.google.com/" target="_blank">
                    <ImMail className="text-amber-950 text-2xl hover:scale-110 transition-transform" />
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <section className="max-w-screen-xl mx-auto py-6 px-4">
        <motion.div
          className="flex flex-col custom:flex-row gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex-1 space-y-3 text-gray-800"
            variants={containerVariants}
          >
            <div className="flex flex-col">
              <motion.div className="mb-6" variants={slideUp}>
                <Carousel images={service.images} />
              </motion.div>

              <motion.div
                className="flex flex-col items-start space-y-6 mt-6"
                variants={containerVariants}
              >
                {service?.section1?.heading && (
                  <motion.h2
                    className="text-2xl text-gray-800 font-bold font-quicksand tracking-wide"
                    variants={itemVariants}
                  >
                    {service.section1.heading}
                  </motion.h2>
                )}

                {service?.section1?.paragraphs?.map((pra, inx) => (
                  <motion.p
                    key={inx}
                    className="text-gray-800 text-lg font-quicksand"
                    variants={itemVariants}
                  >
                    {pra.p}
                  </motion.p>
                ))}

                {service?.section1?.headTile1 && (
                  <>
                    <motion.h2
                      className="text-lg text-gray-800 font-bold font-quicksand mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile1}
                    </motion.h2>
                    <motion.p
                      className="text-gray-800 font-quicksand text-lg"
                      variants={itemVariants}
                    >
                      {service?.section1?.para1}
                    </motion.p>
                    <motion.h2
                      className="text-lg text-gray-800 font-quicksand font-bold mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile2}
                    </motion.h2>
                    <motion.p
                      className="text-gray-800 font-quicksand"
                      variants={itemVariants}
                    >
                      {service?.section1?.para2}
                    </motion.p>
                    <motion.h2
                      className="text-lg text-gray-800 font-quicksand font-bold mt-6"
                      variants={itemVariants}
                    >
                      {service?.section1?.headTile3}
                    </motion.h2>
                    <motion.p
                      className="text-gray-800 text-lg font-quicksand"
                      variants={itemVariants}
                    >
                      {service?.section1?.para3}
                    </motion.p>
                  </>
                )}

                {service?.section1?.listTile && (
                  <motion.h2
                    className="text-lg text-gray-800 font-bold font-quicksand mt-6"
                    variants={itemVariants}
                  >
                    {service?.section1?.listTile}
                  </motion.h2>
                )}

                <motion.ul
                  className="text-gray-800 list-disc pl-5 font-quicksand text-lg space-y-2"
                  variants={containerVariants}
                >
                  {service?.section1?.list?.map((list, idx) => (
                    <motion.li key={idx} variants={itemVariants}>
                      {list.li}
                    </motion.li>
                  ))}
                </motion.ul>

                {service?.section2?.heading && (
                  <motion.h2
                    className="text-2xl text-gray-800 font-bold font-quicksand tracking-wide mt-6"
                    variants={itemVariants}
                  >
                    {service?.section2?.heading}
                  </motion.h2>
                )}

                {service?.section2?.paragraphs?.map((pra, inx) => (
                  <motion.p
                    key={inx}
                    className="text-gray-800 font-quicksand"
                    variants={itemVariants}
                  >
                    {pra.p}
                  </motion.p>
                ))}

                {service?.section2?.list && (
                  <motion.ul
                    className="text-gray-800 list-disc pl-5 space-y-2"
                    variants={containerVariants}
                  >
                    {service?.section2?.list?.map((list, idx) => (
                      <motion.li
                        key={idx}
                        className="font-quicksand"
                        variants={itemVariants}
                      >
                        {list.li}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="hidden custom:block w-64 flex-shrink-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 font-lato border-b pb-2">
                {t("services.service")}
              </h3>
              <ul className="space-y-3">
                {serverdata.map((link, index) => {
                  const isActive =
                    serviceId ===
                      link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (serviceId === undefined && index === 0);

                  return (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={`/services/${encodeURIComponent(
                          link?.link?.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className={`flex items-center gap-x-2 font-quicksand transition-colors p-2 rounded ${
                          isActive
                            ? "text-secondary bg-gray-100 font-medium  "
                            : "text-gray-900 hover:text-secondary hover:bg-gray-100"
                        }`}
                      >
                        <MdArrowForwardIos className="text-xs" />
                        {link?.cardTitle}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ServiceDetails;
