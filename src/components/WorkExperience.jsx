import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Cpu, Globe } from "lucide-react"; 
import divider from "../assets/divider.gif";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-16">
      {/* Heading with Gradient Animation */}
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
        {/* Hackathon Participation */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">International Hackathon Participant</h3>
          </div>
          <p className="text-gray-400 text-sm">Multiple Events | May 2025 – Present</p>
          <p className="text-gray-300 mt-3">
            Participated in international AI-focused hackathons, utilizing advanced 
            AI models and APIs to design innovative solutions. Deployed real-world 
            applications for practical testing and user engagement.
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Leadership</li>
            <li>Cross-Cultural Communication</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
          </ul>
          <a
            href="https://lablab.ai/u/@maaz_bin_fazal90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-indigo-400 hover:underline"
          >
            View LabLab.ai Profile →
          </a>
        </motion.div>

        {/* Moderator */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">Moderator – I Code Guru</h3>
          </div>
          <p className="text-gray-400 text-sm">May 2025 – Present</p>
          <p className="text-gray-300 mt-3">
            Assisting students in preparing professional documents for fully funded 
            scholarships abroad. Guiding underprivileged students towards relevant 
            education forums and opportunities to support their academic growth.
          </p>
        </motion.div>

        {/* Recruiter Role */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <Globe className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Recruiter – Ultimate Outsourcing LTD, Bahawalpur
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            Main Office: London EC1V 2NX, United Kingdom | Apr 2022 – May 2022
          </p>
          <p className="text-gray-300 mt-3">
            Worked as a recruiter responsible for candidate outreach and screening 
            for international clients. Assisted in coordinating between the Bahawalpur 
            office and the London headquarters to streamline recruitment processes.
          </p>
        </motion.div>

        {/* Assistant to Hardware Engineer at CARE */}
        <motion.div
          className="bg-gray-800/50 p-6 rounded-lg shadow hover:shadow-indigo-500/30 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="text-indigo-400" size={22} />
            <h3 className="text-xl font-semibold">
              Assistant to Hardware Engineer – CARE, IUB Pakistan
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            Research Center | Jun 2022 – May 2024
          </p>
          <p className="text-gray-300 mt-3">
            Worked at the Centre of Automation, Robotics & Embedded Systems (CARE), 
            contributing to hardware engineering tasks for defense and industrial projects.
          </p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
            <li>Assisted in tracing circuits and soldering for Pakistan Army helicopter battery chargers.</li>
            <li>Diagnosed faults and analyzed datasheets to evaluate working processes of autoclaves.</li>
            <li>Assisted in programming microcontrollers for electric bikes and mini automation projects.</li>
          </ul>
        </motion.div>
      </div>

      {/* Rainbow Divider */}
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
