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
      {/* Header */}
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

      {/* Publications (Top Highlights) */}
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
            📌 IEEE Conference Paper Accepted – GCWOT’26, Málaga (IEEE Xplore)
          </p>
        </div>
        <div className="p-5 rounded-xl bg-gray-800/40 border border-gray-700 shadow-xl backdrop-blur-md">
          <p className="text-lg font-semibold text-purple-300 text-center font-serif">
            📌 Journal Article Accepted – Spectrum of Engineering Sciences
          </p>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        className="text-gray-300 max-w-4xl mx-auto text-justify leading-relaxed tracking-wide mb-14 font-light text-lg font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        I am an Electronics and AI Engineer interested in developing intelligent, scalable, and autonomous systems that combine advanced computation with efficient hardware. My work spans computer vision, embedded intelligence, VLSI and microelectronics, AI driven automation, and hardware, software co-design, with experience in optimized deep learning pipelines and FPGA/PLC based systems. I have hands on experience with AI/ML, VHDL/FPGA design, microcontrollers, opto electronics ,robotics, and global AI hackathons, and I am motivated to create practical, academically sound engineering solutions and research work across a broad range of technical fields with real world impact.
      </motion.p>

      {/* Awards */}
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
            "Top 75 Globally – UC Berkeley Coding Challenge",
            "Meta Worldwide Algorithmic Programming Contest",
            "State Merit Scholarship – Academic Excellence",
            "Duolingo English Test: 120/160 (IELTS 6.5)",
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

      {/* ======= ADDED SECTION (Publications) ======= */}
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
            “Low-Cost Real Time Fruit Quality Assessment and Sorting Using YOLOv8,” Proc. 8th GCWOT, IEEE Xplore, Málaga, Spain, Feb. 2026.{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>

          <p>
            <strong>[J1]</strong> Maaz Bin Fazal, Muhammad Inam Ul Haq, Muhammad Sohail,  
            “Design and Implementation of an AC–DC Converter for Efficient Power Conversion,” Spectrum of Engineering, vol. 13, no. 2, Nov. 2025 (Accepted).{" "}
            <span
              onClick={handlePdfClick}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300"
            >
              PDF
            </span>
          </p>

          <p>
            <strong>[J2]</strong> Muhammad Inam Ul Haq, Maaz Bin Fazal, Z. Arfeen,  
            “Q-INTEL: Hybrid Quantum Classical Intelligence for Autonomous Engineering Systems,” under first-round review, 2025.{" "}
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
      {/* ======= END ADDED SECTION ======= */}

      {/* Closing Statement */}
      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg font-serif mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        I strive to contribute meaningful research and collaborate on innovations
        that advance AI, microelectronics, and intelligent systems.
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
