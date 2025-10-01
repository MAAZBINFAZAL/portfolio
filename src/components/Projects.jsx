import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react"; // 📂 Icon for Projects
import fypImg from "../assets/fyp.jpg";
import hackathonImg from "../assets/hackathon-banner.png";
import plcImg from "../assets/plc.jpg";
import vendingImg from "../assets/vending.png";
import studentImg from "../assets/student.jpg";
import divider from "../assets/divider.gif";

const projects = [
  {
    title: "Roblox Styler Agent (ETH Global)",
    desc: "AI-powered outfit generator integrated with Coral Protocol & Mistral AI.",
    img: hackathonImg,
    repo: "https://github.com/Rushabh-Runwal/Roblox-Outfit-Marketplace-Agents",
    demo: "https://lablab.ai/event/internet-of-agents/roblox-marketplace-ai/roblox-marketplace-agent",
  },
  {
    title: "Student Performance Predictor",
    desc: "ML model with web demo for early detection of at-risk students.",
    img: studentImg,
    report: "https://drive.google.com/file/d/1ECDrtKkW0nQosUWe1i6EVG9sv7e6ReES/view?usp=sharing",
    demo: "https://ai-gpa-predictor.onrender.com/",
    repo: "https://github.com/MAAZBINFAZAL/AI-GPA-Predictor",
  },
  {
  title: "Home Automation System",
  desc: "IoT-based smart home setup using Arduino and mobile app with real-time monitoring, Wi-Fi control, and energy-     efficient automation.",
  img: autoImg,  // ensure import is added!
  report: "https://drive.google.com/file/d/1NV5BGY3g_vNZIjngKKXBd6BCwd0D3wbW/view?usp=drivesdk",
},

  {
    title: "PLC Industrial Automation",
    desc: "Siemens & Fatek PLC projects (water tank, motor control, traffic signal).",
    img: plcImg,
    repo: "https://drive.google.com/file/d/1rznTFA4-DYqmqUUi61ngAX1QEqGN94sH/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1P1C_voTikqKO5c83VySFzxTOL_PuHgZf/view?usp=drivesdk",
  },
  {
    title: "Vending Machine (Verilog)",
    desc: "Verilog FSM for vending machine synthesized to Spartan XC400.",
    img: vendingImg,
    report: "https://drive.google.com/file/d/1MUcOKalmxKPxUX2KSLzeLqE8pO48Oo1t/view?usp=sharing", // renamed to Report
  },
  {
    title: "Fruit Quality Detection (FYP)",
    desc: "YOLOv8-based real-time fruit quality detection & conveyor sorting (90%+ mAP). Research work — code and demo available on request.",
    img: fypImg,
    locked: "https://drive.google.com/file/d/1l7DIGvR88hxMoFmObeTmAsxi1EJdHD1i/view?usp=drivesdk",
  },
];

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16">
      {/* Gradient Animated Heading with Icon */}
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
        <FolderKanban size={32} className="text-indigo-400" /> Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            className="bg-gray-800/50 rounded-lg overflow-hidden shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {/* Roblox, PLC, Student Predictor => normal Code/Demo */}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-indigo-600 rounded text-white font-medium hover:bg-indigo-500 transition"
                  >
                    Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 border border-indigo-400 text-indigo-400 rounded font-medium hover:bg-indigo-500 hover:text-white transition"
                  >
                    Demo
                  </a>
                )}
                {p.report && (
                  <a
                    href={p.report}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 border border-green-400 text-green-400 rounded font-medium hover:bg-green-500 hover:text-white transition"
                  >
                    Report
                  </a>
                )}

                {/* FYP special case */}
                {p.locked && (
                  <a
                    href={p.locked}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 border border-yellow-400 text-yellow-400 rounded font-medium hover:bg-yellow-500 hover:text-white transition"
                  >
                    🔒 Code & Demo (on request)
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
