import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react"; // 👤 Icon for About Me
import divider from "../assets/divider.gif";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16">
      {/* Gradient Animated Heading with Icon */}
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-center flex items-center justify-center gap-2
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <User size={34} className="text-indigo-400" /> About Me
      </motion.h2>

      {/* Polished & Extended Intro */}
      <motion.p
        className="text-gray-300 max-w-3xl mx-auto text-justify leading-relaxed tracking-wide mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        Driven Electronic and AI Engineer with a passion for designing intelligent, scalable
        systems that seamlessly integrate hardware and software. Skilled in developing innovative 
        solutions that leverage cutting-edge technologies, combining deep technical expertise with 
        strategic problem-solving to deliver impactful, high-performance applications. Experienced 
        in building embedded systems, computer vision pipelines, AI/ML, FPGA/PLC automation, and robotics — 
        with a proven track record of leading teams, optimizing algorithms, and deploying AI-powered 
        solutions for real-world impact. Looking ahead, my focus is on RISC-V architecture, VLSI design,
        Large Language Models (LLMs), and the evolving landscape of Generative and Agentic AI.
      </motion.p>

      {/* Timeline List */}
      <ul className="space-y-4 max-w-2xl mx-auto">
        {[
          "Scored 120/160 in Duolingo English Test (IELTS 6.5 equivalent)",
          "Selected as Team Leader in academic projects",
          "Awarded state merit scholarship",
          "Led 50+ volunteers to prepare 500+ underprivileged students",
          "YOLO optimization research (paper under IEEE review)",
        ].map((item, index) => (
          <motion.li
            key={index}
            className="text-gray-300 bg-gray-800/50 px-4 py-3 rounded-lg shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Divider */}
      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        variants={fadeInUp}
      />
    </section>
  );
}
