import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react"; // 🎓 🏫 📘 icons
import divider from "../assets/divider.gif";

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const educationData = [
    {
      icon: <GraduationCap size={28} className="text-indigo-400" />,
      title: (
    <a 
      href="https://www.iub.edu.pk" 
      target="_blank" 
      rel="noreferrer" 
      className="text-white hover:text-indigo-300 transition"
    >
      UCET, Islamia University of Bahawalpur
    </a>
  ),
      degree: "Bachelor of Electronics Engineering (CGPA 3.31/4.00)",
      location: "Bahawalpur, Pakistan",
      duration: "July 2021 - June 2025",
    },
    {
      icon: <School size={28} className="text-indigo-400" />,
      title: "Model Science College, Bagh",
      degree: "Intermediate (Pre-Engineering) — Grade: A",
      location: "Bagh, Pakistan",
      duration: "2019 - 2021",
    },
    {
      icon: <BookOpen size={28} className="text-indigo-400" />,
      title: "Government High School, Bagh",
      degree: "Matriculation — Grade: A+",
      location: "Bagh, Pakistan",
      duration: "2017 - 2019",
    },
  ];

  return (
    <section id="education" className="py-16">
      {/* Gradient Animated Heading with Icon */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-8
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <GraduationCap size={32} className="text-indigo-400" /> Education
      </motion.h2>

      {/* Education Cards */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-gray-800/50 p-5 rounded-lg shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            <div className="mt-1">{edu.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
              <p className="text-indigo-300">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.location}</p>
              <p className="text-xs text-gray-500">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInUp}
      />
    </section>
  );
}
