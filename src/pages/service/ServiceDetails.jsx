import React, { useState } from "react";
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
import s1 from "../../assets/sevices/s1.jpg";
import sa1 from "../../assets/sevices/sa1.jpg";
import s2 from "../../assets/sevices/s2.jpg";
import sa2 from "../../assets/sevices/sa2.jpg";
import s3 from "../../assets/sevices/s3.jpg";
import sa3 from "../../assets/sevices/sa3.jpg";
import s4 from "../../assets/sevices/s4.jpg";
import sa4 from "../../assets/sevices/sa4.jpg";
import s5 from "../../assets/sevices/s5.jpg";
import sa5 from "../../assets/sevices/sa5.jpg";
import s6 from "../../assets/sevices/s6.jpg";
import sa6 from "../../assets/sevices/sa6.jpg";
import s7 from "../../assets/sevices/s7.jpg";
import sa7 from "../../assets/sevices/sa7.jpg";
import s8 from "../../assets/sevices/s8.jpg";
import sa8 from "../../assets/sevices/sa8.jpg";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { ImMail } from "react-icons/im";
import Carousel from "../components/Carousel";
import NotFoundPage from "../components/NotFoundPage";
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
          { p: t("serviceDetailes.sdpb3") },
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
    {
      id: 5,
      images: [s6, sa6],
      link: t("services.link6"),
      cardTitle: t("services.cardh6"),
      section1: {
        paragraphs: [
          { p: t("serviceDetailes.sdpf1") },
          { p: t("serviceDetailes.sdpf2") },
        ],
        headTile1: t("serviceDetailes.sdhf1"),
        headTile2: t("serviceDetailes.sdhf2"),
        headTile3: t("serviceDetailes.sdhf3"),
        para1: t("serviceDetailes.sdhpf1"),
        para2: t("serviceDetailes.sdhpf2"),
        para3: t("serviceDetailes.sdhpf3"),
      },
    },
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
          { p: t("serviceDetailes.sdph1") },
          { p: t("serviceDetailes.sdph2") },
          { p: t("serviceDetailes.sdph3") },
        ],
      },
    },
    {
      id: 8,
      images: [],
      link: t("services.link9"),
      cardTitle: t("services.cardh9"),
    },
  ];

  const service = serverdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === serviceId
  );
  console.log("services", service);
  if (!service) {
    return <NotFoundPage />;
  }
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
                {t("services.service")}
              </h2>
              <MdArrowForwardIos />
              <h1 className="text-white/80 font-bold uppercase">
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
            <div className="flex flex-col">
              <div className="mb-6">
                <Carousel images={service.images} />
              </div>
              <div className="flex flex-col items-start space-y-6 mt-6">
                <h2 className="text-2xl text-gray-800 font-bold tracking-wide">
                  {service?.section1?.heading ? service.section1.heading : ""}
                </h2>

                {service?.section1?.paragraphs?.map((pra, inx) => (
                  <p key={inx} className="text-gray-800">
                    {pra.p}
                  </p>
                ))}
                {service?.section1?.headTile1 && (
                  <>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {service?.section1?.headTile1}
                    </h2>
                    <p className="text-gray-800">{service?.section1?.para1}</p>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {service?.section1?.headTile2}
                    </h2>
                    <p className="text-gray-800">{service?.section1?.para2}</p>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {service?.section1?.headTile3}
                    </h2>
                    <p className="text-gray-800">{service?.section1?.para3}</p>
                  </>
                )}

                <h2 className="text-lg text-gray-800 font-bold mt-6">
                  {service?.section1?.listTile}
                </h2>

                <ul className="text-gray-800 list-disc pl-5 space-y-2">
                  {service?.section1?.list?.map((list, idx) => (
                    <li key={idx}>{list.li}</li>
                  ))}
                </ul>

                <h2 className="text-2xl text-gray-800 font-bold tracking-wide mt-6">
                  {service?.section2?.heading}
                </h2>

                {service?.section2?.paragraphs?.map((pra, inx) => (
                  <p key={inx} className="text-gray-800">
                    {pra.p}
                  </p>
                ))}

                <ul className="text-gray-800 list-disc pl-5 space-y-2">
                  {service?.section2?.list?.map((list, idx) => (
                    <li key={idx}>{list.li}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Links (right side) */}
          <div className="hidden custom:block w-64 flex-shrink-0">
            <div className="sticky top-4 bg-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
                {t("careers.career")}
              </h3>
              <ul className="space-y-3">
                {serverdata.map((link, index) => {
                  const isActive =
                    serviceId ===
                      link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (serviceId === undefined && index === 0);

                  return (
                    <li key={index}>
                      <Link
                        to={`/services/${encodeURIComponent(
                          link?.link?.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className={`flex items-center gap-x-2 transition-colors p-2 rounded ${
                          isActive
                            ? "text-red-500 bg-gray-100 font-medium"
                            : "text-gray-700 hover:text-red-500 hover:bg-gray-100"
                        }`}
                      >
                        <MdArrowForwardIos className="text-xs" />
                        {link?.cardTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Login />
    </div>
  );
};

export default ServiceDetails;
