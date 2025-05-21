import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaChartLine,
  FaGlobeEurope,
  FaFileAlt,
} from "react-icons/fa";
import { HiOutlineBriefcase, HiOutlineOfficeBuilding } from "react-icons/hi";

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

const Clients = () => {
  const services = [
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: "Targeted Recruitment",
      description:
        "We identify and secure qualified professionals who precisely match your technical requirements and company culture.",
    },
    {
      icon: <HiOutlineBriefcase className="text-3xl text-blue-600" />,
      title: "Flexible Staffing",
      description:
        "Temporary employment services to scale your workforce according to project demands.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-3xl text-blue-600" />,
      title: "HR Outsourcing",
      description:
        "Complete payroll processing and administrative support to streamline your operations.",
    },
    {
      icon: <FaGlobeEurope className="text-3xl text-blue-600" />,
      title: "Global Mobility",
      description:
        "Visa and work permit assistance for international hiring needs.",
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Market Intelligence",
      description:
        "Labor market research and compensation benchmarking to inform your talent strategy.",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Workforce Consulting",
      description:
        "Strategic advice on organizational design and talent acquisition.",
    },
  ];

  return (
    <div className="bg-gray-50">
      
      <motion.section
        className="relative bg-gradient-to-r from-[#2B99D3] to-[#0C4591] text-white py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Hiring Solutions for Employers
            </h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              variants={fadeIn}
            >
              At 80 Twenty, we specialize in connecting European employers with
              top-tier talent across industries.
            </motion.p>
            <motion.button
              className="bg-white text-[#0C4591] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact">Partner With Us</a>
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </motion.section>

     
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
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
                Our Recruitment Partnership
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                80 Twenty collaborates successfully with employers across Europe
                and beyond to recruit and hire qualified candidates.
              </p>
              <p className="text-lg text-gray-600">
                Our comprehensive recruitment partnership goes beyond
                traditional hiring to deliver complete workforce solutions
                tailored to your business needs.
              </p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Employer Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of client-focused services to meet all your
              hiring needs
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
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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

     
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your hiring process?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Partner with us today and experience the difference of strategic
            recruitment.
          </motion.p>
          <motion.a
            href="/contact"
            className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started With Our Services
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Clients;
