import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import divider from "../assets/divider.gif";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const handlePdfClick = () => {
    alert(
      "Publications with links and references are available on CV or on request.\n\nPlease email: info@maazbinfazal.engineer"
    );
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-10 text-center tracking-wide font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={fadeInUp}
      >
        <span className="inline-flex items-center gap-3 justify-center">
          <User size={40} className="text-blue-300" />
          Scholarly Profile
        </span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 shadow-xl backdrop-blur-md">
          <p className="text-lg font-semibold text-blue-300 text-center font-serif">
            📌 3 Journal + 2 Conference Publications
          </p>
        </div>

        <div className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 shadow-xl backdrop-blur-md">
          <p className="text-lg font-semibold text-purple-300 text-center font-serif">
            📌 IEEE Xplore Indexed GCWOT’26 Conference Paper
          </p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 font-serif">
          Awards & Honors
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            "Winner — Harvard CS50x Puzzle Day 2026, Perfect Score 10/10",
            "Section Leader — Stanford Code in Place 2026",
            "Top 75 Globally — UC Berkeley Coding Challenge",
            "Meta Worldwide Algorithmic Programming Contest Recognition",
            "Merit Scholarship — Undergraduate Studies",
            "Duolingo English Test: 120/160, CEFR B2",
          ].map((award, idx) => (
            <motion.div
              key={idx}
              className="p-5 bg-gray-800/40 border border-gray-700 rounded-xl shadow-xl backdrop-blur-lg flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg" />
              <p className="text-gray-200 font-serif text-lg">{award}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 font-serif">
          Publications
        </h3>

        <div className="space-y-5 text-gray-300 font-serif text-lg">
          <p>
            <strong>[C1]</strong> Maaz Bin Fazal, Muhammad Inam Ul Haq, S. Mehmood, S. Sheikh, Zeeshan, Muhammad Sohail,
            “Low Cost Real Time Fruit Quality Assessment and Sorting Using YOLOv8,” Proc. 8th GCWOT, IEEE Xplore indexed, Málaga, Spain, Feb. 2026.{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>

          <p>
            <strong>[C2]</strong> Ahmad Raza, Abdul Basit, Zeeshan Ahmad Arfeen, Aliyu Hamza Sule, Maaz Bin Fazal,
            “Deepfake Detection Techniques: A Comprehensive Review of Deep Learning, Machine Learning, and Traditional Paradigms,” Preprint / Working Paper, 2025.{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>

          <p>
            <strong>[J1]</strong> Muhammad Inam Ul Haq, Maaz Bin Fazal, Muhammad Sohail, Muhammad Sheheryar, Jamil Memon, Muhammad Faisal Rasheed, Shareen Bhurgri, Muhammad Asif Aziz,
            “Design & Implementation of AC to DC Converter for Efficient Power Conversion,” Spectrum of Engineering Sciences, vol. 4, no. 4, pp. 1392–1405, Apr. 2026.{" "}
            <a
              href="https://drive.google.com/file/d/17Wjvib-Xe38MXOzQ8lPm6M0kjL06-QgP/view"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              PDF
            </a>
          </p>

          <p>
            <strong>[J2]</strong> Muhammad Inam Ul Haq, Maaz Bin Fazal, Z. Arfeen,
            “Q-INTEL: Hybrid Quantum Classical Intelligence for Autonomous Engineering Systems,” Computer of Engineering, under first-round review, 2025.{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>

          <p>
            <strong>[J3]</strong> Z. Arfeen, Muhammad Inam Ul Haq, Maaz Bin Fazal,
            “Trust Enhanced RISC-V IEEE-754 FPU: ECC, Redundancy, and Firewall Protected Execution for SweRV EH1,” Manuscript in progress, 2025.{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>
        </div>
      </motion.div>

      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg font-serif mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        I strive to contribute meaningful research and collaborate on innovations
        that advance AI, embedded intelligence, microelectronics, and intelligent systems.
      </motion.p>

      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto opacity-80"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        variants={fadeInUp}
      />
    </section>
  );
}