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
        💼 Research Experience & Leadership
      </motion.h2>

      <div className="space-y-8 max-w-3xl mx-auto"> 
	{/* 1. Arfeen Research Lab */}
	<motion.div
 	 className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition border border-indigo-500/20"
	  variants={fadeInUp}
	  initial="hidden"
	  whileInView="visible"
>
	  <div className="flex items-center gap-3 mb-2">
	    <FlaskConical className="text-indigo-400" size={22} />
	
	    <h3 className="text-xl font-semibold flex items-center">
	      Research Assistant — Arfeen Research Lab

	      <span className="ml-3 px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
	        Current
	      </span>
	    </h3>
	  </div>

	  <p className="text-indigo-300 text-sm font-medium">
	    The Islamia University of Bahawalpur, Pakistan
	  </p>

	  <p className="text-gray-400 text-sm">
	    Jul. 2025 – Present
	  </p>
	
	  <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
	    <li>
	      Conduct research on power systems, AC–DC power converters, and embedded engineering applications.
	    </li>
	    <li>
	      Design, simulate, analyze, and validate energy-efficient power conversion systems for modern electronic applications.
	    </li>
	    <li>
	      Contribute to technical documentation and scholarly publications in power electronics and intelligent energy systems.
	    </li>
	  </ul>
	</motion.div>


        {/* 1. Stanford Code in Place */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Section Leader — Stanford Code in Place (CS106A)
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Apr 2026 – Present | Remote</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Selected from a global applicant pool to teach Stanford’s CS106A (Python programming).</li>
            <li>Conduct weekly sessions, mentor students, and guide assignments.</li>
          </ul>
        </motion.div>

        {/* 2. CARE Lab */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Embedded Systems Assistant [Training] — CARE Lab
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Jun 2022 – May 2024</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Received hands on training in electronic circuit assembly, embedded system development, laboratory instrumentation.</li>
            <li>Assisted in the design, testing, and troubleshooting of embedded hardware using sensors, power electronic components, and measurement equipment.</li>
            <li>Gained practical experience operating laboratory instruments, including oscilloscopes, function generators, digital multimeters, regulated power supplies, and PCB prototyping tools for hardware validation. </li>
          </ul>
        </motion.div>

        {/* 3. Deep Embedded Lab */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Research Assistant — Deep Embedded Lab
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Jun 2024 – Jun 2025</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Contributed to research writing and technical documentation for AI-based systems.</li>
            <li>Optimized YOLO models via hyperparameter tuning, achieving ~90% mAP.</li>
            <li>Supported development of applied computer vision solutions.</li>
          </ul>
        </motion.div>

        {/* 4. iCodeGuru */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Globe className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Course Trainer & Moderator — iCodeGuru
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Jun 2023 – Present</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Delivered 20+ hours of live Python sessions to underprivileged students.</li>
            <li>Mentored school and college students on STEM pathways.</li>
            <li>Led 50+ volunteers to prepare 500+ students for university entrance exams.</li>
          </ul>
        </motion.div>

        {/* 5. Teaching Assistant */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Teaching Assistant — Computer Architecture
            </h3>
          </div>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Guided students in pipelining, memory hierarchy, and cache design.</li>
            <li>Simplified complex computer architecture concepts through structured teaching.</li>
          </ul>
        </motion.div>

        {/* 6. LabLab AI Hackathons */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              AI Hackathons — LabLab.ai
            </h3>
          </div>
          <p className="text-gray-400 text-sm">2024 – Present</p>
          <p className="text-gray-300 mt-3">
            Participated in international AI and agent-based hackathons, building real-world
            solutions using LLMs, APIs, and multi-agent systems.
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

      </div>

      <motion.img
        src={divider}
        alt="divider"
        className="w-full max-w-2xl mx-auto mt-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      />
    </section>
  );
}