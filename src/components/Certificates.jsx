import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react"; // 🏅 Icon
import divider from "../assets/divider.gif";
import certImg from "../assets/certificate.png"; // ✅ renamed properly

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    {
      title: "Certificate of Completion",
      event: "The INTERNET OF AGENTS HACKATHON @SOLANA SKYLINE",
      date: "Sep 14 – 21, 2025",
      img: certImg,
      verify: "https://lablab.ai/u/@maaz_bin_fazal90/cmg2mb9uf003s9g0srtwxmm4d",
    },
  ];

  return (
    <section id="certificates" className="py-16">
      {/* Heading */}
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

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 rounded-lg shadow hover:shadow-indigo-500/30 transition overflow-hidden cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
              <p className="text-sm text-gray-400">{cert.date}</p>
              <a
                href={cert.verify}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
              >
                Verify Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
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

      {/* Divider */}
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
