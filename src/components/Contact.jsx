import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast"; 
import { CheckCircle } from "lucide-react"; 
import divider from "../assets/divider.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mayvlwnp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("📩 Thanks for contacting me! I’ll get back to you soon.", { duration: 5000 });
        setSent(true);
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.", { duration: 4000 });
      }
    } catch (error) {
      toast.error("Network error. Please try later.", { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                   bg-clip-text text-transparent bg-200% animate-gradient"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        📬 Connect With Me
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className="text-center text-gray-300 mb-8 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        Let’s collaborate on your next project 🚀
      </motion.p>

      {/* Social Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <a href="mailto:engr.maazbinfazal.ee@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
        </a>

        <a href="https://www.linkedin.com/in/maazbinfazal/" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>

        <a href="https://leetcode.com/u/MaazBinFazal/" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode" />
        </a>

        <a href="https://lablab.ai/u/@maaz_bin_fazal90" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/LabLab.ai-000000?style=for-the-badge" alt="LabLab" />
        </a>

        <a href="http://discordapp.com/users/1403011331325432029" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
        </a>

        <a href="https://wa.me/923400731861" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
        </a>

        <a href="https://github.com/MAAZBINFAZAL" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
        </a>

        <a href="https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan/" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/Location-Pakistan-34a853?style=for-the-badge&logo=google-maps&logoColor=white" alt="Location" />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-2xl mx-auto mt-10 bg-gray-800/50 p-6 rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>

          {/* Button with loading spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded text-white font-medium transition transform active:scale-95
                       ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"}`}
          >
            {loading ? (
              <span className="flex justify-center items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Success Confirmation */}
        {sent && (
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-green-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={22} /> Message received — I’ll respond soon!
          </motion.div>
        )}
      </motion.div>

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
