import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

import fypImg from "../assets/fyp.jpg";
import hackathonImg from "../assets/hackathon-banner.png";
import plcImg from "../assets/plc.jpg";
import vendingImg from "../assets/vending.png";
import studentImg from "../assets/student.jpg";
import autoImg from "../assets/auto.png";
import contentImg from "../assets/content.png";
import divider from "../assets/divider.gif";

const projects = [
  {
    title: "Roblox Styler Agent (ETH Global)",
    desc: "AI-powered multi-agent system for Roblox avatar styling using LLMs and Coral Protocol.",
    img: hackathonImg,
    repo: "https://github.com/Rushabh-Runwal/Roblox-Outfit-Marketplace-Agents",
    demo: "https://lablab.ai/event/internet-of-agents/roblox-marketplace-ai/roblox-marketplace-agent",
  },
  {
    title: "AI Content Payment Agent",
    desc: "AI-powered blockchain platform enabling automated USDC micropayments using agent workflows.",
    img: contentImg,
    repo: "https://github.com/cuervocoder/arc-pay-new",
    demo: "https://arc-agent-pay.lovable.app/",
  },
  {
    title: "Student Performance Predictor",
    desc: "Machine learning web system for early detection of academically at-risk students.",
    img: studentImg,
    repo: "https://github.com/MAAZBINFAZAL/AI-GPA-Predictor",
    demo: "https://ai-gpa-predictor.onrender.com/",
  },
  {
    title: "Home Automation System",
    desc: "IoT-based smart home automation using Arduino with real-time monitoring and control.",
    img: autoImg,
    github: "https://github.com/MAAZBINFAZAL/Home-Automation-Bluetooth-Arduino",
  },
  {
    title: "PLC Industrial Automation",
    desc: "Siemens & Fatek PLC projects including water tank control, motor automation, and traffic signal systems.",
    img: plcImg,
    tasks: "https://drive.google.com/file/d/1rznTFA4-DYqmqUUi61ngAX1QEqGN94sH/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1P1C_voTikqKO5c83VySFzxTOL_PuHgZf/view?usp=drivesdk",
  },
  {
    title: "Vending Machine (Verilog FSM)",
    desc: "FPGA-based vending machine using Verilog FSM with coin detection and automated product dispensing.",
    img: vendingImg,
    view: "https://drive.google.com/file/d/1MUcOKalmxKPxUX2KSLzeLqE8pO48Oo1t/view?usp=sharing",
  },
  {
    title: "Fruit Quality Detection & Sorting (Final Year Project)",
    desc: "YOLOv8-based real-time fruit quality detection and conveyor sorting system achieving 90%+ mAP.",
    img: fypImg,
    repo: "https://github.com/your-username/fyp-repo",
    demo: "/videos/fyp-demo.mp4",
  },
];

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center flex items-center justify-center gap-2 mb-10
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <FolderKanban size={32} className="text-indigo-400" /> Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            className="bg-gray-800/50 rounded-lg overflow-hidden shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            <div className="overflow-hidden">
              {p.demo && p.demo.endsWith(".mp4") ? (
                <video src={p.demo} controls className="w-full h-44 object-cover" />
              ) : (
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover hover:scale-110 transition"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 rounded text-white hover:bg-indigo-500">
                    Code
                  </a>
                )}

                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 rounded text-white hover:bg-indigo-500">
                    GitHub
                  </a>
                )}

                {p.tasks && (
                  <a href={p.tasks} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 rounded text-white hover:bg-indigo-500">
                    Tasks
                  </a>
                )}

                {p.demo && !p.demo.endsWith(".mp4") && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 border border-indigo-400 text-indigo-400 rounded hover:bg-indigo-500 hover:text-white">
                    Demo
                  </a>
                )}

                {p.view && (
                  <a href={p.view} target="_blank" rel="noreferrer" className="px-3 py-1 border border-green-400 text-green-400 rounded hover:bg-green-500 hover:text-white">
                    View
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.img src={divider} alt="divider" className="w-full max-w-2xl mx-auto mt-12" initial="hidden" whileInView="visible" variants={fadeInUp} />
    </section>
  );
}