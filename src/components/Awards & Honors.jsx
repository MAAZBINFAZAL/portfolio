import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // ⭐ Icon for Awards
import divider from "../assets/divider.gif";

export default function AwardsAndHonors() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const awards = [
    "Ranked Top 75 globally in UC Berkeley’s Coding Challenge (1000+ teams; 2,231 contestants).",
    "Recognized for strong performance in Meta worldwide algorithmic programming contest.",
    "Delivered one journal and one conference (IEEE Xplore) publication advancing my research area.",
    "Received Merit Scholarship from the state in university.",
    "Scored 120/160 in Duolingo English Test (IELTS 6.5/9 equivalent).",
  ];

  return (
    <section id="awards" className="py-16">
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
        <Star size={34} className="text-indigo-400" /> Awards & Honors
      </motion.h2>

      {/* Awards List */}
      <ul className="space-y-4 max-w-3xl mx-auto">
        {awards.map((award, index) => (
          <motion.li
            key={index}
            className="text-gray-300 bg-gray-800/50 px-4 py-3 rounded-lg shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            {award}
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
