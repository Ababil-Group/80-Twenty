import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/home/img1.jpg";
import img2 from "../assets/home/img2.jpg";
import img3 from "../assets/home/img3.jpg";
import { MdNavigateNext, MdArrowForward } from "react-icons/md";
import titleimge from "../assets/home/title_bg.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoimg1 from "../assets/home/logoimg1.png";
import logoimg2 from "../assets/home/logoimg2.png";
import logoimg3 from "../assets/home/logoimg3.png";
import logoimg4 from "../assets/home/logoimg4.png";
import { CgLogIn } from "react-icons/cg";
import Login from "./components/Login";
import { IoIosArrowForward } from "react-icons/io";
const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    { id: 1, image: img1, alt: "Image 1" },
    { id: 2, image: img2, alt: "Image 2" },
    { id: 3, image: img3, alt: "Image 3" },
  ];
  const { t } = useTranslation();

  const cardData = [
    {
      heading: t("logotext.heading1"),
      subheading: t("logotext.subheading1"),
      image: logoimg1,
      url: "/candidates",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading2"),
      subheading: t("logotext.subheading2"),
      image: logoimg2,
      url: "/clients",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading3"),
      subheading: t("logotext.subheading3"),
      image: logoimg3,
      url: "/services/tax-refund",
      button: t("logotext.button"),
    },
    {
      heading: t("logotext.heading4"),
      subheading: t("logotext.subheading4"),
      image: logoimg4,
      url: "/career-advice",
      button: t("logotext.button"),
    },
  ];

  return (
    <div>
      {/* Hero Section with Swiper Carousel */}
      <section className="relative">
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
            className="w-full  relative"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full cursor-move">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center"></div>
                </div>
              </SwiperSlide>
            ))}

            {/* Previous Arrow - Positioned at left-40 */}
            <div
              className={`swiper-button-prev absolute left-10 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
            >
              <MdNavigateNext />
            </div>

            {/* Next Arrow - Positioned at left-20 */}
            <div
              className={`swiper-button-next absolute left-20 z-10 text-white bg-gray-500/50 p-3 hover:bg-gray-500/70 transition-all ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
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
            </div>
          </Swiper>
        </div>
      </section>

      {/* Title Section */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${titleimge})` }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-black/30 py-5">
          <h1 className="text-white font-semibold text-2xl md:text-3xl">
            {t("herotext.headtext")}
          </h1>
          <p className="text-gray-100 text-sm custom:text-xl font-medium max-w-screen-md mx-auto text-center px-4">
            {t("herotext.subtext")}
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 md:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <Link
                key={index}
                to={card.url}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="p-6 flex flex-col items-center justify-between h-[420px]">
                  <img src={card.image} alt="" className="" />
                  <h3 className="text-xl font-bold text-red-600/80 text-center">
                    {card.heading}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {card.subheading}
                  </p>
                  <button className="flex w-10/12 items-center justify-center text-gray-800 font-semibold text-lg px-6 py-2 rounded-sm transition-colors border border-gray-300 hover:bg-red-600/80 hover:text-white shadow-2xl uppercase">
                    {card.button}
                    <IoIosArrowForward className="ml-1" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* login section */}
      <Login />
    </div>
  );
};

export default HomePage;
