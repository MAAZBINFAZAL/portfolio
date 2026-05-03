import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Library,
  GitBranch,
  Cpu,
  Monitor,
  Package,
  Braces,
  Sigma,
  Database,
  Brain,
  FunctionSquare,
} from "lucide-react";
import divider from "../assets/divider.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const groups = [
  {
    title: "Programming Languages",
    icon: <Code className="text-indigo-400" size={20} />,
    items: [
      { name: "Python", icon: <Braces size={14} /> },
      { name: "C++", icon: <Braces size={14} /> },
      { name: "Verilog HDL", icon: <Braces size={14} /> },
      { name: "Assembly Language", icon: <Braces size={14} /> },
      { name: "HTML", icon: <Braces size={14} /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: <Library className="text-indigo-400" size={20} />,
    items: [
      { name: "NumPy", icon: <FunctionSquare size={14} /> },
      { name: "Pandas", icon: <Database size={14} /> },
      { name: "Matplotlib", icon: <Sigma size={14} /> },
      { name: "Seaborn", icon: <Sigma size={14} /> },
      { name: "Scikit-learn", icon: <Brain size={14} /> },
      { name: "Keras", icon: <Brain size={14} /> },
      { name: "TensorFlow", icon: <Brain size={14} /> },
      { name: "PyTorch", icon: <Brain size={14} /> },
      { name: "Node.js", icon: <Monitor size={14} /> },
    ],
  },
  {
    title: "Simulation & Design Tools",
    icon: <Cpu className="text-indigo-400" size={20} />,
    items: [
      { name: "MATLAB / Simulink", icon: <Sigma size={14} /> },
      { name: "Proteus", icon: <Cpu size={14} /> },
      { name: "Viper", icon: <Cpu size={14} /> },
      { name: "Power Esim", icon: <Cpu size={14} /> },
      { name: "Tinkercad", icon: <Cpu size={14} /> },
      { name: "CubeMX", icon: <Cpu size={14} /> },
      { name: "CoppeliaSim", icon: <Cpu size={14} /> },
      { name: "Flask", icon: <Monitor size={14} /> },
      { name: "React", icon: <Monitor size={14} /> },
      { name: "Django", icon: <Monitor size={14} /> },
    ],
  },
  {
    title: "Software & IDEs",
    icon: <Monitor className="text-indigo-400" size={20} />,
    items: [
      { name: "Keil", icon: <Cpu size={14} /> },
      { name: "Arduino IDE", icon: <Cpu size={14} /> },
      { name: "VS Code", icon: <Monitor size={14} /> },
      { name: "Google Colab", icon: <Monitor size={14} /> },
      { name: "Jupyter Notebook", icon: <Monitor size={14} /> },
      { name: "Microsoft 365", icon: <Package size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> },
      { name: "Overleaf", icon: <Package size={14} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
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
        ⚙️ Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            className="bg-gray-800/50 p-5 rounded-lg shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-3">
              {g.icon}
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {g.items.map((i) => (
                <motion.span
                  key={i.name}
                  className="flex items-center gap-1 text-sm bg-gray-700 px-3 py-1 rounded shadow 
                             hover:bg-indigo-600 hover:scale-110 hover:shadow-indigo-500/50 
                             transition transform duration-300"
                  variants={fadeInUp}
                >
                  {i.icon}
                  {i.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

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
}import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Library,
  GitBranch,
  Cpu,
  Monitor,
  Package,
  Braces,
  Sigma,
  Database,
  Brain,
  FunctionSquare,
} from "lucide-react";
import divider from "../assets/divider.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const groups = [
  {
    title: "Programming Languages",
    icon: <Code className="text-indigo-400" size={20} />,
    items: [
      { name: "Python", icon: <Braces size={14} /> },
      { name: "C++", icon: <Braces size={14} /> },
      { name: "Verilog HDL", icon: <Braces size={14} /> },
      { name: "Assembly Language", icon: <Braces size={14} /> },
      { name: "HTML", icon: <Braces size={14} /> },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: <Library className="text-indigo-400" size={20} />,
    items: [
      { name: "NumPy", icon: <FunctionSquare size={14} /> },
      { name: "Pandas", icon: <Database size={14} /> },
      { name: "Matplotlib", icon: <Sigma size={14} /> },
      { name: "Seaborn", icon: <Sigma size={14} /> },
      { name: "Scikit-learn", icon: <Brain size={14} /> },
      { name: "Keras", icon: <Brain size={14} /> },
      { name: "TensorFlow", icon: <Brain size={14} /> },
      { name: "PyTorch", icon: <Brain size={14} /> },
      { name: "Node.js", icon: <Monitor size={14} /> },
    ],
  },
  {
    title: "Simulation & Design Tools",
    icon: <Cpu className="text-indigo-400" size={20} />,
    items: [
      { name: "MATLAB / Simulink", icon: <Sigma size={14} /> },
      { name: "Proteus", icon: <Cpu size={14} /> },
      { name: "Viper", icon: <Cpu size={14} /> },
      { name: "Power Esim", icon: <Cpu size={14} /> },
      { name: "Tinkercad", icon: <Cpu size={14} /> },
      { name: "CubeMX", icon: <Cpu size={14} /> },
      { name: "CoppeliaSim", icon: <Cpu size={14} /> },
      { name: "Flask", icon: <Monitor size={14} /> },
      { name: "React", icon: <Monitor size={14} /> },
      { name: "Django", icon: <Monitor size={14} /> },
    ],
  },
  {
    title: "Software & IDEs",
    icon: <Monitor className="text-indigo-400" size={20} />,
    items: [
      { name: "Keil", icon: <Cpu size={14} /> },
      { name: "Arduino IDE", icon: <Cpu size={14} /> },
      { name: "VS Code", icon: <Monitor size={14} /> },
      { name: "Google Colab", icon: <Monitor size={14} /> },
      { name: "Jupyter Notebook", icon: <Monitor size={14} /> },
      { name: "Microsoft 365", icon: <Package size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> },
      { name: "Overleaf", icon: <Package size={14} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
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
        ⚙️ Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            className="bg-gray-800/50 p-5 rounded-lg shadow hover:shadow-indigo-500/30 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-3">
              {g.icon}
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {g.items.map((i) => (
                <motion.span
                  key={i.name}
                  className="flex items-center gap-1 text-sm bg-gray-700 px-3 py-1 rounded shadow 
                             hover:bg-indigo-600 hover:scale-110 hover:shadow-indigo-500/50 
                             transition transform duration-300"
                  variants={fadeInUp}
                >
                  {i.icon}
                  {i.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

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