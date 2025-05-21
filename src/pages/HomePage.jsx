import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/img/global-employers-worker.jpeg";
import img2 from "../assets/img/h3.jpg";
import img3 from "../assets/img/in-collaboration-with-reputable-agencies.jpg";
import { MdNavigateNext, MdArrowForward } from "react-icons/md";
import titleimge from "../assets/home/title_bg.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoimg1 from "../assets/img/Icons/i1.png";
import logoimg2 from "../assets/img/Icons/i2.png";
import logoimg3 from "../assets/img/Icons/i3.png";
import logoimg4 from "../assets/img/Icons/i4.png";
import { CgLogIn } from "react-icons/cg";
import Login from "./components/Login";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Scroll animation setup
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const slides = [
    { id: 1, image: img1, alt: "Image 1" },
    { id: 2, image: img2, alt: "Image 2" },
    { id: 3, image: img3, alt: "Image 3" },
  ];

  const cardData = [
    {
      heading: t("logotext.heading1"),
      subheading: t("logotext.subheading1"),
      image: logoimg1,
      url: "/jobs-for-candidates",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading2"),
      subheading: t("logotext.subheading2"),
      image: logoimg2,
      url: "/hiring-for-employers",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading3"),
      subheading: t("logotext.subheading3"),
      image: logoimg3,
      url: "/services/tax-returns",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading4"),
      subheading: t("logotext.subheading4"),
      image: logoimg4,
      url: "/career-tips",
      button: t("logotext.button"),
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <motion.section
        className="relative"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full relative"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <motion.div
                  className="relative w-full max-h-[80vh] cursor-move"
                  variants={item}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
                </motion.div>
              </SwiperSlide>
            ))}

            <motion.div
              className={`swiper-button-prev absolute left-10 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdNavigateNext />
            </motion.div>
            <motion.div
              className={`swiper-button-next absolute left-20 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </Swiper>
        </div>
      </motion.section>

      {/* Title Section with Parallax Effect */}
      <section
        className="bg-cover bg-center h-auto md:h-[300px]"
        style={{
          backgroundImage: `url(${titleimge})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-black/30 py-5">
          <h1
            className="text-amber-500 font-quicksand font-semibold text-2xl border-b-4 border-amber-500 pb-2 md:text-3xl"
            variants={item}
          >
            {t("herotext.headtext")}
          </h1>
          <p
            className="text-white text-sm md:text-xl font-medium max-w-screen-md mx-auto text-center px-4"
            variants={item}
          >
            {t("herotext.subtext")}
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <motion.section
        className="py-12 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={container}
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={container}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={card.url}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer block h-full"
                >
                  <div className="p-6 flex flex-col items-center justify-between h-auto md:h-[420px]">
                    <motion.img
                      src={card.image}
                      alt=""
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-xl font-bold text-blue font-quicksand text-center">
                      {card.heading}
                    </h3>
                    <p className="text-gray-600 mb-4 font-quicksand text-center">
                      {card.subheading}
                    </p>
                    <motion.button
                      className="flex w-full lg:w-10/12 items-center font-quicksand justify-center text-gray-800 font-semibold text-lg px-6 py-2 rounded-sm transition-colors border border-gray-300 hover:bg-blue hover:text-white shadow-2xl uppercase"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {card.button}
                      <IoIosArrowForward className="ml-1" />
                    </motion.button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Background Elements with Scroll Effects */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20"
          style={{ y: y2 }}
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
