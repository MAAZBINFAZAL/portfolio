import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Users, Globe } from "lucide-react";
import divider from "../assets/divider.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-8
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        💼 Work Experience
      </motion.h2>

      <div className="space-y-8 max-w-3xl mx-auto">

        {/* 1. Hackathon Experience */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">International Hackathon Participant</h3>
          </div>
          <p className="text-gray-400 text-sm">AI-Focused Events | 2024 – Present</p>
          <p className="text-gray-300 mt-3">
            Participated in international AI and agent-based hackathons, developing
            real-world solutions using modern AI models, APIs, and deployment tools.
          </p>
          <a
            href="https://lablab.ai/u/@maaz_bin_fazal90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-indigo-400 hover:underline"
          >
            View LabLab.ai Profile →
          </a>
        </motion.div>

        {/* 2. Assistant to Hardware Engineer */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Assistant to Hardware Engineer – CARE Pakistan
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Jun 2022 – May 2024</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Traced circuits for Pakistan Army helicopter battery chargers.</li>
            <li>Analyzed and evaluated autoclave system working processes.</li>
            <li>Programmed microcontrollers for electric bikes and embedded projects.</li>
          </ul>
        </motion.div>

        {/* 3. Research Assistant */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Research Assistant – Deep Embedded Lab Pakistan
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Jun 2024 – Jun 2025</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Contributed to technical writing for a successfully published research paper.</li>
            <li>Optimized YOLO models via hyperparameter tuning, achieving 90% mAP.</li>
          </ul>
        </motion.div>

        {/* 4. Teaching Assistant */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Teaching Assistant – Computer Architecture
            </h3>
          </div>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Supported students in pipelining, memory hierarchy, and cache design.</li>
            <li>Strengthened teaching and communication skills through technical mentoring.</li>
          </ul>
        </motion.div>

        {/* 5. Volunteer Teaching */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Globe className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">Volunteer STEM Instructor</h3>
          </div>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Provided virtual STEM guidance to school and college students.</li>
            <li>Taught basic software skills and Python programming.</li>
            <li>Led 50+ volunteers to prepare 500+ underprivileged students for university entry exams.</li>
          </ul>
        </motion.div>

      </div>

      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto mt-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </section>
  );
}
