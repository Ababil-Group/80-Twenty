import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import c1 from "../../assets/career/c1.jpg";
import c2 from "../../assets/career/c2.jpg";
import c3 from "../../assets/career/c3.jpg";
import c4 from "../../assets/career/c4.jpg";
import titleimge from "../../assets/home/title_bg.jpg";
import { Link, useParams } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import Login from "../components/Login";
import NotFoundPage from "../components/NotFoundPage";
const CarrierDetails = () => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const { cId } = useParams();
  const careerdata = [
    {
      img: c1,
      link: t("careers.chl1"),
      cardh1: t("careers.ch1"),
      chardp1: t("careers.cp1"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.cap1") }, { p: t("careers.cap2") }],
        listTile: t("careers.cahl1"),
        list: [
          { li: t("careers.cal1") },
          { li: t("careers.cal2") },
          { li: t("careers.cal3") },
          { li: t("careers.cal4") },
          { li: t("careers.cal5") },
          { li: t("careers.cal6") },
          { li: t("careers.cal7") },
          { li: t("careers.cal8") },
          { li: t("careers.cal9") },
          { li: t("careers.cal10") },
          { li: t("careers.cal11") },
          { li: t("careers.cal12") },
          { li: t("careers.cal13") },
          { li: t("careers.cal14") },
          { li: t("careers.cal15") },
        ],
      },
    },

    {
      img: c2,
      link: t("careers.chl2"),
      cardh1: t("careers.ch2"),
      chardp1: t("careers.cp2"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [
          { p: t("careers.cbp1") },
          { p: t("careers.cbp2") },
          { p: t("careers.cbp3") },
        ],
        listTile: t("careers.cblh1"),
        list: [{ li: t("careers.cbl1") }, { li: t("careers.cbl2") }],
      },
      section2: {
        listTile: t("careers.cblh2"),
        list: [
          { li: t("careers.cbl3") },
          { li: t("careers.cbl4") },
          { li: t("careers.cbl5") },
          { li: t("careers.cbl6") },
          { li: t("careers.cbl7") },
        ],
      },
      section3: {
        listTile: t("careers.cblh3"),
        list: [{ li: t("careers.cbl8") }],
      },
    },
    {
      img: c3,
      link: t("careers.chl3"),
      cardh1: t("careers.ch3"),
      chardp1: t("careers.cp3"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.ccp1") }],
        listTile: t("careers.cclh1"),
        list: [
          { li: t("careers.ccl1") },
          { li: t("careers.ccl2") },
          { li: t("careers.ccl3") },
          { li: t("careers.ccl4") },
          { li: t("careers.ccl5") },
          { li: t("careers.ccl6") },
          { li: t("careers.ccl7") },
          { li: t("careers.ccl8") },
        ],
      },
      section4: {
        paragraphs: [{ p: t("careers.ccp2") }, { p: t("careers.ccp3") }],
      },
    },
    {
      img: c4,
      link: t("careers.chl4"),
      cardh1: t("careers.ch4"),
      chardp1: t("careers.cp4"),
      btn: t("careers.cbtn"),
      section1: {
        paragraphs: [{ p: t("careers.cdp1") }, { p: t("careers.cdp2") }],
        listTile: t("careers.cdlh1"),
        list: [{ li: t("careers.cdl1") }],
      },
      section2: {
        listTile: t("careers.cdlh2"),
        list: [
          { li: t("careers.cdl2") },
          { li: t("careers.cdl3") },
          { li: t("careers.cdl4") },
        ],
      },
      section3: {
        listTile: t("careers.cdlh3"),
        list: [
          { li: t("careers.cdl5") },
          { li: t("careers.cdl6") },
          { li: t("careers.cdl7") },
        ],
      },
      section4: {
        listTile: t("careers.cdlh4"),
        list: [{ li: t("careers.cdl8") }, { li: t("careers.cdl9") }],
      },
    },
  ];
  console.log("heee", cId);
  const career = careerdata.find(
    (s) => s.link.toLowerCase().replace(/\s+/g, "-") === cId
  );
  console.log("career", career);
  if (!career) {
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
                {career.cardTitle}
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
                <img src={career.img} />
              </div>
              <div className="flex flex-col items-start space-y-6 mt-6">
                {career?.section1?.paragraphs?.map((pra, inx) => (
                  <p key={inx} className="text-gray-800">
                    {pra.p}
                  </p>
                ))}
                <h2 className="text-lg text-gray-800 font-bold mt-6">
                  {career?.section1?.listTile}
                </h2>

                <ul className="text-gray-800 list-disc pl-5 space-y-2">
                  {career?.section1?.list?.map((list, idx) => (
                    <li key={idx}>{list.li}</li>
                  ))}
                </ul>

                {career?.section2 && (
                  <>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {career?.section2?.listTile}
                    </h2>

                    <ul className="text-gray-800 list-disc pl-5 space-y-2">
                      {career?.section2?.list?.map((list, idx) => (
                        <li key={idx}>{list.li}</li>
                      ))}
                    </ul>
                  </>
                )}
                {career?.section3 && (
                  <>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {career?.section3?.listTile}
                    </h2>

                    <ul className="text-gray-800 list-disc pl-5 space-y-2">
                      {career?.section3?.list?.map((list, idx) => (
                        <li key={idx}>{list.li}</li>
                      ))}
                    </ul>
                  </>
                )}

                {career?.section4 && (
                  <>
                    <h2 className="text-lg text-gray-800 font-bold mt-6">
                      {career?.section4?.listTile}
                    </h2>

                    <ul className="text-gray-800 list-disc pl-5 space-y-2">
                      {career?.section4?.list?.map((list, idx) => (
                        <li key={idx}>{list.li}</li>
                      ))}
                    </ul>
                  </>
                )}

                {career?.section4?.paragraphs?.map((pra, inx) => (
                  <p key={inx} className="text-gray-800">
                    {pra.p}
                  </p>
                ))}
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
                {careerdata.map((link, index) => {
                  const isActive =
                    cId === link?.link?.toLowerCase().replace(/\s+/g, "-") ||
                    (cId === undefined && index === 0);

                  return (
                    <li key={index}>
                      <Link
                        to={`/career-advice/${encodeURIComponent(
                          link?.link?.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className={`flex items-center gap-x-2 transition-colors p-2 rounded ${
                          isActive
                            ? "text-red-500 bg-gray-100 font-medium"
                            : "text-gray-700 hover:text-red-500 hover:bg-gray-100"
                        }`}
                      >
                        <MdArrowForwardIos className="text-xs" />
                        {link?.cardh1}
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

export default CarrierDetails;
