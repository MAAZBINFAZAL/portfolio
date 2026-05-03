import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import divider from "../assets/divider.gif";
import certImg from "../assets/certificate.png";
import achImg from "../assets/ach.png";

import ep from "../assets/ep.png";
import meta from "../assets/meta.png";
import uc from "../assets/uc.png";
import merit from "../assets/merit.png";
import cs50 from "../assets/cs50.jpg";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    {
      title: "Certificate of Completion",
      event: "The INTERNET OF AGENTS HACKATHON @ SOLANA SKYLINE",
      date: "Sep 14 – 21, 2025",
      img: certImg,
      verify: "https://lablab.ai/u/@maaz_bin_fazal90/cmg2mb9uf003s9g0srtwxmm4d",
    },
    {
      title: "Certificate of Completion",
      event: "AI Agents on Arc with USDC",
      date: "Oct 27 – Nov 8, 2025",
      img: achImg,
      verify: "https://lablab.ai/u/@maaz_bin_fazal90/cmht37ox8004mb50s5iwc40yy",
    },
    {
      title: "English Proficiency",
      event: "Duolingo English Test",
      date: "Test taken: September 3, 2025",
      img: ep,
      verify: "https://certs.duolingo.com/geeml6l9vrh8f9dc",
    },
    {
      title: "Certificate of Recognition",
      event: "Meta Hacker Cup",
      img: meta,
    },
    {
      title: "Certificate of Recognition",
      event: "Calico Coding Challenge — UC Berkeley",
      img: uc,
    },

    // ✅ ADDED AT LAST
    {
      title: "Certificate of Achievement",
      event: "Harvard CS50x Puzzle Day 2026 — Perfect Score 10/10",
      date: "2026",
      img: cs50,
    },
    {
      title: "Merit Scholarship",
      event: "The Islamia University of Bahawalpur",
      img: merit,
    },
  ];

  return (
    <section id="certificates" className="py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-10
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <Award size={32} className="text-indigo-400" /> Certificates & Licenses
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 rounded-lg shadow hover:shadow-indigo-500/30 transition overflow-hidden cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            variants={fadeInUp}
            onClick={() => setSelectedCert(cert.img)}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full object-contain max-h-[500px] bg-black"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-indigo-300">{cert.event}</p>

              {cert.date && (
                <p className="text-sm text-gray-400">{cert.date}</p>
              )}

              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
                >
                  Verify Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="Certificate Full"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}

      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        variants={fadeInUp}
      />
    </section>
  );
}